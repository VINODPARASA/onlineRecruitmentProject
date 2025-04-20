import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import PostJob from './pages/PostJob';
import ViewJobs from './pages/ViewJobs';
import UserDashboard from './pages/UserDashboard';
// import UpdateApplicationStatus from './pages/UpdateApplicationStatus';
import ViewApplicationsPage from './pages/ViewApplicationsPage';
import UpdateStatusPage from './pages/UpdateStatusPage';
import ViewPostedJobsPage from './pages/ViewPostedJobsPage';
import UpdateJobPage from './pages/UpdateJobPage';
import ViewUserApplications from './pages/ViewUserApplications';
import ApplicationStatus from './pages/ApplicationStatus';
import ScheduleInterviewForm from './pages/ScheduleInterviewForm';

import InterviewList from './pages/InterviewList';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
     <Navbar></Navbar>
     
      <Routes>
      <Route path="/user-login" element={<UserLogin />} /> 
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/" element={<Home/>} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/post-job" element={<PostJob/>} />
      <Route path="/view-jobs" element={<ViewJobs />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
     {/* // <Route path="/update-status" element={<UpdateApplicationStatus/>} /> */}
      <Route path="/view-applications" element={<ViewApplicationsPage />} />
      <Route path="/update-status/:applicationId/:adminId" element={<UpdateStatusPage />} />
      <Route path="/view-posted-jobs" element={<ViewPostedJobsPage />} />
      <Route path="/update-job/:jobId" element={<UpdateJobPage />} />
      <Route path="/view-user-applications" element={<ViewUserApplications />} />
      <Route path="/application-status/:applicationId" element={<ApplicationStatus />} />
      <Route path="/schedule-interview/:applicationId" element={<ScheduleInterviewForm/>} />
      
      <Route path="/view-scheduled-interviews" element={<InterviewList />} />
      <Route path="/profile" element={<Profile />}/>
            
          



  </Routes>
    </Router>
  );
}

export default App;
