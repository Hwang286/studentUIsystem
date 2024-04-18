import React from 'react';

const ThankYouForm = ({ userEmail, comments }) => {
  return (
    <div>
      <h2>Thank you, {userEmail}!</h2>
      <p>We appreciate your feedback: {comments}</p>      
    </div>
  );
};

export default ThankYouForm;