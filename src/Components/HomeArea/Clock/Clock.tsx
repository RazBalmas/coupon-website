import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {

    const [time, setTime] = useState<string>(new Date().toTimeString().substring(0,5));

    useEffect(()=>{
        
        const timerId = setInterval(()=>{
            setTime(new Date().toTimeString().substring(0,5));
        } , 1000);

        return ()=>{
            clearInterval(timerId);
        };

    }, []);

    return (
        <div className="Clock">
			<span>{time}</span>
        </div>
    );
}

export default Clock;
