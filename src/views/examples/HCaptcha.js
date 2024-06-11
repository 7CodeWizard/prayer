import React from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Hcaptcha = ({ setToken }) => {

  const handleVerificationSuccess = (token) => {
    setToken(token);
  };

  return (
    <HCaptcha
      sitekey="5d838d41-ccd5-4252-9508-66890aa971ec"
      onVerify={handleVerificationSuccess}
    />
  )
}

export default Hcaptcha;
