import "server-only";
import { PostType } from "./types";

// WP BASE API URL
export const WP_BASE_URL = "http://nextjsheadlesscms.local";
export const API_BASE_URL = "http://nextjsheadlesscms.local/wp-json/wp/v2";
export const POST_LIST_ENDPOINT = API_BASE_URL + "/posts";
// export const POST_ENDPOINT = `${POST_LIST_ENDPOINT}/slug=`;

const getPosts = async (): Promise<PostType[]> => {
  const res = await fetch(POST_LIST_ENDPOINT);
  const posts = await res.json();
  return posts;
};

export default getPosts;
