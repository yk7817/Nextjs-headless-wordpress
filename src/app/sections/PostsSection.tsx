import Link from "next/link";
import { format } from "date-fns";
import getPosts from "../lib/wordpress/posts";

const PostsSection = async () => {
  // Post List
  const posts = await getPosts();
  return (
    <div className="py-30">
      <div className="flex flex-col items-center gap-10">
        <div>
          <h2 className="text-center text-5xl">News</h2>
        </div>
        <div>
          {posts.map((post) => (
            <div key={post.id} className="">
              <Link href={`/${post.slug}`}>
                <dl className="flex">
                  <dt>{format(new Date(post.date), "yyyy/MM/dd")}</dt>
                  <dd className="ml-10">{post.title.rendered}</dd>
                </dl>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
