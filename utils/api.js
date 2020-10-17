import axios from "axios";

const TOKEN = "VDToyXHo3EwC1FHxjgnYD3xkxTO2I4RZzRU3fvcVUC72ecqeIL";
const URL = `https://api.tumblr.com/v2/blog/aspeinspiratio.tumblr.com/posts/photo`;

const photoShape = (w, h) => {
  if (w > h * 1.48) return "card wide";
  if (h > w * 1.48) return "card tall";
  return "card";
};

export default async function getPhotos() {
  const res20 = await axios.get(`${URL}?api_key=${TOKEN}`);
  let tmpList = [];
  [...res20.data.response.posts].forEach((post) => {
    let photo = post.photos[0].original_size;
    tmpList.push({
      src: photo.url,
      author: post.summary,
      shape: photoShape(photo.width, photo.height),
    });
  });

  //api get by 20
  const res40 = await axios.get(`${URL}?api_key=${TOKEN}&offset=20`);
  [...res40.data.response.posts].forEach((post) => {
    let photo = post.photos[0].original_size;
    tmpList.push({
      src: photo.url,
      author: post.summary,
      shape: photoShape(photo.width, photo.height),
    });
  });

  return tmpList;
}
