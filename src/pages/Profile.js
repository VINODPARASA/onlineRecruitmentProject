// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = ({ userId }) => {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     qualification: '',
//     skills: '',
//     collegeName: '',
//     cgpa: '',
//     achievements: '',
//     dateOfBirth: '',
//     resume: null,
//     profilePicture: null,
//   });

//   // Fetch profile data
//   useEffect(() => {
//     axios.get(`/api/profile/${userId}`)
//       .then((response) => {
//         setProfile(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching profile:", error);
//       });
//   }, [userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formDataToSubmit = new FormData();
//     for (let key in formData) {
//       formDataToSubmit.append(key, formData[key]);
//     }

//     if (profile) {
//       // Update Profile
//       axios.put(`/api/profile/${userId}`, formDataToSubmit)
//         .then((response) => {
//           setProfile(response.data);
//           setIsEditing(false);
//         })
//         .catch((error) => {
//           console.error("Error updating profile:", error);
//         });
//     } else {
//       // Create Profile
//       axios.post(`/api/profile`, formDataToSubmit)
//         .then((response) => {
//           setProfile(response.data);
//           setIsEditing(false);
//         })
//         .catch((error) => {
//           console.error("Error creating profile:", error);
//         });
//     }
//   };

//   return (
//     <div style={styles.profileContainer}>
//       {profile ? (
//         <>
//           <h2>View Profile</h2>
//           <div style={styles.profileDetails}>
//             <p><strong>First Name:</strong> {profile.firstName}</p>
//             <p><strong>Last Name:</strong> {profile.lastName}</p>
//             <p><strong>Qualification:</strong> {profile.qualification}</p>
//             <p><strong>Skills:</strong> {profile.skills}</p>
//             <p><strong>College Name:</strong> {profile.collegeName}</p>
//             <p><strong>CGPA:</strong> {profile.cgpa}</p>
//             <p><strong>Achievements:</strong> {profile.achievements}</p>
//             <p><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
//             <p><strong>Resume:</strong> <a href={`/${profile.resumeFilePath}`} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p><strong>Profile Picture:</strong> <img src={`/${profile.profilePicturePath}`} alt="Profile" width="100" /></p>
//           </div>

//           <button style={styles.button} onClick={() => setIsEditing(true)}>Edit Profile</button>
//         </>
//       ) : (
//         <>
//           <h2>Create Profile</h2>
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <div style={styles.formGroup}>
//               <label>First Name:</label>
//               <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Last Name:</label>
//               <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Qualification:</label>
//               <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Skills:</label>
//               <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>College Name:</label>
//               <input type="text" name="collegeName" value={formData.collegeName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>CGPA:</label>
//               <input type="number" name="cgpa" value={formData.cgpa} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Achievements:</label>
//               <input type="text" name="achievements" value={formData.achievements} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Date of Birth:</label>
//               <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Resume:</label>
//               <input type="file" name="resume" onChange={handleFileChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Profile Picture:</label>
//               <input type="file" name="profilePicture" onChange={handleFileChange} style={styles.input} />
//             </div>
//             <button type="submit" style={styles.button}>Submit</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// const styles = {
//   profileContainer: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//     textAlign: 'center',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//   },
//   profileDetails: {
//     marginBottom: '20px',
//   },
//   formGroup: {
//     margin: '15px 0',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     marginTop: '5px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '20px',
//   },
// };

// export default Profile;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { UserContext } from './context/UserContext';  // Import the UserContext
// import './Profile.css';

// const Profile = () => {
//   // Accessing userId from UserContext
//   const { userId } = useContext(UserContext);

//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     qualification: '',
//     skills: '',
//     collegeName: '',
//     cgpa: '',
//     achievements: '',
//     dateOfBirth: '',
//     resume: null,
//     profilePicture: null,
//   });

//   // Fetch profile data
//   useEffect(() => {
//     if (userId) {
//       axios.get(`/api/profile/${userId}`)
//         .then((response) => {
//           setProfile(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching profile:", error);
//         });
//     }
//   }, [userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formDataToSubmit = new FormData();
//     for (let key in formData) {
//       formDataToSubmit.append(key, formData[key]);
//     }

//     if (profile) {
//       // Update Profile
//       axios.put(`/api/profile/${userId}`, formDataToSubmit)
//         .then((response) => {
//           setProfile(response.data);
//           setIsEditing(false);
//         })
//         .catch((error) => {
//           console.error("Error updating profile:", error);
//         });
//     } else {
//       // Create Profile
//       axios.post(`/api/profile`, formDataToSubmit)
//         .then((response) => {
//           setProfile(response.data);
//           setIsEditing(false);
//         })
//         .catch((error) => {
//           console.error("Error creating profile:", error);
//         });
//     }
//   };

