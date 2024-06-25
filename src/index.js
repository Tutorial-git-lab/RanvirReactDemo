import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import AdminLayout from "./pages/AdminLayout";
import About from "./pages/About";
import Career from "./pages/Career";
import Services from "./pages/Services";
import CompanyLayout from "./pages/CompanyLayout";
import JobseekerLayout from "./pages/JobseekerLayout";
import Header from "./Header";
import Header2 from "./pages/Header2";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobMatch from "./pages/JobMatch";
import ChangePassword from "./pages/Change Password";
import MyInbox from "./pages/MyInbox";
import Sent from "./pages/Sent";
import Logout from "./pages/Logout";
import FindJob from "./pages/FindJob";
import FindCandidates from "./pages/FindCandidates";
import PostNewJob from "./pages/PostNewJob";
import PostedJob from "./pages/PostedJob";
import ProfileMatch from "./pages/ProfileMatch";
import MyAccount from "./pages/MyAccount";
import JobSeekerAccount from "./pages/JobSeekerAccount";
import AppliedJob from "./pages/AppliedJob";
import JobSeekerReport from "./pages/JobSeekerReport";
import CompanyReport from "./pages/CompanyReport";
import FeedBackReport from "./pages/FeedBackReport";

export default function App() {
  return (
    <>
      <div className="container-fluid p-3">
        <BrowserRouter>
          <div className="container-fluid border my-2">
            <div className="row">
              <div className="col-4 d-flex-col">
                <Header />
              </div>
              <div className="col-8 d-flex-col">
                <Header2 />
              </div>
            </div>
          </div>

          <div className="col-12 d-flex-col">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Services />} />
                <Route path="career" element={<Career />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NoPage />} />
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route path="jobseekerreport" element={<JobSeekerReport />} />
                <Route path="companyreport" element={<CompanyReport />} />
                <Route path="feedbackreport" element={<FeedBackReport />} />
                <Route path="logout" element={<Logout />} />
              </Route>

              <Route path="/company" element={<CompanyLayout />}>
                <Route path="findcandidate" element={<FindCandidates />} />
                <Route path="postnewjob" element={<PostNewJob />} />
                <Route path="postedjob" element={<PostedJob />} />
                <Route path="companyaccount" element={<MyAccount />} />
                <Route path="profilematch" element={<ProfileMatch />} />
                <Route path="appliedjob" element={<AppliedJob />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="myinbox" element={<MyInbox />} />
                <Route path="sent" element={<Sent />} />
                <Route path="logout" element={<Logout />} />
              </Route>

              <Route path="/jobseeker" element={<JobseekerLayout />}>
                <Route path="findjob" element={<FindJob />} />
                <Route path="jobseekeraccount" element={<JobSeekerAccount />} />
                <Route path="jobmatch" element={<JobMatch />} />
                <Route path="appliedjob" element={<AppliedJob />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="myinbox" element={<MyInbox />} />
                <Route path="sent" element={<Sent />} />
                <Route path="logout" element={<Logout />} />
              </Route>
            </Routes>
          </div>

          <div className="container border"></div>
        </BrowserRouter>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
