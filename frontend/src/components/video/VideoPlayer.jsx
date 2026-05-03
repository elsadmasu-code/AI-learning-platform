import React from 'react';

function VideoPlayer({ videoUrl }) {
  return (
    <div style={{ background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>▶️</div>
            <p>Video Player</p>
            <p style={{ fontSize: '12px', color: '#999' }}>{videoUrl || 'No video URL'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
