import React from "react";
export default function JobSeekerAccount() {
  return (
    <>
      <div className="d-flex align-item-center justify-content-center w-90 vh-40 ">
        <div className="form_container rounded bg-white w-90 my-1">
          <div className="row">
            <div className="d-flex justify-content-center border">
              <h5 className="text-center mb-2 my-1 ">My Account</h5>
            </div>

            <div className="col-12 d-flex-col p-1 border">
              <div className="form-group d-flex mb-2 my-3 row">
                <label
                  htmlFor="firstname"
                  className="form-label col-4 text-end"
                >
                  <strong>First Name:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Company's name"
                />
              </div>
              <div className="form-group d-flex mb-2 my-3 row">
                <label htmlFor="lastname" className="form-label col-4 text-end">
                  <strong>Last Name:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Company's name"
                />
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="address" className="form-label col-4 text-end">
                  <strong>Address:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Address"
                />
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="city" className="form-label col-4 text-end">
                  <strong>City:</strong>
                </label>
                <select name="select" id="select" className="col-6 ">
                  <option value="0">Delhi</option>
                  <option value="1">Mumbai</option>
                  <option value="2">Pune</option>
                  <option value="3">Bangluru</option>
                  <option value="4">Mohali</option>
                </select>
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="pincode" className="form-label col-4 text-end">
                  <strong>Pincode:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Pinecode"
                />
              </div>
              <div className="form-group d-flex mb-2 row">
                <label
                  htmlFor="contact person"
                  className="form-label col-4 text-end"
                >
                  <strong>Contact:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Contact Person"
                />
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="mobile" className="form-label col-4 text-end">
                  <strong>Mobile:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Mobile"
                />
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="type" className="form-label col-4 text-end">
                  <strong>Type:</strong>
                </label>
                <select name="select" className="col-6">
                  <option value="0">Software Development</option>
                  <option value="1">DevOps Engineer</option>
                  <option value="2">Database Enginner</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success">
                  Upload Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
