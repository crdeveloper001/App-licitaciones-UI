import { useState } from "react";
import { AuthCredentials } from "../Services/AuthorizationService";

const useLogin = () => {
    const [user, setUser] = useState({
        email: "",
        pass: ""
    });
    const [payload, setPayload] = useState({});

    const sendAuthorization = async () => {
        try {
            const payloadResponse = await AuthCredentials(user);
            setPayload(payloadResponse.data);
          
            return payloadResponse.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const saveCredentials = async (userdata) => {
        setUser(userdata);
        
       
    };

    return {
        user,
        payload,
        saveCredentials,
        sendAuthorization
    };
};

export default useLogin;
