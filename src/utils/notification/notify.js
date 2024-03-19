import React, { memo, useMemo } from 'react'
import './notify.css'
import data from './notifydata.json'
const Notify = ({notify,index}) => {
  const memoizedUserData = useMemo(() => data, []);
  return (
    <div style={notify ? { transform: "translateX(-150%)" } : { transform: "translateX(0%)" }} className='notify'>
        <h3>{memoizedUserData[index].notify}</h3>
    </div>
  )
}

export default memo(Notify)