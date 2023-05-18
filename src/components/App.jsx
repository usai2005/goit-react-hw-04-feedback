import { useReducer } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { reducer } from '../hooks/reducer';

export const App = ({ step }) => {
  const [feedbackState, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackButtonClick = e => {
    const stateValue = e;

    dispatch({ type: stateValue, payload: step });
  };

  const countTotalFeedback = () => {
    return feedbackState.good + feedbackState.neutral + feedbackState.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (feedbackState.good / countTotalFeedback()) * 100;
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedbackState)}
          onLeaveFeedback={handleFeedbackButtonClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet" />
        ) : (
          <Statistics
            good={feedbackState.good}
            neutral={feedbackState.neutral}
            bad={feedbackState.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
