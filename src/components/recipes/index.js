import { connect } from 'react-redux';
import { Recipes } from './recipes';
import actions from 'src/actions';

const { getRecipesList } = actions;

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.list
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
