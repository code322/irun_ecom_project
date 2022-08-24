import { RootState } from './../redux/rootReducer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import decode from 'jwt-decode';

const url = process.env.REACT_APP_SERVER_URL;
type decodeType = { exp: number; _id: string; iat: number };

export const SetHeaders = async () => {
	let accessToken = useSelector(
		(state: RootState) => state.authReducer.user.accessToken
	);
	let refreshToken = useSelector(
		(state: RootState) => state.authReducer.user.refreshToken
	);

	if (!refreshToken) return null;
	const decodedToken: decodeType = decode(accessToken);
	if (decodedToken.exp * 1000 < new Date().getTime()) {
		accessToken = await getAccessToken(refreshToken);
	}
	let headers = {
		headers: {
			'content-type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
			'x-auth-token': accessToken,
		},
	};

	return headers;
};

let getAccessToken = async (refreshToken: string) => {
	let token;
	try {
		const {
			data: { accessToken },
		} = await axios.post(`${url}/api/auth/refresh`, {
			refreshToken,
		});
		token = await accessToken;
	} catch (error) {
		console.log(error);
	}

	return token;
};
