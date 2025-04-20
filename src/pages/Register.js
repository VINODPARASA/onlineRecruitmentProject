import React, { useState } from 'react';
import loginBg from './loginImage.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'User', // Default role
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5172/api/Auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Registration successful!');
    } else {
      alert('Registration failed');
    }
  };

  return (
      <div
         style={{
           backgroundImage: `url(${loginBg})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           height: '100vh',
           width: '100%',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
         }}
       > <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <br></br>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
    </div>
  );
};

// const styles = {
//   container: {
//     background: '#f7f7f7',
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   form: {
//     background: '#ffffff',
//     padding: '40px',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     width: '100%',
//     maxWidth: '400px',
//   },
//   heading: {
//     marginBottom: '24px',
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: '12px',
//     marginBottom: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     fontSize: '16px',
//   },
//   select: {
//     width: '100%',
//     padding: '12px',
//     marginBottom: '24px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     fontSize: '16px',
//     backgroundColor: '#fff',
//   },
//   button: {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
// };
// const styles = {
//   container: {
//     width: '700px',         // Increased width
//     height: '45vh',         // Slightly reduced height
//     margin: 'auto',
//     padding: '40px',
//     borderRadius: '12px',
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
    
//   },
//   input: {
//     marginBottom: '15px',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     padding: '12px',
//     fontSize: '16px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
//   register: {
//     marginTop: '20px',
//     textAlign: 'center',
//     fontSize: '14px',
//   },
//   link: {
//     marginLeft: '5px',
//     color: '#007bff',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
// };
const styles = {
  container: {
    width: '700px',         // already increased width
    height: '45vh',
    margin: 'auto',
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%', 
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  register: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
  },
  link: {
    marginLeft: '5px',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};





export default Register;
