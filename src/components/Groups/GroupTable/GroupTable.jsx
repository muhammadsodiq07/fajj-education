import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { groupContext } from '../../../store/GroupContext/GroupProvider'

function GroupTable() {
  const { arr, cancelHandler } = useContext(groupContext);
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">GURUH NOMI</th>
            <th scope="col">HISOB HOLATI</th>
            <th scope="col">FAN NOMI</th>
            <th scope="col">TA'LIM SHAKLI</th>
            <th scope="col">TO'LOV MIQDORI</th>
            <th scope="col">O'QITUVCHI</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((item, i) => {
              return (
                <tr key={`z` + i}>
                  <th scope='row'>
                    {i+1}
                  </th>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.status}
                  </td>
                  <td>
                    {item.subject}
                  </td>
                  <td>
                    {item.educationType}
                  </td>
                  <td>
                    <span>UZS </span>
                    {item.payment}
                  </td>
                  <td>
                    {item.teacher}
                  </td>
                  <td className="students__td">
                  <button className="students__error"><i className='bx bxs-error-circle'></i></button>
                  <Link to={`/groups/edit/${item.id}`} className="table-td">
                  <button className="students__edit"><i className="bx bxs-pencil" /></button>
                  </Link>
                  <button  onClick={() => cancelHandler(item.id)} className="students__xbtn"><i className="bx bx-x" /></button>
                </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default GroupTable
