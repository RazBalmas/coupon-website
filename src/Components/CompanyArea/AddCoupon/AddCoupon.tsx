import "./AddCoupon.css";

function AddCoupon(): JSX.Element {


    return (
        <div className="AddCoupon">
			<form action="/api/company/addCoupon" method="POST"></form>
            <input type="number" name="amount" placeholder="Amount"/>

        </div>
    );
}

export default AddCoupon;
