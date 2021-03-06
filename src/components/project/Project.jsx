import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Project.module.css'
import Slider from "react-slick";
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll'

export default function Project() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slide",
    };

    return (
        <Element name="project" className="element" >
            <div className={style.project}>
                <div className={style.projectPage}>
                    <div className={style.projectContent}>
                        <div className={style.slideLap}>
                            <div className={style.title}>๐จโ๐ป PROJECTS</div>
                            <Slider {...settings}>
                                <div>
                                    <ProjectCard
                                        title="Muscle hub"
                                        imgSrc="muscle_hub.gif"
                                        imgAlt="muscle_hub"
                                        AccText={
                                            <>
                                                ์ผ,๋๋ง๋ค ์ฌ์ฉ์๊ฐ ์ผ๋ง๋ ์ด๋ํ๋์ง ๊ธฐ๋กํ๊ณ  ์ ์ ์๋ ์น ์ฌ์ดํธ ์๋๋ค. ์ด๋๊ณผ ๊ฐ๋ฐ์ ๋น์ทํ ๋งฅ๋ฝ์ด๋ค๋ผ๊ณ  ๋๊ผ๊ณ  github์ ์๋๋ฐญ ์ฑ์ฐ๋ ๊ฒ์ ์๊ฐ์ ๋ฐ์
                                                ๊ทธ๊ฒ์ ์ด๋ ๋ณผ๋ฅจ ์์ ๋์ํ์ฌ ์น์ ๊ตฌ์ํ๊ณ  ์ค๊ณํ์์ต๋๋ค. <br></br><br></br>
                                                <b>React.js ์์ Redux๋ฅผ ํตํ ์ํ๊ด๋ฆฌ, redux-thunk๋ฑ ๋ฏธ๋ค์จ์ด๋ฅผ ์ฌ์ฉํ ๋น๋๊ธฐ ์ฒ๋ฆฌ, firebase๋ฅผ ํตํ OAuth, real time datebase</b>์ ๊ฐ์ ๊ธฐ์ ์ ์ตํ์ต๋๋ค.
                                            </>
                                        }
                                        mainFuc={<>์ด๋๋์ ๊ธฐ๋กํ๋ฉฐ ์์ ์ด ์ผ๋ง๋ ์ด๋ํ๊ณ  ๋ชํค๋ก ๋ค์๋์ง์ ๋ํ ์ฑ์ทจ๊ฐ์ ๋๋ผ๊ฒ ํ๋ ์น์ฌ์ดํธ ์๋๋ค.</>}
                                        domain="https://muscle-hub.netlify.app/"
                                        github="https://github.com/LeeSeungjae00/muscle_memory"
                                        stack="React.js,React-router , redux, redux-thunk, firebase, post-css, netlify"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title="PLAN-B"
                                        imgSrc="plan-b.gif"
                                        imgAlt="plan-b"
                                        AccText={
                                            <>
                                                ์ฌ์ฉ์๋ค์ด ์์ ์ ์ ์ฒด ์ ๋ณด๋ฅผ ํตํด์ Bํ ๊ฐ์ผ์ ๊ฑธ๋ฆด ํ๋ฅ ์ ์ ์ ์๋ ์น ์ฌ์ดํธ์๋๋ค. <br></br><br></br>
                                                <b>React.js ๊ด๋ จ ๊ธฐ์  ์ต๋, Chart.js๋ฅผ ํตํ ์ฐจํธ ํ์ถ, Axios์ ๊ฐ์ ํต์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํตํ REST API ์ฌ์ฉ</b>์ ์ตํ์ต๋๋ค.
                                            </>
                                        }
                                        mainFuc={<>์ฌ์ฉ์์ ์ ์ฒด ์ ๋ณด๋ฅผ ๋ฃ์ด ๋์๋ง๋ค Bํ๊ฐ์ผ์ ๊ฑธ๋ฆด ๋์๋ง๋ค ํ๋ฅ ์ ์ธก์ </>}
                                        domain="https://planbhcc.com/"
                                        github="https://github.com/LeeSeungjae00/plan-b"
                                        stack="React.js, Chart.js, Material UI"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title="AI-SCOPE"
                                        imgSrc="ai-scope.gif"
                                        imgAlt="ai-scope"
                                        AccText={
                                            <>
                                                ๊ถค์์ ์ข๋ฅ 3๊ฐ์ง์ค ๋๋๊ทธ๋ ํ์ผ ์ ํ์ ํตํด ๋ฐ์์จ ์ด๋ฏธ์ง๋ฅผ ํตํ์ฌ ๊ถค์์ ์ข๋ฅ๊ฐ ๋ฌด์ ์ธ์ง ์์ธก ํ  ์์๋ ์น ์ฌ์ดํธ ์๋๋ค.<br></br><br></br>
                                                <b>React.js ๊ด๋ จ ๊ธฐ์  ์ต๋, ์ด๋ฏธ์ง ์ฒ๋ฆฌ์ ๋ํ ๊ธฐ์ , Axios์ ๊ฐ์ ํต์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํตํ REST API ์ฌ์ฉ</b>์ ์ตํ์ต๋๋ค.
                                            </>
                                        }
                                        mainFuc={<>๊ถค์์ ์ข๋ฅ๋ฅผ ์์ธก ํ  ์ ์๋ ์น ์ฌ์ดํธ</>}
                                        domain="https://aiscopeseoul.com/"
                                        github="https://github.com/LeeSeungjae00/ai-scope"
                                        stack="React.js, Material UI"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title="lsj's portfolio"
                                        imgSrc="lsj_portfolio.gif"
                                        imgAlt="lsj portfolio"
                                        AccText={
                                            <>
                                                ๋ ์ด์น์ฌ๋ฅผ ์๊ฐํ๋ ๊ฐ๋จํ ์น ์ฌ์ดํธ<br></br><br></br>
                                                <b>React.js์ ์น ์ ์ ๋ฐฉ๋ฒ์ ๋ํด ๋ค์ํ๋ฒ ๋ณต์ตํ๋ฉฐ, ๋ฐ์ํ ์น์ ๋ํ ๊ธฐ์ , react-animation, react-slider ๊ณผ ๊ฐ์ ๊ฐ์ข ์๋๋ฉ์ด์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ฌ์ฉ ๊ธฐ๋ฒ, netlify ํตํ ๋ฐฐํฌ ๋ฐฉ์</b> ๊ณผ ๊ฐ์ ๊ธฐ์ ์ ์ตํ ์ ์์์ต๋๋ค.
                                            </>
                                        }
                                        mainFuc={<>์น ํ๋ก ํธ์๋ ๊ฐ๋ฐ์ ์ด์น์ฌ๋ฅผ ์๊ฐํ๋ ์น ์ฌ์ดํธ</>}
                                        domain="https://lsjportfolio.netlify.app/"
                                        github="https://github.com/LeeSeungjae00/sj_portfolio"
                                        stack="React.js, css"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title={<><div>B-35K</div><div style={{ fontSize: "1rem", color: 'gray' }}>์  ํ์ฌ GSI ํ๋ก์ ํธ</div></>}
                                        imgSrc="b-35k.png"
                                        imgAlt="b-35k"
                                        AccText={
                                            <>
                                                ์ค๊ณ๊ธฐ์ ์จ๋, ์คํ์ ๋ฑ์ ๊ฐ์ข ์ ๋ณด๋ฅผ ๋ฐ์์ ํ์ถํ๊ณ  ๊ฐ์ข ์ค์ ์ ํตํด ์ค๊ณ๊ธฐ๋ฅผ ์ ์ดํ  ์ ์๋ ์น ํ์ด์ง ์๋๋ค.<br></br><br></br>
                                                <b>lazy loading, React-Router, TypeScript๋ฅผ ํตํ React ์ฌ์ฉ๋ฒ๊ณผ ๊ฐ์ ์ข๋ ์ฌํ์ ์ธ React.js ๊ด๋ จ ๊ธฐ์ , ์ํ๊ด๋ฆฌ ๋ฏธ๋ค์จ์ด Redux์ ๋์๊ณผ ์ฌ์ฉ๋ฒ, Axios์ ๊ฐ์ ํต์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํตํ REST API ์ฌ์ฉ</b> ๊ณผ ๊ฐ์ ๊ธฐ์ ์ ์ตํ ์ ์์์ต๋๋ค.
                                            </>
                                        }
                                        mainFuc={<>์ค๊ณ๊ธฐ์ ๊ฐ์ข ์ํ ๊ฐ๋ค์ ์กฐํํ๊ณ  ์ ์ดํ  ์ ์๋ ์น ํ์ด์ง</>}
                                        domain="-"
                                        github="-"
                                        stack="React.js, Redux, Typescript"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title={<><div>IR1</div><div style={{ fontSize: "1rem", color: 'gray' }}>์  ํ์ฌ GSI ํ๋ก์ ํธ</div></>}
                                        imgSrc="ir1.gif"
                                        imgAlt="ir1"
                                        AccText={
                                            <>
                                                ์ค๊ณ๊ธฐ์ ์จ๋, ์คํ์ ๋ฑ์ ๊ฐ์ข ์ ๋ณด๋ฅผ ๋ฐ์์ ํ์ถํ๊ณ  ๊ฐ์ข ์ค์ ์ ํตํด ์ค๊ณ๊ธฐ๋ฅผ ์ ์ดํ  ์ ์๋ ์น ํ์ด์ง ์๋๋ค.<br></br><br></br>
                                                ๊ธฐ์ด๋ฅผ ๋ค์ง๊ฒ ๋ ํ๋ก์ ํธ ์ด๋ฉฐ <b>๊ธฐ๋ณธ์ ์ธ javascript, html, css์ ์ฌ์ฉ๋ฒ๊ณผ ์น์ ๊ตฌ๋ ๋ฐฉ์, jquery๋ฅผ ํตํ ๋น๋๊ธฐ ํต์ </b>์ ์ตํ์ต๋๋ค.
                                            </>
                                        }
                                        mainFuc={<>์ค๊ณ๊ธฐ์ ๊ฐ์ข ์ํ ๊ฐ๋ค์ ์กฐํํ๊ณ  ์ ์ดํ  ์ ์๋ ์น ํ์ด์ง</>}
                                        domain="-"
                                        github="-"
                                        stack="javascript, css, html, jquery"
                                    ></ProjectCard>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
