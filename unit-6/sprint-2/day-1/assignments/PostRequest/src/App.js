import "./App.css";
import Post from './Components/Post';
import React from "react";

function App() {
  const [posts, setPosts] = React.useState([]);

  const getPost = async () => {
    var res = await fetch("https://jsonplaceholder.typicode.com/posts");
    var postInfo = await res.json();
    console.log(postInfo);
    if (postInfo.length === 0) {
    } else {
      setPosts(postInfo);
    }
  };
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn" onClick={getPost}>
        GET POSTS
      </button>
      <div id="post-container">
      {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
