import Register from '../components/authentications';
import React, {useState} from 'react';
import illustration from '../assets/illustration.jpg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Auth() {
  const [isSignup, setSignup] = useState(true);

  const toggleView = () => setSignup((prev) => (!prev));

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{
        borderRadius: '25px', background: "#F1F0EE", }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' 
            className='order-2 order-lg-1 d-flex flex-column 
            justify-content-center align-items-center' 
            style={{height: '80vh', background: "#F1F0EE"}}>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{
                isSignup ? "Sign Up" : "Login"}</p>

              {isSignup ? (
                <>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Your Name' id='form1' type='text' 
                    className='w-100'/>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Your Email' id='form2' type='email'/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Password' id='form3' type='password'/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput label='Repeat your password' id='form4' type='password'/>
                  </div> 
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' 
                  label='Subscribe to our newsletter' />

              </>
              ) : (
                <>
                   <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Your Email' id='form2' type='email'/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Password' id='form3' type='password'/>
                  </div>
                </>
              )}

              <div className='mb-4'>
              </div>
              
              <p className="small text-muted">
                {isSignup ? "Already have an account?" : "Don't have an account?"}
                <a href="#!" onClick={toggleView} className="text-primary ms-1">
                  {isSignup ? "Log in" : "Sign up"}
                </a>
              </p>

              <MDBBtn className='mb-4' size='lg' onClick={Register()}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage style={{borderRadius: "20px"}} src={illustration} fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Auth;
