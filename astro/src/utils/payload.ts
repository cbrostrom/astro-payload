import type { Post } from "../types";

const url =
  process.env.NODE_ENV === "development"
    ? "http://payload:3001"
    : `https://${process.env.PAYLOAD_URL}`;
//test
export const getPosts = async () =>
  (await (await fetch(`${url}/api/posts`)).json()).docs as Post[];

export const getPost = async (id: string) =>
  (await (await fetch(`${url}/api/posts/${id}`)).json()) as Post;