//   return (
//     <div className="profile-container">
//       {profile ? (
//         <>
//           <h2>View Profile</h2>
//           <div className="profile-details">
//             <p><strong>First Name:</strong> {profile.firstName}</p>
//             <p><strong>Last Name:</strong> {profile.lastName}</p>
//             <p><strong>Qualification:</strong> {profile.qualification}</p>
//             <p><strong>Skills:</strong> {profile.skills}</p>
//             <p><strong>College Name:</strong> {profile.collegeName}</p>
//             <p><strong>CGPA:</strong> {profile.cgpa}</p>
//             <p><strong>Achievements:</strong> {profile.achievements}</p>
//             <p><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
//             <p><strong>Resume:</strong> <a href={`/${profile.resumeFilePath}`} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p><strong>Profile Picture:</strong> <img src={`/${profile.profilePicturePath}`} alt="Profile" width="100" /></p>
//           </div>

//           <button onClick={() => setIsEditing(true)}>Edit Profile</button>
//         </>
//       ) : (
//         <>
//           <h2>Create Profile</h2>
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <div className="form-group">
//               <label>First Name:</label>
//               <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Last Name:</label>
//               <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Qualification:</label>
//               <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Skills:</label>
//               <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>College Name:</label>
//               <input type="text" name="collegeName" value={formData.collegeName} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>CGPA:</label>
//               <input type="number" name="cgpa" value={formData.cgpa} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Achievements:</label>
//               <input type="text" name="achievements" value={formData.achievements} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Date of Birth:</label>
//               <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Resume:</label>
//               <input type="file" name="resume" onChange={handleFileChange} />
//             </div>
//             <div className="form-group">
//               <label>Profile Picture:</label>
//               <input type="file" name="profilePicture" onChange={handleFileChange} />
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { UserContext } from '../Context/UserContext';

// const Profile = () => {
//   // Accessing userId from UserContext
//   const { userId } = useContext(UserContext);

//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     qualification: '',
//     skills: '',
//     collegeName: '',
//     cgpa: '',
//     achievements: '',
//     dateOfBirth: '',
//     resume: null,
//     profilePicture: null,
//   });

//   // Fetch profile data
//   useEffect(() => {
//     if (userId) {
//       axios.get(`http://localhost:5172/api/Profile/${userId}`)

//         .then((response) => {
//           setProfile(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching profile:", error);
//         });
//     }
//   }, [userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formDataToSubmit = new FormData();
//     for (let key in formData) {
//       formDataToSubmit.append(key, formData[key]);
//     }

//     if (profile) {
//       // Update Profile
//       axios.put(`http://localhost:5172/api/Profile/${userId}`, formDataToSubmit)
//         .then((response) => {
//           setProfile(response.data);
//           setIsEditing(false);
//         })
//         .catch((error) => {
//           console.error("Error updating profile:", error);
//         });
//     } else {
//       // Create Profile
//       axios.post(`http://localhost:5172/api/Profile`, formDataToSubmit)
//         .then((response) => {
//           setProfile(response.data);
//           setIsEditing(false);
//         })
//         .catch((error) => {
//           console.error("Error creating profile:", error);
//         });
//     }
//   };

//   return (
//     <div style={styles.profileContainer}>
//       {profile ? (
//         <>
//           <h2>View Profile</h2>
//           <div style={styles.profileDetails}>
//             <p><strong>First Name:</strong> {profile.firstName}</p>
//             <p><strong>Last Name:</strong> {profile.lastName}</p>
//             <p><strong>Qualification:</strong> {profile.qualification}</p>
//             <p><strong>Skills:</strong> {profile.skills}</p>
//             <p><strong>College Name:</strong> {profile.collegeName}</p>
//             <p><strong>CGPA:</strong> {profile.cgpa}</p>
//             <p><strong>Achievements:</strong> {profile.achievements}</p>
//             <p><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
//             <p><strong>Resume:</strong> <a href={`/${profile.resumeFilePath}`} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p><strong>Profile Picture:</strong> <img src={`/${profile.profilePicturePath}`} alt="Profile" style={styles.profileImage} /></p>
//           </div>

