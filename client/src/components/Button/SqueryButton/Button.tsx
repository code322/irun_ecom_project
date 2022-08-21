import './Button.scss';
interface btnTypes {
	text: string;
	handleClick?: () => void;
}
const Button: React.FC<btnTypes> = ({ text, handleClick }) => {
	return (
		<button onClick={handleClick} className='square-button'>
			{text}
		</button>
	);
};

export default Button;
