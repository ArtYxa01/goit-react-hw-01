import Profile from 'components/About/profile'
//import Statistics from 'components/Stats/statistics'
//import FriendsList from 'components/FriendsList/FriendsList'
//import TransactionHistory from 'components/TransactionHistory/TransactionHistory'



//import transactionsList from './transactions';
import profileData from './user';
//import statsData from './data';
//import friendsData from './friends';

function App() {
  return (
    <div className="App">
      <Profile {...profileData} />
    </div>
  );
}

export default App;