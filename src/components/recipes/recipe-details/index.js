import { connect } from 'react-redux';
import { getRecipeDetails, clearRecipeSelection } from 'src/actions';
import { RecipeDetails } from './recipe-details';

const mapStateToProps = (state) => {
  return {
    recipe: state.recipes.selectedRecipe
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipeLoad: (recipe) => {
      dispatch(getRecipeDetails(recipe));
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
