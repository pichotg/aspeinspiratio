const token = "VDToyXHo3EwC1FHxjgnYD3xkxTO2I4RZzRU3fvcVUC72ecqeIL";
const url = `https://api.tumblr.com`;

const photoShape = (w, h) => {
  if (w > h * 1.5) return "card wide";
  if (h > w * 1.5) return "card tall";
  return "card";
};

export default async function getPhotos() {
  let PhotosList = [];
  let offset = 0;
  while (true) {
    const response = await fetchPosts(offset);
    offset += 20;
    [...response.posts].forEach((post) => {
      let photo = post.photos[0].original_size;
      PhotosList.push({
        src: photo.url,
        author: post.summary,
        shape: photoShape(photo.width, photo.height),
      });
    });
    if (PhotosList.length == response.total_posts) break;
  }
  return PhotosList;
}

async function fetchPosts(offset) {
  const res = await fetch(
    `${url}/v2/blog/aspeinspiratio.tumblr.com/posts/photo?api_key=${token}&offset=${offset}`
  );
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const { response } = await res.json();
  return response;
}
