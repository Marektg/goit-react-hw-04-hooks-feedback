import Feedback from "./Feedback/feedback";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'flex-start',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Feedback />
    </div>
  );
};
