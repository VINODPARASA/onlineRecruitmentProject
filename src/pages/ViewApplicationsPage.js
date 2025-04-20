// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewApplicationsPage = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('http://localhost:5172/api/CandidateApplications');
//         setApplications(response.data);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>All Job Applications</h2>
//       {loading ? (
//         <p>Loading applications...</p>
//       ) : applications.length === 0 ? (
//         <p>No applications found.</p>
//       ) : (
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th>Job ID</th>
//               <th>User ID</th>
//               {/* <th>Candidate Name</th> */}
//               <th>Resume</th>
//               {/* <th>Status</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map(app => (
//               <tr key={app.id}>
//                 <td>{app.jobId}</td>
//                 <td>{app.userId}</td>
//                 {/* <td>{app.job?.title || 'N/A'}</td> Replace with actual candidate name if available */}
//                 <td>
//                 <a
//  href={`http://localhost:5172/resumes/${app.resumeFileName}`}

//   target="_blank"
//   rel="noopener noreferrer"
// >
//   View Resume
// </a>

//                 </td>
//                 {/* <td>{app.currentStatus}</td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '30px',
//     backgroundColor: '#f9f9f9',
//     minHeight: '100vh',
//   },
//   heading: {
//     fontSize: '28px',
//     marginBottom: '20px',
//     color: '#333',
//     textAlign: 'center',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   },
//   th: {
//     padding: '12px',
//     borderBottom: '1px solid #ddd',
//     backgroundColor: '#007bff',
//     color: '#fff',
//   },
//   td: {
//     padding: '12px',
//     borderBottom: '1px solid #ddd',
//     textAlign: 'center',
//   },
// };

// export default ViewApplicationsPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewApplicationsPage = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('http://localhost:5172/api/CandidateApplications');
//         setApplications(response.data);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>All Job Applications</h2>
//       {loading ? (
//         <p>Loading applications...</p>
//       ) : applications.length === 0 ? (
//         <p>No applications found.</p>
//       ) : (
//         <div style={styles.grid}>
//           {applications.map((app) => (
//             <div key={app.id} style={styles.card}>
//               <table style={styles.table}>
//                 <thead>
//                   <tr>
//                     <th style={styles.th}>Job ID</th>
//                     <th style={styles.th}>User ID</th>
//                     <th style={styles.th}>Resume</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td style={styles.td}>{app.jobId}</td>
//                     <td style={styles.td}>{app.userId}</td>
//                     <td style={styles.td}>
//                       <a
//                         href={`http://localhost:5172/resumes/${app.resumeFileName}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View Resume
//                       </a>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '30px',
//     backgroundColor: '#f0f4f8',
//     minHeight: '100vh',
//   },
//   heading: {
//     fontSize: '28px',
//     marginBottom: '30px',
//     color: '#333',
//     textAlign: 'center',
//   },
//   grid: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   card: {
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//     padding: '20px',
//     backgroundColor: '#ffffff',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//   },
//   th: {
//     border: '1px solid #ddd',
//     padding: '12px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     textAlign: 'left',
//   },
//   td: {
//     border: '1px solid #ddd',
//     padding: '12px',
//     backgroundColor: '#fdfdfd',
//     textAlign: 'left',
//   },
// };

// export default ViewApplicationsPage;

import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';

const ViewApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { adminId, setAdminId } = useContext(AdminContext);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:5172/api/CandidateApplications');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleUpdateStatus = (applicationId) => {
    // You can later navigate to a dedicated update page if needed:
    navigate(`/update-status/${applicationId}/${adminId}`);
  };
  const handleScheduleInterview = (applicationId) => {
    // Navigate to interview scheduling page or open modal
    console.log("Schedule interview for application ID:", applicationId);
     navigate(`/schedule-interview/${applicationId}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>All Job Applications</h2>
      {loading ? (
        <p>Loading applications...</p>
      ) : applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div style={styles.grid}>
          {applications.map((app) => (
            <div key={app.id} style={styles.card}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Job ID</th>
                    <th style={styles.th}>User ID</th>
                    <th style={styles.th}>Current Status</th>
                    <th style={styles.th}>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>{app.jobId}</td>
                    <td style={styles.td}>{app.userId}</td>
                    <td style={styles.td}>{app.currentStatus}</td>
                    <td style={styles.td}>
                      <a
                        href={`http://localhost:5172/resumes/${app.resumeFileName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    marginTop: '10px'
  }}
>
  {/* <button
    style={{
      ...styles.updateButton,
      backgroundColor: 'yellow',
      color: 'black'
    }}
    onClick={() => handleScheduleInterview(app.id)}
  >
    Schedule Interview
  </button> */}
  {/* <button
                  style={{
                    ...styles.updateButton,
                    backgroundColor: 'yellow',
                    color: 'black',
                    cursor: app.currentStatus === "Shortlisted" ? 'pointer' : 'not-allowed',
                    opacity: app.currentStatus === "Shortlisted" ? 1 : 0.5
                  }}
                  onClick={() => handleScheduleInterview(app.id)}
                  disabled={app.currentStatus !== "shortlisted"}
                >
                  Schedule Interview
                </button> */}
                <button
  style={{
    ...styles.updateButton,
    backgroundColor: 'yellow',
    color: 'black',
    cursor: app.currentStatus === "shortlisted" ? 'pointer' : 'not-allowed',
    opacity: app.currentStatus === "shortlisted" ? 1 : 0.5
  }}
  onClick={() => handleScheduleInterview(app.id)}
  disabled={app.currentStatus !== "shortlisted"} // <-- Fixed case
>
  Schedule Interview
</button>


  <button
    style={styles.updateButton}
    onClick={() => handleUpdateStatus(app.id)}
  >
    Update Status
  </button>
</div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '30px',
    color: '#333',
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '12px',
    backgroundColor: '#fdfdfd',
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: '15px',
    textAlign: 'right',
  },
  updateButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745', // green color
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(40, 167, 69, 0.2)',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  },
};

export default ViewApplicationsPage;
