import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Boton from './Button';



export default function MultilineTextFields() {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        /* width: 100%; */
        align-items: center;
    `
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '90vh' },
            }}
            noValidate
            autoComplete="off"
        >
            <Container>
                <TextField
                    required
                    label="Nombre"
                    type='nombre'
                    hideAsterisk
                />
                <TextField
                    required
                    label="Email"
                    type='email'
                />
                <TextField
                    required
                    // id="outlined-multiline-static"
                    label="Campo texto"
                    multiline
                    rows={8}
                    type='texto'
                />
                <Boton/>
            </Container>
        </Box>
    );
}
