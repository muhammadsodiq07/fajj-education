import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { groupContext } from '../../../store/GroupContext/GroupProvider';
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'

function GroupEdit() {
  const { arr, confirmHandler } = useContext(groupContext);

  let location = useLocation();
  let [id, setId] = useState()
  let [name, setName] = useState();
  let [status, setStatus] = useState();
  let [payment, setPayment] = useState();
  let [subject, setSubject] = useState();
  let [education, setEducation] = useState();
  let [teacher, setTeacher] = useState();

  useEffect(() => {
    arr.map(element => {
      if(+element.id === +location.pathname.split('/').at(-1)){
        setId(element.id)
        setName(element.name);
        setStatus(element.status);
        setPayment(element.payment);
        setSubject(element.subject);
        setEducation(element.educationType);
        setTeacher(element.teacher);
      }
    });
  }, []);

  let smth = [...new Set(arr.map(item => item.teacher))];

  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <div className='student__intro-box d-flex align-items-center justify-content-between'>
            <div className='student__title-box d-flex align-items-center'>
              <h2 className='student__title'>
                Guruh tahrirlash
              </h2>
            </div>
          </div>
          <div className='student-edit'>
            <ul className='student-add__list'>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="subject" 
                    id="subject" 
                    className='student-add__input student-edit__input'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="Fan">
                      Fan
                    </option>
                    <option value="Matematika">
                      Matematika
                    </option>
                    <option value="Ingliz Tili">
                      Ingliz Tili
                    </option>
                  </select>
                  <label htmlFor="subject" className='student-edit__label'>
                    Guruhda o'rgatiladigan fanni tanlang
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="education" 
                    id="education" 
                    className='student-add__input student-edit__input'
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  >
                    <option value="Ta'lim shakli">
                      Ta'lim shakli
                    </option>
                    <option value="Sanoqli">
                      Sanoqli
                    </option>
                    <option value="Oylik">
                      Oylik
                    </option>
                  </select>
                  <label htmlFor="education" className='student-edit__label'>
                    Guruhning ta'lim shaklini tanlang
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="stat" 
                    id="stat" 
                    className='student-add__input student-edit__input'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="holat">
                      Holat
                    </option>
                    <option value="Aktiv">
                      Aktiv
                    </option>
                    <option value="Muzlatilgan">
                      Muzlatilgan
                    </option>
                  </select>
                  <label htmlFor="stat" className='student-edit__label'>
                    Guruh holatini tanlang
                  </label>
                </div>
              </li>
              <li className="student-edit__item">
                <div className='student-add__input-box'>
                  <input 
                    type="text" 
                    name='payment' 
                    className='student-edit__input student-add__input' 
                    required
                    id='payment'
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <label htmlFor="payment" className='student-edit__label'>
                    Har bir o'quvchi uchun to'lov miqdorini kiriting
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="teacher" 
                    id="teacher" 
                    className='student-add__input student-edit__input'
                    value={teacher}
                    onChange={(e) => setTeacher(e.target.value)}
                  >
                    <option value="O'qituvchi">
                      O'qituvchi
                    </option>
                    {
                      smth.map(item => {
                        return (
                          <option value={item}>
                            {item}
                          </option>
                        )
                      })
                    }
                  </select>
                  <label htmlFor="teacher" className='student-edit__label'>
                    Guruhda ta'lim beruvchi o'qituvchini tanlang
                  </label>
                </div>
              </li>
            </ul>
            <div className='student-edit__btns d-flex justify-content-end'>
              <Link to={"/groups"}>
                <button 
                  type="button" 
                  className="btn btn-outline-primary me-3"
                >
                  Bekor qilish
                </button>
              </Link>
              <Link to={"/groups"}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => confirmHandler(id, subject, education, status, payment, teacher)}
                >
                  Saqlash
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupEdit
