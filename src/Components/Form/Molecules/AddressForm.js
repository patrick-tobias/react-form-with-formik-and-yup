import { useState } from "react";
import InputSelect from "../Atom/InputSelect";
import InputText from "../Atom/InputText";
import Service from "../../../js/service";

const AddressForm = ({ formik, index }) => {
    function retrieveAddressData(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(addressResponse => {
                setAddressValue(addressResponse.logradouro || '')
                setAddressCityValue(addressResponse.localidade || '')
                setAddressStateValue(addressResponse.uf || '')
                setAddressCountryValue('Brasil')
                updateFormik()
            })
            .catch(error => {
                setAddressValue('')
                setAddressCityValue('')
                setAddressStateValue('')
                setAddressCountryValue('Brasil')
            })
    }

    function updateFormik(){
        formik.values.address[index].address = addressValue;
        formik.values.address[index].city = addressCityValue;
        formik.values.address[index].state = addressStateValue;
        formik.values.address[index].country = addressCountryValue;
    }
    
    const[addressValue, setAddressValue] = useState(formik.values.address[index].address);
    const[addressCityValue, setAddressCityValue] = useState('');
    const[addressStateValue, setAddressStateValue] = useState('');
    const[addressCountryValue, setAddressCountryValue] = useState('');

    if (
        formik.values.address && formik.values.address[index] && formik.values.address[index].cep &&
        formik.touched.address && formik.touched.address[index] && formik.touched.address[index].cep &&
        formik.errors.address?.[index] && !formik.errors.address[index]?.cep
    ) {
        retrieveAddressData(formik.values.address[index].cep);
    }

    return (
        <>
            <h2 className="text-center">Endereço</h2>
            <div className="row">
                <div className="col">
                    <InputSelect
                        label="(*) Tipo de Residência"
                        name={`address[${index}].residencyType`}
                        options={Service.residencyType}
                        value={formik.values.address[index].residencyType}
                    />
                </div>
                <div className="col">
                    <InputSelect
                        label="(*) Tipo de Logradouro"
                        name={`address[${index}].addressType`}
                        options={Service.addressType}
                        value={formik.values.address[index].addressType}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InputText
                        label="(*) CEP"
                        name={`address[${index}].cep`}
                        type="text"
                        placeholder="xxxxx-xxx"
                        textHelp="Utilize apenas números."
                        value={formik.values.address[index].cep}
                    />
                </div>
                <div className="col">
                    <InputText
                        label="(*) Número"
                        name={`address[${index}].number`}
                        type="text"
                        value={formik.values.address[index].number}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <InputText
                        label="(*) Logradouro"
                        name={`address[${index}].address`}
                        type="text"
                        disabled={true}
                        value={addressValue}
                    />
                </div>
                <div className="col">
                    <InputText
                        label="Complemento"
                        name={`address[${index}].extension`}
                        type="text"
                        value={formik.values.address[index].extension}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InputText
                        label="(*) Cidade"
                        name={`address[${index}].city`}
                        type="text"
                        disabled={true}
                        value={addressCityValue}
                    />
                </div>
                <div className="col">
                    <InputText
                        label="(*) Estado"
                        name={`address[${index}].state`}
                        type="text"
                        disabled={true}
                        value={addressStateValue}
                    />
                </div>
                <div className="col">
                    <InputText
                        label="(*) País"
                        name={`address[${index}].country`}
                        type="text"
                        disabled={true}
                        value={addressCountryValue}
                    />
                </div>
            </div>
            <div className="row">
                <p className="text-muted text-start">(*) Preenchimento obrigatório.</p>
            </div>
        </>
    )
}

export default AddressForm;