import { UserUsername } from './UserUsername.jsx'

export function UserProfile(props) {
  props.callMe();

  return (<div id='user-profile'>
    <UserUsername username='bob' trimmedUsername='bob' />
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