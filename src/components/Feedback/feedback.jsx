import React from "react";
import Statistics from "../Statistic/statistic";
import FeedbackOptions from "../FeedbackOptions/feedbackOptions";
import Section from "../Section/section";
import Notification from "../Notification/notification";
import { useState } from "react";

const INITIAL_VALUE = {
    good: 0,
    neutral: 0,
    bad: 0,
}

const Feedback = () => {
    const [addFeeedback, setFeedbackCount] = useState({ ...INITIAL_VALUE });
    const { good, neutral, bad } = addFeeedback;
    const options = Object.keys(INITIAL_VALUE);

    const incrementStateField = stateField => {
        setFeedbackCount({ ...addFeeedback, [stateField]: addFeeedback[stateField] + 1 });
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        let percent = good / countTotalFeedback();
        return countTotalFeedback() > 0 ? Math.round(percent * 100) : 0
    };

    const renderStatisticSection = () => {
        if (countTotalFeedback() === 0) {
            return <Notification message="There is no feedback"></Notification>;
        }
        return (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />)
    }



    
    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} onLeaveFeedback={incrementStateField} />
            </Section>
            <Section title="Statistic">
                {renderStatisticSection()}
            </Section>
        </>

    )

}



export default Feedback;