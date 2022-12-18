import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  }

  const handleAddNumber = num => {
    setCurrentNumber(prev => `${prev === '0'? '' : prev}${num}`)
  }

  const handleSumNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }

  const handleMultNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  }

  const handleDivNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const Div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(Div));
      setOperation('');
    }
  }

  const handlePorNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const Por = Number(firstNumber) * Number(currentNumber / 100);
      setCurrentNumber(String(Por));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':  
          handleSubNumber();
          break;
        case 'x':
          handleMultNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        case '%':
          handlePorNumber();
          break;      
        default:
          break;
      }
    }
  }
  
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button buttonColor="#FFA500" label="AC" onClick={handleOnClear}/>
          <Button buttonColor="#FFA500" label="%"  onClick={handlePorNumber}/>
          <Button buttonColor="#FFA500" label="/"  onClick={handleDivNumber}/>
        </Row>  
        <Row>
          <Button buttonColor="" label="7"  onClick={() => handleAddNumber('7')}/>
          <Button buttonColor="" label="8"  onClick={() => handleAddNumber('8')}/>
          <Button buttonColor="" label="9"  onClick={() => handleAddNumber('9')}/>
          <Button buttonColor="#FFA500" label="x"  onClick={handleMultNumber}/>
        </Row>   
        <Row>
          <Button buttonColor="" label="4"  onClick={() => handleAddNumber('4')}/>
          <Button buttonColor="" label="5"  onClick={() => handleAddNumber('5')}/>
          <Button buttonColor="" label="6"  onClick={() => handleAddNumber('6')}/>
          <Button buttonColor="#FFA500" label="-"  onClick={handleSubNumber}/>
        </Row>   
        <Row>
          <Button buttonColor="" label="1"  onClick={() => handleAddNumber('1')}/>
          <Button buttonColor="" label="2"  onClick={() => handleAddNumber('2')}/>
          <Button buttonColor="" label="3"  onClick={() => handleAddNumber('3')}/>
          <Button buttonColor="#FFA500" label="+"  onClick={(handleSumNumber)} />
        </Row>   
        <Row>
          <Button buttonColor="" label="0"  onClick={() => handleAddNumber('0')}/>
          <Button buttonColor="" label="."  onClick={() => handleAddNumber('.')}/>
          <Button buttonColor="#FF4500" label="=" onClick={handleEquals}/>
        </Row> 
      </Content>
    </Container>
  );
}

export default App;
