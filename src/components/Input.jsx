import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputStyling =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold upppercase text-stone-500">
        {props.text}
      </label>
      {props.isTextarea ? (
        <textarea ref={ref} className={inputStyling} required />
      ) : (
        <input ref={ref} type={props.type} className={inputStyling} required />
      )}
      <br />
    </p>
  );
});

export default Input;
