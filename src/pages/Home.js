import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ onLogin }) => {
  const nav = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    if (userId === "admin@gmail.com") nav("/admin");
    else if (userId === "company@gmail.com") nav("/company");
    else if (userId === "jobseeker@gmail.com") nav("/jobseeker");
  };

  return (
    <>
      <div className="container-fluid my-0 ">
        <div className="row">
          <div className="col-8 d-flex-col">
            <img
              src="logo/online-job-portal.jpg"
              alt=""
              height={350}
              width={700}
            />
          </div>
          <div className="col-4 d-flex-col my-0">
            <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver ">
              <div className="form_container p-5 rounded bg-dark text-white w-80 my-1">
                <h5 className="text-center mb-2">Login Form</h5>
                <form onSubmit={handleLogin}>
                  <div className="form-group mb-2 ">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className="form-group  mb-2">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input type="checkbox" />
                    <label htmlFor="check">Remember me</label>
                  </div>
                  <div className="row ">
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary mt-3">
                        Login
                      </button>
                    </div>
                    <div className="col-8 ">
                      <p className=" cur d-flex justify-content-center ">
                        <div class="dropdown">
                          <button
                            class="btn btn-primary mt-3"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            SignUp
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="jobseekerregister">
                                JobSeeker Register
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="companyregister">
                                Company Register
                              </a>
                            </li>
                          </ul>
                        </div>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="contianer my-3">
            <div className="container form-control row my-3">
              <div class="input-group">
                <img
                  src="https://static.naukimg.com/s/7/103/i/search.57b43584.svg"
                  alt="searchIcon"
                />
                <input
                  class="col-4 form-control me-2"
                  type="search"
                  placeholder="Enter skills / designations / companies"
                  aria-label="Search"
                />
                <select
                  class="col-4 form-control me-2"
                  type="search"
                  placeholder="Select exprience"
                  aria-label="Search"
                >
                  <option value="0">Select exprience</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                </select>
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Enter location"
                  aria-label="Search"
                />

                <button type="button" class="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
