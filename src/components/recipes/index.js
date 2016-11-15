import { connect } from 'react-redux';
import { getRecipesList } from 'src/actions';
import { Recipes } from './recipes';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipesLoad: (recipes) => {
      dispatch(getRecipesList(recipes));
    }
  };
};

const RecipesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);

export default RecipesContainer;
