import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function LessonPlayer() {
  const { lessonId } = useParams();
  const [completed, setCompleted] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lesson Player</h1>
      <div style={{ background: '#000', height: '400px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <p>Video Player - Lesson ID: {lessonId}</p>
      </div>
      <button onClick={() => setCompleted(true)} style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
        Mark as Complete
      </button>
      {completed && <p style={{ color: 'green', marginTop: '10px' }}>? Lesson Completed!</p>}
    </div>
  );
}

export default LessonPlayer;
