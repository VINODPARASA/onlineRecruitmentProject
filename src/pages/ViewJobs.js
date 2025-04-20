// import React, { useEffect, useState } from 'react';

// const ViewJobs = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5172/api/JobPost/all-jobs')
//       .then(res => res.json())
//       .then(data => setJobs(data))
//       .catch(err => console.error("Error fetching jobs:", err));
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2>Available Jobs</h2>
//       <div style={styles.jobList}>
//         {jobs.map((job, index) => (
//           <div key={index} style={styles.jobCard}>
//             <h3>{job.jobTitle}</h3>
//             <p><strong>Description:</strong> {job.description}</p>
//             <p><strong>Location:</strong> {job.location}</p>
//             <p><strong>Skills:</strong> {job.skills}</p>
//             <p><strong>Experience:</strong> {job.experience}</p>
//             <p><strong>Salary:</strong> {job.salary}</p>
//             <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
//             <p><strong>Posted On:</strong> {new Date(job.postedDate).toLocaleDateString()}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '40px',
//     textAlign: 'center',
//   },
//   jobList: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '20px',
//     marginTop: '30px',
//   },
//   jobCard: {
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     backgroundColor: '#f9f9f9',
//     textAlign: 'left',
//   },
// };

// export default ViewJobs;
// import React, { useEffect, useState } from 'react';

// const ViewJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5172/api/JobPost/all-jobs')
//       .then(res => res.json())
//       .then(data => setJobs(data))
//       .catch(err => console.error("Error fetching jobs:", err));
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Function to filter jobs based on the search query
//   const filteredJobs = jobs.filter((job) => {
//     return (
//       job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.salary.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.description.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <div style={styles.container}>
//       <h2>Available Jobs</h2>

//       {/* Search Bar */}
//       <div style={styles.searchBar}>
//         <input
//           type="text"
//           placeholder="Search jobs by title, location, skills, etc."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           style={styles.searchInput}
//         />
//       </div>

//       {/* Job List */}
//       <div style={styles.jobList}>
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map((job, index) => (
//             <div key={index} style={styles.jobCard}>
//               <h3>{job.jobTitle}</h3>
//               <p><strong>Description:</strong> {job.description}</p>
//               <p><strong>Location:</strong> {job.location}</p>
//               <p><strong>Skills:</strong> {job.skills}</p>
//               <p><strong>Experience:</strong> {job.experience}</p>
//               <p><strong>Salary:</strong> {job.salary}</p>
//               <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
//               <p><strong>Posted On:</strong> {new Date(job.postedDate).toLocaleDateString()}</p>
//             </div>
//           ))
//         ) : (
//           <p>No jobs found matching your search criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '40px',
//     textAlign: 'center',
//   },
//   searchBar: {
//     marginBottom: '20px',
//   },
//   searchInput: {
//     padding: '10px',
//     fontSize: '16px',
//     width: '50%',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//   },
//   jobList: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '20px',
//     marginTop: '30px',
//   },
//   jobCard: {
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     backgroundColor: '#f9f9f9',
//     textAlign: 'left',
//   },
// };

// export default ViewJobs;

import React, { useEffect, useState,useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import axios from "axios";

const ViewJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFiles, setSelectedFiles] = useState({});
  const { userId, setUserId } = useContext(UserContext);
 

   // Replace this with actual logged-in user's ID

  useEffect(() => {
    fetch('http://localhost:5172/api/JobPost/all-jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFileChange = (e, jobId) => {
    setSelectedFiles({ ...selectedFiles, [jobId]: e.target.files[0] });
  };

  const handleApply = async (jobId) => {
    console.log(jobId);
    console.log(userId);
    const res = await axios.post("http://localhost:5172/api/CandidateApplications/check-application", {
      userId: userId,
      jobId: jobId,
    });
    if (res.data === "found") {
      alert("You have already applied for this job.");
      return;
    }

    const resumeFile = selectedFiles[jobId];
    if (!resumeFile) {
      alert("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append('resumeFile', resumeFile);
    


    try {
      const res = await fetch(`http://localhost:5172/api/Application/apply/${jobId}/${userId}`, {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        alert("Application submitted successfully!");
      } else {
        const errorText = await res.text();
        alert(`Failed to apply: ${errorText}`);
      }
    } catch (error) {
      console.error("Error applying for job:", error);
      alert("Something went wrong!");
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.salary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Available Jobs</h2>

      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search jobs by title, location, skills, etc."
          value={searchQuery}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.jobList}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} style={styles.jobCard}>
              <h3>{job.jobTitle}</h3>
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Skills:</strong> {job.skills}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
              <p><strong>Posted On:</strong> {new Date(job.postedDate).toLocaleDateString()}</p>

              {/* <input
                type="file"
                onChange={(e) => handleFileChange(e, job.id)}
                accept=".pdf,.doc,.docx"
              />
              <button onClick={() => handleApply(job.id)} style={{ marginTop: '10px' }}>
                Apply
              </button> */}
                <div style={styles.fileInputWrapper}>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, job.id)}
                  accept=".pdf,.doc,.docx"
                  style={styles.fileInput}
                />
              </div>
              <button
                onClick={() => handleApply(job.id)}
                style={styles.applyButton}
              >
                Apply
              </button>
            </div>
            
          ))
        ) : (
          <p>No jobs found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
  },
  searchBar: {
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    fontSize: '16px',
    width: '50%',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  jobList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginTop: '30px',
  },
  jobCard: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
  },
  fileInputWrapper: {
    marginTop: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '5px',
    backgroundColor: '#f1f1f1',
    display: 'inline-block',
    width: '100%',
  }, applyButton: {
    marginTop: '20px',
    padding: '12px 25px',
    fontSize: '16px',
    backgroundColor: '#4CAF50', // Green
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
};

export default ViewJobs;
