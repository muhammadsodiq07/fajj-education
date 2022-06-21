import React, { useContext, useEffect, useState } from "react";
import "./LocationTeacher.scss";
import { useLocation } from "react-router-dom";
import { teacherContext } from "../../store/TeacherContext/TeacherProvider";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const LocationTeacher = () => {
  const { arr, confirmHandler } = useContext(teacherContext);
  let location = useLocation();

  let [id, setId] = useState();
  let [name, setName] = useState();
  let [number, setNumber] = useState();
  let [group, setGroup] = useState();
  let [status, setStatus] = useState();
  let [payment, setPayment] = useState();

  useEffect(() => {
    arr.map((element) => {
      if (+element.id === +location.pathname.split("/").at(-1)) {
        setId(element.id);
        setName(element.name);
        setNumber(element.number);
        setGroup(element.group);
        setStatus(element.status);
        setPayment(element.payment);
      }
    });
  }, []);

  return (
    <div className="main d-flex position-relative">
      <Navbar />
      <div className="main__data col-9">
        <Header />
        <div className="student">
          <div className="student__intro-box d-flex align-items-center justify-content-between">
            <div className="student__title-box d-flex align-items-center">
              <h2 className="student__title">O'qituvchini ma'lumoti</h2>
            </div>
          </div>
          <div className="student-edit">
            {arr.map((element) => {
              if (+element.id === +location.pathname.split("/").at(-1)) {
                return (
                  <div
                    key={"c" + element.id}
                    className="student-edit__header d-flex justify-content-between"
                  >
                    <div className="student-edit__left d-flex">
                      <div className="student-edit__img-box">
                        <img
                          src={`https://picsum.photos/id/${+element.id}/80/80`}
                          alt="user"
                        />
                      </div>
                      <div className="student-edit__name-box">
                        <div className="student-edit__name">{element.name}</div>
                        <div className="student-edit__number">
                          {element.number}
                        </div>
                      </div>
                    </div>
                    <div className="student-edit__info">
                      <div className="student-edit__stats">
                        Guruhlar:
                        <span className="student-edit__stats-num">
                          {element.groupNum} ta
                        </span>
                      </div>
                      <div className="student-edit__stats">
                        Jami qoldirilgan darslar:
                        <span className="student-edit__stats-num">0 ta</span>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <ul className="student-edit__list">
              <li className="student-edit__item">
                <div className="student-edit__input-box">
                  <h2>{name}</h2>
                </div>
              </li>
              <li className="student-add__item">
                <div className="student-add__input-box">
                  <p>{status}</p>
                </div>
              </li>
              <li className="student-edit__item">
                <div className="student-edit__input-box">
                  <p>{number}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTeacher;
