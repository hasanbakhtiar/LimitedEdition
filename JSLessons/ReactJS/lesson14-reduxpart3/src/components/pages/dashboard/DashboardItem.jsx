import React from "react";
import { Link } from "react-router-dom";

const DashboardItem = ({title,desc,count}) => {
  return (
      <tr>
        <th scope="row">{count}</th>
        <td>{title}</td>
        <td>{desc}</td>
        <td><Link className ="btn btn-warning" to="#">Edit</Link></td>
        <td><Link className ="btn btn-danger" to="#">Delete</Link></td>
      </tr>
  );
};

export default DashboardItem;
