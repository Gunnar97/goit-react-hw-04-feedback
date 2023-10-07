import React from 'react';
import PropTypes from 'prop-types';
import { ChoosBtn, TextBtn } from './FeedbeackFormBtnStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const button = options.map(state => {
    return (
      <ChoosBtn
        type="button"
        key={state}
        onClick={() => onLeaveFeedback(state)}
      >
        <TextBtn>{state.toUpperCase()}</TextBtn>
      </ChoosBtn>
    );
  });
  return <div>{button}</div>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
