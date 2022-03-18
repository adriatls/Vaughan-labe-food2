import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
        width: 126px;
        height: 65px;
        object-fit: contain;
    }

    form {
        width: 328px;
    }

    input {
        width: 100%;
        margin-bottom: 16px;
    }
`