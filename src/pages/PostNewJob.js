import React from "react";
export default function PostNewJob() {
  return (
    <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
      <div className="form_container rounded bg-white w-80 my-1 p-1">
        <div className="row">
          <div className="d-flex justify-content-center border">
            <h5 className="text-center mb-1 my-1 ">Post New Job</h5>
          </div>

          <div className="border">
            <div className=" d-flex my-1 p-1 row">
              <label htmlFor="companyName" className="col-4 text-end ">
                <strong>Job Title:</strong>
              </label>
              <input
                type="text"
                className="col-6"
                placeholder="Enter Company name"
              />
            </div>

            <div className="form-group d-flex p-1 my-1 row">
              <label htmlFor="degree" className="col-4 text-end form-label">
                <strong>Degree:</strong>
              </label>
              <select name="select" id="select" className="col-6">
                <option value="0">MCA</option>
                <option value="1">MBA</option>
                <option value="2">BCA</option>
                <option value="3">B.Tech</option>
                <option value="4">BA</option>
              </select>
            </div>
            <div className="form-group d-flex p-1 my-1 row">
              <label htmlFor="skill" className="col-4 text-end form-label">
                <strong>Skill:</strong>
              </label>
              <select name="select" id="select" className="col-6">
                <option value="0" className="form-control">
                  ASP.Net
                </option>
                <option value="1" className="form-control">
                  Angular
                </option>
                <option value="2" className="form-control">
                  React Js
                </option>
                <option value="3" className="form-control">
                  .Net
                </option>
                <option value="4" className="form-control">
                  Java
                </option>
              </select>
            </div>
            <div className="form-group d-flex p-1 my-1 row">
              <label htmlFor="salary" className="col-4 text-end form-label">
                <strong>Salary:</strong>
              </label>
              <input
                type="text"
                className="col-6"
                placeholder="Enter Pinecode"
              />
            </div>
            <div className="form-group d-flex p-1 my-1 row">
              <label htmlFor="exprience" className=" col-4 text-end form-label">
                <strong>Exprience:</strong>
              </label>
              <select name="select" id="select" className="col-6">
                <option value="0">0</option>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
              </select>
            </div>
            <div className="form-group d-flex p-1 my-1 row">
              <label htmlFor="vacancy" className="form-label col-4 text-end">
                <strong>No.vacancy:</strong>
              </label>
              <input type="text" className="col-6" />
            </div>

            <div className="text-center mb-2">
              <button type="submit" className="btn btn-success mt-3">
                Post Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
