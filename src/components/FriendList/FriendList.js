import PropTypes from 'prop-types';

const FriendList = ({ friendAvatar, friendName, friendStatus, friendId }) => {
    return (
        <ul class="friend-list">
            <li class="item">
                <span class="status">{friendStatus}</span>
                <img
                    class="avatar"
                    src={friendAvatar}
                    alt={friendName}
                    width="48"
                />
                <p class="name">{friendName}</p>
            </li>
        </ul>
    );
};

FriendList.propTypes = {
    friendAvatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    friendStatus: PropTypes.bool.isRequired,
};

export default FriendList;
