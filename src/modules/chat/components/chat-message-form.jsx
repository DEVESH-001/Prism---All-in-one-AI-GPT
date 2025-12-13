"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";

const ChatMessageForm = ({ initialMessage, onMessageChange }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage); //todo look for this 
      onMessageChange?.("");
    }
  }, [initialMessage, onMessageChange]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("message sent");
    } catch (error) {
      alert("error sending the message", error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-6 ">
      <form onSubmit={{ handleSubmit }}>
        <div className="border-border border relative rounded-2xl shadow-sm transition-all">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className={
              "max-h-50 min-h-15 resize-none border-0 bg-transparent px-4 py-3 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            }
            onkeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />

          {/* model selector */}
          <div className="flex items-center justify-between gap-4 border-t px-4 py-2">
            <div className="flex items-center gap-1">
              <Button variant={"outline"}>Select a Model</Button>
            </div>
            <Button
              type={"submit"}
              size={"sm"}
              variant={message.trim() ? "default" : "ghost"} // Change variant based on message content
              disabled={!message.trim()} // Disable button if message is empty
              className="cursor-pointer"
            >
              <Send className="h-4 w-4" />{" "}
              <span className="sr-only">Send Message</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatMessageForm;
