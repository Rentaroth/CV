import { compose, configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./slices/dataSlice";

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;

const store = configureStore(
  {
    reducer: { data: dataReducer },
  },
  composeAlt,
);

export { store };
