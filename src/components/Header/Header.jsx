import React from 'react'
import style from './Header.module.css'
import wave from '../../assets/img/wavesDown.svg'
import { InfoTop } from '../InfoTop/InfoTop'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    return (
        <>
            <div className={style.containerHeader}>
                <InfoTop />
                <Navbar />
                <div className={style.containerPost}>
                    <p className={style.titleHeader}>Empowering Startups</p>
                    <p className={style.describeHeader}>Providing our clients with the strategic guidance to make the right technology and bussiness decisions. We will help you develop the best opertaional processes for your startup.</p>
                    <button className={style.buttonPlay}>
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            </div>
            <img src={wave} alt="" />
        </>
    )
}
