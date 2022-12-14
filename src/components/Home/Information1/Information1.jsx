import React from 'react'
import style from './Information.module.css'

export const Information1 = () => {
  return (
    <>
      <div className={style.containerTitle}>
        <p className={style.subtitle}>WE HELP INNOVATE STARTUPS TO FIND AND FIX WEAK POINTS AND LAUNCH THE PRODUCT</p>
        <p className={style.title}>Special outstanding service for startups</p>
      </div>
      <div className={style.containerCards}>
        <div className={style.card}>
          <i class="fa-solid fa-user"></i>
          <p className={style.titleCard}>Entrepreneurs</p>
          <p className={style.descriptionCard}>
            We work with ecosystem leaders, corporations and startups worldwide.
          </p>
        </div>
        <div className={style.card}>
          <i class="fa-solid fa-chart-line"></i>
          <p className={style.titleCard}>Capital Markets</p>
          <p className={style.descriptionCard}>
            We work with ecosystem leaders, corporations and startups worldwide.
          </p>
        </div>
        <div className={style.card}>
          <i class="fa-solid fa-dollar-sign"></i>
          <p className={style.titleCard}>Business Plan</p>
          <p className={style.descriptionCard}>
            We work with ecosystem leaders, corporations and startups worldwide.
          </p>
        </div>
        <div className={style.card}>
          <i class="fa-solid fa-lightbulb"></i>
          <p className={style.titleCard}>Startups</p>
          <p className={style.descriptionCard}>
            We work with ecosystem leaders, corporations and startups worldwide.
          </p>
        </div>
      </div>
    </>
  )
}
