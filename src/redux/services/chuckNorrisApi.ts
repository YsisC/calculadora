import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Joke = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

export const chuckNorrisApi = createApi({
  reducerPath: "jokeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.chucknorris.io/jokes",
  }),
  endpoints: (builder) => ({
    getJoke: builder.query<Joke, null>({
      query: () => `/random`,
    }),
  }),
});


export const { useGetJokeQuery } = chuckNorrisApi;
