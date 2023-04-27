import ClientType from "./ClientType";

class UserModel {
    public id?: number;
    public password?: string;
    public email?: string;
    public clientType: ClientType;
    public name?: string;
    public firstName ?: string;
    public lastName ?: string;


	
    public constructor (clientType: ClientType, id: number, email: string, password:string , name ?: string, firstName ?:string, lastName ?: string){
        this.clientType=clientType;
        this.email=email;
        this.id = id;
        this.password = password;
        if (name) {this.name = name};
        if (firstName) {this.firstName = firstName};
        if (lastName) {this.lastName = lastName};
    }
}

export default UserModel;
