import { useCallback, useState } from "react";

import { Input, Button, Loader } from "../";
import { Title, InputsWrapper } from './styles'


const InputSection = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
    });
    const [sending, setSending] = useState(false)
    
    const handleOnChange = useCallback(
    (e) => {
        const {
        target: { name, value },
        } = e;
        setUserData({ ...userData, [name]: value });
    },
    [userData]
    );

    const handleOnClick = () => {
        setSending(true)
        
        window.localStorage.setItem("userData", JSON.stringify(userData))
        
        setTimeout(() => {
            setUserData({name: "", email: ""})
            setSending(false)
        }, 1500)
    };
    
    return (
        <InputsWrapper>
            <Title>Inscreva-se em nossa newsletter e confira as ofertas em primeira  mão!</Title>
            <Input
            label="Nome"
            placeholder="Nome"
            type="text"
            name="name"
            onChange={handleOnChange}
            value={userData.name}
            />
            <Input
            label="E-mail"
            placeholder="email@provedor.com"
            type="email"
            name="email"
            onChange={handleOnChange}
            value={userData.email}
            />
            {!sending ? <Button label="Enviar" onClick={handleOnClick} disabled={!!!userData.name || !!!userData.email}/> : <Loader /> }
        </InputsWrapper>
    )
}

export default InputSection;