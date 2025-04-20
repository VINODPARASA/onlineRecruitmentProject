// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-links">
//         <li>
//           <Link to="/user-login">
//             <button className="login-btn">User Login</button>
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin-login">
//             <button className="login-btn">Admin Login</button>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';

import  { useContext } from 'react';
import { AdminContext } from '../Context/AdminContext';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const Navbar = () => {
   const { adminId, setAdminId } = useContext(AdminContext);
   const { userId, setUserId } = useContext(UserContext);
   const navigate = useNavigate();
  // Access adminId and setAdminId from context

  const handleAdminLogin = () => {
    // Simulate admin login, e.g., by setting adminId after a successful login
    //setAdminId('admin123'); // Replace with actual admin login logic
    navigate('/admin-login');
    
  };

  const handleUserLogout = () => {
    setUserId(null);
    navigate('/');
     // Log out by setting adminId to null
     
  };
  const handleUserLogin = () => {
    // Navigate to the User Login page
    navigate('/user-login');
  };

  const handleAdminLogout = () => {
    setAdminId(null); 
    // Log out by setting adminId to null
    navigate('/');
  };
  const goToUserDashboard = () => {
    if (userId) {
      navigate('/user-dashboard');
    } else {
      navigate('/user-login');
    }
  };

  const goToAdminDashboard = () => {
    if (adminId) {
      navigate('/admin-dashboard');
    } else {
      navigate('/admin-login');
    }
  };
  return (
    <nav style={styles.navbar}>
     
      <div style={styles.left}>
        
        {/* <Link to="/user-login">
          <button style={styles.userBtn}>User Login</button>
        </Link> */}
         {!userId ? (
          <button onClick={handleUserLogin} style={styles.userBtn}>User Login</button>
        ) : (
          <button onClick={handleUserLogout} style={styles.userBtn}>User Logout</button>
        )}
        <button onClick={goToUserDashboard} style={styles.userDashBtn}>
          User Dashboard
        </button>
      </div>

      <div style={styles.right}>
        {!adminId ? (
          <button onClick={handleAdminLogin} style={styles.adminBtn}>Admin Login</button>
        ) : (
          <button onClick={handleAdminLogout} style={styles.adminBtn}>Admin Logout</button>
        )}
         <button onClick={goToAdminDashboard} style={styles.adminDashBtn}>
          Admin Dashboard
        </button>
      </div>
      
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px', // Increased right padding
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  adminDashBtn: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#dc3545', // Red-ish color (distinct from green)
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginLeft: '10px', // Adds space between the buttons
    transition: 'background-color 0.3s',
  },
  userDashBtn: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#17a2b8', // Teal-ish color to differentiate
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginLeft: '10px', // Adds space between the buttons
    transition: 'background-color 0.3s',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '25px', // Slight right shift
  },
  userBtn: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  adminBtn: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
};

export default Navbar;
