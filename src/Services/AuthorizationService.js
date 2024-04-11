import { API_BASE, endpointsBase } from "../Utils/Endpoints";
import axios from "axios";
export const AuthCredentials = (credentials) => {
    
    try {
        console.log("auth api call");
        const requestAuthorize = axios({
            method: 'POST',
            url: API_BASE + endpointsBase.login,
            headers: {
                "Content-Type": "application/json",
            },
            
            data: {
                email: credentials?.email,
                pass: credentials?.pass
            }
        })

        return requestAuthorize;


    } catch (error) {
        throw error;
    }


}