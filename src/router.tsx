import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./pages/layout";
import BasicLayout from "./pages/basic/layout";
import Code from './pages/code';
import Practice from './pages/practice';
import { PropsView, CallbackView, ContextView, ExtendsView, HocView } from './pages/basic'
import { UseStateView, UseEffectView, UseContextView, UseReducerView, UseMemoView, UseCallbackView, UseRefView } from './pages/hooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: 'basic',
        element: <BasicLayout />,
        children: [
          {
            path: '1',
            element: <PropsView />,
          },
          {
            path: '2',
            element: <CallbackView />,
          },
          {
            path: '3',
            element: <ContextView />,
          },
          {
            path: '4',
            element: <ExtendsView />,
          },
          {
            path: '5',
            element: <HocView />,
          },
          {
            path: '6',
            element: <UseStateView />,
          },
          {
            path: '7',
            element: <UseEffectView />,
          },
          {
            path: '8',
            element: <UseContextView />,
          },
          {
            path: '9',
            element: <UseReducerView />,
          },
          {
            path: '10',
            element: <UseMemoView />,
          },
          {
            path: '11',
            element: <UseCallbackView />,
          },
          {
            path: '12',
            element: <UseRefView />,
          },
        ]
      },
      {
        path: 'code',
        element: <Code />,
      },
      {
        path: 'practice',
        element: <Practice />,
      }, // 添加重定向路由
      {
        path: '/',
        element: <Navigate to="basic" />,
      },
    ],
  },
]);

export default router;