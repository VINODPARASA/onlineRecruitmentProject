// import React, { useEffect, useState ,useContext} from "react";
// import axios from "axios";
// import { UserContext } from '../Context/UserContext';

// const InterviewList = () => {
//   const { userId, setUserId } = useContext(UserContext);
//   const [interviews, setInterviews] = useState([]);

//   // Fetch interview details for the specific user
//   useEffect(() => {
//     if (!userId) {
//       console.log("UserId is not set.");
//       return;
//     }

//     const fetchInterviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5172/api/Interviewers/user/${userId}/scheduled-interviews`);
//         setInterviews(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching interview data:", error);
//       }
//     };

//     fetchInterviews();
//   }, [userId]);

//   return (
//     <div className="interview-list">
//       {interviews.length === 0 ? (
//         <p>No scheduled interviews found.</p>
//       ) : (
//         interviews.map((interview, index) => (
//           <div className="interview-record" key={index}>
//             <div className="interview-field">
//               <strong>Candidate Application ID:</strong>
//               <span>{interview.candidateApplicationId}</span>
//             </div>
//             <div className="interview-field" style={styles.interviewField}>
//               <strong style={styles.interviewFieldStrong}>Scheduled At:</strong>
//               <span style={styles.interviewFieldSpan}>
//   {new Date(interview.scheduledAt).toLocaleDateString('en-US', { 
//     weekday: 'short', 
//     year: 'numeric', 
//     month: 'short', 
//     day: 'numeric' 
//   })} 
//   {' '}
//   {new Date(interview.scheduledAt).toLocaleTimeString('en-US', { 
//     hour: 'numeric', 
//     minute: 'numeric' 
//   })}
// </span>


//             </div>
//             <div className="interview-field">
//               <strong>Mode:</strong>
//               <span>{interview.mode}</span>
//             </div>
//             <div className="interview-field">
//               <strong>Location/Link:</strong>
//               <span>
//                 <a href={interview.locationOrLink} target="_blank" rel="noopener noreferrer">
//                   {interview.locationOrLink}
//                 </a>
//               </span>
//             </div>
//             <div className="interview-field">
//               <strong>Interviewer:</strong>
//               <span>{interview.interviewerFullName} ({interview.interviewerEmail})</span>
//             </div>
//             <div className="interview-field">
//               <strong>Status:</strong>
//               <span>{interview.status}</span>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// // CSS styles inside the same file using styled-components or plain CSS-in-JS
// const styles = {
//   interviewList: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//     margin: "20px",
//   },
//   interviewRecord: {
//     display: "flex",
//     flexDirection: "column",
//     padding: "15px",
//     border: "2px solid #007bff", // Boundary color
//     borderRadius: "8px", // Rounded corners
//     backgroundColor: "#f9f9f9", // Background color for each record
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Shadow for the card
//   },
//   interviewField: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "10px",
//     padding: "5px 0",
//   },
//   interviewFieldStrong: {
//     color: "#333",
//     fontWeight: "bold",
//   },
//   interviewFieldSpan: {
//     color: "#555",
//   },
//   interviewLink: {
//     color: "#007bff",
//     textDecoration: "none",
//   },
//   interviewLinkHover: {
//     textDecoration: "underline",
//   },
// };

// export default InterviewList;

// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { UserContext } from "../Context/UserContext";

// const InterviewList = () => {
//   const { userId } = useContext(UserContext);
//   const [interviews, setInterviews] = useState([]);

//   useEffect(() => {
//     if (!userId) {
//       console.log("UserId is not set.");
//       return;
//     }

//     const fetchInterviews = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5172/api/Interviewers/user/${userId}/scheduled-interviews`
//         );
//         setInterviews(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching interview data:", error);
//       }
//     };

