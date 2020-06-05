import React, {useState, useContext} from 'react';
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signin = () =>{
    const history = useHistory();
    const [name, setName ] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData=()=>{
        fetch("/signin",{
            method:"post",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                localStorage.setItem("jwt",data.token);
                localStorage.setItem("user",JSON.stringify(data.user));
                M.toast({html:"signed in successfully"})
                history.push('/');

            }
        }).catch(err=>console.log(err));
    }


    return (
    <div>
        <div className="card auth-card">
            <h2>Sign In</h2>
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
             onClick={()=>PostData()}>
                Sign In
            </button>
            <h5>
                <Link to="/signup">Already have an account?</Link>
            </h5>
            
        </div>
        
    </div>
    )
}

export default Signin;