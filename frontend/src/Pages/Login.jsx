import React, { useEffect } from 'react'
import axios from 'axios'
import '../sass/Login.scss'
import Swal from 'sweetalert2'
function Login() {
  const [password, setPassword] = React.useState()
  const [data ,setData] = React.useState()
  const [is, setIs] = React.useState(false)
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
};
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  useEffect(() => {
    axios
      .get('http://localhost:5000/users', config)
      .then(res => {
        setPassword(res.data)
        setIs(true)
      })
      .catch(err => {
        console.log(err);
      })
    //  return ()=>{setIs(false)}
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post('http://localhost:5000/users/login', data, config)
    .then(res => {
        setData(res.data)
        Swal.fire(
          'Yaxshi!',
          "zurrr!",
          'success'
      )
      })
    .catch(err => {
        console.log(err)
        Swal.fire(
          'Xatolik!',
          "Oldin ruyxatdan utilgan!",
          'error'
      )
      })
  }

  return (
    <>
      <div className='container'>
        <div className="row">
          <h1 className='text-center'>Log in</h1>
          <div className="col-xl-3"></div>
          <div className="col-xl-6">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name='email'
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name='password'
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder='password'
                />
              </div>
              <div className='d-flex justify-content-end'>
                <button onClick={(e)=>{handleSubmit(e)}} type="submit" className="mt-4 btn btn-outline-secondary">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <table className="table table-hover mt-5">
        <thead>
          <tr>
            <th className='col'>firstname</th>
            <th className='col'>lastname</th>
            <th className='col'>password</th>
            <th className='col'>email</th>
            <th className='col'>phone</th>
          </tr>
        </thead>
        <tbody>

          {is ?
            password.map(user => {
              return (
                <tr key={user._id}>
                  <td className='col'>{user.firstname}</td>
                  <td className='col'>{user.lastname}</td>
                  <td className='col'>{user.password}</td>
                  <td className='col'>{user.email}</td>
                  <td className='col'>{user.phone}</td>
                </tr>
              )
            })
            : ""
          }

        </tbody>
      </table>
    </>
  )
}

export default Login