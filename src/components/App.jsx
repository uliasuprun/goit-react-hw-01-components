import Section from './Section';
import ProfileMarkup from './Profile/ProfileMarkup';
import FriendItem from './FriendList/FriendItem';

import user from '../components/user.json';
import friends from '../components/friends.json';

export const App = () => {
  return (
    <div>
      <Section title="Profile">
      <ProfileMarkup user={user}/>
      </Section>
      <Section title="Friends">
      <FriendItem friends={friends} />
      </Section>
    </div>
  )
}
