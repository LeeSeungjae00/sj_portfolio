import React from 'react'
import style from './About.module.css'
import AboutCard from './AboutCard'
import {Element} from 'react-scroll'

export default function About() {
    return (
        <Element name="about" className="element" >
            <div className={style.about}>
                <div className={style.aboutPage}>
                    <div className={style.aboutTitle}>
                        <div>ABOUT</div>
                        <div>ME</div>
                    </div>
                    <div className={style.aboutContent}>
                        <AboutCard emoji="π¨βπ»" name="μ΄λ¦" content="μ΄μΉμ¬"></AboutCard>
                        <AboutCard emoji="π" name="μλμμΌ" content="2000/04/29"></AboutCard>
                        <AboutCard emoji="πΊ" name="μ£Όμμ§" content="μΈμ²κ΄μ­μ λΆνκ΅¬"></AboutCard>
                        <AboutCard emoji="π" name="μ°λ½μ²" content="010-9142-8662"></AboutCard>
                        <AboutCard emoji="π§" name="μ΄λ©μΌ" content="seungjae2668@naver.com"></AboutCard>
                        <AboutCard emoji="π" name="νλ ₯" content={
                            <>
                                <div>νκ΅­μ°μκΈ°μ λνκ΅ μ¬ν</div>
                                <div>μΈμ²μ μλ§μ΄μ€ν°κ³ λ±νκ΅ μ‘Έμ</div>
                            </>
                        }></AboutCard>
                    </div>
                </div>
            </div>
        </Element>

    )
}
