// import React, { useState } from 'react';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Call your backend API for admin login
//     const response = await fetch('http://localhost:5172/api/Auth/admin-login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       alert('Admin login successful!');
//     } else {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login as Admin</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
// import React, { useState } from 'react';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5172/api/Auth/admin-login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       alert('Admin login successful!');
//     } else {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>Admin Login</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Login as Admin</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f2f5',
//   },
//   card: {
//     width: '350px',
//     padding: '30px',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '24px',
//     color: '#333',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     marginBottom: '15px',
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     outline: 'none',
//   },
//   button: {
//     padding: '10px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default AdminLogin;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AdminContext } from '../Context/AdminContext';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { adminId, setAdminId } = useContext(AdminContext); // Accessing adminId from context

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5172/api/Auth/admin-login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       alert('Admin login successful!');
//       const data = await response.json();
//       setAdminId(data.Id); // Assuming the response contains the adminId
//     } else {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Login as Admin</button>

//         <div style={styles.register}>
//           <span>Don't have an account?</span>
//           <Link to="/register" style={styles.link}> Register</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '100px auto',
//     padding: '30px',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
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
//     border: '1px solid #ccc'
//   },
//   button: {
//     padding: '12px',
//     fontSize: '16px',
//     backgroundColor: '#28a745',
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
//     color: '#28a745',
//     textDecoration: 'none',
//     fontWeight: 'bold'
//   }
// };

// export default AdminLogin;

import React, { useState, useContext ,useEffect} from 'react';
import { AdminContext } from '../Context/AdminContext'; // Correct import for AdminContext
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loginBg from './loginImage.jpg';




const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { adminId, setAdminId } = useContext(AdminContext); // Accessing adminId from context
  const navigate = useNavigate();
  useEffect(() => {
    console.log("adminId updated:", adminId);
  }, [adminId]);
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5172/api/Auth/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login Response:", data); // Should show { message: "...", id: "..." }
      setAdminId(data.id);
       // Assuming the response contains the adminId
      alert('Admin login successful!');
      console.log(data.id);
      console.log(adminId);
      navigate('/admin-dashboard'); // Redirect to admin dashboard or appropriate page
    } else {
      alert('Login failed');
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
      >
        
      
    <div style={styles.container}>
      
        <div>
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Login as Admin</button>

            <div style={styles.register}>
              <span>Don't have an account?</span>
              <Link to="/register" style={styles.link}> Register</Link>
            </div>
          </form>
        </div>
      
    </div>
    </div>
    
  );
  
  
};

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '100px auto',
//     padding: '30px',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   loggedIn: {
//     textAlign: 'center',
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
//     backgroundColor: '#28a745',
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
//     color: '#28a745',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
// };
const styles = {
  container: {
    width: '700px',         // Increased width
    height: '48vh',         // Slightly reduced height
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




export default AdminLogin;
