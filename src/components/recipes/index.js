import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Recipes } from './recipes';
import actions from 'src/actions';
import { read } from 'shared/requests';

const { getRecipesList } = actions;

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRecipes: () => {
      read('recipes')
        .then((response) => dispatch(getRecipesList(response)));
    },
    openDetails: (recipeId) => {
      dispatch(push(`/recipes/${recipeId}`));
    }
  };
};

const RecipesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);

export default RecipesContainer;
