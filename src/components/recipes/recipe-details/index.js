import { connect } from 'react-redux';
import { RecipeDetails } from './recipe-details';
import actions from 'src/actions';
import { read } from 'shared/requests';

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
