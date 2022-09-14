import { ProfileMarkup } from './Profile/ProfileMarkup';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionList } from './Transactions/TransactionList';

import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/Transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <ProfileMarkup user={user}/>
      <Statistics title='Upload stats' data={data} />
      <FriendList friends={friends} />
      <TransactionList transactions={transactions} />
    </div>
  )
}
