import { Form, Formik } from "formik";

import PersonalDataForm from "../Molecules/PersonalDataForm";
import AddressForm from "../Molecules/AddressForm";
import RegisterForm from "../Molecules/RegisterForm";
import DataFormValidation from "../../../js/DataFormValidation";
import React from "react";

const RegistrationForm = () => {
    const combinedSchema = DataFormValidation.personalDataFormValidation()
        .concat(DataFormValidation.addressFormValidation())
        .concat(DataFormValidation.registerFormValidation());

    const addAddressForm = (formik) => {
        let newAddress = {
            residencyType: '',
            addressType: '',
            cep: '',
            address: '',
            number: '',
            extension: '',
            city: '',
            state: '',
            country: ''
        }
        formik.setValues({
            ...formik.values,
            address:[...formik.values.address, newAddress]
        });
    };

    return (
        <>
            <h1 className='text-center'>Cadastre-se agora mesmo</h1>
            <Formik
                initialValues={{
                    fullName: '',
                    gender: '',
                    birthdate: '',
                    cpf: '',
                    telephone: '',

                    address: [{
                        residencyType: '',
                        addressType: '',
                        cep: '',
                        number: '',
                        address: '',
                        extension: '',
                        city: '',
                        state: '',
                        country: '',
                    }],

                    email: '',
                    password: '',
                    passwordConfirmation: ''
                }}

                validationSchema={combinedSchema}

                onSubmit={values => {
                    alert("Formulário válido!")
                }}
            >
                {formik => {
                    return (
                        <Form className='needs-validation' noValidate>
                            <PersonalDataForm
                                formik={formik}
                            />
                            {formik.values.address.map((address, index) => (
                                <React.Fragment key={index}>
                                    <AddressForm
                                        formik={formik}
                                        index={index}
                                    />
                                </React.Fragment>
                            ))}
                            <div className="text-start my-2 py-2">
                                <button className="btn btn-secondary" type='button' onClick={() => addAddressForm(formik)}>Adicionar novo Endereço</button>
                            </div>

                            <RegisterForm
                                formik={formik}
                            />
                            <div className="text-center">
                                <button className="btn btn-primary w-100" type='submit'>Cadastrar</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik >
        </>
    )
}

export default RegistrationForm;