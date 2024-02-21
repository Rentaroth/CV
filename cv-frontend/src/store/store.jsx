import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./slices/dataSlice";

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = configureStore(
  {
    reducer: { data: dataReducer },
  },
  composeEnhancers,
);

export { store };
