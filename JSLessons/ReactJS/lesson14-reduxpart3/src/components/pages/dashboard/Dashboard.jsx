import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DashboardItem from "./DashboardItem";

const Dashboard = (props) => {
  return (
    <div className="container mt-5">
      <Link to="/add" className="btn btn-primary">Add Blog</Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.value.map((fd, i) => {
           return <DashboardItem count={i+1} {...fd} key={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.myreducer,
  };
};

export default connect(mapStateToProps)(Dashboard);
