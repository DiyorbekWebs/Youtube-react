import axios from "axios";
import React from "react";
import style from "./home.module.css";
import { logo } from "../../../assets/img";
import { Link } from "react-router-dom";
const Home = () => {
  var [valu, setValu] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((e) => setValu([...e.data.slice(0, 12)]));
  }, []);
  return (
    <>
      <ul className={style.list}>
        {valu.map((item) => (
          <Link to={`/video/${item.id}`} key={item.id}>
            <li className={style.item}>
              <img
                className={style.elementImg}
                src={item.thumbnailUrl}
                alt="img"
              />
              <div className={style.content}>
                <img className={style.chanelImg} src={logo} alt="" />
                <p className={style.text}>{item.title}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
