import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handlePostJob = () => {
    navigate('/post-job');
  };
  const handleUpdateStatus = () => {
    navigate('/update-status');
  };
  const handleViewApplications = () => {
    navigate('/view-applications');
  };

  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.heading}>Admin Dashboard</h2>
      <button onClick={handlePostJob} style={styles.postJobButton}>
        Post a Job
      </button>
      <br></br>
      {/* <button onClick={handleUpdateStatus} style={styles.updateButton}>
        Update Application Status
      </button> */}
      <br />
      <button onClick={handleViewApplications} style={styles.viewButton}>
        View All Applications
      </button>
      <br></br>
      <br></br>
      <button onClick={() => navigate('/view-posted-jobs')} style={styles.viewPostedJobs}>
  View Posted Jobs
</button>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    backgroundColor: '#f0f4f8',
    padding: '40px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#333',
  },
  postJobButton: {
    width: '75%',
    padding: '15px',
    fontSize: '18px',
    backgroundColor: 'orange', // changed from #007bff (blue) to orange
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }
  ,
  updateButton: {
    width: '75%',
    padding: '15px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(255, 193, 7, 0.2)',
    transition: 'background-color 0.3s, box-shadow 0.3s'

  },viewButton: {
    width: '75%',
    padding: '15px',
    fontSize: '18px',
    backgroundColor: '#28a745', // green
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(40, 167, 69, 0.2)',
    transition: 'background-color 0.3s, box-shadow 0.3s'
  },
  viewPostedJobs: {
    width: '75%',
    padding: '15px',
    fontSize: '18px',
    backgroundColor: '#007bff', 
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 123, 255, 0.2)', // updated shadow to match blue
    transition: 'background-color 0.3s, box-shadow 0.3s',
  }
  
};

export default AdminDashboard;
