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
import { up } from '../global/mixins';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Container = styled(Box)`
    background-color: ${props => props.theme.pallete.secondary};

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
        font-weight: 500;
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
    width: 70%;
    padding-bottom: 20px;
    background: rgba(255,255,255, 0.35);
    border-radius: 10px;
    box-shadow: 1px 2px 5px rgba(1,1,1, 0.35);
    margin-bottom: 20px;


    & .card__image {
        opacity: 0.85;
        height: 200px;
        border-radius: 10px;
        background-position: top;
        background-size: cover;
    }

    .card__description {

        padding: 0 20px;
        h4 {
            ${props => props.theme.typography.h4}
        }
        h5 {
            ${props => props.theme.typography.h5}
        }
        h4 {
            ${props => props.theme.typography.h4}
            color: ${props => props.theme.pallete.common.white}
        }
        & p {
            ${props => props.theme.typography.body}
            text-align: left;
            line-height: 1.3em;
        }
        .link { 
            ${props => props.theme.typography.link}
            width: 100%;
            text-align: right;
            font-size: 1.25em;
        }
    }
    `

const Portfolio = () => {
    return (
        <Container
            id="projects"
            px={[5, 20, 40]}
            py={[5, 10, 10]}
            mx={[-5, null, null]}
        >
            <StyledDescription>
                <h4># portfolio</h4>
                <h3>Projects and Selected Works</h3>
            </StyledDescription>
            <Swiper
                slidesPerView={1}
                navigation
                breakpoints={{
                    700: {
                        slidesPerView: 2
                    },
                    1080: {
                        slidesPerView: 3
                    }
                }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <Card height={['350px', '400px', '450px']}>
                            <div
                                className="card__image"
                                style={{ backgroundImage: `url(${project.image})` }}
                                alt={project.index}
                            />
                            <div className="card__description">
                                <h4>{project.title}</h4>
                                <Box display="flex" flexDirection="column" justifyContent="space-between">
                                    <h5 style={{ textAlign: "left" }}>Tech spec:</h5>
                                    <p>{project.description}</p>
                                    <div className="link">
                                        <a href={project.link}>{"See project >>"}</a>
                                    </div>
                                </Box>


                            </div>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container >
    )
}

export default Portfolio
