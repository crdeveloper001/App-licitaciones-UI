import axios from "axios";
import { API_BASE, endpointsBase } from "../Utils/Endpoints";


export const GetUsers = () => {
    try {
        const apiRequest = axios({
            url: API_BASE + endpointsBase.Users.Read,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return apiRequest
    } catch (error) {
        throw error
    }
}

export const PostUser = (information) => {
    try {
        const apiRequest = axios({
            url: API_BASE + endpointsBase.Users.Create,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                get_id: "",
                user_name: information.user_name,
                user_lastname: information.user_lastname,
                user_email: information.user_email,
                user_department: information.user_department,
                user_manager: information.user_manager,
                user_account: information.user_account,
                user_password: information.user_password
            }
        })

        return apiRequest
    } catch (error) {
        throw error
    }
}

export const PutUser = (information) => {
    try {
        const apiRequest = axios({
            url: API_BASE + endpointsBase.Users.Update,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                get_id: "",
                user_name: information.user_name,
                user_lastname: information.user_lastname,
                user_email: information.user_email,
                user_department: informationuser_department,
                user_manager: information.user_manager,
                user_account: information.user_account,
                user_password: information.user_password
            }
        })

        return apiRequest
    } catch (error) {
        throw error
    }
}
export const DeleteUser = (id) => {

    try {
        const apiRequest = axios({
            url: API_BASE + endpointsBase.Users.Delete + id,
            method: 'DELETE'
        })

        return apiRequest;

    } catch (error) {
        throw error
    }
}