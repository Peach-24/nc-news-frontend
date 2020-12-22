import React from 'react';
import TitleBanner from './TitleBanner';

const ErrorMessage = (props) => {
  return (
    <>
      <TitleBanner />
      <div className='error-message'>
        <p>{props.errorMessage}... ☠️</p>
      </div>
    </>
  );
};

export default ErrorMessage;
