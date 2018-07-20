import React from "react";

const imageStyle = {
    transform: "translate3d(-50%, 479.732px, 0px)",
    opacity: 1,
  }

const Message = props => (
    <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row center">
                    <h5 className="header col s12 light">Please Drink Responsibly</h5>
                </div>
            </div>
        </div>
        <div className="parallax"><img src={props.image} alt={props.alt} style={imageStyle} /></div>
    </div>
);

export default Message;