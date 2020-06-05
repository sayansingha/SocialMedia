import React,{useEffect, useState} from 'react';

const Profile = () =>{
    const [posts, setPosts] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
         fetch("/mypost",{
             method:"get",
             headers:{
                 "Content-Type":"application/json",
                 "Authorization":"Bearer "+localStorage.getItem("jwt")
             },
         }).then(res=>res.json())
         .then(data=>{
            console.log(data.mypost);
            setPosts(data.mypost);
            // if(data.error){
            //    M.toast({html: data.error,classes:"#c62828 red darken-3"})
            // }
            // else{
            //     M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
            //     history.push('/')
            // }
         }).catch(err=>{
             console.log(err)
         })
     
     },[])


    return (
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom:"1px solid grey"
            }}>
            <div>
                <h4>{user.name}</h4>
                <div style={{display:"flex", justifyContent: "space-between", width:"108%"}}>
                    <h6>{posts.length} posts</h6>
                </div>
            </div>
            </div>
            {posts.map(post=>{
                return(
                    <img className="item" src={post.photo}/>
                )
            })}
        </div>


       
    )

}

export default Profile;