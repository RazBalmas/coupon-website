import ClientType from "./ClientType";
import UserModel from "./UserModel";

class CompanyUserModel extends UserModel{
	public name: string;
    public clientType: ClientType;
    public email: string;
    public password: string;
    

	public constructor (clientType: ClientType, id: number, email: string, password:string, name: string){
        super (clientType, id, email,password, name);
      
       
      
    }
}

export default CompanyUserModel;
