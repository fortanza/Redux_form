import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import UserContext from 'Context/UserContext';

export default function FormLogin() {
  const { setUser } = useContext(UserContext);
  const [formLoginData, SetFormLoginData] = useState({
    email: '',
    firstname: '',
    lastname: '',
  });
  const dispatch = useDispatch();
  const hSubmit = (evt) => {
    evt.preventDefault(evt.target.value);
    const data = { ...formLoginData };
    dispatch({
      type: 'LOGIN',
      payload: data,
    });
    setUser(data[evt.target.name]);
  };
  const hChangeFormLoginData = (evt) => {
    const newData = { ...formLoginData };
    newData[evt.target.name] = evt.target.value;
    SetFormLoginData(newData);
  };
  return (
    <main>
      <form onSubmit={hSubmit}>
        <input
          type="email"
          name="email"
          value={formLoginData.email}
          onChange={hChangeFormLoginData}
        />
        <input
          type="text"
          name="firstname"
          value={formLoginData.firtname}
          onChange={hChangeFormLoginData}
        />
        <input
          type="text"
          name="lastname"
          value={formLoginData.lastname}
          onChange={hChangeFormLoginData}
        />
        <input
          type="password"
          name="password"
          value={formLoginData.password}
          onChange={hChangeFormLoginData}
        />
        <input type="submit" value="Login" />
      </form>
    </main>
  );
}
