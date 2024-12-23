import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signin', formData);
      alert('Logged in successfully');
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    
     <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div style={{width:"500px"}} className="card shadow-lg p-4 rounded">
            <h3 className="text-center mb-4">Admin Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={formData.email}
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
                  value={formData.password}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
