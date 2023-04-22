import { Route , Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import CouponDetails from "../../ProductArea/CouponDetails/CouponDetails";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
     <Routes>
        {
        

        <>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/coupon/couponDetails/:id" element={<CouponDetails/>}/>
        </>
        
        
        }
        </Routes>
        </div>
    );
}

export default Routing;
