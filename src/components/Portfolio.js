import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Box from './common/Box';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { projects } from '../projects.json'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const projectsArray = projects

const Container = styled(Box)`
    .swiper-container {
      width: 100%;
      height: 100%;
    }
  
    .swiper-button-next, .swiper-button-prev {
        color: white;
        outline: none;
    }

    .swiper-slide {
      text-align: center;
      
      color: white;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;

      
    }
    h5 {
        ${props => props.theme.typography.h5}
        font-size: 1.2em;
    }
    p {
        ${props => props.theme.typography.body}
        font-size: 0.8em;
    }
    a {
        ${props => props.theme.typography.link}
        font-size: 0.7em;
    }
`

const StyledDescription = styled.div`  
    h5 {
        ${props => props.theme.typography.h5}
    }
    h6 {
        ${props => props.theme.typography.h6}
    }
`

const Card = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding-bottom: 20px;
    background: rgba(255,255,255, 0.3);
    border-radius: 10px;
    box-shadow: 1px 1px 5px white;
    margin-bottom: 20px;

    & .card__image {
        opacity: 0.85;
        height: 200px;
        border-radius: 10px;
        background-position: center;
        background-size: cover;
    }

    .card__description {
        padding: 0 20px;
        & p, a {
            text-align: left;
            line-height: 1.3em;
        }
    }
    `

const Portfolio = () => {
    return (
        <Container id="projects">
            <StyledDescription>
                <h6># portfolio</h6>
                <h5>Projects and Selected Works</h5>
            </StyledDescription>
            <Swiper
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {projectsArray.map((project, index) => (
                    <SwiperSlide key={index}>
                        <Card>
                            <div
                                className="card__image"
                                style={{ backgroundImage: `url(${project.image})` }}
                                alt={project.index}
                            />
                            <div className="card__description">
                                <h5>{project.title}</h5>
                                <p>Technologies used: <br /> {project.description}</p>
                                <a href={project.link}>Link to a project</a>
                            </div>
                        </Card>
                    </SwiperSlide>
                ))}
                <SwiperSlide >
                    <Card>
                        <div
                            className="card__image"
                            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")` }}
                            alt="project1"
                        />
                        <div className="card__description">
                            <h5>Project Name</h5>
                            <p><u>Technologies used:</u> HTML, CSS, REACT, Styled Systems/ Components</p>
                            <a>Link to a project</a>
                        </div>

                    </Card>
                </SwiperSlide>
                <SwiperSlide >
                    Slide 2
                </SwiperSlide >
                <SwiperSlide >
                    Slide 3
                </SwiperSlide>
                <SwiperSlide >
                    Slide 4
                </SwiperSlide>


            </Swiper>
        </Container >
    )
}

export default Portfolio
