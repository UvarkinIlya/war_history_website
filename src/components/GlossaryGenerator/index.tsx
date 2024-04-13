import React from "react";
import {GlossaryBackend} from "../../backend/glossary";
type genProp = {
    currentGlossary:Array<GlossaryBackend>
    searchTerm:string
}

export const GlossarySearchGenerator = (props:genProp) => {
     function changeColorBlue(e:any) {
        e.target.style.color = '#007bff';
     }

    function changeColorWhite(e:any) {
        e.target.style.color = 'white';
    }

    const searchMap = props.currentGlossary.map(elem => <p style={{
        cursor: 'pointer',
        display: 'block',
        color:'white',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    }} onMouseOver={changeColorBlue} onMouseLeave={changeColorWhite}><a href={`${window.location.href}/${elem.id}`}>{elem.name}</a></p>)
    
    return(
        <>
            {searchMap}
        </>
    );
}