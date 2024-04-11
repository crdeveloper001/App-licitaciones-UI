import { useState } from "react";
import { PostClient,DeleteClient,GetClients,PutClient } from "../Services/ClientsService";

const useClients = () => {
    //make post and put
    const [client, setClient] = useState({
        get_id: "",
        client_name: "",
        client_email: "",
        client_phone: "",
        client_website: "",
        client_state: true
    });
    //get list of clients only
    const [clientsList, setClientList] = useState([]);
    //save state from call
    const saveClientInfo = (infoClient) => {
        setClient(infoClient);
    }

    const createClient = async () => {
        try {
            const request = await PostClient(client);
            console.log(request);
            return request.data;

        } catch (error) {
            throw error
        }
    }
    const getAllClients = async () => {
        try {

            const request = await GetClients();
            setClientList(request.data)
            console.log(request.data);
            return clientsList

        } catch (error) {
            throw error
        }
    }
    const updateClient = async () => {
        try {
            const request = await PutClient(client);
            console.log(request.data);
            return request.data;
        } catch (error) {
            throw error
        }
    }

    const deleteClient = async (id) => {
        try {
            const request = await DeleteClient(id);
            console.log(request.data);
            return request.data;
        } catch (error) {
            throw error
        }
    }

    return { client, clientsList, saveClientInfo, createClient, getAllClients, updateClient, deleteClient }


}

export default useClients
