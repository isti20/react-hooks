import React, { useState, useEffect } from "react";

function FunctionalApp() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    console.log('Ini posts', { posts });
  });

  // useEffect with dependency : empty array
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

  return (
    <div>
      <p>Nilai dari state counter</p>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add counter</button>
    </div>
  );
}

export default FunctionalApp;
