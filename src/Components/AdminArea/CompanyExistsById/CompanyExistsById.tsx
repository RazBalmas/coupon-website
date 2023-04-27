import { useEffect, useState } from "react";
import "./CompanyExistsById.css";
import adminService from "../../../Service/AdminService";


function CompanyExistsById(): JSX.Element {
     
    const [register, handleSubmit] = useState<number>();
    const [exists, setExists] = useState<boolean>(false);
    

    
        async function existsById(){
            try{
                const answer = await adminService.companyExistsById(register);
                setExists(answer);
            }
            catch (error : any){
                console.log(error);
                alert("Failed to retrieve data from server")
            }
        }

    
    
    return (
        <div className="CompanyExistsById">
			
            <legend>Id</legend>
          
                <input type="number" value={register}/>
                <button type="submit" onClick={existsById}>Check</button>
         

                <span>{exists}</span>
        </div>
    );
}

export default CompanyExistsById;