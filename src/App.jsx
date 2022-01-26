import FormLogin from 'Components/FormLogin';
import User from 'Components/User';
import { useState } from 'react';
import CurrentUserContext from 'Context/UserContext';

function App() {
  const [userEmail, setUserEmail] = useState('');
  return (
    <CurrentUserContext.Provider value={{ userEmail, setUserEmail }}>
      <div>
        <FormLogin />
        <User />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
