import './Checkout.scss';
import Button from '../../components/Button/SqueryButton/Button';
import './Checkout.scss';

const Checkout: React.FC = () => {
	return (
		<section className='checkout'>
			<div className='bd-container checkout-container section'>
				<div className='personal-details-container form-wrapper'>
					<div className='input-header'>
						<small>01</small>
						<h2 className='title'>personal details</h2>
					</div>
					<div className='personal-details-data form-control'>
						<input type='text' placeholder='First Name' />
						<input type='text' placeholder='Last Name' />
						<input type='text' placeholder='Email ' />
						<input type='text' placeholder='Phone' />
					</div>
				</div>

				<div className='shipping-details-container form-wrapper'>
					<div className='input-header'>
						<small>02</small>
						<h2 className='title'>Shipping Address</h2>
					</div>
					<div className='shipping-details-data form-control'>
						<input type='text' placeholder='Street Address' />
						<input type='text' placeholder='Zip Code' />
						<input type='text' placeholder='City' />
						<select name='' id=''>
							<option selected disabled>
								Country
							</option>
							<option value='Canada'>Canada </option>
							<option value='USA'>USA</option>
						</select>
					</div>
				</div>
				<div className='payment-details-container form-wrapper'>
					<div className='input-header'>
						<small>03</small>
						<h2 className='title'>payment details</h2>
					</div>
					<div className='payment-data form-control'>
						<input type='text' placeholder='Card Number' />
						<input type='date' placeholder='expire date' />
						<input type='number' placeholder='CVC/CVV' />
					</div>
				</div>
				<div className='btn-container'>
					<Button text='Make Payment' />
				</div>
			</div>
		</section>
	);
};

export default Checkout;