//     fetchInterviews();
//   }, [userId]);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>My Scheduled Interviews</h2>
//       {interviews.length === 0 ? (
//         <p>No scheduled interviews found.</p>
//       ) : (
//         interviews.map((interview, index) => (
//           <div key={index} style={styles.interviewRecord}>
//             <div style={styles.interviewField}>
//               <strong style={styles.interviewFieldStrong}>Application ID:</strong>
//               <span style={styles.interviewFieldSpan}>{interview.candidateApplicationId}</span>
//             </div>
//             <div style={styles.interviewField}>
//               <strong style={styles.interviewFieldStrong}>Scheduled At:</strong>
//               <span style={styles.interviewFieldSpan}>
//                 {new Date(interview.scheduledAt).toLocaleDateString("en-US", {
//                   weekday: "short",
//                   year: "numeric",
//                   month: "short",
//                   day: "numeric",
//                 })}{" "}
//                 {new Date(interview.scheduledAt).toLocaleTimeString("en-US", {
//                   hour: "numeric",
//                   minute: "numeric",
//                 })}
//               </span>
//             </div>
//             <div style={styles.interviewField}>
//               <strong style={styles.interviewFieldStrong}>Mode:</strong>
//               <span style={styles.interviewFieldSpan}>{interview.mode}</span>
//             </div>
//             <div style={styles.interviewField}>
//               <strong style={styles.interviewFieldStrong}>Location/Link:</strong>
//               <a
//                 href={interview.locationOrLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={styles.interviewLink}
//               >
//                 {interview.locationOrLink}
//               </a>
//             </div>
//             <div style={styles.interviewField}>
//               <strong style={styles.interviewFieldStrong}>Interviewer:</strong>
//               <span style={styles.interviewFieldSpan}>
//                 {interview.interviewerFullName} ({interview.interviewerEmail})
//               </span>
//             </div>
//             <div style={styles.interviewField}>
//               <strong style={styles.interviewFieldStrong}>Status:</strong>
//               <span style={styles.interviewFieldSpan}>{interview.status}</span>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// // Styles
// // const styles = {
// //   container: {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     padding: "40px 20px",
// //     backgroundColor: "#f0f4f8",
// //     minHeight: "100vh",
// //   },
// //   title: {
// //     fontSize: "28px",
// //     marginBottom: "30px",
// //     color: "#333",
// //   },
// //   interviewRecord: {
// //     width: "100%",
// //     maxWidth: "700px",
// //     backgroundColor: "#ffffff",
// //     border: "2px solid #007bff",
// //     borderRadius: "12px",
// //     padding: "20px",
// //     marginBottom: "20px",
// //     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
// //   },
// //   interviewField: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     marginBottom: "12px",
// //     wordBreak: "break-word",
// //   },
// //   interviewFieldStrong: {
// //     fontWeight: "600",
// //     color: "#333",
// //     minWidth: "150px",
// //   },
// //   interviewFieldSpan: {
// //     color: "#555",
// //     flex: 1,
// //     textAlign: "right",
// //   },
// //   interviewLink: {
// //     color: "#007bff",
// //     textDecoration: "none",
// //     wordBreak: "break-word",
// //   },
// // };
// const styles = {
//     container: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "40px 20px",
//       backgroundColor: "#f0f4f8",
//       minHeight: "100vh",
//     },
//     title: {
//       fontSize: "28px",
//       marginBottom: "30px",
//       color: "#333",
//     },
//     interviewRecord: {
//       width: "100%",
//       maxWidth: "700px",
//       backgroundColor: "#ffffff",
//       border: "2px solid #007bff",
//       borderRadius: "12px",
//       padding: "20px",
//       marginBottom: "20px",
//       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//     },
//     interviewField: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "flex-start",
//       marginBottom: "12px",
//       paddingBottom: "8px",
//       borderBottom: "1px solid #cce5ff", // 🌈 blue underline
//     },
//     interviewFieldStrong: {
//       fontWeight: "600",
//       color: "#333",
//       minWidth: "150px",
//     },
//     interviewFieldSpan: {
//       color: "#555",
//       flex: 1,
//       textAlign: "right",
//     },
//     interviewLink: {
//       color: "#007bff",
//       textDecoration: "none",
//       wordBreak: "break-word",
//     },
//   };
  

// export default InterviewList;
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

const InterviewList = () => {
  const { userId } = useContext(UserContext);
  const [interviews, setInterviews] = useState([]);

  const bgColors = [
    "#e3f2fd", // light blue
    "#e8f5e9", // light green
    "#fff3e0", // light orange
    "#fce4ec", // light pink
    "#ede7f6", // light purple
    "#f9fbe7", // light yellow-green
    "#e0f2f1", // teal
    "#f0f4c3", // lime
  ];

  useEffect(() => {
    if (!userId) {
      console.log("UserId is not set.");
      return;
    }

    const fetchInterviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5172/api/Interviewers/user/${userId}/scheduled-interviews`
        );
        setInterviews(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching interview data:", error);
      }
    };

    fetchInterviews();
  }, [userId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Scheduled Interviews</h2>
      {interviews.length === 0 ? (
        <p>No scheduled interviews found.</p>
      ) : (
        interviews.map((interview, index) => (
          <div
            key={index}
            style={{
              ...styles.interviewRecord,
              backgroundColor: bgColors[index % bgColors.length],
            }}
          >
            <div style={styles.interviewField}>
              <strong style={styles.interviewFieldStrong}>Application ID:</strong>
              <span style={styles.interviewFieldSpan}>{interview.candidateApplicationId}</span>
            </div>
            <div style={styles.interviewField}>
              <strong style={styles.interviewFieldStrong}>Scheduled At:</strong>
              <span style={styles.interviewFieldSpan}>
                {new Date(interview.scheduledAt).toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                {new Date(interview.scheduledAt).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
            </div>
            <div style={styles.interviewField}>
              <strong style={styles.interviewFieldStrong}>Mode:</strong>
              <span style={styles.interviewFieldSpan}>{interview.mode}</span>
            </div>
            <div style={styles.interviewField}>
              <strong style={styles.interviewFieldStrong}>Location/Link:</strong>
              <a
                href={interview.locationOrLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.interviewLink}
              >
                {interview.locationOrLink}
              </a>
            </div>
            <div style={styles.interviewField}>
              <strong style={styles.interviewFieldStrong}>Interviewer:</strong>
              <span style={styles.interviewFieldSpan}>
                {interview.interviewerFullName} ({interview.interviewerEmail})
              </span>
            </div>
            <div style={styles.interviewField}>
              <strong style={styles.interviewFieldStrong}>Status:</strong>
              <span style={styles.interviewFieldSpan}>{interview.status}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    marginBottom: "30px",
    color: "#333",
  },
  interviewRecord: {
    width: "100%",
    maxWidth: "700px",
    border: "2px solid #007bff",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  interviewField: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "12px",
    paddingBottom: "8px",
    borderBottom: "1px solid #cce5ff",
  },
  interviewFieldStrong: {
    fontWeight: "600",
    color: "#333",
    minWidth: "150px",
  },
  interviewFieldSpan: {
    color: "#555",
    flex: 1,
    textAlign: "right",
  },
  interviewLink: {
    color: "#007bff",
    textDecoration: "none",
    wordBreak: "break-word",
  },
};

export default InterviewList;

