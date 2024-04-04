import { useState } from "react"
const useLogin = (initialState = {"user_email":"","user_pass":""}) => {

    const  [user, setUser] = useState(initialState);

    const makeLogin = () =>{
        if (initialState.user_email === user.user_email && initialState.user_pass === user.user_pass) {
            alert("LOGIN SUCCESS");
            
        }else{
            alert("BAD CREDENTIALS")
        }
    }
    return {
        user,
        makeLogin
    }

}

export default useLogin;