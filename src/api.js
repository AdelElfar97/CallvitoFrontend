const API_BASE_ADDRESS = 'http://localhost:8080';

    export default function getUsers() {
       const uri = API_BASE_ADDRESS + "/api/tasks";
       
       return fetch(uri, {
           method: 'GET'
       });
   }
