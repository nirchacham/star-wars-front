import classes from './Login.module.css';
import { useDispatch } from 'react-redux';
import {authActions} from '../../store/index';
const Login = () => {
    const dispatch = useDispatch();

     const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      };
    
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!e.target.email.value) {
        alert("Email is required");
      } else if (!e.target.email.value) {
        alert("Valid email is required");
      } 
    dispatch(authActions.login(e.target.email.value))
  };

    return (
      <div style={styles}>
        <form className={classes['form-container']} style={{border:'2px solid white', borderRadius:'6px', padding:20, backgroundColor:'white'}} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email </label>
            <input type="email" name="email" placeholder="test@gmail.com" />
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }

export default Login;
