// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ViewPostedJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get('http://localhost:5172/api/JobPost/all-jobs');
//         setJobs(res.data);
//       } catch (err) {
//         console.error('Error fetching jobs:', err);
//       }
//     };
//     fetchJobs();
//   }, []);

//   const handleDelete = async (jobId) => {
//     if (window.confirm('Are you sure you want to delete this job?')) {
//       try {
//         await axios.delete(`http://localhost:5172/api/JobPost/delete/${jobId}`);
//         setJobs(jobs.filter(job => job.id !== jobId)); // Remove deleted job from state
//       } catch (err) {
//         console.error('Error deleting job:', err);
//       }
//     }
//   };

//   const handleUpdate = (jobId) => {
//     navigate(`/update-job/${jobId}`);
//   };

//   return (
//     <div style={{ padding: '30px' }}>
//       <h2>All Posted Jobs</h2>
//       {jobs.map((job) => (
//         <div key={job.id} style={styles.jobCard}>
//           <h3>{job.jobTitle}</h3>
//           <p><strong>Location:</strong> {job.location}</p>
//           <p><strong>Experience:</strong> {job.experience}</p>
//           <p><strong>Skills:</strong> {job.skills}</p>
//           <p><strong>Salary:</strong> {job.salary}</p>
//           <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
//           <button onClick={() => handleUpdate(job.id)} style={styles.updateButton}>Update Job</button>
//           <button onClick={() => handleDelete(job.id)} style={styles.deleteButton}>Delete Job</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   jobCard: {
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//     padding: '20px',
//     marginBottom: '20px',
//     backgroundColor: '#f9f9f9',
//   },
//   updateButton: {
//     marginRight: '10px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     padding: '8px 12px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   deleteButton: {
//     backgroundColor: '#dc3545',
//     color: '#fff',
//     padding: '8px 12px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default ViewPostedJobsPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewPostedJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // Array of light background colors for each job card
  const backgroundColors = [
    '#f0f8ff', // AliceBlue
    '#e6ffe6', // LightGreen
    '#fff0f5', // LavenderBlush
    '#fefbd8', // LightYellow
    '#e0ffff', // LightCyan
    '#f9eaf3', // MistyRose
    '#f3f3ff', // GhostWhite
    '#fff5e6', // LightApricot
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5172/api/JobPost/all-jobs');
        setJobs(res.data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await axios.delete(`http://localhost:5172/api/JobPost/delete/${jobId}`);
        setJobs(jobs.filter(job => job.id !== jobId)); // Remove deleted job from state
      } catch (err) {
        console.error('Error deleting job:', err);
      }
    }
  };

  const handleUpdate = (jobId) => {
    navigate(`/update-job/${jobId}`);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>All Posted Jobs</h2>
      {jobs.map((job, index) => (
        <div
          key={job.id}
          style={{
            ...styles.jobCard,
            backgroundColor: backgroundColors[index % backgroundColors.length], // Apply color dynamically
          }}
        >
          <h3>{job.jobTitle}</h3>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
          <p><strong>Skills:</strong> {job.skills}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
          <button onClick={() => handleUpdate(job.id)} style={styles.updateButton}>Update Job</button>
          <button onClick={() => handleDelete(job.id)} style={styles.deleteButton}>Delete Job</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  jobCard: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
  },
  updateButton: {
    marginRight: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ViewPostedJobsPage;
