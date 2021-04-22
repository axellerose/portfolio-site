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

const Container = styled(Box)`
    background-color: ${props => props.theme.pallete.secondary};
    margin: 0 -20px;
    padding: 20px 0;

    .swiper-container {
      width: 100%;
      height: 100%;
    }
  
    .swiper-button-next, .swiper-button-prev {
        color: white;
        outline: none;
        margin: auto 0;
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
    margin-left: 20px;
    h3 {
        ${props => props.theme.typography.h3}
    }
    h4 {
        ${props => props.theme.typography.h4}
    }
`

const Card = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-bottom: 20px;
    background: rgba(255,255,255, 0.35);
    border-radius: 10px;
    box-shadow: 1px 2px 5px rgba(1,1,1, 0.35);
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
        & p {
            text-align: left;
            line-height: 1.3em;
        }
        .link { 
            width: 100%;
            text-align: right;
        }
    }
    `

const Portfolio = () => {
    return (
        <Container id="projects">
            <StyledDescription>
                <h4># portfolio</h4>
                <h3>Projects and Selected Works</h3>
            </StyledDescription>
            <Swiper
                slidesPerView={1}
                navigation

            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {projects.map((project, index) => (
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
                                <div className="link">
                                    <a href={project.link}>{"Check it out >>"}</a>
                                </div>

                            </div>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container >
    )
}

export default Portfolio
