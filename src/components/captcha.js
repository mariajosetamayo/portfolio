import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = (props) => (
  <div>
    <ReCAPTCHA
      sitekey={process.env.RECAPTCHA_SITE_KEY}
      onChange={response => props.input.onChange(response)}
    />
    </div>
);

Captcha.propTypes = {
  input: React.PropTypes.object.isRequired
};

export default Captcha;
