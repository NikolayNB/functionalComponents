import { useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp (){

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [promos, setPromos] = useState(true);
    const [news, setNews] = useState(false);

    return (
        <form onSubmit={(e) => e.preventDefault()}>  
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth 
                margin='normal'
                onChange={(e) =>  setName(e.target.value)}
                value={name}
            />
            <TextField 
                id="surname" 
                label="Apellido" 
                variant="outlined" 
                fullWidth 
                margin='normal'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            <TextField 
                id="email" 
                label="Email" 
                variant="outlined" 
                fullWidth 
                margin='normal'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <FormGroup>
                <FormControlLabel 
                    control={
                        <Switch 
                            id="promos" 
                            label="Promociones" 
                            checked={promos} 
                            onchange={(e) => setPromos(e.target.checked)}
                        />} 
                    label="Promociones" 
                />
                <FormControlLabel 
                    control={
                        <Switch 
                            id="news" 
                            label="Novedades" 
                            checked={news}
                            onchange={(e) => setNews(e.target.checked)}
                        />} 
                    label="Novedades" 
                />
            </FormGroup>
            <Button variant='contained' type='submit'>Registrarse</Button>
        </form>
    )
}

export default FormSignUp;