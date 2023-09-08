import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface RegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface RegisterUserResponse {
  status: number;
  user_id: number;
}

interface LoginUserResponse extends RegisterUserResponse {}

interface LoginPayload {
  email: string;
  password: string;
}

interface GetUserResponse {
    status: number,
    message: {
        mail: string
        phone_number: string
        user_id: string
        name: string
        reg_date: Date
        city: string
    }
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation <RegisterUserResponse, RegisterUserPayload> ({
      query: (payload) => ({
        url: '/registration',
        method: 'POST',
        body: payload,
      })
    }),
    loginUser: builder.mutation <LoginUserResponse, LoginPayload> ({
      query: (payload) => ({
        url: '/login',
        method: 'POST',
        body: payload,
      })
    }),
    getUser: builder.query<GetUserResponse, string>({
      query: (userId) => `/user?user_id=${userId}`,
    }),
  }),
});


export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery
} = authApi