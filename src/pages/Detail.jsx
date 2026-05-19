import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        async function fetchPost() {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            const data = await response.json();
            setPost(data);
        }
        fetchPost();
    }, [id]);
    
    if (!post) {
        return <h2>Loading...</h2>;
    }
    
    return (
        <div className="container">
        <h1>
        Dettaglio Post
        </h1>
        <div className="post-card">
        <h2>
        {post.title}
        </h2>
        <p>
        {post.body}
        </p>
        </div>
        </div>
    );
}

export default Detail;