import React from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";

const Test = ({ match, location }) => {
  console.dir(match);
  console.dir(location);
  const { data } = useParams();
  //   console.log(data);
  return (
    <div>
      <h3>This is Test page</h3>
      <h4>Params: {data}</h4>
    </div>
  );
};

export default Test;
