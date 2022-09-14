import PropTypes from 'prop-types';
import { FriendListBox, Item, Status, Avatar, Name } from './Friends.styled';

export const FriendList = ({ friends}) => {
    return (
        <FriendListBox>{friends.map(({avatar, name, isOnline, id}) => (
            <Item key={id} isOnline={isOnline}>
                <Status isOnline={isOnline}>{isOnline}</Status> 
                <Avatar
                    src={avatar}
                    alt={name}
                    width="48"
                />
                <Name>{name}</Name>   
            </Item>))}
        </FriendListBox>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    )
}

