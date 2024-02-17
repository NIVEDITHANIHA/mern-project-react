import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { ophiztaskLogin, ophiztaskRegister } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Authentication = ({ register }) => {
    /* use For Navigation */
    const navigate = useNavigate()
    const registrationForm = register
    console.log(registrationForm);

    const [registerOphiz, setRegisterOphiz] = useState({
        username: "",
        email: "",
        password: ""
    })

    console.log(registerOphiz);

    const handleRegister = async (e) => {

        e.preventDefault();

        const { username, email, password } = registerOphiz



        if (!username || !email || !password) {
            toast.info("fill the form");

        }
        else {

            const results = await ophiztaskRegister(registerOphiz)
            if (results.status === 200) {

                toast.success(`${username} Registerd  Succesfully`)
                navigate("/login")
                setRegisterOphiz({
                    username: "",
                    email: "",
                    password: "",
                })

            } else {
                toast.error(results.request.response);

            }
        }
    }


    const handleLogin = async (e) => {

        e.preventDefault();
        const { email, password } = registerOphiz
        if (!email || !password) {
            toast.info("Fill the Form");

        }

        else {
            const resultsLogin = await ophiztaskLogin(registerOphiz)
            if (resultsLogin.status === 200) {


                sessionStorage.setItem("existedUser", JSON.stringify(resultsLogin.data.existedUser))
                sessionStorage.setItem("token", resultsLogin.data.token)

                toast.success(`${email} Logined Succesfully`)


                navigate("/home")

            } else {
                toast.error(resultsLogin.request.response);

            }

        }
    }

    return (

        <>


            <div className='d-flex w-100 h-100 align-items-center justify-content-center p-md-5'>
                <Row className='d-flex w-100 h-100 align-items-center justify-content-center'>



                    <Col lg={7} md={12} sm={12}>
                        <img className='img-fluid' src="https://th.bing.com/th/id/R.be13ed7918061121f27558e79885740e?rik=KIR%2fp9o9uNJVWQ&riu=http%3a%2f%2fwww.manapaisa.com%2fassets%2fimages%2flogin-image.png&ehk=ws7WkZ5gz1%2f4xW7JmuR5EAd5QCc6GL4B3NWueBfS%2bT8%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </Col>
                    <Col lg={5} md={12} sm={12} className='shadow border p-md-5  rounded' style={{ backgroundColor: "teal" }}>






                        {registrationForm ? <div>
                            <h1 className='text-light text-center'>Sign Up</h1>

                        </div> : <h1 className="text-light text-center">Login</h1>}
                        {registrationForm && <input type="text" placeholder='Name' className='form-control mt-3' value={registerOphiz.username} onChange={(e) => setRegisterOphiz({ ...registerOphiz, username: e.target.value })} />
                        }                        <input type="email" placeholder='Email' className='form-control mt-3' value={registerOphiz.email} onChange={(e) => setRegisterOphiz({ ...registerOphiz, email: e.target.value })} />
                        <input type="password" placeholder='password' className='form-control mt-3' value={registerOphiz.password} onChange={(e) => setRegisterOphiz({ ...registerOphiz, password: e.target.value })} />


                        {registrationForm ? <div className='d-flex w-100 h-100 flex-column'>
                            <button className='btn btn-warning  mt-3 ' onClick={handleRegister} >Register</button>
                            <span className='text-light'> Are you a User?.. Click here to<Link to="/login" className='text-warning'> Login</Link>  </span>

                        </div> : <div className='d-flex w-100 h-100  flex-column'>
                            <button className='btn btn-warning  mt-3' onClick={handleLogin} >Login</button>
                            <span className='text-light'> New User ...? Click Here to<Link to="/register" className='text-warning'> Register</Link>  </span>


                        </div>}



                    </Col>
                </Row>
            </div>
            <ToastContainer autoClose={2000} position={"top-center"} />

        </>
    )
}

export default Authentication