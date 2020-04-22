import React from "react";
import RoundImage from "react-rounded-image";
import MyAvatar from "../image/avatar.jpg";
import "../index.css";

const name = "Tran Thai Ngoc";
const position = "Developer";

function groupInfo() {
    return (
        <div style={containerStyle}>
            {avatar()}
            {nameTitle()}
        </div>
    );
}

function avatar() {
    return (<div style={avatarStyle}>
        <RoundImage
            imageWidth={150}
            imageHeight={150}
            image={MyAvatar}
            roundedSize={5}
            roundedColor="#ffffff" />
    </div>);
}
function nameTitle() {
    return (<div style={nameStyle}>
        <h3 style={textNameStyle}>{name}</h3>
        <h3 style={textPositionStyle}>{position}</h3>
    </div>);
}


const panelStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    height: 100,
    zIndex: -1,
    backgroundColor: "#99ccff",
};



const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
};

const nameStyle = {
    marginTop: 10,
    marginRight: 40
};


const avatarStyle = {
    marginTop: 15,
    marginLeft: 15
};


const textNameStyle = {
    color: "#ff33ff",
    fontFamily: "font1",
}
const textPositionStyle = {
    color: "#ff33ff",
    fontFamily: "font1"
}


export default () => {
    return (<div>
        <div style={panelStyle} />
        {groupInfo()}
    </div>);
}

