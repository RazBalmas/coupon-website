import { useForm } from "react-hook-form";
import "./UploadImage.css";
import companyService from "../../../Service/CompanyService";

function UploadImage(): JSX.Element {
    
    const {register, handleSubmit} = useForm <File>(undefined);
    
   
 

    async function send(file : File) : Promise<string> {
         try {
            
             const imageName = await companyService.uploadImage(file);
             alert("Image was uploaded!")
             
 
             return imageName;
         } catch (err: any) {
             alert("Failed!")
             return "";
         }
    } 
    return (
        <div className="UploadImage">
			
        </div>
    );
}

export default UploadImage;
