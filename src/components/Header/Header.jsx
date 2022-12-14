import React from 'react'
import style from './Header.module.css'
import { InfoTop } from '../InfoTop/InfoTop'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    return (
        <>
            <div className={style.containerHeader}>
                <InfoTop />
                <Navbar />
            </div>
        </>
    )
}
