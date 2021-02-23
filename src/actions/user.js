import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
} from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}
export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  };
}
export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "JavaScript in the Browser",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
          price: 1.99,
          belongsTo: [0, 1],
          imageUrl: "http://via.placeholder.com/80x80",
        },
        quantity: 2,
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "JavaScript in the Browser",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
          price: 1.99,
          belongsTo: [0, 1],
          imageUrl: "http://via.placeholder.com/80x80",
        },
        quantity: 1,
      },
    ],
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
