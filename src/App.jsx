import Profile from "./components/profile/profile";
import userData from "./userData.json";

export default function App (){
    return (
        <>
        <Profile userData = {userData} />
        </>
    )
}
