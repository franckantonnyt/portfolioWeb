import React from 'react';

import ArrowDouble from '../../assets/icons/double-arrow.png';

import { Container } from './styles';

const Card = ({
  logo,
  projectName,
  iconOne,
  iconTwo,
  iconThree,
  iconFour,
  percentageThree,
  percentageFour,
  descriptionProject,
  gitHubRepository,
}) => {
  return (
    <Container>
      <div className='background-card-modal'>
        <div className='header-card-modal'>
          <div className='header-img-card'>
            <div className='header-details-card'>
              <img
                className='img-first-child'
                src={iconOne}
                alt='Tecnologia Utilizada'
              />
              <img src={iconTwo} alt='Tecnologia Utilizada' />
            </div>
            <div className='header-img'>
              <img src={logo} alt='Projeto BeTheHero' />
            </div>
          </div>
          <p className='header-title-card'>{projectName}</p>
        </div>
        <div className='body-card-modal'>
          <div className='details-card-modal'>
            <div className='details-card-left'>
              <img src={iconThree} alt='Tecnologia Utilizada' />
              <p>{percentageThree}</p>
            </div>
            <div className='details-card-right'>
              <img src={iconFour} alt='Tecnologia Utilizada' />
              <p>{percentageFour}</p>
            </div>
          </div>
          <div className='details-card-description'>
            <p>{descriptionProject}</p>
          </div>
          <div className='details-card-footer'>
            <a
              target='_blank'
              className='button-details-link'
              rel='noopener noreferrer'
              href={gitHubRepository}
            >
              <img src={ArrowDouble} alt='Acessar' />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
