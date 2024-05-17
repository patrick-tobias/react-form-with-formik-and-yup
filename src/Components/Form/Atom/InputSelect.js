import { ErrorMessage, Field } from "formik"
import ValidMessage from "./ValidMessage";

const InputSelect = ({ label, name, options }) => {
    return (
        <div className="my-1 py-1">
            <label htmlFor={name} className="form-label">{label}</label>
            <Field as="select" className="form-select" id={name} name={name}>
                <option defaultValue>Selecione...</option>
                {options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </Field>
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

export default InputSelect