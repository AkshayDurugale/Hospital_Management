import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Appointmentdetails = () => {
  const [user, setUser] = useState([]);
  const [puser, setPuser] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/appointment");
    const result = response.data;

    const res = await axios.get("http://localhost:7000/contacts");
    const result1 = res.data;

    setUser(result);
    setPuser(result1);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCheck = (_id) => {
    const updatedUsers = user.map((u) => {
      if (u._id === _id) {
        return { ...u, status: "Checked" };
      }
      return u;
    });

    setUser(updatedUsers);
    axios
      .put(`http://localhost:8000/update/appointment/${_id}`, {
        ...updatedUsers.find((u) => u._id === _id),
      })
      .then(() => {
        alert("Status updated to Checked");
      });
  };

  const getRowStyle = (status) => {
    if (status === "Checked") {
      return { backgroundColor: "green" };
    }
    return {};
  };
  const handleDelete = (_id) => {
    if (window.confirm("Are you sure to delete this data")) {
      axios
        .delete(`http://localhost:8000/delete/appointment/${_id}`)
        .then(() => {
          getData();
        });
    }
  };
  const handleDeleteUser = (_id) => {
    if (window.confirm("Are you sure to delete this data")) {
      axios.delete(`http://localhost:7000/delete/contacts/${_id}`).then(() => {
        getData();
      });
    }
  };

  const handleLogout = () => {
    navigate("/admin");
  };

  return (
    <div>
      <h1>Appointment Details</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Doctor Name</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u, index) => {
              return (
                <tr key={index} style={getRowStyle(u.status)}>
                  <td>{index + 1}</td>
                  <td>{u.fname}</td>
                  <td>{u.gender}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.dname}</td>
                  <td>{u.msg}</td>
                  <td>{u.status || "Pending..."}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleCheck(u._id)}
                    >
                      Mark as Done
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(u._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h1>Contacted Persons</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {puser.map((p, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{p.pname}</td>
                  <td>{p.pemail}</td>
                  <td>{p.ptel}</td>
                  <td>{p.pmsg}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUser(p._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <button className="btn btn-danger w-4" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointmentdetails;
