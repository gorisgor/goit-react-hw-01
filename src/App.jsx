import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json"
import transactions from './transactions.json'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

export default function App (){
    return (
        <div>
          <Profile userData = {userData} />
          <FriendList friends = {friends}/>
          <TransactionHistory items={transactions} />
        </div>
    )
}
