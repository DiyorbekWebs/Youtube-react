import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../../App.css';

const Contacs = () => {
  const [value, setValue] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => setValue([...response.data.data]));
  }, []);

  return (
    <>
      <ul>
        {value.map((e) => (
          <li className="li" key={e.id}>
            <Link to={`/user/${e.id}`}>{e.first_name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacs;
