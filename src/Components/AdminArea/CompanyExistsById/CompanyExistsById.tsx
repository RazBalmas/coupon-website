import { useEffect, useState } from "react";
import "./CompanyExistsById.css";
import adminService from "../../../Service/AdminService";


function CompanyExistsById(): JSX.Element {
     
    const [register, setRegister] = useState<number>();
    const [exists, setExists] = useState<boolean>(false);
        
    async function handleCheckClick () {
        try {
          const answer = await adminService.companyExistsById(register);
          setExists(answer);
          alert("Yes!");
        } catch (error: any) {
          console.log(error);
          alert("No Company by specified Id");
        }
      };

    

    
    
    return (
        <div className="CompanyExistsById">
			
            <legend>Id</legend>
          
                <input type="number"
                value={register}
                 onChange={(e) => setRegister(Number(e.target.value))}
                />
                <button type="submit" onClick={handleCheckClick}>Check</button>
         

                <span>{exists}</span>
        </div>
    );
}

export default CompanyExistsById;