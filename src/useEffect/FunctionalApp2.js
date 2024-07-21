import React, { useState, useEffect } from "react";

function FunctionalApp() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    console.log("Component Did Mount");
    const GetPosts = async () => {
      const fetchPosts = await fetch(
        "http://jsonplaceholder.typicode.com/posts"
      );
      const jsonPosts = await fetchPosts.json();
      setPosts(jsonPosts);
    };
    GetPosts();
  }, []);

  // useEffect with dependency: state posts and counter
  useEffect(() => {
    console.log("State yang berubah adalah");
    console.log({ posts });
    console.log({ counter });
  }, [posts, counter]);

  return (
    <div>
      <p>Nilai dari state counter</p>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add counter</button>
    </div>
  );
}

export default FunctionalApp;
