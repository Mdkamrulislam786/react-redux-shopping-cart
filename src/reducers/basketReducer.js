import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    choclateCake: {
      name: "Choclate Cake",
      tagName: 'choclateCake',
      price: 220,
      numbers: 0,
      inCart: false,
    },
    birthdayCake: {
      name: "Birthday Cake",
      tagName: 'birthdayCake',
      price: 350,
      numbers: 0,
      inCart: false,
    },
    doughnut: {
      name: "Doughnut",
      tagName: 'doughnut',
      price: 120,
      numbers: 0,
      inCart: false,
    },
    sweets: {
      name: "Sweets",
      tagName: 'sweets',
      price: 100,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload]};
      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers -= 1;
      return {
        ...state,
        cartCost: state.cartCost - state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};