//           <button onClick={() => setIsEditing(true)} style={styles.button}>Edit Profile</button>
//         </>
//       ) : (
//         <>
//           <h2>Create Profile</h2>
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <div style={styles.formGroup}>
//               <label>First Name:</label>
//               <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Last Name:</label>
//               <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Qualification:</label>
//               <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Skills:</label>
//               <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>College Name:</label>
//               <input type="text" name="collegeName" value={formData.collegeName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>CGPA:</label>
//               <input type="number" name="cgpa" value={formData.cgpa} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Achievements:</label>
//               <input type="text" name="achievements" value={formData.achievements} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Date of Birth:</label>
//               <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Resume:</label>
//               <input type="file" name="resume" onChange={handleFileChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Profile Picture:</label>
//               <input type="file" name="profilePicture" onChange={handleFileChange} style={styles.input} />
//             </div>
//             <button type="submit" style={styles.button}>Submit</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// // Inline styling object
// const styles = {
//   profileContainer: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//     textAlign: 'center',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//   },
//   profileDetails: {
//     marginBottom: '20px',
//   },
//   formGroup: {
//     margin: '15px 0',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     marginTop: '5px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '20px',
//   },
//   buttonHover: {
//     backgroundColor: '#45a049',
//   },
//   profileImage: {
//     borderRadius: '50%',
//     width: '100px',
//   },
// };

// export default Profile;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { UserContext } from '../Context/UserContext';

// const Profile = () => {
//   const { userId } = useContext(UserContext);

//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     qualification: '',
//     skills: '',
//     collegeName: '',
//     cgpa: '',
//     achievements: '',
//     dateOfBirth: '',
//     resume: null,
//     profilePicture: null,
//   });

//   useEffect(() => {
//     if (userId) {
//       axios.get(`http://localhost:5172/api/Profile/${userId}`)
//         .then((response) => {
//           setProfile(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching profile:", error);
//         });
//     }
//   }, [userId]);

//   const handleEditClick = () => {
//     setFormData({
//       ...formData,
//       ...profile,
//       dateOfBirth: profile.dateOfBirth ? profile.dateOfBirth.split('T')[0] : '',
//       resume: null,
//       profilePicture: null,
//     });
//     setIsEditing(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: files[0] }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formDataToSubmit = new FormData();
//     for (let key in formData) {
//       formDataToSubmit.append(key, formData[key]);
//     }

//     const request = profile
//       ? axios.put(`http://localhost:5172/api/Profile/${userId}`, formDataToSubmit)
//       : axios.post(`http://localhost:5172/api/Profile`, formDataToSubmit);

//     request
//       .then((response) => {
//         setProfile(response.data);
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error("Error submitting profile:", error);
//       });
//   };

//   return (
//     <div style={styles.profileContainer}>
//       {profile && !isEditing ? (
//         <>
//           <h2>View Profile</h2>
//           <div style={styles.profileDetails}>
//             <p><strong>First Name:</strong> {profile.firstName}</p>
//             <p><strong>Last Name:</strong> {profile.lastName}</p>
//             <p><strong>Qualification:</strong> {profile.qualification}</p>
//             <p><strong>Skills:</strong> {profile.skills}</p>
//             <p><strong>College Name:</strong> {profile.collegeName}</p>
//             <p><strong>CGPA:</strong> {profile.cgpa}</p>
//             <p><strong>Achievements:</strong> {profile.achievements}</p>
//             <p><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
//             <p><strong>Resume:</strong> <a href={`/${profile.resumeFilePath}`} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p><strong>Profile Picture:</strong> <img src={`/${profile.profilePicturePath}`} alt="Profile" style={styles.profileImage} /></p>
//           </div>
//           <button onClick={handleEditClick} style={styles.button}>Edit Profile</button>
//         </>
//       ) : (
//         <>
//           <h2>{profile ? 'Edit Profile' : 'Create Profile'}</h2>
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <div style={styles.formGroup}>
//               <label>First Name:</label>
//               <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Last Name:</label>
//               <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Qualification:</label>
//               <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Skills:</label>
//               <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>College Name:</label>
//               <input type="text" name="collegeName" value={formData.collegeName} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>CGPA:</label>
//               <input type="number" step="0.01" name="cgpa" value={formData.cgpa} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Achievements:</label>
//               <input type="text" name="achievements" value={formData.achievements} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Date of Birth:</label>
//               <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Resume:</label>
//               <input type="file" name="resume" onChange={handleFileChange} style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label>Profile Picture:</label>
//               <input type="file" name="profilePicture" onChange={handleFileChange} style={styles.input} />
//             </div>
//             <button type="submit" style={styles.button}>{profile ? 'Update' : 'Submit'}</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// const styles = {
//   profileContainer: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//     textAlign: 'center',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//   },
//   profileDetails: {
//     marginBottom: '20px',
//   },
//   formGroup: {
//     margin: '15px 0',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     marginTop: '5px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '20px',
//   },
//   profileImage: {
//     borderRadius: '50%',
//     width: '100px',
//   },
// };

// export default Profile;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';

