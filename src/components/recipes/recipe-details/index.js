import { connect } from 'react-redux';
import { clearRecipeSelection } from 'src/actions';
import { RecipeDetails } from './recipe-details';

const mapStateToProps = (state) => {
  return {
    recipe: state.recipes.selectedRecipe
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
