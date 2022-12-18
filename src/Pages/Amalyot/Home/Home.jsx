import axios, { Axios } from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [value, setValue] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setValue(response.data.data);
    });
  }, []);
  return (
    <div className="box">
      <div className="container">
        <ul className="content">
          {value.map((e) => (
            <li className="item" key={e.id}>
              <Link to={"/about/" + e.id}>
                <img src={e.avatar} alt='img'/>
                <p className="text">{e.first_name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
