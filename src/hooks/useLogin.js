import { useState } from "react"
const useLogin = () => {

    const  [user, setUser] = useState(null);
    const saveCredentials = (userdata) =>{
        setUser(userdata)
    }
    const authorizationLogin=(credentials) =>{
        if (credentials.email === user.user_email && credentials.pass == user.user_pass) {
            alert("login in")
        }
    }
    return {
        user,
        saveCredentials,
        authorizationLogin
    }

}

export default useLogin;