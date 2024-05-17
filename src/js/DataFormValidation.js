import * as Yup from "yup";
import Service from "./service.js";
import validaCPF from './Validation/validaCpf.js'
import validaTelefone from './Validation/validaTelefone.js'
import validaCEP from './Validation/validaCep.js'
import validPassword from "./Validation/validPassword.js";

export default class DataFormValidation {

    static personalDataFormValidation() {
        return Yup.object({
            fullName: Yup.string().trim().required('Campo obrigatório.'),
            gender: Yup.string().required('Campo obrigatório.').oneOf(Service.gender, 'Opção inválida'),
            birthdate: Yup.date().required('Campo obrigatório.').max(new Date(), 'Data inválida.'),
            cpf: Yup.string().required('Campo obrigatório.').max(11, 'CPF inválido').matches(/^[\d]+$/, 'Utilize apenas números.').cpf('CPF inválido.'),
            telephone: Yup.string().required('Campo obrigatório.').max(11, 'Telefone inválido.').matches(/^[\d]+$/, 'Utilize apenas números.').telefone('Telefone inválido.')
        })
    }

    static addressFormValidation() {
        return Yup.object({
            address: Yup.array().of(
                Yup.object().shape({
                    residencyType: Yup.string().required('Campo obrigatório.').oneOf(Service.residencyType, 'Opção inválida'),
                    addressType: Yup.string().required('Campo obrigatório.').oneOf(Service.addressType, 'Opção inválida'),
                    cep: Yup.string().required('Campo obrigatório.').max(9, 'CEP inválido.').matches(/^[\d]+$/, 'Utilize apenas números.').cep('CEP inválido'),
                    address: Yup.string().required('Campo obrigatório.'),
                    city: Yup.string().required('Campo obrigatório.'),
                    state: Yup.string().required('Campo obrigatório.'),
                    country: Yup.string().required('Campo obrigatório.'),
                    number: Yup.string().required('Campo obrigatório.')
                })
            )
        });
    }

    static registerFormValidation() {
        return Yup.object({
            email: Yup.string().required('Campo obrigatório.').email('Digite um e-mail válido.'),
            password: Yup.string().required('Campo obrigatório.').min(8, 'Senha deve conter pelo menos 8 caracteres.').password('Senha não atende aos critérios de segurança.'),
            passwordConfirmation: Yup.string().required('Campo obrigatório.').oneOf([Yup.ref('password'), null], 'As senhas não conferem.')
        });
    }
}

//Yup addMethod CPF validation
Yup.addMethod(Yup.string, 'cpf', function (message) {
    return this.test('cpf', message, function (cpf) {
        const { path, createError } = this;
        return !cpf || validaCPF(cpf) || createError({ path, message });
    });
});
//Yup addMethod Telephone validation
Yup.addMethod(Yup.string, 'telefone', function (message) {
    return this.test('telefone', message, function (telephone) {
        const { path, createError } = this;
        return !telephone || validaTelefone(telephone) || createError({ path, message });
    });
});

//Yup addMethod CEP validation
Yup.addMethod(Yup.string, 'cep', function (message) {
    return this.test('cep', message, function (cep) {
        const { path, createError } = this;
        return !cep || validaCEP(cep) || createError({ path, message });
    });
});

//Yup addMethod password validation
Yup.addMethod(Yup.string, 'password', function (message) {
    return this.test('password', message, function (password) {
        const { path, createError } = this;
        return !password || validPassword(password) || createError({ path, message });
    })
})