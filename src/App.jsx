import { UserProfile } from './components/UserProfile.jsx'

export default function App() {
const callMe = () => {
  console.log('Hello, world!');
}

  return (<div>
    <h1>Root component</h1>
    <UserProfile 
    age={20} 
    isLoggedIn={true} 
    favoriteFoods={[
      {
        name:'sushi',
      }
    ]}
    callMe={callMe}/>
  </div>);
}