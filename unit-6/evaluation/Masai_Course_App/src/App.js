import "./App.css";
import Title from "./Components/Title";
import Courses from "./Components/Courses";
import UserCard from "./Components/UserCard";

const user = {
  name: "Anuradha",
  avatar:
    "https://media.licdn.com/dms/image/C5103AQFvq43mnaW5Ug/profile-displayphoto-shrink_100_100/0/1540472466216?e=1679529600&v=beta&t=dnJFqDNz8ud2eUuZNY71rJyBxLmu_K3xDgjd5ACJueE",
  posts: "150",
  followers: "400",
  address: "Noida, UP"
};
export default function App() {
  return <>
  <Title/>
  <UserCard 
  name= {user.name}
  avatar ={user.avatar}
  posts={user.posts}
followers={user.followers}
address={user.address}
  />
  <Courses/>
  </>;
}
