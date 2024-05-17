export default function validaCEP(cep) {
    cep = cep.replace(/\D/g, '');
    return (cep.length === 8);
}