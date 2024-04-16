import { useState } from "react";
import { DeleteLicitacion, GetAllLicitaciones, PostLicitacion, PutLicitacion } from "../Services/TenderServices";

const useTenders = () => {
    //make post and put
    const [tender, setTender] = useState({
        get_id: "",
        tender_name: "",
        tender_description: "",
        tender_client: "",
        tender_client_email: "",
        tender_begin: "",
        tender_end: "",
        tender_budget: 0,
        tender_state: true
    });
    //get list of tenders only
    const [tenderList, setTenderList] = useState([]);
    //save state from call
    const saveTenderState = (infoTender) => {
        setTender(infoTender);
    }

    const createTender = async (infoTender) => {
        try {
            
            const request = await PostLicitacion(infoTender);
            
            return request.data;

        } catch (error) {
            throw error
        }
    }
    const getAllTenders = async () => {
        try {
            const request = await GetAllLicitaciones();
            setTenderList(request.data)
            return tenderList

        } catch (error) {
            throw error
        }
    }
    const updateTender = async () => {
        try {
            const request = await PutLicitacion(tender);
            
            return request.data;
        } catch (error) {
            throw error
        }
    }

    const deleteTender = async (id) => {
        try {
            const request = await DeleteLicitacion(id);
            
            return request.data;
        } catch (error) {
            throw error
        }
    }

    return { tender, tenderList, saveTenderState, createTender, getAllTenders, updateTender, deleteTender }


}

export default useTenders
