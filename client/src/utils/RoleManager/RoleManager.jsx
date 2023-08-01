import React from "react";

const RoleManager = ({ role, allowedRoles, component }) => {

    if (allowedRoles.includes(role)) {
        return component;
    }
    else {
        return <div><span>Unauthorized</span></div>
    }
};

export default RoleManager;
