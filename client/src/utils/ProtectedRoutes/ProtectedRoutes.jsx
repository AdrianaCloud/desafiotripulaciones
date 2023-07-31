import React from "react";
import Login from '../../components/Main/Home/Login/Login'


const ProtectedRoutes = ({ component, logged }) => {

    return (
        logged ? component : <div className="log-in-first"><span>Please log in first</span><Login /></div>
    )
};

export default ProtectedRoutes;