import styled from "styled-components";

export const HeaderBox = styled.div`
    font-size: 13px;
    padding-left: 180px;
    display: flex;
    flex-direction: row;
    background: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

export const InputStyle = styled.div`
    align-items: center;
`

export const AvasusLogo = styled.img`
    width: 100px;
`

export const PHover = styled.p`
        :hover {
    color: red;
}
`

export const HeaderOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 30px;
    

`

export const LoginButton = styled.button`
    border: 1px solid #707070;
    border-radius: 20px;
    width: 100px;
    margin-right: 10px;
`

export const SignUpButton = styled.button`
    background: #707070;
    border-radius: 20px;
    width: 100px;
`

export const InputHeader = styled.input`
    height: 20px;
    width: 150px;
    background: rgba(112, 112, 112, 0.1);
    border-radius: 20px;
    background-image: url(../../assets/lupa.png);
`