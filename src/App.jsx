import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import CommentsForm from './components/CommentsForm';
import ThankYouForm from './components/ThankYouForm';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);

  const handleLogin = ({ email }) => {
    setLoggedInUser(email);
  };

  const handleFeedbackSubmit = (feedbackData) => {
    setFeedbackData(feedbackData);
  };

  return (
    <div className="App">
      {!loggedInUser && (
        <LoginForm onLogin={handleLogin} />
      )}
      {loggedInUser && !feedbackData && (
        <CommentsForm userEmail={loggedInUser} onSubmit={handleFeedbackSubmit} />
      )}
      {feedbackData && (
        <ThankYouForm {...feedbackData} />
      )}
    </div>
  );
};

export default App;
