import React from "react";
import Drink from "./Drink/Drink";
import "./ListDrink.css";

export default function ListDrink() {
    return (
        <div className="container mx-auto">
            <div className="ListDrink">
                <Drink />
                <Drink />
                <Drink />
                <Drink />
            </div>
        </div>
    );
}
