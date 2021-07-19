import { TextField, Grid, CardContent, Button, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



const Logincard = (props) => {
    return (
        <div>
            <Grid container justify="center" spacing={7} >
                <Card variant="outlined" className={props.classes.card}>
                    <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
                        <CardContent>
                            <Typography variant="h6" color="primary">
                                Login/SignUp
                                </Typography>
                            <TextField id="email" label="Username" value={props.formData.email} onChange={props.handleChange} /><br></br>
                            <TextField id="password" label="Password" type="password" value={props.formData.password} onChange={props.handleChange} />
                        </CardContent>
                        <Button size="large" color="primary" type="submit" variant="outlined">{props.buttonLabel}</Button>
                    </form>
                </Card>
            </Grid >
        </div >
    )
}

export default Logincard;