const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModule');
const db = require('../config/db');

// login user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if  the user exists
    const user = await getUser(email);
    if (!user) return res.status(400).json('user does not exists');

    // validate the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: 'invalid password' });

    // create refresh and access token
    const access_token_secret = process.env.ACCESS_TOKEN;
    const refresh_token_secret = process.env.REFRESH_TOKEN;

    const accessToken = jwt.sign({ _id: user._id }, access_token_secret, {
      expiresIn: 60 * 30, // Units are in seconds. Set to expire in 30 mins
    });
    const refreshToken = jwt.sign({ _id: user._id }, refresh_token_secret, {
      expiresIn: '30d', // expires in 30 days
    });
    if (!accessToken) return res.json('no token');
    if (!refreshToken) return res.json('no refreshToken');

    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 60 * 60 * 30; // 30 days

    res.cookie('accessToken', `Bearer ${accessToken}`, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 1000 * 60 * 30, // Units are in milliseconds. Sets to expire in 30 mins
      expiresIn: expireTime,
    });

    res.cookie('refreshToken', `Bearer ${refreshToken}`, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, // Units are in milliseconds. Sets to expire in 30 days
      expiresIn: expireTime,
    });

    res.status(200).json({
      user: {
        email: user.email,
        name: user.name,
        id: user._id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// register user
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if the users user
    const exists = await getUser(email);

    if (exists) return res.status(400).json('Email is already registered');

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const sqlInsert = `INSERT INTO Users (name,email,password ) VALUES (?,?,? )`;
    const values = [name, email, hashedPassword];

    await db.query(sqlInsert, values);
    let newUser = await getUser(email);

    const accessToken = jwt.sign(
      { _id: newUser._id },
      process.env.ACCESS_TOKEN,
      { expiresIn: 10 }
    );
    if (!accessToken) return res.json('no access token');

    const refreshToken = jwt.sign(
      { _id: newUser._id },
      process.env.REFRESH_TOKEN,
      { expiresIn: 30 }
    );
    if (!refreshToken) return res.json('no access token');

    res.json({
      accessToken,
      refreshToken,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// refresh token
const refreshToken = async (req, res) => {
  const refToken = req.body.refreshToken;

  if (!refToken)
    return res
      .status(401)
      .json({ message: 'no refresh token. please login again' });

  try {
    // console.log(refToken);
    const decoded = jwt.verify(refToken, process.env.REFRESH_TOKEN);
    req.user = decoded;
    const id = req.user._id;
    const accessToken = jwt.sign({ _id: id }, process.env.ACCESS_TOKEN, {
      expiresIn: 30,
    });
    await res.json({
      accessToken: accessToken,
    });
  } catch (error) {
    res.status(400).json({ message: 'token can not be verified' });
  }
};

module.exports = { login, register, refreshToken };

const getUser = async (email) => {
  const [user] = await db.query('SELECT * FROM Users WHERE email=?', [email]);

  return user[0];
};
