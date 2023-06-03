import profile from 'components/About/profile'
import statistics from 'components/stats/statistics'
import FriendList from 'components/FriendList/FriendList'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'



import transactionsList from './transactions';
import profileData from './user';
import statsData from './data';
import friendsData from './friends';

function App() {
  return (
    <div className="App">
      <TransactionHistory items={transactionsList} />
      <profile {...profileData} />
      <statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
    </div>
  );
}

export default App;