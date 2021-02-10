import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}
export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 9,
        orderNumber: "A00SSB233",
        orderDate: new Date().toLocaleDateString(),
        creditCard: "-000",
        user: {
          shippingAddress: "555 Twopiece Street",
          name: "Christine M",
        },
      },

      {
        _id: 1,
        total: 23.77,
        orderNumber: "890SSB233",
        orderDate: new Date().toLocaleDateString(),
        creditCard: "-033",
        user: {
          shippingAddress: "90 Wessone Street",
          name: "Sade T",
        },
      },
      {
        _id: 3,
        total: 22,
        orderNumber: "A00SSCC565",
        orderDate: new Date().toLocaleDateString(),
        creditCard: "-078",
        user: {
          shippingAddress: "879A Boyland Street",
          name: "Jasmine T",
        },
      },
      {
        _id: 4,
        total: 29.44,
        orderNumber: "A00BGH233",
        orderDate: new Date().toLocaleDateString(),
        creditCard: "-030",
        user: {
          shippingAddress: "908 Notchiham ",
          name: "Adrew W",
        },
      },
      {
        _id: 5,
        total: 99.44,
        orderNumber: "A908BGH233",
        orderDate: new Date().toLocaleDateString(),
        creditCard: "-234",
        user: {
          shippingAddress: "57 Layne Ave",
          name: "Lizze R",
        },
      },
      {
        _id: 6,
        total: 98.44,
        orderNumber: "A908BGABH7",
        orderDate: new Date().toLocaleDateString(),
        creditCard: "-786",
        user: {
          shippingAddress: "92 Newlaine",
          name: "Sadey U",
        },
      },
    ],
  };
}
