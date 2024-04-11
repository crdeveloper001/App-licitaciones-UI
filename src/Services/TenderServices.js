import axios from "axios";
import { API_BASE, endpointsBase } from "../Utils/Endpoints";
export const GetAllLicitaciones = () => {

    try {
        const apiRequest = axios({
            url: API_BASE + endpointsBase.Tender.Read,
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },

        })

        return apiRequest;
    } catch (error) {
        throw error
    }

}

export const PostLicitacion = (information) => {

    try {
        
        const apiRequest = axios({
            url: API_BASE + endpointsBase.Tender.Create,
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                get_id: "",
                tender_name: information.tender_name,
                tender_description: information.tender_description,
                tender_client: information.tender_client,
                tender_client_email: information.tender_client_email,
                tender_begin: information.tender_begin,
                tender_end: information.tender_end,
                tender_budget: information.tender_budget,
                tender_state: information.tender_state
            }

        })

        return apiRequest;
    } catch (error) {
        throw error
    }

}

export const PutLicitacion = (information) => {
    try {
        const apiRequest = axios({
            url: API_BASE + endpointsBase.Tender.Update,
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                get_id: information.get_id,
                tender_name: information.tender_name,
                tender_description: information.tender_description,
                tender_client: information.tender_client,
                tender_client_email: information.tender_client_email,
                tender_begin: information.tender_begin,
                tender_end: information.tender_end,
                tender_budget: information.tender_budget,
                tender_state: information.tender_state
            }

        })

        return apiRequest;
    } catch (error) {
        throw error
    }
}

export const DeleteLicitacion = (id) =>{

   try {
    const apiRequest = axios({
        url:API_BASE+endpointsBase.Tender.Delete + id,
        method:'DELETE'
    })

    return apiRequest;
    
   } catch (error) {
    throw error
   }
}