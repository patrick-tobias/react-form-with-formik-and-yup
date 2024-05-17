import { useFormikContext } from 'formik';

const ValidMessage = ({ name }) => {
    const { isValid, touched, errors } = useFormikContext();

    try {
        const campo = document.getElementById(name);
        // eslint-disable-next-line
        if (isValid && Object.keys(touched).length > 1 && Object.keys(errors).length == 0) {
            if (campo.classList.contains("is-invalid")) {
                campo.classList.remove("is-invalid")
            }
            return campo.classList.add("is-valid")
        }
        return null;
    } catch {
        return null;
    }
};

export default ValidMessage;
