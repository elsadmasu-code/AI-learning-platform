import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../features/authSlice';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { email, password });
      dispatch(setCredentials(data));
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  const styles = {
    container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' },
    card: { background: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', maxWidth: '450px', width: '100%' },
    title: { fontSize: '32px', fontWeight: 'bold', marginBottom: '10px', color: '#2d3748', textAlign: 'center' },
    subtitle: { fontSize: '16px', color: '#718096', marginBottom: '30px', textAlign: 'center' },
    form: { display: 'flex', flexDirection: 'column', gap: '20px' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { fontSize: '14px', fontWeight: 'bold', color: '#2d3748' },
    input: { padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '16px', transition: 'border 0.3s' },
    button: { padding: '15px', background: '#667eea', color: 'white', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s' },
    error: { padding: '12px', background: '#fed7d7', color: '#c53030', borderRadius: '8px', fontSize: '14px' },
    footer: { marginTop: '20px', textAlign: 'center', fontSize: '14px', color: '#718096' },
    link: { color: '#667eea', fontWeight: 'bold', textDecoration: 'none' },
    divider: { display: 'flex', alignItems: 'center', margin: '20px 0', color: '#718096' },
    dividerLine: { flex: 1, height: '1px', background: '#e2e8f0' },
    dividerText: { padding: '0 15px' },
    socialButton: { padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '16px', fontWeight: 'bold', transition: 'all 0.3s' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back!</h1>
        <p style={styles.subtitle}>Login to continue your learning journey</p>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={styles.input}
              required
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" style={styles.link}>Forgot password?</a>
          </div>
          
          <button type="submit" style={styles.button}>Login</button>
        </form>
        
        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <div style={styles.dividerText}>OR</div>
          <div style={styles.dividerLine}></div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={styles.socialButton}>
            <span>??</span> Continue with Google
          </button>
          <button style={styles.socialButton}>
            <span>??</span> Continue with Facebook
          </button>
        </div>
        
        <div style={styles.footer}>
          Don't have an account? <a href="/register" style={styles.link}>Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
