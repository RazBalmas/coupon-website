import UserModel from "./UserModel";

class AdminUserModel extends UserModel{
	
    public constructor (clientType: ClientTypes, id: number, email: string, password:string){
        super (clientType, id, email,password);
    
    }
}

export default AdminUserModel;
