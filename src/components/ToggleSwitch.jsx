import React from 'react'
import styles from './ToggleSwitch.module.scss'

const ToggleSwitch = () => {
  return (
    <div className={styles.switchButton}>
      <input className={styles.switchButtonCheckbox} type="checkbox" />
      <label className={styles.switchButtonLabel} for="">
        <span className={styles.switchButtonLabelSpan}>V4</span>
      </label>
    </div>
  )
}

export default ToggleSwitch
