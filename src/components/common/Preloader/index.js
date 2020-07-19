import React from 'react'
import { Spin } from 'antd'
import './index.scss'
function Preloader() {
    return (
        <div className="preloader"><Spin tip="Loading..." size="large" /></div>
    )
}

export default Preloader
