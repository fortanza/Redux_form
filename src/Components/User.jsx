import { useSelector } from 'react-redux';
import { useContext } from 'react';
import UserContext from 'Context/UserContext';

export default function User() {
  const userRedux = useSelector((state) => state);
  const { userEmail } = useContext(UserContext);
  return (
    <section>
      <p>Redux------------------------------------------------------------</p>
      <p>firstname: {userRedux.firstname || '---'}</p>
      <p>lastname: {userRedux.lastname || '---'}</p>
      <p>Email: {userRedux.email || '---'}</p>
      <p>Context------------------------------------------------------------</p>
      <p>Email: {userEmail || '---'}</p>
    </section>
  );
}
