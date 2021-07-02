import React from "react";
import "./Header.css";
import HeaderButtonOrder from "./HeaderButtonOrder/HeaderButtonOrder";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
export default function Header() {
    return (
        <div className="header">
            <div className="container align justify-between flex">
                <HeaderLogo />
                <HeaderButtonOrder />
            </div>
        </div>
    );
}
