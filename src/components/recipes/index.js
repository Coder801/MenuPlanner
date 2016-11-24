import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getRecipesList, getRecipeDetails } from 'src/actions';
import { Recipes } from './recipes';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipesLoad: (recipes) => {
      dispatch(getRecipesList(recipes));
    },
    openDetails: (recipeId) => {
      dispatch(getRecipeDetails(recipeId));
      browserHistory.push(`/recipes/${recipeId}`);
    }
  };
};

const RecipesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);

export default RecipesContainer;
