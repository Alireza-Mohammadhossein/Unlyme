import React, { useState } from "react";
import fontsize from '../../../assets/images/notepage/Aa.png';




export const CustomToolbarQuill = () => {

    return (
        <div id="toolbar">
            <select className="ql-size">
                <option value='' selected style={{backgroundImage: fontsize}}>sd</option>
                <option value="font-13">13px</option>
                <option value="font-15">15px</option>
                <option value="font-18">18px</option>
                <option value="font-22">22px</option>
            </select>
            <select className="ql-color">
                <option value="red"></option>
                <option value="green"></option>
                <option value="blue"></option>
                <option value="orange"></option>
                <option value="violet"></option>
                <option value="#d0d1d2"></option>
                <option selected></option>
            </select>
            <button className="ql-bold"></button>
            {/* <button className="ql-italic"></button> */}
            {/* <select className="ql-align" />
            <select className="ql-color" />
            <select className="ql-background" />
            <button className="ql-clean" /> */}
        </div>
    )
};