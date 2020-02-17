import React from 'react';
import socialButterflyImage from '../../assets/images/Social-Butterflt.gif';

const SocialButterfly = () => (
  <div className='post'>
    <a
      href='https://github.com/lukeketchen/portfolio-04-social-butterfly'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={socialButterflyImage} alt='post' />
    </a>
    <h5>Social Butterfly</h5>

    <div className='icondiv'>
      <a
        href='https://learning-04.web.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fas fa-desktop'></i>
      </a>
      <a
        href='https://github.com/lukeketchen/portfolio-04-social-butterfly'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-github'></i>
      </a>
    </div>
  </div>
);

export default SocialButterfly;
