import React from "react"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 'auto',
    height: 'auto',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  media: {
    height: 200,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const RecipeCard = ({recipeUrl, recipeTitle, recipeDesc, recipeImage, recipeLogo}) => {
  const classes = useStyles();

  return (
  <Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" alt="SP" src={recipeLogo}>
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={recipeTitle}
      subheader="1d"
    />
    <Link href={recipeUrl} >
      <CardMedia
        className={classes.media}
        image={recipeImage}
        title={recipeTitle}
      />
    </Link>
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {recipeDesc}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>)
}

export default RecipeCard;
