import React from 'react';
import PropTypes from 'prop-types';
import { StatiList, StaticItem, StaticTitle } from './StatisticsStyled';

const Statistics = ({ data, totalCount, totalPositivePercentage }) => {
  const dataStat = Object.entries(data);
  const statItem = dataStat.map(state => {
    return (
      <StaticItem key={state[0]} id={state[0]}>
        <StaticTitle>{state[0]}: </StaticTitle>
        <StaticTitle>{state[1]}</StaticTitle>
      </StaticItem>
    );
  });
  return (
    <>
      <StatiList>{statItem}</StatiList>
      <StatiList>
        <StaticItem>
          <StaticTitle>Total: </StaticTitle>
          <StaticTitle>{totalCount()}</StaticTitle>
        </StaticItem>
        <StaticItem>
          <StaticTitle>Positive feedback: </StaticTitle>
          <StaticTitle>{totalPositivePercentage()}%</StaticTitle>
        </StaticItem>
      </StatiList>
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  totalCount: PropTypes.func,
  totalPositivePercentage: PropTypes.func,
};

export default Statistics;
