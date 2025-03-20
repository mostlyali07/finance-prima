import React, { useState } from "react";

const MainChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      type: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.aimlapi.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 234e3534d6f44b1fbf9da9d2af9e770a",
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-chat",
            messages: [
              {
                role: "system",
                content: `Translate this text to only Japanese: ${inputValue}`,
              },
            ],
            max_tokens: 512,
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      const translatedText =
        data.choices[0]?.message?.content || "Translation error.";

      const finalMessage = {
        id: messages.length + 2,
        text: `${translatedText}`,
        type: "translated",
      };

      setMessages((prevMessages) => [...prevMessages, finalMessage]);
    } catch (error) {
      console.error("Error calling DeepSeek API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: messages.length + 2,
          text: "Translation failed. Please try again.",
          type: "error",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-primary text-white">Chat</div>
            <div
              className="card-body"
              style={{ height: "600px", overflowY: "scroll" }}
            >
              {messages.map((message) => (
                <div key={message.id} className="mb-2">
                  <div
                    className={`alert ${
                      message.type === "user"
                        ? "alert-info"
                        : message.type === "translated"
                        ? "alert-success"
                        : "alert-danger"
                    } p-2`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
              )}
            </div>
            <div className="card-footer">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleSendMessage}
                    disabled={isLoading}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChat;
