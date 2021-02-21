import Header from "./components/Header/Header";
import CardComponent from "./components/CardComponent/Card";
import {Container, Grid} from "@material-ui/core";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
        <Header />
        <Container>
            <Grid container spacing={3}>
                <Grid item md={4} sm={6} xs={12}>
                    <CardComponent />
                </Grid>

                <Grid item md={4} sm={6} xs={12}>
                    <CardComponent />
                </Grid>

                <Grid item md={4} sm={6} xs={12}>
                    <CardComponent />
                </Grid>

                <Grid item md={4} sm={6} xs={12}>
                    <CardComponent />
                </Grid>

                <Grid item md={4} sm={6} xs={12}>
                    <CardComponent />
                </Grid>
            </Grid>
            <Form />
        </Container>
    </div>
  );
}

export default App;
