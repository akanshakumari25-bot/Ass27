import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsAuthenticated }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setIsAuthenticated(true);
    navigate('/dashboard');
  }

  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          required
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;