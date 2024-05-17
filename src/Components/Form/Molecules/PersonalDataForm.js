import Service from "../../../js/service";
import InputSelect from "../Atom/InputSelect";
import InputText from "../Atom/InputText";

const PersonalDataForm = ({ formik }) => {
    return (
        <>
            <h2 className="text-center">Dados Pessoais</h2>
            <div className="row">
                <InputText
                    label="(*) Nome Completo"
                    name="fullName"
                    type="text"
                    textHelp="Digite seu nome completo."
                    value={formik.values.fullName}
                />
            </div>
            <div className="row">
                <div className="col">
                    <InputSelect
                        label="(*) Gênero"
                        name="gender"
                        options={Service.gender}
                        value={formik.values.gender}
                    />
                </div>
                <div className="col">
                    <InputText
                        label="(*) Data de Nascimento"
                        name="birthdate"
                        type="date"
                        value={formik.values.birthdate}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InputText
                        label="(*) CPF"
                        name="cpf"
                        type="text"
                        placeholder="xxx.xxx.xxx-xx"
                        textHelp="Utilize apenas números."
                        value={formik.values.cpf}
                    />
                </div>
                <div className="col">
                    <InputText
                        label="(*) Telefone"
                        name="telephone"
                        type="phone"
                        placeholder="(xx) xxxxx-xxxx"
                        textHelp="Utilize apenas números."
                        value={formik.values.telephone}
                    />
                </div>
            </div>
            <div className="row">
                <p className="text-muted text-start">(*) Preenchimento obrigatório.</p>
            </div>
        </>
    )
}

export default PersonalDataForm;