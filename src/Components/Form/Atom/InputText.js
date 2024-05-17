import { ErrorMessage, Field } from "formik";
import React from "react";
import ValidMessage from "./ValidMessage";

const InputText = ({ label, name, type, placeholder, disabled, textHelp, value }) => {
    return (
        <div className="my-1 py-1">
            <label htmlFor={name} className="form-label">{label}</label>
            <Field
                className="form-control"
                type={type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                aria-describedby={label + "Help"}
                value={value}
            />

            <div id={label + "Help"} className="form-text">{textHelp}</div>

            <ErrorMessage name={name}>
                {mensagens => {
                    document.getElementById(name).classList.add("is-invalid");
                    return (
                        <div className="invalid-feedback">{mensagens}</div>
                    );
                }}
            </ErrorMessage>
            <ValidMessage name={name} />
        </div>
    )
}

export default InputText;