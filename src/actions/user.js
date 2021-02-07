import { SET_USER_PURCHASES } from "./types";
export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        title: "Purchase one",
        amount: 9,
      },
      {
        _id: 1,
        title: "Purchase two",
        amount: 19.52,
      },
    ],
  };
}
