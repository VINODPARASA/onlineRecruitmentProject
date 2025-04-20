// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserDashboard = () => {
//   const navigate = useNavigate();

//   const handleViewJobs = () => {
//     navigate('/view-jobs');
//   };
//   const handleViewApplications = () => {
//     // Navigate to notifications page or show a modal
   
//     navigate('/view-user-applications');
//   };
//   const handlescheduleInterviews = () => {
//     // Navigate to notifications page or show a modal
   
//     navigate('/view-scheduled-interviews');
//   };
//   const handleUserProfile = () => {
//     navigate('/profile'); // Route for profile page
//   };
  

//   return (
//     <div style={styles.container}>
//       <h2>User Dashboard</h2>
//       <button
//         onClick={handleUserProfile}
//         style={{ ...styles.button, backgroundColor: '#ffc107' }} // yellow for profile

//       >
//         View Profile
//       </button>
//       <br>
//       </br>
//       <br>
//       </br>
//       <br></br>
//       <button onClick={handleViewJobs} style={styles.button}>View Jobs</button>
// <br></br>
// <br></br>
//       <button onClick={handleViewApplications} style={{ ...styles.button, backgroundColor: '#fd7e14', marginTop: '20px' }}
//       >
//     View status of your Applications
//   </button>
//   <br></br>
// <br></br>
//       <button onClick={handlescheduleInterviews} style={{ ...styles.button, backgroundColor: '#28a745'  // green
// , marginTop: '20px' }}
//       >
//     View scheduled Interviews
//   </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '50px',
    
//   },
 
//   button: {
//     padding: '15px 30px',
//     width: '100%',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     fontSize: '18px',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//   },
// };

// export default UserDashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleViewJobs = () => {
    navigate('/view-jobs');
  };
  const handleViewApplications = () => {
    navigate('/view-user-applications');
  };
  const handlescheduleInterviews = () => {
    navigate('/view-scheduled-interviews');
  };
  const handleUserProfile = () => {
    navigate('/profile');
  };

  return (
    <div style={styles.container}>
      <h2>User Dashboard</h2>
      <button
        onClick={handleUserProfile}
        style={{ ...styles.button, backgroundColor: '#ffc107' }}
      >
        View Profile
      </button>
      <br /><br /><br />
      <button onClick={handleViewJobs} style={styles.button}>
        View Jobs
      </button>
      <br /><br />
      <button
        onClick={handleViewApplications}
        style={{ ...styles.button, backgroundColor: '#fd7e14', marginTop: '20px' }}
      >
        View status of your Applications
      </button>
      <br /><br />
      <button
        onClick={handlescheduleInterviews}
        style={{ ...styles.button, backgroundColor: '#28a745', marginTop: '20px' }}
      >
        View scheduled Interviews
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    marginTop: '60px', 
  },
  button: {
    padding: '15px 30px',
    width: '100%',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default UserDashboard;
