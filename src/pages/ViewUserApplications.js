// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../Context/UserContext';

// const ViewUserApplications = () => {
//   const [applications, setApplications] = useState([]);
//   const { userId } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!userId) return; // Wait for userId to be available

//     axios.post('http://localhost:5172/api/ApplicationStatusHistory/user-applications', JSON.stringify(userId), {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(res => setApplications(res.data))
//     .catch(err => console.error(err));
//   }, [userId]);

//   const handleViewStatus = (applicationId) => {
//     navigate(`/application-status/${applicationId}`);
//   };

//   return (
//     <div style={{ padding: '30px' }}>
//       <h2>Your Applications</h2>
//       {applications.map(app => (
//         <div key={app.applicationId} style={{ border: '1px solid #ccc', margin: '15px 0', padding: '20px', borderRadius: '10px' }}>
//           <h3>{app.jobTitle}</h3>
//           <p><strong>Job ID:</strong> {app.jobId}</p>
//           <p><strong>Salary:</strong> {app.salary}</p>
//           <p><strong>Location:</strong> {app.location}</p>
//           <p><strong>Current Status:</strong> {app.currentStatus}</p>
//           <button
//             onClick={() => handleViewStatus(app.applicationId)}
//             style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
//           >
//             View Status
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewUserApplications;

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const ViewUserApplications = () => {
  const [applications, setApplications] = useState([]);
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();

  const cardColors = [
    '#e0f7fa', // light cyan
    '#f1f8e9', // light green
    '#fff3e0', // light orange
    '#fce4ec', // light pink
    '#ede7f6', // light purple
    '#f9fbe7', // light yellow-green
    '#e3f2fd', // light blue
    '#fffde7'  // light yellow
  ];

  useEffect(() => {
    if (!userId) return;

    axios.post('http://localhost:5172/api/ApplicationStatusHistory/user-applications', JSON.stringify(userId), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => setApplications(res.data))
    .catch(err => console.error(err));
  }, [userId]);

  const handleViewStatus = (applicationId) => {
    navigate(`/application-status/${applicationId}`);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#003366' }}>Your Applications</h2>
      {applications.map((app, index) => (
        <div
          key={app.applicationId}
          style={{
            backgroundColor: cardColors[index % cardColors.length],
            border: '1px solid #ccc',
            margin: '15px 0',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#003366' }}>{app.jobTitle}</h3>
          <p><strong>Job ID:</strong> {app.jobId}</p>
          <p><strong>Salary:</strong> {app.salary}</p>
          <p><strong>Location:</strong> {app.location}</p>
          <p><strong>Current Status:</strong> {app.currentStatus}</p>
          <button
            onClick={() => handleViewStatus(app.applicationId)}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            View Status
          </button>
        </div>
      ))}
    </div>
  );
};

export default ViewUserApplications;
