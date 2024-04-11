import axios from "axios"
import { API_BASE, endpointsBase } from "../Utils/Endpoints"


export const GetClients = () => {
    const apiRequest = axios({
        url: API_BASE + endpointsBase.Clients.Read,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return apiRequest;
}

export const PostClient = (information) => {
    const apiRequest = axios({
        url: API_BASE + endpointsBase.Clients.Create,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            get_id: "",
            client_name: information.client_name,
            client_email: information.client_email,
            client_phone: information.client_phone,
            client_website: information.client_website,
            client_state: information.client_state
        }
    })

    return apiRequest

}

export const PutClient = (information) =>{
    const apiRequest = axios({
        url: API_BASE + endpointsBase.Clients.Update,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            get_id: "",
            client_name: information.client_name,
            client_email: information.client_email,
            client_phone: information.client_phone,
            client_website: information.client_website,
            client_state: information.client_state
        }
    })
}

export const DeleteClient = (id) => {

    try {
        const apiRequest = axios({
            url: API_BASE + endpointsBase.Clients.Delete + id,
            method: 'DELETE'
        })

        return apiRequest;

    } catch (error) {
        throw error
    }
}


