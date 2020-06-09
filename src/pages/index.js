import { lazy } from 'react'

export const Home = lazy(() => import('./home'))
export const Login = lazy(() => import('./login'))
export const Chat = lazy(() => import('./chat'))