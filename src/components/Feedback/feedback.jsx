import React from "react";
import Statistics from "../Statistic/statistic";
import FeedbackOptions from "../FeedbackOptions/feedbackOptions";
import Section from "../Section/section";
import Notification from "../Notification/notification";
class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    incrementStateField = stateField => {
        this.setState({ ...this.state, [stateField]: this.state[stateField] + 1 });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    countPositiveFeedbackPercentage = () => {
        let percent = this.state.good / this.countTotalFeedback();
        return this.countTotalFeedback() > 0 ? Math.round(percent * 100) : 0
    };
    renderStatisticSection = () => {
        if (this.countTotalFeedback() === 0) {
            return <Notification message="There is no feedback"></Notification>;
        }
        const { good, neutral, bad } = this.state;
        return (<Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()} />)
    }

    render() {
       
        const options = Object.keys(this.state);
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.incrementStateField} />
                </Section>
                <Section title="Statistic">
                    {this.renderStatisticSection()}
                </Section>
            </>
                
        )
    }
}

export default Feedback;