import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('about', './pages/About.tsx'),
  route('loader', './pages/Loader.tsx'),
  route('loader/:singleId', './pages/SingleLoader.tsx'),
  route('client', './pages/ClientLoader.tsx'),
  layout('./auth/Authlayout.tsx', [
    route('login', './auth/Login.tsx'),
    route('register', './auth/Register.tsx'),
  ]),
] satisfies RouteConfig;
