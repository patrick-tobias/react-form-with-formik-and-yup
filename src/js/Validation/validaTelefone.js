export default function validaTelefone(telephone){
    telephone = telephone.replace(/\D/g, '');
    return (telephone.length === 10 || telephone.length === 11);
}