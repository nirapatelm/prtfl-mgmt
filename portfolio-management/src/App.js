import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePortfolio from "./components/CreatePortfolio";
import AddAsset from "./components/AddAsset";
import Registration from "./components/Registration";
import Home from "./components/Home";

function App() {
    return (
        <div className="container">
            <header>
                <h1>Portfolio Management</h1>
            </header>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="register" element={<Registration />} />
                    <Route
                        path="create-portfolio"
                        element={<CreatePortfolio />}
                    />
                    <Route path="add-asset" element={<AddAsset />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
