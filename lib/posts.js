import fetch from "node-fetch";

// jsonplaceholderのブログデータ
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// 全てのブログ記事情報を返す
export async function getAllPostData() {
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json();
    return posts;
}

// 全てのブログ記事のID情報を抽出して返す
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 指定されたIDのブログ記事情報を返す
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  return post;
}
