import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function AdminSingup() {

  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "user", 
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        ...formdata,
      });
      alert("Registration complete: " + response.data);
      navigate("/login")
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data
          : "An error occurred. Please try again.";
      alert(errorMessage);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div style={{width:"500px"}} className="card shadow-lg p-4 rounded">
            <h3 className="text-center mb-4">User Signup</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter First Name"
                  onChange={handleChange}
                  value={formdata.firstname}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  value={formdata.lastname}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  value={formdata.email}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  value={formdata.password}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Role</label>
                <div>
                  <input
                    type="radio"
                    id="user"
                    name="role"
                    value="user"
                    checked={formdata.role === "user"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="user" className="form-check-label ms-2">
                    User
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="admin"
                    name="role"
                    value="admin"
                    checked={formdata.role === "admin"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="admin" className="form-check-label ms-2">
                    Admin
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
              <p>If you are already register then click this link <span><Link to={"/login"}>Login</Link></span></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSingup;
