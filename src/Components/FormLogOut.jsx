import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function FormLogOut() {
  const [formData, SetFormData] = useState({
    email: '',
    password: '',
  });
  console.log(formData);
  const dispatch = useDispatch();
  const hSubmit = (evt) => {
    evt.preventDefault(evt.target.value);
    dispatch({
      type: 'LOGOUT',
      payload: formData,
    });
  };
  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    SetFormData(newData);
  };
  return (
    <main>
      <form onSubmit={hSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={hChangeFormData}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={hChangeFormData}
        />
        <input type="submit" value="LogOut" />
      </form>
    </main>
  );
}
