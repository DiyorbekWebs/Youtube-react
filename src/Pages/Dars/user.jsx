import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const User = () => {
  const id = useParams().id;

  const [value, setValue] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => setValue(response.data.data));
  }, []);
  return (
    <div>
      {value.first_name}
    </div>
  );
};

export default User;
