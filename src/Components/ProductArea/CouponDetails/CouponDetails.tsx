import { useParams } from "react-router-dom";
import "./CouponDetails.css";

function CouponDetails(): JSX.Element {
    const params = useParams();
    const id = params.id;
        
    return (
        <div className="CouponDetails">
			

        </div>
    );
}

export default CouponDetails;
