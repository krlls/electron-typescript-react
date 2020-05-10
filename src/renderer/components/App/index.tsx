import * as React from 'react'

import styles from './styles.scss'

export const App: React.FC = () => {
  return (
    <div className={styles.hello_container}>
      <div className={styles.hello_container__hello}>
        Hello world!
      </div>
    </div>
  )
}
