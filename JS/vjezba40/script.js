"use strict";

async function getPost() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response);
    console.log(response.data);
    console.log(response.data.title);
  } catch (error) {
    console.log(error);
  }
}

getPost();
