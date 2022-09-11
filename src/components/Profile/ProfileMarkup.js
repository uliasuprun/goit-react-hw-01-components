import Profile from "./Profile";
import user from '../user.json';

function ProfileMarkup () {
    return (
        <div>
            <Profile 
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
            />
        </div>
    )
}

export default ProfileMarkup;