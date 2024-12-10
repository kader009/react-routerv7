import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('about', './pages/About.tsx'),
] satisfies RouteConfig;
