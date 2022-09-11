import FriendList from "./FriendList";
// import friends from '../friends.json';
import PropTypes from 'prop-types';

function FriendItem ({friends}) {
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                <FriendList 
                friendAvatar={friend.avatar}
                friendName={friend.name}
                friendStatus={friend.isOnline}
            />
            </li>
            ))}
        </ul>
    )
}

FriendItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    )
}

export default FriendItem;