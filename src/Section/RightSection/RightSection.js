import { style } from '@mui/system'
import React from 'react'
 import styles from './RightSection.module.css'
// import RightSecDiv from '../../Component/RightSecDIv/RightSecDiv'
import RightFollow from '../../Component/RightFollow/RightFollow'
import RightTrend from '../../Component/RightTrend/RightTrend'
import SearchBar from '../../Component/SearchBar/SearchBar'
function RightSection() {
  return (
    <>
    <div>
<div className={styles.mainDiv}>
      <SearchBar /></div>
      <RightTrend/>
      <RightFollow/>
    </div>
    <div className={styles.copyright}>
    <h6>
      Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
      More... <span>© 2023 </span> Twitter, Inc.
    </h6>
  </div>
  </>
  )
}

export default RightSection
