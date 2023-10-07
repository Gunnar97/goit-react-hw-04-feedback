import React from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbeackFormBtn/FeedbeackFormBtn';
import Statistics from 'components/Statistics/Statistics';
import { Wrapper } from 'AppStyled';
import Notification from 'components/Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = selectedOption => {
    this.setState(prevState => ({
      [selectedOption]: prevState[selectedOption] + 1,
    }));
  };

  totalPositivePercentage = () => {
    return this.totalCount === 0
      ? 0
      : Math.ceil((this.state.good / this.totalCount()) * 100);
  };

  totalCount = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.totalCount() ? (
            <Statistics
              data={this.state}
              totalCount={this.totalCount}
              totalPositivePercentage={this.totalPositivePercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default App;
