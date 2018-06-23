import React from 'react';
import "./StateCard.css";

const StateCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectFiftyState(props.usState)} className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}>
                <img alt={props.usState} src={props.image} />
            </a>
        </div>
    </div>
);

export default StateCard;