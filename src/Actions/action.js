import axios from "axios";
import { FETCH_DATA, PARTICULAR_DATA, EDIT_DATA } from "./actionTypes";
export const getDataFromAPI = () => async (dispatch) => {
  const { data } = await axios.get(
    `https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json`
  );
  dispatch({
    type: FETCH_DATA,
    payload: data
  });
};
export const singleDataChart = (id) => ({
  type: PARTICULAR_DATA,
  payload: id
});

export const editDataChart = (id) => ({
  type: EDIT_DATA,
  payload: id
});
// // Get Particular user
// export const singleUser = (id) => (dispatch) => {
//   dispatch({
//     type: PARTICULAR_USER,
//     payload: id,
//   });
// };

// // Add the candidate to reject list
// export const rejectUser = (data) => (dispatch) => {
//   dispatch({
//     type: ADD_REJECT,
//     payload: data,
//   });
// };

// // Remove the candidate from Rejection list
// export const removeRejectUser = (id) => (dispatch) => {
//   dispatch({
//     type: REMOVE_REJECT,
//     payload: id,
//   });
// };

// // Add the candidate to Shortlisted list
// export const addShortlist = (data) => (dispatch) => {
//   dispatch({
//     type: ADD_SHORTLIST,
//     payload: data,
//   });
// };

// // Remove the candidate from Shortlisted list
// export const removeShortlist = (id) => (dispatch) => {
//   dispatch({
//     type: REMOVE_SHORTLIST,
//     payload: id,
//   });
// };

// export const searchUser = (text) => ({
//   type: SEARCH_USER,
//   payload: text,
// });
