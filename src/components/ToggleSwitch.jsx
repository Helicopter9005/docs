import React from 'react'
import styles from './ToggleSwitch.module.scss'

const ToggleSwitch = () => {
  return (
    <div className={styles.switchButton}>
      <input className={styles.switchButtonCheckbox} type="checkbox" />
      <label className={styles.switchButtonLabel} htmlFor="">
        <span className={styles.switchButtonLabelSpan}>v4</span>
      </label>
    </div>
  )
}

export default ToggleSwitch
