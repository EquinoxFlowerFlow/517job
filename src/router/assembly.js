import Loadable from '@@@/Loadable';

const Login = Loadable( () => import('@@/login'));
const Reg = Loadable( () => import('@@/reg'));
const Home = Loadable( () => import('@@/home'));

export {
  Login,
  Reg,
  Home
}



