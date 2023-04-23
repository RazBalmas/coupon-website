import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import { AuthActionType, authStore } from "../Redux/AuthState";
import appConfig from "../Utils/AppConfig";

class AuthService {

    public async login(credentials: CredentialsModel): Promise<void>{
        
        console.log(credentials);
        const response = await axios.post<string>(appConfig.authUrl + "login/", credentials);
       
        const token = response.data;
        authStore.dispatch({ type: AuthActionType.Login, payload: token});


    } 
    public async register(credentials: CredentialsModel): Promise<void>{
       
        const response = await axios.post<string>(appConfig.authUrl + "register/", credentials);
       
        const token = response.data;
       
        authStore.dispatch({ type: AuthActionType.Login, payload: token});


    } 

    public Logout():void{
        authStore.dispatch({ type: AuthActionType.Logout });
    }
}

const authService = new AuthService();

export default authService;