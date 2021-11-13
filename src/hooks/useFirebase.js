import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/firebase.init";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,updateProfile,onAuthStateChanged } from "firebase/auth";

initializeFirebase();
const useFirebae=()=>{
    const [user,setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin,setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email,password,name,history) => {
      setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            //save user to the database
          saveUser(email, name);

            updateProfile(auth.currentUser, {
              displayName: name,
            }).then(() => {
            }).catch((error) => {
              
            });
            history.replace('/');
          })
          .catch((error) => {
           setAuthError(error.message);
            
          })
          .finally(() => setLoading(false));
    }

    //login user

    const loginUser = (email,password,location,history) =>{
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination);
    // Signed in 
    setAuthError('')
  })
  .catch((error) => {
   
    setAuthError(error.message);;
  })
  .finally(() => setLoading(false));
    }

    //Observe user
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              
            } else {
             setUser({})
            }
            setLoading(false)
          });
          return () => unsubscribe;
          
    },[auth])

    useEffect(() =>{
      fetch(`https://polar-harbor-56501.herokuapp.com/user/${user.email}`)
      .then(res=>res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])
    
    const logout = ()=> {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        })
        .finally(() => setLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://polar-harbor-56501.herokuapp.com/users',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    } 

    return{
        user,
        admin,
        loading,
        authError,
        registerUser,
        loginUser,
        logout
    }

}
export default useFirebae;