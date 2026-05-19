import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);
    
    return (
        <div className="container">
        <h1>
        Lista Posts
        </h1>
        <div className="posts-list">
        {posts.map((post) => (
            <div
            key={post.id}
            className="post-card"
            >
            <h3>
            {post.title}
            </h3>
            <p>
            {post.body}
            </p>
            <Link to={`/posts/${post.id}`}>
            Vai al dettaglio
            </Link>
            </div>
        ))}
        </div>
        </div>
    );
}

export default Posts;