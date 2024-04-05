import { useState } from "react"
const useLogin = () => {
    const  [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [payload, setPayload] = useState({});

    const saveCredentials = (userdata) =>{
        setUser(userdata)
        console.log("from hook",userdata);
    }
  
    return {
        user,
        saveCredentials
    }

}

export default useLogin;