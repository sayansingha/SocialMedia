import React,{useState,useEffect} from 'react';

const Home = () =>{

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch("/allpost",{
            method:"get",
        })
        .then(res=>res.json())
        .then(data=>{
            setPosts(data.posts);
        }).catch(err=>console.log(err));
     },[])
     
    return (
        <div className="home">
            {posts.map(post => {
                return (
                <div className="card home-card">
                    <h5>{post.postedBy.name}</h5>
                    <div className="card-image">
                        <img src={post.photo} />
                    </div>
                    <div className="card-content">
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                        <input type="text" placeholder="add a comment"/>
                    </div>
                </div>)
            })}
            
        </div>
    )
}


export default Home;