import React from "react";
import ChatbotHeader from "../../components/chatbot/ChatbotHeader";

const SideContractsOptions = (props) => {
  const botAvatar = process.env.PUBLIC_URL + "/assets/avatar.png";
  const rightArrow = process.env.PUBLIC_URL + "/assets/right_arrow_18.png";
  const options = props.options || [{}];

  const optionsMarkup = options.map((option, index) => (
    <div 
      class="flex h-[34px] w-full cursor-pointer justify-between bg-Fill-Gray-Assistive p-2 text-xs text-Text-Normal hover:bg-Fill-Gray-Strong"
      key={index}
      onClick={() => props.actionProvider[option.handler]()}
    >
      <div>{option.text}</div>
      <div class="flex h-[18px] w-[18px] items-center">
        <img src={rightArrow} />
      </div>
    </div>
  ));

  return (
    <div class="mb-4 w-[200px]">
      <div class="flex">
        <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
        <div>
          <ChatbotHeader />
          <div class="ml-2 flex h-auto w-[400px] flex-col bg-white p-3 rounded-[10px]">
            <div class="mb-3 flex text-sm font-normal">질문을 선택해주세요</div>
            {/* 부모 div에 rounded-[8px]과 overflow-hidden 적용 */}
            <div class="rounded-[9px] overflow-hidden w-full">
              {optionsMarkup}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContractsOptions;