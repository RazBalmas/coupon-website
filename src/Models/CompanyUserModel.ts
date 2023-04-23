import ClientType from "./ClientType";
import UserModel from "./UserModel";

class CompanyUserModel extends UserModel{
	public name: string;
    public clientType: ClientType;
    public password: string;
    public email: string;
    

	public constructor (clientType: ClientType, id: number, password:string, email: string, name: string){
        super (clientType, id, email,password);
        this.name = name;
       
      
    }
}

export default CompanyUserModel;
