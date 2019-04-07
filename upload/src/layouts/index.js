import styles from './index.css';
import LoginPage from '../pages/Login/login';
import IndexPage from '../pages/Index/indexpage';

function BasicLayout(props) {
  return (
    <div >
       {
         window.sessionStorage.getItem('index') ? (<IndexPage/>):(<LoginPage />)
       }

    </div>
  );
}

export default BasicLayout;
