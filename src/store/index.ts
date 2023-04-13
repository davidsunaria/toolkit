import { createStore, createTypedHooks, persist } from "easy-peasy";
import model,{StoreModel} from "../model";

const store = createStore<StoreModel>(persist(model));

export default store;
const typedHooks = createTypedHooks<StoreModel>();

// We export the hooks from our store as they will contain the
// type information on them
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;