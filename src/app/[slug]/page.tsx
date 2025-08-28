import { notFound } from "next/navigation";
import { POST_LIST_ENDPOINT } from "../lib/wordpress/posts";
import { PostType } from "../lib/wordpress/types";

const getPostBySlug = async (slug: string): Promise<PostType | null> => {
  try {
    const res = await fetch(`${POST_LIST_ENDPOINT}?slug=${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      return null;
    }
    const postData = await res.json();
    // 受け取ったjsonが空の配列だったら
    return postData.length > 0 ? postData[0] : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const PostPage = async ({ params }: { params: { slug: string } }) => {
  // Linkタグ内、hrefにセットした値が[slug]に渡される
  // params.slugとして値を受け取れる
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div>
        <h1>{post.title.rendered}</h1>
      </div>
    </article>
  );
};

export default PostPage;
