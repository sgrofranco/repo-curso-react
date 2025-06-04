import React from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = () => {

  const { isAuthenticated, login, logout } = useAuth();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState({});
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    let validationErrors = {}
    if (!email) {
      validationErrors.email = 'El email es obligatorio';
    }
    if (!password) {
      validationErrors.password = 'La contraseña es obligatoria';
    }

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return
    }

    try {
      const res = await fetch('data/users.json');
      const users = await res.json();

      const foundUser = users.find((user) => user.email === email && user.password === password);

      if (!foundUser) {
        setError({ email: 'credenciales incorrectas' });
      } else {
        if (foundUser.role === 'admin') {
          login();
          navigate('/admin');
        } else {
          navigate('/');
        }
      }

    } catch (err) {
      setError({ email: 'Error al iniciar sesión' });
    }

  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>Por favor, iniciá sesión para continuar.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p className="error">{error.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <p className="error">{error.password}</p>}
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )

}
export default Login;
