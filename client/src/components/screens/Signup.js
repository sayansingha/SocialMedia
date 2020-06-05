import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signin = () =>{
    const history = useHistory();
    const [name, setName ] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData=()=>{
        fetch("/signup",{
            method:"post",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                name,
                password,
                email
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                M.toast({html:data.message})
                history.push('/signin');

            }
        }).catch(err=>console.log(err));
    }

    return (
    <div>
        <div className="card auth-card">
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder= "password"
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />

             <button className="btn waves-effect waves-light" type="submit" name="action"
             onClick={PostData}
             >
                Sign up
            </button>
            <h5>
                <Link to="/signin">Already have an account?</Link>
            </h5>
            
        </div>
        
    </div>
    )
}

export default Signin;