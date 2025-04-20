import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateStatusPage = () => {
  const { applicationId ,adminId} = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
//   const [changedBy, setChangedBy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5172/api/ApplicationStatusHistory/update-status', {

        candidateApplicationId: applicationId,
        status,
        notes,
        changedBy:adminId,
      });
      alert('Status updated successfully!');
      navigate('/view-applications'); // go back to the list
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Update Application Status</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>New Status</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          style={styles.input}
        />

        {/* <label style={styles.label}>Changed By</label>
        <input
          type="text"
          value={changedBy}
          onChange={(e) => setChangedBy(e.target.value)}
          required
          style={styles.input}
        /> */}

        <label style={styles.label}>Notes (optional)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.submitButton}>Submit Status</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    height: '80px',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default UpdateStatusPage;
