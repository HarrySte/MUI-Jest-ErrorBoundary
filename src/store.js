import { createStore } from "redux";
import addReducer from "./reducers/addReducer";

const store = createStore(addReducer);

export default store;