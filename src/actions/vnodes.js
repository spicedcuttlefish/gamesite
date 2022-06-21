import { FETCH_ALL } from '../constants/actionTypes';

import * as api from "../api";

export const getVNodes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVNodes();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
