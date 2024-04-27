import { useState } from "react";
import { Button } from "@/components/ui";

const ChatWithAI = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    // Here you can send the question to your AI model for processing
    // For demonstration purposes, let's just echo the question as the response
    setResponse(question);
    // Clear the input field after submitting
    setQuestion("");
  };

  return (
    <div className="common-container" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <div className="flex flex-col w-full">
        <h1
          className="text-center xl:text-left h3-bold md:h1-semibold w-full"
          style={{ color: "#ffffff" }}
        >
          Ask me anything
        </h1>
      </div>

      <div className="flex flex-col w-full gap-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="input-box"
          placeholder="Ask anything.."
          style={{ backgroundColor: "#ffffff", color: "#000000", resize: "vertical" }}
        />
        <Button
          onClick={handleSubmit}
          className="submit-button"
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
        >
          Submit
        </Button>
        <div className="response-box" style={{ backgroundColor: "#000000", color: "#ffffff", maxHeight: "200px", overflowY: "auto" }}>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatWithAI;
