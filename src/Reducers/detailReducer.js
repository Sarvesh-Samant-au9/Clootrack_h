import { EDIT_DATA, FETCH_DATA, PARTICULAR_DATA } from "../Actions/actionTypes";
const initialState = {
  isLoading: true,
  isEditedData: [],
  particularData: null,
  fetchDataChart: []
};

const detailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        fetchDataChart: payload,
        isLoading: false
      };
    case PARTICULAR_DATA:
      return {
        ...state,
        particularData: state.fetchDataChart.filter(
          (e, index) => index === payload
        ),
        isLoading: false
      };
    case EDIT_DATA:
      return {
        ...state,
        isEditedData: state.fetchDataChart.filter(
          (e, index) => index === payload
        )
      };
    default:
      return state;
  }
};
export default detailsReducer;
