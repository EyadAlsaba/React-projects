
import { ACTIONS } from "./context"


function reducer(state, { type, payload }) {

  switch (type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        amount: state.amount + 1,
        total: state.total + parseFloat(payload.price)
      };

    case ACTIONS.DECREMENT:
      return {
        ...state,
        amount: state.amount - 1,
        total: state.total - parseFloat(payload.price)
      }

    case ACTIONS.REMOVE:
      if (payload.amount > 1 && state.cart.length === 1) {
        return {
          cart: [],
          amount: 0,
          total: 0
        }
      } else {
        return {
          amount: state.amount - payload.amount,
          total: state.total - parseFloat(payload.price * payload.amount),
          cart: state.cart.filter((phone) => phone.id !== payload.id)
        }
      }

    case ACTIONS.RESET:
      return {
        amount: 0,
        cart: [],
        total: 0
      }

    case ACTIONS.DISPLAY_ITEMS:
      return {
        loading: payload.loading,
        amount: payload.amount,
        total: payload.total,
        cart: payload.cart
      }

    default:
      return state;
  }
}

export default reducer