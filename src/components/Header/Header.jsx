import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles";

const Header = () => {
    const classes = styles();
    return(
        <div className={classes.container}>
            <AppBar className={classes.appBar} position="static" >
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6">Note Material</Typography>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;
