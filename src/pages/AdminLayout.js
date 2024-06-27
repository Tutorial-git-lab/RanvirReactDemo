import { Outlet } from "react-router-dom";
import JobSeekerReport from "./JobSeekerReport";
import CompanyReport from "./CompanyReport";
import FeedBackReport from "./FeedBackReport";
import Logout from "./Logout";
import { useState } from "react";
import AssignRole from "./AssignRole";
import ChangeRole from "./ChangeRole";

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
      case "assignrole":
        return <AssignRole />;
      case "changerole":
        return <ChangeRole />;
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
        <div className="container-fluid p-3 ">
          <div className="row">
            <div className="container align-item-center justify-content-center w-80 vh-80">
              <div className="row">
                <div className="col-4 d-flex-col bg-white ">
                  <div className="text-center p-2 ">
                    <h5>Welcome Admin</h5>
                  </div>

                  <div className=" my-2 p-0">
                    <div
                      className={`text-center my-2 mx-5 ${
                        activeKey === "jobseekerreport" ? "bg-warning" : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("jobseekerreport")}
                      >
                        JobSeeker Report
                      </a>
                    </div>
                    <div className="text-center my-2 ">
                      <a href="#" onClick={() => setActiveKey("companyreport")}>
                        Company Report
                      </a>
                    </div>
                    <div className="text-center my-2 ">
                      <a
                        href="#"
                        onClick={() => setActiveKey("feedbackreport")}
                      >
                        FeedBack Report
                      </a>
                    </div>
                    <div className="text-center my-2 ">
                      <a href="#" onClick={() => setActiveKey("assignrole")}>
                        Assign Role
                      </a>
                    </div>
                    <div className="text-center my-2 ">
                      <a href="#" onClick={() => setActiveKey("changerole")}>
                        Change Role
                      </a>
                    </div>
                    <div className="text-center my-2 ">
                      <a href="/" onClick={() => setActiveKey("logout")}>
                        LogOut
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-8 d-flex-col ">{renderComponent()}</div>
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
