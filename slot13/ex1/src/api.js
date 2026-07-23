// api.js

export const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

export const fetchUser = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) throw new Error(`Failed to fetch user ${userId}`);
  return response.json();
};

export const fetchPost = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) throw new Error(`Failed to fetch post ${postId}`);
  return response.json();
};

export const fetchAllUsers = () => {
  const promise = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    });
  return wrapPromise(promise);
};

export const fetchAllPosts = () => {
  const promise = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
    });
  return wrapPromise(promise);
};
