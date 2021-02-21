import { useSelector } from 'react-redux';
import Auth from './Auth';

export default function CheckAuth() {
  const token = useSelector((state) => state.auth.token);
  if (!token) return <Auth />;
  else return null;
}
