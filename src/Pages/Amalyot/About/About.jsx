import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const About = () => {
  const link = useParams().id;
  const [value, setValue] = React.useState({});
  var navigate=useNavigate();
  React.useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${link}`)
      .then((response) => {
        setValue(response.data.data);
      });
  }, []);

  return (
    <>
      <li className="item">
        <img src={value.avatar} alt="img" />
        <p className="text">{value.first_name}</p>
      </li>
      <button onClick={() => navigate(-1)}>orqaga</button>
    </>
  );
};

export default About;
