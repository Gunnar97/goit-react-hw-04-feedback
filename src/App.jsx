import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbeackFormBtn/FeedbeackFormBtn';
import Statistics from 'components/Statistics/Statistics';
import { Wrapper } from 'AppStyled';
import Notification from 'components/Notification/Notification';
import React from 'react';

export const App = () => {
  const [formData, setFormData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = selectedOption => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [selectedOption]: prevFormData[selectedOption] + 1,
    }));
  };

  const totalPositivePercentage = () => {
    const totalCountValue = totalCount();
    return totalCountValue === 0
      ? 0
      : Math.ceil((formData.good / totalCountValue) * 100);
  };

  const totalCount = () => {
    const { good, neutral, bad } = formData;
    return good + neutral + bad;
  };

  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(formData)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalCount() ? (
          <Statistics
            data={formData}
            totalCount={totalCount}
            totalPositivePercentage={totalPositivePercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Wrapper>
  );
};
