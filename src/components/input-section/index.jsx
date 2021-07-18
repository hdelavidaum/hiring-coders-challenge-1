import { useCallback, useState } from "react";

import { Input, Button } from "../";
import {Title, InputsWrapper} from './styles'


const InputSection = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
    });
    
    const handleOnChange = useCallback(
    (e) => {
        const {
        target: { name, value },
        } = e;
        setUserData({ ...userData, [name]: value });
    },
    [userData]
    );

    const handleOnClick = () =>
    window.localStorage.setItem("userData", JSON.stringify(userData));
    
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
            <Button label="Inscrever" onClick={handleOnClick} />
        </InputsWrapper>
    )
}

export default InputSection;