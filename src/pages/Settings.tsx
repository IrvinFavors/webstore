import React from "react";
import { UserAuth } from "../context/AuthContext";
import { User } from "firebase/auth";
import "./Account.css";

interface AuthContextType {
    user: User;
}

export const Settings = () => {
    const { user } = UserAuth() as AuthContextType;
    console.log(user);
    return <div>Settings</div>;
};
