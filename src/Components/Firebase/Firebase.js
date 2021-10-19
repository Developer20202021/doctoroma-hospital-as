import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import firebaseInitialization from "./FirebaseInInitialization";

firebaseInitialization();
const FirebaseAuthentication = ()=>{


    



    const [errMessage, setErrrMesssage] = useState('');

    const [user, setUser] = useState('');

    const history = useHistory();
    

   
    

    const auth = getAuth();


    const register = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .catch(err=>{
            const errMsg = err.message;
            if (err) {
                setErrrMesssage(errMsg)
            }

            console.log(errMsg);
        })

    }



        
    
    const logIn = (email, password)=>{

       return signInWithEmailAndPassword(auth, email, password);
        // .then(result =>{
        //     const user = result.user;
        //     setUser(user);
            
        // })
        // .catch(err=>{
        //     const errMsg = err.message;
        //     if (err) {
        //         setErrrMesssage(errMsg);
        //         // 'User Not Found'
        //     }
        //     console.log(errMsg);
        // })

    }





    const googleProvider = new GoogleAuthProvider();
        const logInWithGoogle = ()=>{

          return  signInWithPopup(auth, googleProvider)
          
        }




        const gitHubProvider = new GithubAuthProvider();
        const logInWithGitHub = ()=>{
           return signInWithPopup(auth, gitHubProvider)
        }
















    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser('');
            history.push('/home');
            
            console.log('log out Successfully Done');
        })
        .catch(err=>{
            console.log(err);
        })
    }



    useEffect(()=>{

        onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user);
               
            }
            else{
                setUser('');
            }
        })   



    },[])






return{
    register,
    logIn,
    logOut,
    errMessage,
    user,
    setErrrMesssage,
    setUser,
    logInWithGoogle,
    logInWithGitHub

}







}

export default FirebaseAuthentication;