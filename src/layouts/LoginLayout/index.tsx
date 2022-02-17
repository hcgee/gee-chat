import React, { useEffect, useState } from "react";
import logo from '@/assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { setLocalStorage } from '@/utils'
import styles from './index.module.less'

const LoginLayout = () => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState('white')
  const [username, setUsername] = useState('')
  const goHome = () => {
    setLocalStorage('token', username)
    navigate('/')
  }

  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <input type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
        <p>
          <button disabled={!username} type="button" onClick={() => goHome()}>
            GO
          </button>
        </p>
      </header>
    </div>
  )
}

export default LoginLayout