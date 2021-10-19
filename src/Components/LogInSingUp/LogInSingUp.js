import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import FirebaseAuthentication from '../Firebase/Firebase';
import './LogInSIngUp.css'



const LogInSingUp = () => {

    const location = useLocation();
    const redirect = location?.state?.from?.pathname || '/home'
 


    const {errMessage ,logIn, register, setErrrMesssage, setUser, logInWithGitHub, logInWithGoogle}= FirebaseAuthentication();

const logInImageUrl = 'https://image.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg';

const history = useHistory('');



// log in register toggle 

const [toggle, setToogle] = useState(1);

const logInToogleBtn =(number)=>{
    setToogle(number);
}


const [email, setEmail] = useState('');
const [password, setPassWord] = useState('');




const getEmail = (e)=>{
        const emailValue = e.target.value;
        setEmail(emailValue);
}

const getPassword = (e)=>{
    const passwordValue = e.target.value;
    setPassWord(passwordValue);
}



const singIn = ()=>{
    logIn(email, password)
    .then(res=>{
        const user = res.user;
        setUser(user);
        history.push(redirect);
        console.log(user);
    })
    .catch(err=>{
        const errMsg = err.message;
            if (err) {
                setErrrMesssage(errMsg);
                // 'User Not Found'
            }
            console.log(errMsg);
    })
}



const singInwithGoogle =()=>{
    logInWithGoogle()
    .then(result=>{
        const user = result.user;
        setUser(user);
        history.push(redirect)
        console.log(user);
    })
    .catch(err=>{
        const errMsg = err.message;
        setErrrMesssage(errMsg);
        console.log(errMsg);
    })

}



const singInWithGitHub = ()=>{
    logInWithGitHub()
    .then(result=>{
        const user = result.user;
        setUser(user);
        history.push(redirect);
        console.log(user);
    })
    .catch(err=>{
        const errMsg = err.message;
        setErrrMesssage(errMsg);
        console.log(errMsg);
    })
}


const registration =()=>{

    register(email, password);

}









    return (
        <div>

            <div className="loginPageContainer">
                
            <div className="logIn-singUp-container">

            <div className="logIn-image-container">
                <img src={logInImageUrl} alt="" />
            </div>


           
            <div className="logIn-container">
                {errMessage==="Firebase: Error (auth/wrong-password)."?<p className='errorMsg'>Email Or Password Not Valid</p>:null}
                {errMessage==="Firebase: Error (auth/user-not-found)."?<p className='errorMsg'>User Not Found</p>:null}
                {errMessage==="Firebase: Error (auth/email-already-in-use)."?<p className='errorMsg'>Email Already Used</p>:null}
                {errMessage==='Firebase: Password should be at least 6 characters (auth/weak-password).'?<p className='errorMsg'>Password should be at least 6 characters </p>:null}
            {/* <p className='errorMsg'>{errMessage}</p> */}
            <div className="logIn-singUp-header-link">
                
                    <button onClick={()=>logInToogleBtn(1)}>Log In</button>
                    <button onClick={()=>logInToogleBtn(2)}>Register</button>
                




                </div>


                {toggle==1?


                <div className="logIn-form">
                    <h3 className='loginPageHeaderTitle'>Log In</h3>

                <div className="email">
                    <label htmlFor="">Email</label> <br />
                    <input onChange={getEmail} type="email" name="email" id="" placeholder='Email'/>
                </div>
                <div className="password">
                    <label htmlFor="">Password</label> <br />
                    <input onChange={getPassword} type="password" name="password" id="" placeholder='Password'/>
                </div>
                <div className="logIn-btn">
                    <button onClick={singIn}>Log In</button>
                </div>

                </div>:null}




                {toggle==2?

                <div className="register-form">
                    <h3 className='loginPageHeaderTitle'>Register</h3>
                <div className="email">
                    <label htmlFor="">Email</label> <br />
                    <input onChange={getEmail} type="email" name="email" id="" placeholder='Email'/>
                </div>
                <div className="password">
                    <label htmlFor="">Password</label> <br />
                    <input onChange={getPassword}  type="password" name="password" id="" placeholder='Password'/>
                </div>
                <div className="logIn-btn">
                    <button onClick={registration}>Register</button>
                </div>

                </div>:null}


                <h2 className='singInTitle'>Sing In With</h2>
                <div className="google-login-container">
                   
                    <div onClick={singInwithGoogle} className="google-icon">
                        <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" alt="" width='50px'/>
                    </div>
                    <div onClick={singInWithGitHub}
                    className="google-icon">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" width='50px'/>
                    </div>
                </div>



            </div>










            </div>
                    
            </div>
            
        </div>
    );
};

export default LogInSingUp;