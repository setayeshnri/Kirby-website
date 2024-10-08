"use client";
import QuestionBox from "@/components/questionBox";
import TextBox from "@/components/textBox";
import useApi from "../api/useApi";
import KirbyAnimation from "@/app/animations/page";
const Home: React.FC = () => {
  const { messages, sendMessage } = useApi();
  const filteredMessages = messages.filter(
    (message) => message.role !== "system"
  );

  function handleSend(input: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className=" bg-[url('/chatBot/gptbg.png')] max-lg:bg-[url('/chatBot/wallpaper.png')] flex flex-row justify-around h-[100vh] bg-cover overflow-hidden ">
      <KirbyAnimation />
      <div className="relative self-center flex flex-col justify-between items-center top-[5vw] w-[36vw] h-[40vw] max-lg:w-[70%] bg-white bg-opacity-40 rounded-[50px] p-[20px] max-lg:h-[60%]">
        <TextBox conversation={filteredMessages} />
        <div>
          <QuestionBox onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
