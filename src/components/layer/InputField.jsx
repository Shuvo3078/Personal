import React from 'react';

const InputField = ({text, className, type, classNameInput}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
          <input className={`p-5 w-[300px] md:w-[450px] lg:w-[609px] outline-none border-b-[5px] border-[#000000] border-l-[5px] placeholder:text-[#8B8B8B] placeholder:text-sm lg:placeholder:text-base placeholder:font-Mont placeholder:font-bold text-black bg-transparent ${classNameInput}`} type={type} placeholder={text} />
          </div>
  );
}

export default InputField;
