import { connect } from 'react-redux';
import { RecipeDetails } from './recipe-details';
import actions from 'src/actions';
import { read, create, update } from 'shared/requests';

const { getRecipeDetails, clearRecipeSelection } = actions;

const mapStateToProps = (state) => {
  return {
    recipe: state.recipes.selectedRecipe
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRecipe: (recipeId) => {
      read(`recipes/${recipeId}`)
        .then(recipe => dispatch(getRecipeDetails(recipe)));
    },
    addToMenu: (recipe) => {
      create('menu/add', recipe)
        .then(recipe => dispatch(getRecipeDetails(recipe)));
    },
    addToFavorites: (recipe) => {
      update(`recipes/${recipe.id}`, recipe)
        .then(recipe => dispatch(getRecipeDetails(recipe)));
    },
    onUnmount: () => {
      dispatch(clearRecipeSelection());
    }
  };
};

const RecipeDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeDetails);

export default RecipeDetailsContainer;
