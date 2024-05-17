export default function validPassword(password) {
    if(!password) return false;
    if(password.length < 8) return false;
    if(!(/[A-Z]+/.test(password))) return false;
    if(!(/[a-z]+/.test(password))) return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
}