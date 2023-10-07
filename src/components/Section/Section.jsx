import React from 'react';
import PropTypes from 'prop-types';
import { CheckTitle } from './SectionStyled';

const Section = ({ title, children }) => {
  return (
    <>
      <CheckTitle>{title}</CheckTitle>
      <>{children}</>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
