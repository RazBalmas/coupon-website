import ClientType from "./ClientType";
import UserModel from "./UserModel";

class CustomerUserModel extends UserModel{
	
    public firstName: string;
    public lastName: string;
    
    public constructor (clientType: ClientType, id: number, email: string, password:string, firstName: string, lastName: string){
        super (clientType, id, email,password);
        this.lastName = lastName;
        this.firstName = firstName;
    }
}

export default CustomerUserModel;
