import { configureStore} from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";
import todoSaga from '../saga/todoSaga'
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware()
export const rootStore = configureStore({
    reducer:{
        todoReducer
    },
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(todoSaga)