import { useState } from "react";
import { PostClient,DeleteClient,GetClients,PutClient } from "../Services/ClientsService";

const useClients = () => {
    //make post and put
    const [client, setClient] = useState({
        _id: "",
        client_name: "",
        client_email: "",
        client_phone: "",
        client_website: "",
        client_state: ""
    });
    //get list of clients only
    const [clientsList, setClientList] = useState([]);
    //save state from call
    const saveClientInfo = (infoClient) => {
        setClient(infoClient);
    }

    const createClient = async (infoCliente) => {
        try {
            const request = await PostClient(infoCliente);
            
            return request.data;

        } catch (error) {
            throw error
        }
    }
    const getAllClients = async () => {
        try {

            const request = await GetClients();
            setClientList(request.data)
            
            return clientsList

        } catch (error) {
            throw error
        }
    }
    const updateClient = async (infoClient) => {
        

        try {
            const request = await PutClient(infoClient);
            
            return request.data;
        } catch (error) {
            throw error
        }
    }

    const deleteClient = async (id) => {
        
        try {
            const request = await DeleteClient(id);
          
            return request.data;
        } catch (error) {
            throw error
        }
    }

    return { client, clientsList, saveClientInfo, createClient, getAllClients, updateClient, deleteClient }


}

export default useClients
