import { Outlet } from "react-router-dom";
import JobSeekerReport from "./JobSeekerReport";
import CompanyReport from "./CompanyReport";
import FeedBackReport from "./FeedBackReport";
import Logout from "./Logout";
import { useState } from "react";

const AdminLayout = () => {
  const [activeKey, setActiveKey] = useState("jobseekerreport");

  const renderComponent = () => {
    switch (activeKey) {
      case "jobseekerreport":
        return <JobSeekerReport />;
      case "companyreport":
        return <CompanyReport />;
      case "feedbackreport":
        return <FeedBackReport />;
      case "/":
        return <Logout />;
    }
  };

  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="jobseekerreport">Jobseeker Report</Link>
    //         <Link to="companyreport">Company Report</Link>
    //         <Link to="feedbackreport">Feedback Report</Link>
    //         <Link to="logout">LogOut</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Outlet />
    // </>

    <>
      <div>
        <div className="container-fluid p-3 border">
          <div className="row">
            <div className="container align-item-center justify-content-center w-80 vh-80">
              <div className="row">
                <div className="col-4 d-flex-col bg-white border">
                  <div className="text-center p-2 border">
                    <h5>Welcome Admin</h5>
                  </div>

                  <div className="my-3 border">
                    <div
                      className={`text-center my-0 border ${
                        activeKey === "jobseekerreport" ? "bg-warning" : ""
                      }`}
                    >
                      <div className="my-1 border"></div>
                      <a
                        href="#"
                        onClick={() => setActiveKey("jobseekerreport")}
                      >
                        JobSeeker Report
                      </a>
                    </div>
                    <div className="text-center my-2 border">
                      <a href="#" onClick={() => setActiveKey("companyreport")}>
                        Company Report
                      </a>
                    </div>
                    <div className="text-center my-2 border">
                      <a
                        href="#"
                        onClick={() => setActiveKey("feedbackreport")}
                      >
                        FeedBack Report
                      </a>
                    </div>
                    <div className="text-center my-2 border">
                      <a href="/" onClick={() => setActiveKey("logout")}>
                        LogOut
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-8 d-flex-col border">
                  {renderComponent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
