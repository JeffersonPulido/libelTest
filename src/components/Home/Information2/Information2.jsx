import React from 'react'
import style from './Information.module.css'
import cardsImg from '../../../assets/img/Cards1.png'

export const Information2 = () => {
  return (
    <>
      <div className={style.containerInformacion}>
        <div className={style.headerInformation}>
          <div className={style.titleContainer}>
            <p className={style.title}>All startups need to make their business work</p>
            <p className={style.subtitle}>We work with a huge poof of investors, venture capital firms and business angels</p>
          </div>
          <button className={style.btnInfo}>Get Started</button>
        </div>
        <div className={style.bodyInformation}>
          <img src={cardsImg} alt="" />
          <div className={style.right}>
            <p className={style.titleBody}>Design business model and write a business plan</p>
            <p className={style.descBody}>We designed special services for startups, focusedon the most important issues needed to be solved:</p>
            <div className={style.iconCard}>
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <div className={style.contentCard}>
                <p className={style.titleCard}>Find an Investor</p>
                <p className={style.description}>Access to financial resources is essentially important for many startups</p>
              </div>
            </div>
            <div className={style.iconCard}>
              <i class="fa-solid fa-list-check"></i>
              <div className={style.contentCard}>
                <p className={style.titleCard}>Build a Strategy</p>
                <p className={style.description}>Access to financial resources is essentially important for many startups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
