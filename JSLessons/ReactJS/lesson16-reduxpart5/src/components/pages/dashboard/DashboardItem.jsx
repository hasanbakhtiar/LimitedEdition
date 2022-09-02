import React from "react";
import { Link } from "react-router-dom";

const DashboardItem = ({title,desc,count,id}) => {
  return (
      <tr>
        <th scope="row">{count}</th>
        <td>{title}</td>
        <td>{desc}</td>
        <td><Link className ="btn btn-warning" to={`edit/${id}`}>Edit</Link></td>
      </tr>
  );
};

export default DashboardItem;
