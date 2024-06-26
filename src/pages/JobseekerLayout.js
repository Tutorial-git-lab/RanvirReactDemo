import React from "react";
import FindJob from "./FindJob";
import JobMatch from "./JobMatch";
import AppliedJob from "./AppliedJob";
import ChangePassword from "./Change Password";
import Logout from "./Logout";
import MyInbox from "./MyInbox";
import Sent from "./Sent";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import JobSeekerAccount from "./JobSeekerAccount";

const JobseekerLayout = () => {
  const [activeKey, setActiveKey] = useState("changepassword");
  const renderComponent = () => {
    switch (activeKey) {
      case "findjob":
        return <FindJob />;
      case "jobseekeraccount":
        return <JobSeekerAccount />;
      case "jobmatch":
        return <JobMatch />;
      case "appliedjob":
        return <AppliedJob />;
      case "changepassword":
        return <ChangePassword />;
      case "myinbox":
        return <MyInbox />;
      case "sent":
        return <Sent />;
      case "logout":
        return <Logout />;
      default:
        break;
    }
  };
  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="findjob">Find Job</Link>
    //         <Link to="jobseekeraccount">My Account</Link>
    //         <Link to="jobmatch">Job Match</Link>
    //         <Link to="appliedjob">Applied Job</Link>
    //         <Link to="changepassword">Change Password</Link>
    //         <Link to="myinbox">My Inbox</Link>
    //         <Link to="sent">Sent</Link>
    //         <Link to="logout">Logout</Link>
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
                <div className="col-3 d-flex-col bg-white ">
                  <div className="text-center my-1 ">
                    <h6>Welcome Anil</h6>
                  </div>
                  <div className="container text-center">
                    <img
                      className="img-fluid"
                      src="My-self Photo (2).jpg"
                      alt=""
                      width="100px"
                      height="100px"
                    />
                  </div>

                  <div className="container-fluid">
                    <div class="input-group">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="inputGroupFileAddon04"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                  <div className="my-1 ">
                    <div
                      className={`text-center my-2  ${
                        activeKey === "myAccount" ? "bg-info" : ""
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("findjob")}>
                        Find Job
                      </a>
                    </div>
                    <div
                      className={`text-center my-2  ${
                        activeKey === "jobseekeraccount" ? "bg-warning" : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("jobseekeraccount")}
                      >
                        My Account
                      </a>
                    </div>
                    <div className="text-center my-2 ">
                      <a href="#" onClick={() => setActiveKey("jobmatch")}>
                        Job Matches
                      </a>
                    </div>
                    <div className="text-center my-2 ">
                      <a href="#" onClick={() => setActiveKey("appliedjob")}>
                        Applied Job
                      </a>
                    </div>

                    <div
                      className={`text-center my-2  ${
                        activeKey === "changepassword" ? "bg-warning" : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("changepassword")}
                      >
                        Change Password
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex-col ">
                  <div className="row">
                    <div className="container ">
                      <h6 className="text-center my-3">
                        Find Job here within a second!!
                      </h6>
                    </div>
                    <div className="container row">
                      <div className="col-6 d-flex-col my-3">
                        <div className="mb-3">
                          <div className="d-flex">
                            <label htmlFor="name" className="label-control">
                              Name:
                            </label>
                            <input type="text" className="form-control" />
                          </div>

                          <label
                            htmlFor="qualification"
                            className="label-control my-2"
                          >
                            Qualification:
                          </label>
                          <select name="Select" id="">
                            <option value="0">MBA</option>
                            <option value="1">MCA</option>
                            <option value="2">BCA</option>
                            <option value="3">B.Tech</option>
                            <option value="4">B.Com</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 d-flex-col my-3">
                        <div>
                          <label htmlFor="name" className="label-control">
                            Skill:
                          </label>
                          <select name="select" id="select">
                            <option value="0">ASP.Net</option>
                            <option value="1">React Js</option>
                            <option value="2">Angular</option>
                            <option value="3">JavaScript</option>
                            <option value="4">.Net</option>
                          </select>
                          <form class="d-flex my-2 ms-3" role="search">
                            <button class="btn btn-success" type="submit">
                              Search
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="container ">{renderComponent()}</div>
                  </div>
                </div>
                <div className="col-3 d-flex-col bg-white ">
                  <div className="text-center my-2 ">
                    <a href="#" onClick={() => setActiveKey("myinbox")}>
                      My Inbox
                    </a>
                  </div>
                  <div className="text-center my-2 ">
                    <a href="#" onClick={() => setActiveKey("sent")}>
                      My Sent
                    </a>
                  </div>
                  <div className="text-center my-2 ">
                    <a href="/" onClick={() => setActiveKey("/")}>
                      Log Out
                    </a>
                  </div>
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

export default JobseekerLayout;
