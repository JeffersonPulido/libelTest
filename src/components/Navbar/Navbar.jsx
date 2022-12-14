import React from 'react'
import style from './Navbar.module.css'

export const Navbar = () => {
  return (
    <>
        <div className={style.containerNavbar}>
            <p className={style.nameBrand}>LIBEL ACADEMY</p>
            <div className={style.containerMenu}>
                <p className={style.elementMenu}>Home</p>
                <p className={style.elementMenu}>About</p>
                <p className={style.elementMenu}>Services</p>
                <p className={style.elementMenu}>Pricing</p>
                <p className={style.elementMenu}>News</p>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <button className={style.buttonContact}>Contact Us</button>
            </div>
        </div>
    </>
  )
}
