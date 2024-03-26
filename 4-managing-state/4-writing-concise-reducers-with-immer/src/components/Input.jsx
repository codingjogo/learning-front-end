import React from "react";

const Input = ({ type, value, disabled, onChange }) => {
    return (
        <input
            className="text-2xl"
            type={type}
            value={value}
            disabled={disabled}
            onChange={onChange}
        />
    );
};

export default Input;
