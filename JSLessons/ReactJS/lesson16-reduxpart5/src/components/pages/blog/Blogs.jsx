import React from "react";
import { connect } from "react-redux";
import BlogItem from "./BlogItem";

const BlogsList = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {props.value.map((fd, i) => {
          return <BlogItem   {...fd} key={i} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.myreducer,
  };
};

export default connect(mapStateToProps)(BlogsList);
