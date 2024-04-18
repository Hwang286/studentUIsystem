import React, { useState } from 'react';

const CommentsForm = ({ userEmail, onSubmit }) => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [comments, setComments] = useState('');
  const [favoriteTopic, setFavoriteTopic] = useState('');
  const [strongestSkill, setStrongestSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      userEmail,
      courseCode,
      courseName,
      comments,
      favoriteTopic,
      strongestSkill,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student Email:</label>
        <input 
          type="text" 
          value={userEmail}            
          required 
        />
      </div>
      <div>
        <label>Course Code:</label>
        <input 
          type="text" 
          value={courseCode} 
          onChange={(e) => setCourseCode(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Course Name:</label>
        <input 
          type="text" 
          value={courseName} 
          onChange={(e) => setCourseName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea 
          value={comments} 
          onChange={(e) => setComments(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Favorite Topic:</label>
        <input 
          type="text" 
          value={favoriteTopic} 
          onChange={(e) => setFavoriteTopic(e.target.value)} 
        />
      </div>
      <div>
        <label>Strongest Technical Skill:</label>
        <input 
          type="text" 
          value={strongestSkill} 
          onChange={(e) => setStrongestSkill(e.target.value)} 
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default CommentsForm;