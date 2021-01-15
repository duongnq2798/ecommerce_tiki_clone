import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  ADD_CART_AFTER,
  ADD_VIEW_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
  DELETE_CART_VIEW,
  DELETE_PRODCUCT_PAURCHASED_LATER,
} from '../actions/index';

const initProduct = {
  numberCart: 0, // numberCart: dùng lưu số lượng sản phẩm đã mua có trong giỏ hàng(Carts)
  Carts: [], // Carts:[] : tạo mảng giỏ hàng đầu tiền là rỗng
  _products: [], // dùng chứa tất cả sản phầm lấy được từ API
  CartAfter: [],
  viewedProducts: [],
};

const ShopApp = (state = initProduct, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        _products: action.payload,
      };
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          url: action.payload.url,
          price: action.payload.price,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            url: action.payload.url,
            price: action.payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    // Add Cart After
    case ADD_CART_AFTER:
      let check = false;
      state.CartAfter.map((item, key) => {
        if (item.id == action.payload.id) {
          state.CartAfter[key].quantity++;
          check = true;
        }
      });
      if (!check) {
        let _cart = {
          id: action.payload.id,
          quantity: action.payload.quantity,
          title: action.payload.title,
          url: action.payload.url,
          price: action.payload.price,
        };
        state.CartAfter.push(_cart);
      }
      return {
        ...state,
      };
    case ADD_VIEW_PRODUCT:
      let checkView = false;
      state.viewedProducts.map((item, key) => {
        if (item.id == action.payload.id) {
          // state.viewedProducts[key].quantity++;
          checkView = true;
        }
      });
      if (!checkView) {
        let _cart = {
          id: action.payload.id,
          title: action.payload.title,
          url: action.payload.url,
          price: action.payload.price,
        };
        state.viewedProducts.push(_cart);
      }
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id != state.Carts[action.payload].id;
        }),
      };
    case DELETE_CART_VIEW:
      return {
        ...state,
        viewedProducts: state.Carts.filter((item) => {
          return item.id != state.viewedProducts[action.payload].id;
        }),
      };
    case DELETE_PRODCUCT_PAURCHASED_LATER:
      return {
        ...state,
        CartAfter: state.Carts.filter((item) => {
          return item.id != state.CartAfter[action.payload].id;
        }),
      };
    default:
      return state;
  }
};

export default ShopApp;
