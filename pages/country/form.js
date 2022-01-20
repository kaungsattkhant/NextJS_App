import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { CREATE_COUNTRY } from '../../components/GraphQL/mutations'
import { useMutation } from "@apollo/client";
import { Grid, Button } from "@mui/material";
const Form = () => {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [currency, setCurrency] = useState("");
    const [phone, setPhone] = useState("");
    const [native, setNative] = useState("");
    const [capital, setCapital] = useState(""); 
    const [emoji, setEmoji] = useState("");
    console.log("Name is =" + name);
    console.log("Code is =" + code);

    return (
        <>  
            <Grid p={5}>
                <Grid>
                    <h1>Country Create Form</h1>
                </Grid>
                <Grid container spacing={2} >
                    <Grid
                        item md={6}
                    >
                        <TextField fullWidth label="Name" id="name" onChange={(e) => setName(e.target.value)} size="small" />
                    </Grid>
                    <Grid
                        item md={6}
                    >
                        <TextField fullWidth label="Code" id="code" onChange={(e) => setCode(e.target.value)} size="small" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} pt={5}>
                    <Grid
                        item md={6}
                    >
                        <TextField fullWidth label="Emoji" id="emoji" onChange={(e) => setEmoji(e.target.value)} size="small" />
                    </Grid>
                    <Grid
                        md={6} item
                    >
                        <TextField fullWidth label="Phone" id="phone" onChange={(e) => setPhone(e.target.value)} size="small" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} pt={5}>
                    <Grid
                        item md={6}
                    >
                        <TextField fullWidth label="Capital" id="capital" onChange={(e) => setCapital(e.target.value)} size="small" />
                    </Grid>
                    <Grid
                        md={6} item
                    >
                        <TextField fullWidth label="Native" id="native" onChange={(e) => setNative(e.target.value)} size="small" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} pt={5}>
                    <Grid
                        item md={6}
                    >
                        <TextField fullWidth label="Currency" id="currency" onChange={(e) => setCurrency(e.target.value)} size="small" />
                    </Grid>


                </Grid>
                <Grid container spacing={2} pt={5}>
                    <Grid
                        item md={6}
                    >
                        <Button variant="contained" size="medium" color="success">
                            ADD
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}

export default Form;