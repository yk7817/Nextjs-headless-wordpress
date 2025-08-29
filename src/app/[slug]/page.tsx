import { notFound } from "next/navigation";
import { format } from "date-fns";
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
    <article className="post_container">
      <div className="post_inner w-4/5 m-auto py-20">
        <div className="post_title my-5 flex justify-baseline items-end">
          <h2 className="text-3xl">{post.title.rendered}</h2>
          <small className="post_date ml-5">
            {format(new Date(post.date), "yyyy/MM/dd")}
          </small>
        </div>
        {/* 投稿本文をAPIから取得する場合、文の前後に余計なタグが付いてくる為タグをレンダリングするメソッドで記述 */}
        <div
          className="post_body"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </article>
  );
};

export default PostPage;
