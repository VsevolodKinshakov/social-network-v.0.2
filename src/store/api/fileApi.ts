import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
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
    registerUser: builder.query<RegisterUserResponse, RegisterUserPayload>({
      query: (payload) => "/registration",
    }),
    loginUser: builder.query<LoginUserResponse, LoginPayload>({
      query: (payload) => "/login",
    }),
    getUser: builder.query<GetUserResponse, string>({
      query: (userId) => `/user/${userId}`,
    }),
    changeProfile: builder.query<GetUserResponse, string>({
        query: (userId) => `/user/${userId}`,
      }),
  }),
});
