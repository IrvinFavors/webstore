import React from "react";
import "./App.css";
import "./components/Catalog.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Protected from "./components/Protected";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
    return (
        <AuthContextProvider>
            <div className="App">
                <Navbar
                    cartOnClick={() => {
                        console.log("Open Cart");
                    }}
                />
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/account"
                        element={
                            <Protected>
                                <Account />
                            </Protected>
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <Protected>
                                <Admin />
                            </Protected>
                        }
                    />
                </Routes>
            </div>{" "}
        </AuthContextProvider>
    );
}

export default App;
