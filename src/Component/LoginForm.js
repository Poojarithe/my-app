// import React, { useState } from 'react';
// import LoginButton from './LoginButton';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic Validation
//     if (!email || !password) {
//       setError('Both fields are required.');
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Email address is invalid.');
//       return;
//     }

//     // Handle login logic here (e.g., API call)
//     setError('');
//     alert('Login Successful!');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <div className="form-group">
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="form-group">
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       {error && <div className="error">{error}</div>}

//       <LoginButton />
//     </form>
//   );
// }

// export default LoginForm;






// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import LoginButton from './LoginButton';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic Validation
//     if (!email || !password) {
//       setError('Both fields are required.');
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Email address is invalid.');
//       return;
//     }

//     // Handle login logic here (e.g., API call)
//     setError('');
//     alert('Login Successful!');


//     // Navigate to the Dashboard
//     navigate('/dashboard');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <div className="form-group">
//         <label>
//           <FontAwesomeIcon icon={faEnvelope} className="icon" />
//           Email:
//         </label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="form-group">
//         <label>
//           <FontAwesomeIcon icon={faLock} className="icon" />
//           Password:
//         </label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       {error && <div className="error">{error}</div>}

//       <LoginButton />
//     </form>
//   );
// }

// export default LoginForm;












// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import LoginButton from './LoginButton';
// import { useNavigate } from 'react-router-dom';
// import "./LoginForm.css"; 

// function LoginForm({ onLogin }) { // Accept onLogin as a prop
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic Validation
//     if (!email || !password) {
//       setError('Both fields are required.');
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Email address is invalid.');
//       return;
//     }

//     // Handle login logic here (e.g., API call)
//     setError('');
//     alert('Login Successful!');

//     // Notify parent component of login success
//     // onLogin();
    
//     // Navigate to the Dashboard
//     navigate('/dashboard');
//   };

//   return (
//     <div classname="MainLoginForm">
//     <form onSubmit={handleSubmit} className="login-form">
//       <div className="form-group">
//         <label>
//           <FontAwesomeIcon icon={faEnvelope} className="icon" />
//           Email:
//         </label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="form-group">
//         <label>
//           <FontAwesomeIcon icon={faLock} className="icon" />
//           Password:
//         </label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>


//       {error && <div className="error">{error}</div>}

//       <LoginButton />
//     </form>
//     </div>
//   );
// }

// export default LoginForm;
















import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css"; 

function LoginForm({ onLogin }) { // Accept onLogin as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email address is invalid.');
      return;
    }

    // Handle login logic here (e.g., API call)
    setError('');
    alert('Login Successful!');

    // Notify parent component of login success
    onLogin();
    
    // Navigate to the Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="MainLoginForm">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faLock} className="icon" />
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;