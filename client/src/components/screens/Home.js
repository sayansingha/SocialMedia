import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Home = () =>{
    const history = useHistory();
    const [posts,setPosts] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(()=>{
        fetch("/allpost",{
            method:"get",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPosts(data.posts);
        }).catch(err=>{
            console.log(err)
        });
     },[])

     const PostComment=(postId)=>{
        const item = JSON.parse(localStorage.getItem("user"));

        const obj = {
            comment: comment,
            userName: item.name,
            userId: item._id,
            postId: postId
        };
        fetch("/comment",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                // "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                comment: comment,
                userName: item.name,
                userId: item._id,
                postId: postId
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                M.toast({html:data.message})
                history.push('/');

            }
        }).catch(err=>console.log(err));
    }

    return (
        <div className="home">
            {posts.map(post => {
                return (
                <div className="card home-card" key={post._id}>
                    <h5>{post.postedBy.name}</h5>
                    <div className="card-image">
                        <img src={post.photo} />
                    </div>
                    <h6>
                        Comments:
                    </h6>
                    {post.comments.map(comment => {
                        return (<p>
                            <strong>
                                {comment.userName}
                            </strong>
                            <br />
                            {comment.comment}
                        </p>)
                    })}
                    <div className="card-content">
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>

                        <input type="text" placeholder="add a comment"
                            value={comment}
                            onChange={(e)=>{
                                setComment(e.target.value);
                            }}
                        />
                        <button className="btn waves-effect waves-light" type="submit" name="action"
                        onClick={PostComment.bind(this, post._id)}
                        >
                            Submit
                        </button>
                    </div>
                </div>)
            })}
            
        </div>
    )
}


export default Home;