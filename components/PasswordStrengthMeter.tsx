import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(String(password));
  console.log(testResult);
  const num = testResult.score * 100/4;


  const createPassLabel = () => {
    switch(testResult.score) {
      case 0:
        return '👎너무 약해요';
      case 1:
        return '😕약해요';
      case 2:
        return '🙂약간 약해요';
      case 3:
        return '😃약간 양호해요';
      case 4:
        return '😆👍양호해요';
      default:
        return '';
    }
  }

  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  }

  const funcProgressClass = () => {
    switch(testResult.score) {
      case 0:
        return 'progress-secondary';
      case 1:
        return 'progress-error';
      case 2:
        return 'progress-warning';
      case 3:
        return 'progress-accent';
      case 4:
        return 'progress-info';
      default:
        return '';
    }
  }

  return (
    <>
      <progress className={`progress ${funcProgressClass()} mt-1`} style={{height:'7px'}} max="100" value={num}></progress>
      <p style={{ color: funcProgressColor(),textAlign:'right' }}>{createPassLabel()}</p>
    </>
  )
}

export default PasswordStrengthMeter
