import UserModel from "./UserModel";

class CompanyUserModel extends UserModel{
	public name: string;

	public constructor (clientType: ClientTypes, id: number, email: string, password:string, name: string){
        super (clientType, id, email,password);
        this.name = name;
      
    }
}

export default CompanyUserModel;
