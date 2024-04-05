export const API_BASE = "http://localhost:8080/"

export const endpointsBase ={
    "login": "api/v1/Authorization/LoginCredential", 
    "Tender":{
        "Create":"/api/v1/Tenders/UpdateTender",
        "Read":"/api/v1/Tenders/GetTenders",
        "Update":"/api/v1/Tenders/UpdateTender",
        "Delete":"/api/v1/Tenders/DeleteTender"

    },
    "Users":{
        "Create":"/api/v1/Users/GetAllUsers",
        "Read":"/api/v1/Users/NewUser",
        "Update":"/api/v1/Users/UpdateUser",
        "Delete":"/api/v1/Users/DeleteUser"
    },
    "Clients":{
        "Create":"/api/v1/Clients/GetAllClients",
        "Read":"/api/v1/Clients/NewClient",
        "Update":"/api/v1/Clients/UpdateClient",
        "Delete":"/api/v1/Clients/DeleteClient"
    }
}