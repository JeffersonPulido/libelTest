import React from 'react'
import style from './InfoTop.module.css'

export const InfoTop = () => {
  return (
    <>
        <div className={style.contenedorInfo}>
            <div className={style.contact}>
                <div className={style.separadorVertical}></div>
                <p className={style.contactP}>+1 212 946 2700</p>
                <div className={style.separadorVertical}></div>
                <p className={style.contactP}>Help Desk</p>
                <div className={style.separadorVertical}></div>
                <p className={style.contactP}>Why Sway</p>
                <div className={style.separadorVertical}></div>
            </div>
            <div className={style.socialNetworks}>
                <div className={style.separadorVertical}></div>
                <i class="fa-brands fa-facebook-f"></i>
                <div className={style.separadorVertical}></div>
                <i class="fa-brands fa-twitter"></i>
                <div className={style.separadorVertical}></div>
                <i class="fa-brands fa-instagram"></i>
                <div className={style.separadorVertical}></div>
                <i class="fa-solid fa-globe"></i>
                <div className={style.separadorVertical}></div>
            </div>
        </div>
    </>
  )
}
