import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancelAddProject }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });

    title.current.value = "";
    description.current.value = "";
    date.current.value = "";
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invaild Input
        </h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forget to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="px-6 py-2 rounded-md
          text-stone-800 hover:text-stone-950"
              onClick={onCancelAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md
          bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              save
            </button>
          </li>
        </menu>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input ref={title} text="Title" type="text" />
          <Input ref={description} text="Discription" isTextarea />
          <Input ref={date} text="Due date" type="date" />
        </form>
      </div>
    </>
  );
}
