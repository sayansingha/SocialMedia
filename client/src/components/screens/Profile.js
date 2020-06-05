import React from 'react';

const Profile = () =>{
    return (
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <h4>Sayan Singha</h4>
                    <div style={{display:"flex", justifyContent: "space-between", width:"108%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
        </div>


       
    )

}

export default Profile;