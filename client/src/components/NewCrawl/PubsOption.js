import React from "react";

// The Math function component accepts a props argument
const PubsOption = (props) => {
    return <option value={props.name} id={props.id}>{props.name}</option>;
};

export default PubsOption;
