import actions from '../action-types';

const updateMenu = (state, action) => {

  if (state === undefined) {
    return {
      active: false
    }
  }

  switch (action.type) {
    case actions.MENU_TOGGLED:
      return {
        active: !state.menu.active
      }

    default:
      return state.menu;
  }
};

export default updateMenu;