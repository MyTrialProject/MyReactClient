

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { RecipeCard } from '../../components';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_RECIPES = gql`
  {
    recipes {
      _id
      url
      title
      logo
      owner
      description
      recipe_image
    }
  }
`;


const useStyles = makeStyles((theme) => ({
  card: {
    width: 'auto',
    height: 'auto',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  searchIcon: {
    paddingTop: 5,
    paddingBottom: 5,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

const RecipeContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Query query={GET_RECIPES}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (<Container maxWidth="sm">
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <Typography component="div" style={{ backgroundColor: '#ddd' }}>
                      {data.recipes.map((recipe, index) => (
                        <tr key={index}>
                          
                          <RecipeCard key={index} recipeUrl={recipe.url} recipeTitle={recipe.title} 
                                      recipeDesc={recipe.description} recipeImage={recipe.recipe_image} 
                                      recipeLogo={recipe.logo} recipeOwner={recipe.owner}/>
                        </tr>
                      ))}
                </Typography>
              </Container>)
          }}        
      </Query>
    </React.Fragment>
  )
}

export default RecipeContainer