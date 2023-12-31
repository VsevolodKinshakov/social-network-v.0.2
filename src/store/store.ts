import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth"
import { authApi } from "./api/authApi";
import { postApi } from "./api/postApi";


export const store = configureStore({
    reducer: {
        auth,
        [authApi.reducerPath]: authApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        authApi.middleware,
        postApi.middleware,
    ])
})

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;