import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import styles from "./styles";

const CardComponent = () => {
    const classes = styles();
    return(
        <Card>
            <CardActionArea>
                <CardMedia className={classes.image} image="https://s3.tproger.ru/uploads/2021/02/brain-icon-cover-icon.png" />
                <CardContent>
                    <Typography variant="h5">First note</Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur culpa cupiditate delectus, dolor dolorum eos fugit ipsa molestias, numquam odit optio porro quibusdam quis saepe temporibus velit veritatis voluptatibus.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};
export default CardComponent;
