import Axios from "axios";

const baseURL = 'http://localhost:5000'

const routes = {
            user:'/user',
            login:'/login',
            band:'/roster',
            session:'/session'
                }
const requestTypes = {
    get:Axios.get,
    post:Axios.post,
    delete:Axios.delete,
}
const config = {
        headers:{
            "auth-token":sessionStorage.getItem('auth-token')
        }
    }


/**
 *
 *
 * @returns
 */
function request(){
return{
    get:{
        user:             ()=>requestTypes.get(`${baseURL}${routes.user}/find`,     config),
        bands:            ()=>requestTypes.get(`${baseURL}${routes.band}/`,config),
        sessions:(sessionID)=>requestTypes.get(`${baseURL}${routes.session}/${sessionID}`,config),
    } ,
    add:{
        user      :(user)=>requestTypes.post(`${baseURL}${routes.user}/register`,user,config) ,
        band      :(band)=>requestTypes.post(`${baseURL}${routes.band}/add`,band,config) ,
        session:(session)=>requestTypes.post(`${baseURL}${routes.session}`,session,config) ,
    },
    update:{
        user   :(user)=>requestTypes.post(`${baseURL}${routes.user}/update/${user}`,user,config) ,
        band   :(bandID,band)=>requestTypes.post(`${baseURL}${routes.band}/update/${bandID}`,band, config) ,
        session:(bandID,sessionID,session)=>requestTypes.post(`${baseURL}${routes.session}/update/${bandID}/${sessionID}`,session,config) ,
    },
    delete:{
        user   :(userID)=>requestTypes.delete(`${baseURL}${routes.user}/delete/${userID}`,config) ,
        band   :(bandID)=>requestTypes.delete(`${baseURL}${routes.band}/delete/${bandID}`) ,
        session:(bandID,sessionID)=>requestTypes.delete(`${baseURL}${routes.session}/delete/${bandID}/${sessionID}`,config) ,
    },
    login:(credentials)=>requestTypes.post(`${baseURL}${routes.login}`,credentials),
}
}
const requester = request();
export default requester