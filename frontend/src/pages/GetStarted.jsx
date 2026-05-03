import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../features/authSlice';
import api from '../services/api';

function GetStarted() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const payload = isLogin ? { email, password } : { name, email, password };
      const { data } = await api.post(endpoint, payload);
      dispatch(setCredentials(data));
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || (isLogin ? 'Login failed' : 'Registration failed'));
    }
  };

  const styles = {
    container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' },
    card: { background: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', maxWidth: '450px', width: '100%' },
    tabs: { display: 'flex', marginBottom: '30px', background: '#f7fafc', borderRadius: '10px', padding: '5px' },
    tab: { flex: 1, padding: '12px', textAlign: 'center', cursor: 'pointer', borderRadius: '8px', fontWeight: 'bold', transition: 'all 0.3s' },
    activeTab: { background: '#667eea', color: 'white' },
    inactiveTab: { background: 'transparent', color: '#718096' },
    title: { fontSize: '32px', fontWeight: 'bold', marginBottom: '10px', color: '#2d3748', textAlign: 'center' },
    subtitle: { fontSize: '16px', color: '#718096', marginBottom: '30px', textAlign: 'center' },
    form: { display: 'flex', flexDirection: 'column', gap: '20px' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { fontSize: '14px', fontWeight: 'bold', color: '#2d3748' },
    inputWrapper: { position: 'relative' },
    input: { width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '16px' },
    passwordInput: { width: '100%', padding: '12px 45px 12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '16px' },
    eyeIcon: { position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '20px', userSelect: 'none' },
    button: { padding: '15px', background: '#667eea', color: 'white', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' },
    error: { padding: '12px', background: '#fed7d7', color: '#c53030', borderRadius: '8px', fontSize: '14px' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.tabs}>
          <div 
            style={{...styles.tab, ...(isLogin ? styles.activeTab : styles.inactiveTab)}}
            onClick={() => { setIsLogin(true); setError(''); }}
          >
            Login
          </div>
          <div 
            style={{...styles.tab, ...(!isLogin ? styles.activeTab : styles.inactiveTab)}}
            onClick={() => { setIsLogin(false); setError(''); }}
          >
            Sign Up
          </div>
        </div>

        <h1 style={styles.title}>{isLogin ? 'Welcome Back!' : 'Create Account'}</h1>
        <p style={styles.subtitle}>{isLogin ? 'Login to continue your learning journey' : 'Start your learning journey today'}</p>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                style={styles.input}
                required
              />
            </div>
          )}
          
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
            <div style={styles.inputWrapper}>
              <input 
                type={showPassword ? 'text' : 'password'}
                placeholder={isLogin ? 'Enter your password' : 'Create a password'}
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={styles.passwordInput}
                required
              />
              <span 
                style={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '🙈'}
              </span>
            </div>
          </div>
          
          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Confirm Password</label>
              <div style={styles.inputWrapper}>
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  style={styles.passwordInput}
                  required
                />
                <span 
                  style={styles.eyeIcon}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '👁️' : '🙈'}
                </span>
              </div>
            </div>
          )}
          
          {isLogin && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" style={{ color: '#667eea', fontWeight: 'bold', textDecoration: 'none' }}>Forgot password</a>
            </div>
          )}
          
          <button type="submit" style={styles.button}>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetStarted;
