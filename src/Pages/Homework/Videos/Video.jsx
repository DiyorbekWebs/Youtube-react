import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./vidoe.module.css";
import { logo } from "../../../assets/img";
import request from "../../../config/request";

const Video = () => {
  const id = useParams().id;
  const [value, setValue] = React.useState({});
  React.useEffect(() => {
    request.get(`/photos/${id}`).then((res) => {
      setValue(res.data);
    });
  }, []);
  return (
    <>
      <ul className={style.list}>
        <li className={style.item}>
          <img
            className={style.elementImg}
            src={value.thumbnailUrl}
            alt="img"
          />
          <p className={style.text}>{value.title}</p>
          <div className={style.wrapper}>
            <div className={style.content}>
              <img className={style.chanelImg} src={logo} alt="logo" />
              <div>
                <p className={style.chanelName}>chanelName</p>
                <p className={style.obuna}>Padpischik</p>
              </div>
              <button className={style.btn1}>obuna</button>
            </div>
            <div className={style.btns}>
              <button className={style.btn}>
                <i className="fa-regular fa-thumbs-up"></i>
              </button>
              <button className={style.btn}>Ulashish</button>
              <button className={style.btn}>Klip tayyorlash</button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Video;
