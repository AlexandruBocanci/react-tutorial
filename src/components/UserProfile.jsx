import PropTypes from 'prop-types';
import { UserUsername } from './UserUsername.jsx'

export function UserProfile(props) {
  props.callMe();

  return (<div id='user-profile'>
    <UserUsername username={props.username}/>
    <b>Age:</b> <span>{props.age}</span>
    <section>
      <span>Favorite Foods:</span>
      <br />
      <ul>
        <li>Sushi</li>
        <li>Pizza</li>
        <li>Pasta</li>
      </ul>
    </section>
  </div>);
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  favoriteFoods: PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
    }))
}