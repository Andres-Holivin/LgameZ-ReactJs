import axios from "axios";

// const API_URL = "https://db-postgree.herokuapp.com";
// const API_URL = "http://127.0.0.1:5000/";

class  AuthService  {
  login =(username, password)=> {
    return axios
      .post(API_URL + "/login", {
        Username:username,
        Password:password
      })
      .then(response => {
          console.log(response);
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data.message;
      });
  }
  logout=()=> {
    localStorage.removeItem("user");
  }

   register=(FullName,Username, Email, Password,Date)=> {
    return axios
      .post(API_URL + "/registration", {
        Name:FullName,
        Username:Username, 
        Email:Email, 
        Password:Password,
        DOB:Date
      }).then(response => {
        console.log(response);
        return response.data.message;
      });
  }

   getCurrentUser=()=> {
    return JSON.parse(localStorage.getItem('user'));;
  }
  getForum= async()=>{
    return await axios.get(API_URL + "/GetAllForum").then(res=>{return res})
  }
  InsertThread=(UserId,Title, Description)=> {
    return axios
      .post(API_URL + "/InsertThread", {
        UserId:UserId,
        Title:Title, 
        Description:Description
      }).then(response => {
        console.log(response);
        return response.data.message;
      });
  }
}

export default new AuthService();