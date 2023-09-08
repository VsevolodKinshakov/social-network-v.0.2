import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../../utils/baseUrl";

interface NewPostPayload {
  user_id: string;
  main_text: string;
  photo_file: string;
}

interface ChangeUserPostPayload {
  
}

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    newPost: builder.query<any, NewPostPayload>({
      query: (payload) => "/post",
    }),
    changeUserPost: builder.query<any, NewPostPayload>({
      query: (payload) => "/post",
    }),
  }),
});
