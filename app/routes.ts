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
  layout('./auth/Authlayout.tsx', [
    route('login', './auth/Login.tsx'),
    route('register', './auth/Register.tsx'),
  ]),
] satisfies RouteConfig;
