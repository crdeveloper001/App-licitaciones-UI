import { useState } from "react";
import { GetUsers, DeleteUser, PostUser, PutUser } from "../Services/UsersServices";

const useUsers = () => {
    //make post and put
    const [user, setUsers] = useState({
        _id: '',
        user_name: '',
        user_lastname: '',
        user_email: '',
        user_department: '',
        user_manager: '',
        user_account: '',
        user_password: ''
    });
    //get list of tenders only
    const [usersList, setUsersList] = useState([]);
    //save state from call
    const saveUsersState = (infoUsers) => {
        setTender(infoUsers);
    }

    const createUsers = async (infoUsers) => {
        try {
            const request = await PostUser(infoUsers);
            return request.data;

        } catch (error) {
            throw error
        }
    }
    const getAllUsers = async () => {
        try {
            
            const request = await GetUsers();
            console.log(request);
            setUsersList(request.data)
            return usersList

        } catch (error) {
            throw error
        }
    }
    const updateUser = async () => {
        try {
            const request = await PutUser(user);
            return request.data;
        } catch (error) {
            throw error
        }
    }

    const deleteUsers = async (id) => {
        try {
            const request = await DeleteUser(id);

            return request.data;
        } catch (error) {
            throw error
        }
    }

    return { user, usersList, saveUsersState, createUsers, getAllUsers, updateUser, deleteUsers }


}

export default useUsers
