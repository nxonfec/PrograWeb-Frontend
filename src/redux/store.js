import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// Definir el estado inicial
const initialState = {
    user: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const persistConfig = {
    key: "root",
    storage,
}

// Crea el persistedReducer con persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crea la tienda Redux
const store = createStore(persistedReducer);

// Crea el persistor para persistir el estado en LocalStorage
const persistor = persistStore(store);

export { store, persistor };