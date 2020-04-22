import React from "react";
import "../index.css";

import IconBirthday from "../image/icon_birthday.png"
import IconEmail from "../image/icon_email.png"
import IconAddress from "../image/icon_address.png"
import IconPhone from "../image/icon_phone.png"
import IconSkype from "../image/icon_skype.png"
import IconTelegram from "../image/icon_telegram.png"

const birthday = "07/10/1992"
const email = "ngoc.iahtnart@gmail.com"
const address = "19/5c Dang Thuc Vinh street, Hoc Mon, Ho Chi Minh city"
const phoneNumber = "(+84)949460804"
const skype = "thai_ngoc9999"
const telegram = "(+84)949460804"

const aboutMe = "Blah Blah Blah Blah"

const infoStyle = {
    padding: 10,
    fontFamily: "font1",
    display: "flex",
    flexDirection: "row",
    marginLeft: 10
}

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: 300,
    minWidth: 300,
    flex: 1,
    height: 300
}



export default () => {
    return (
        <div style={containerStyle}>
            <a style={infoStyle}>
                <img src={IconBirthday} width={20} height={20} />
                {" :  "}
                {birthday}
            </a>
            <a style={infoStyle}>
                <img src={IconEmail} width={20} height={20} />
                {" :  "}
                {email}
            </a>
            <a style={infoStyle}>
                <img src={IconPhone} width={20} height={20} />
                {": "}
                {phoneNumber}
            </a>
            <a style={infoStyle}>
                <img src={IconSkype} width={20} height={20} />
                {": "}
                {skype}
            </a>
            <a style={infoStyle}>
                <img src={IconTelegram} width={20} height={20} />
                {": "}
                {telegram}
            </a>
            <a style={infoStyle}>
                <img src={IconAddress} width={20} height={20} />
                {": "}
                {address}
            </a>
        </div>
    );
}



