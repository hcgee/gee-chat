import React, { useEffect } from "react";
import { useNavigate, Outlet } from 'react-router-dom'
import { getLocalStorage, setLocalStorage } from '@/utils'
import styles from './index.module.less'

const HomeLayout = () => {
  const navigate = useNavigate()
  const token = getLocalStorage('token')
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [])
  const logout = () => {
    setLocalStorage('token', '')
    navigate('/login')
  }
  return (
    <div className={styles['home-wrapper']}>
      <header>
        <p>{`Welcome, ${token}！`}</p>
        <p>
          <button onClick={() => { logout() }}>logout</button>
        </p>
      </header>
      <Outlet />
    </div>
  )
}

export default HomeLayout