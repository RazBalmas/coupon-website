import "./Sale.css";

interface SaleProps {
    category: string;
    percent: number;
}
function Sale(props: SaleProps): JSX.Element {
    return (
        <div className="Sale">
			<span>Sale : %{props.percent} on all {props.category} products!</span>
        </div>
    );
}

export default Sale;
