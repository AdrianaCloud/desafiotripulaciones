import React from "react";



const ProtectedRoutes = ({ component, logged }) => {

    return (
        logged ? component : <div><span>Please log in first</span></div>
    )


};

export default ProtectedRoutes;