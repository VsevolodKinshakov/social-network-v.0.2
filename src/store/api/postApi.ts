import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface NewPostPayload {
  photo_file: string;
  user_id: number;
  main_text: string;
}

interface NewPostResponse {
  status: number;
  post_id: number;
}

interface GetAllPostPayload {
  post_id: number;
}

interface GetAllPostResponce {
  status: number;
  message: {
    main_text: string,
    reg_date: Date,
    user_id: number,
    id: number,
    user_fk: {
      name: string,
      email: string,
      phone_number: number,
      id: number,
      user_city: string,
      password: string,
      reg_date: Date
    }
  }
}

interface ChangeUserPostPayload {
  post_id: number,
  new_text: string,
}

interface ChangeUserPostResponse {
  status: number,
  message: string,
}

interface DeleteUserPostPayload {
  post_id: number,
}

interface DeleteUserPostResponse {
  status: number,
  message: string,
} 


export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    newPost: builder.mutation<NewPostResponse, NewPostPayload>({
      query: (payload) => ({
        url: '/post',
        method: 'POST',
        body: payload,
      })
    }),
    getAllPost: builder.query<GetAllPostResponce, GetAllPostPayload>({
      query: (postId) => `/post?post_id=${postId}`,
    }),
    changeUserPost: builder.mutation<ChangeUserPostResponse, ChangeUserPostPayload>({
      query: (payload) => ({
        url: '/post',
        method: 'PUT',
        body: payload,
      })
    }),
    deleteUserPost: builder.mutation<DeleteUserPostResponse, DeleteUserPostPayload>({
      query: (payload) => ({
        url: '/post',
        method: 'DELETE',
        body: payload,
      })
    }),
  }),
});

export const {
  useNewPostMutation,
  useChangeUserPostMutation,
  useGetAllPostQuery,
  useDeleteUserPostMutation,
} = postApi