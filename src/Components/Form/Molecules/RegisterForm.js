import { useState } from "react";
import InputText from "../Atom/InputText";

const RegisterForm = ({ formik }) => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }
    return (
        <>
            <h2 className="text-center"> Cadastro</h2>
            <InputText
                label="(*) E-mail"
                name="email"
                type="email"
                placeholder="exemplo@email.com"
                required={true}
                textHelp=""
                value={formik.values.email}
            />
            <div className="row">
                <div className="col">
                    <InputText
                        label="(*) Senha"
                        name="password"
                        type={passwordVisible ? "text" : "password"}
                        placeholder=""
                        required={true}
                        textHelp="Senha deve conter pelo menos 8 caracteres, letras maiúsculas, minúsculas e caracteres especiais."
                        value={formik.values.password}
                    />
                </div>
                <div className="col-1 d-flex">
                    <button className="btn btn-light" type="button" onClick={togglePasswordVisibility}>
                        <img src={passwordVisible ? "/assets/images/password-visibility.svg" : "/assets/images/password-visibility-off.svg"} alt={passwordVisible ? "Password Visibility Icon" : "Password Visibility-off Icon"} />
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InputText
                        label="(*) Confirmar senha"
                        name="passwordConfirmation"
                        type={passwordVisible ? "text" : "password"}
                        placeholder=""
                        required={true}
                        textHelp="Confirmar senha."
                        value={formik.values.passwordConfirmation}
                    />
                </div>
                <div className="col-1 d-flex">
                    <button className="btn btn-light" type="button" onClick={togglePasswordVisibility}>
                    <img src={passwordVisible ? "/assets/images/password-visibility.svg" : "/assets/images/password-visibility-off.svg"} alt={passwordVisible ? "Password Visibility Icon" : "Password Visibility-off Icon"} />
                    </button>
                </div>
            </div>
            <div className="row">
                <p className="text-muted text-start">(*) Preenchimento obrigatório.</p>
            </div>
        </>
    )
}

export default RegisterForm;