import { useState } from "react";
import { AuthCredentials } from "../Services/AuthorizationService";

const useLogin = () => {
    const [user, setUser] = useState({
        email: "",
        pass: ""
    });
    const [authorizeConfirmation, setAuthorizateConfirmation] = useState("")
    const [payload, setPayload] = useState({});

    const sendAuthorization = async (data) => {
        try {
            const payloadResponse = await AuthCredentials(data);
            if (payloadResponse.data !== null) {
                await setPayload(payloadResponse.data);
                console.log("response from authorization", payload);
                
                switch (payload.auth_Key) {
                    case "ADMIN_USER":
                        await setAuthorizateConfirmation("AUTHORIZED");
                        await localStorage.setItem("sessionPayload", JSON.stringify(payload.payload));
                        await localStorage.setItem("IsCurrentSession", authorizeConfirmation);
                        break;

                    default:
                        console.error("ERROR ON THE REQUEST");
                        
                        break;
                }
            } else {
                switch (payload.auth_Key) {
                    case "UNAUTHORIZED":
                        localStorage.removeItem("sessionPayload");
                        localStorage.setItem("IsCurrentSession", false);
                        alert("bad")
                        break;
                }
            }


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
        authorizeConfirmation,
        payload,
        saveCredentials,
        sendAuthorization
    };
};

export default useLogin;
