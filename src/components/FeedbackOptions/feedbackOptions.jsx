import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>{
    

   
  
      
        return (
            <>
               
                <div
                    style={
                        {
                            display: "grid",
                            gridTemplateColumns: "2fr 2fr 2fr",
                            columnGap: "20px",
                            
                        }}>
                    <button
                        style={
                            {
                                padding: "25px",
                                backgroundColor: "green",
                                fontSize: "25px",
                                border: "none",
                                textShadow: "-1px 1px 0px rgb(50, 50, 50), 1px 1px 0px rgb(50, 50, 50), 1px -1px 0px rgb(50, 50, 50), -1px -1px 0px rgb(50, 50, 50)",
                                color: "white"
                               

                            }}
                        onClick={() => {
                        onLeaveFeedback(options[0])
                    }}>
                        Good
                    </button>
                    <button 
                    style={
                            {
                                padding: "25px",
                                backgroundColor: "orange",
                                fontSize: "25px",
                                border: "none",
                                textShadow: "-1px 1px 0px rgb(50, 50, 50), 1px 1px 0px rgb(50, 50, 50), 1px -1px 0px rgb(50, 50, 50), -1px -1px 0px rgb(50, 50, 50)",
                                color: "white"
                               

                            }}
                    onClick={() => {
                        onLeaveFeedback(options[1])
                    }}>
                        Neutral
                    </button>
                    <button 
                    style={
                            {
                                padding: "25px",
                                backgroundColor: "red",
                                fontSize: "25px",
                                border: "none",
                                textShadow: "-1px 1px 0px rgb(50, 50, 50), 1px 1px 0px rgb(50, 50, 50), 1px -1px 0px rgb(50, 50, 50), -1px -1px 0px rgb(50, 50, 50)",
                                color: "white"
                               

                            }}
                    onClick={() => {
                        onLeaveFeedback(options[2])
                    }}>
                        Bad
                    </button>
                </div>

            </>

        )
    
}

export default FeedbackOptions;