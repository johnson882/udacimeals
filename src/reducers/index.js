import{
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

const initialCalendarState = {
  sunday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    monday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    tuesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    wednesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    thursday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    friday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    saturday: {
      breakfast: null,
      lunch: null,
      dinner: null,
  },

}

function calendar (state = initialCalendarState, action){
  const {day, recipe, meal} = action

  switch(action.type){
    case: ADD_RECIPE :
    return {
      ...state,
      [day]: {
        [meal]: recipe.label
      }
    }
    case: REMOVE_FROM_CALENDAR:
    return {
      ...state,
      [day]:{
        ...state[day], // for each day in state change the certain meal to null, removes meal
        [meal]: null,
      }
    }
    defualt: return state

  }
}

export default calendar
