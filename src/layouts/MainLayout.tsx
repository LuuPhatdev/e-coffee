import React from "react";
import Header from "../components/Header/Header";
import ListDrink from "../components/ListDrink/ListDrink";

export default function MainLayout() {
    return (
        <div className="mainlayout">
            <Header></Header>
            <ListDrink />
        </div>
    );
}
