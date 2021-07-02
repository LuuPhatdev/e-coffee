import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function Routes() {
    return (
        <BrowserRouter>
            <MainLayout></MainLayout>
        </BrowserRouter>
    );
}
