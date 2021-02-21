import { useSelector } from 'react-redux';

export default function IfAuth({ children }) {
  const token = useSelector((state) => state.auth.token);
  return token ? children : null;
}
