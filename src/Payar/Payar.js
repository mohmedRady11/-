import React from "react"

function Payar(props) {
    return (
        <div className="scound-date">
            <p className="payar-name">{props.name}</p>
            <p className="payar-time">{props.time}</p>
        </div>
    )
}
export default Payar;