import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div className="row">
      <div className="card col-12 col-sm-12 col-md-4">
       
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/blogs/1" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>

      <div className="card col-12 col-sm-12 col-md-4">
       
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/blogs/2" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>

      <div className="card col-12 col-sm-12 col-md-4">
       
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/blogs/3" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>

    </div>
  );
};

export default BlogList;
