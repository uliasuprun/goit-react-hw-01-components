import {ProfileMarkup} from './Profile/ProfileMarkup';

import {Statistics} from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';

export const App = () => {
  return (
    <div>
      <ProfileMarkup user={user}/>
      <Statistics data={data} />
      <FriendList friends={friends} />
    </div>
  )
}