const Profile = () => {
  const { userId } = useContext(UserContext);

  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    qualification: '',
    skills: '',
    collegeName: '',
    cgpa: '',
    achievements: '',
    dateOfBirth: '',
    resume: null,
    profilePicture: null,
  });

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:5172/api/Profile/${userId}`)
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
        });
    }
  }, [userId]);

  const handleEditClick = () => {
   
    setFormData({
      ...formData,
      ...profile,
      userId: userId, // explicitly set userId
      dateOfBirth: profile.dateOfBirth ? profile.dateOfBirth.split('T')[0] : '',
      resume: null,
      profilePicture: null,
    });
    
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
  
    formDataToSubmit.append('UserId', userId); // ensure UserId is included
  
    for (let key in formData) {
      if (formData[key] !== null && formData[key] !== undefined) {
        // Don't append null files
        formDataToSubmit.append(key, formData[key]);
      }
    }
  
    const request = profile
      ? axios.put(`http://localhost:5172/api/Profile/${userId}`, formDataToSubmit)
      : axios.post(`http://localhost:5172/api/Profile`, formDataToSubmit);
  
    request
      .then((response) => {
        setProfile(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error submitting profile:", error);
      });
  };
  

  return (
    <div style={styles.profileContainer}>
      {profile && !isEditing ? (
        <>
         
          <h2 style={styles.heading}>View Profile</h2>

{profile.profilePicturePath && (
  <div style={styles.imageWrapper}>
    <img
      src={`http://localhost:5172/${profile.profilePicturePath}`}
      alt="Profile"
      style={styles.circularImage}
    />
  </div>
)}

<div style={styles.gridSection}>
  <div style={styles.gridItem}><strong>Full Name:</strong><br />{profile.firstName} {profile.lastName}</div>
  <div style={styles.gridItem}><strong>Date of Birth:</strong><br />{new Date(profile.dateOfBirth).toLocaleDateString()}</div>
  <div style={styles.gridItem}><strong>College Name:</strong><br />{profile.collegeName}</div>
  <div style={styles.gridItem}><strong>Qualification:</strong><br />{profile.qualification}</div>
</div>

<div style={styles.section}>
  <h3 style={styles.sectionHeading}>Skills</h3>
  {profile.skills?.split(',').map((skill, index) => (
    <p key={index} style={styles.itemText}>{skill.trim()}</p>
  ))}
</div>

<div style={styles.section}>
  <h3 style={styles.sectionHeading}>Achievements</h3>
  {profile.achievements?.split(',').map((ach, index) => (
    <p key={index} style={styles.itemText}>{ach.trim()}</p>
  ))}
</div>

{profile.resumeFilePath && (
  <p>
    <strong>Resume:</strong>{' '}
    <a
      href={`http://localhost:5172/${profile.resumeFilePath}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Resume
    </a>
  </p>
)}



          <button onClick={handleEditClick} style={styles.button}>Edit Profile</button>
        </>
      ) : (
        <>
          <h2>{profile ? 'Edit Profile' : 'Create Profile'}</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div style={styles.formGroup}>
              <label>First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Qualification:</label>
              <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Skills:</label>
              <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>College Name:</label>
              <input type="text" name="collegeName" value={formData.collegeName} onChange={handleInputChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>CGPA:</label>
              <input type="number" step="0.01" name="cgpa" value={formData.cgpa} onChange={handleInputChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Achievements:</label>
              <input type="text" name="achievements" value={formData.achievements} onChange={handleInputChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Date of Birth:</label>
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Resume:</label>
              <input type="file" name="resume" onChange={handleFileChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Profile Picture:</label>
              <input type="file" name="profilePicture" onChange={handleFileChange} style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>{profile ? 'Update' : 'Submit'}</button>
          </form>
        </>
      )}
    </div>
  );
};

const styles = {
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  
  circularImage: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #4CAF50',
  },
  
  gridSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  
  gridItem: {
    padding: '15px',
    border: '1px solid #ddd',
    backgroundColor: '#e9f5e9',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    fontWeight: '500',
  },
  
  section: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f0f8ff',
    border: '1px solid #b0c4de',
    borderRadius: '8px',
    textAlign: 'left',
  },
  
  sectionHeading: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#2e8b57',
    borderBottom: '1px solid #ccc',
    paddingBottom: '5px',
  },
  
  itemText: {
    marginBottom: '8px',
    color: '#444',
  },
  profileContainer: {
    maxWidth: '900px',
    margin: '60px auto 40px auto', // added top margin to move it downwards
    padding: '30px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  
  
  // profileContainer: {
  //   maxWidth: '800px',
  //   margin: '0 auto',
  //   padding: '20px',
  //   textAlign: 'center',
  //   border: '1px solid #ccc',
  //   borderRadius: '8px',
  //   backgroundColor: '#f9f9f9',
  // },
  profileDetails: {
    marginBottom: '20px',
  },
  formGroup: {
    margin: '15px 0',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  profileImage: {
    borderRadius: '8px',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    border: '1px solid #ccc',
  },
};

export default Profile;
