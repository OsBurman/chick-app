import { SHOW_LOADER, SAVE_SEARCH_TYPE_AND_RESULTS, SHOW_TOAST, REMOVE_TOAST } from "./actionTypes";

export const showLoader = (payload) => {
  return ({
    type: SHOW_LOADER,
    payload,
  })
}

export const saveSearchTypeAndResults = (payload) => {
  return ({
    type: SAVE_SEARCH_TYPE_AND_RESULTS,
    payload,
  })
}

export const showToast = (payload) => {
  return ({
    type: SHOW_TOAST,
    payload,
  })
}

export const removeToast = () => {
  return ({
    type: REMOVE_TOAST,
  })
}