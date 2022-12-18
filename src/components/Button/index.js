import { ButtonContainer } from './styles';

const Button = ({buttonColor, label, onClick}) => {
    return (
      <ButtonContainer buttonColor={buttonColor} onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  