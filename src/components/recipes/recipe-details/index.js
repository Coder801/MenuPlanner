import { connect } from 'react-redux';
import { RecipeDetails } from './recipe-details';
import actions from 'src/actions';

const { getRecipeDetails, clearRecipeSelection } = actions;

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
