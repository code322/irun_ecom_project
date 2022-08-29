import './Button.scss';
interface btnTypes {
	text: string;
	handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<btnTypes> = ({ text, handleClick }) => {
	return (
		<button onClick={handleClick} className='square-button'>
			{text}
		</button>
	);
};

export default Button;
