import React from 'react';

const UserCard = (props) => {
 const {name, avatar,posts,followers,address}=props;

 const style={
    borderRadius:"50%",
    height:"200px",
    width: "200px",
 };
  const [isFollow, setIsFollow] = React.useState(false);

  const followButton = () => {
    setIsFollow(!isFollow);
  };
    return( 
     <div>
        <img src={avatar} alt={name} style={style}/>
        <h2 data-testid="user_name">{name}</h2>
        <p data-testid="user_address">{address}</p>
        <h3>Posts</h3>
        <p data-testid="user_posts">{posts}</p>
        <h3>Followers</h3>
        <p data-testid="user_followers">{followers}</p>
        <button onClick={followButton}>{isFollow ? 'Following' : 'Follow'}</button>
     </div>
    );
  };
  export default UserCard;