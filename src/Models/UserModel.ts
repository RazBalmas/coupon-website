class UserModel {
    public id: number;
    public email: string;
    public password: string;
    public clientType: string;
	
    public constructor (clientType: ClientTypes, id: number, email: string, password:string){
        this.clientType=clientType;
        this.email=email;
        this.id = id;
        this.password = password;
    }
}

export default UserModel;
