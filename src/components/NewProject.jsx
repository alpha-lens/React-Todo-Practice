import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="px-6 py-2 rounded-md
          text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md
          bg-stone-800 text-stone-50 hover:bg-stone-950"
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
        <Input text="Title" type="text" />
        <Input text="Discription" isTextarea />
        <Input text="Due date" type="date" />
      </form>
    </div>
  );
}
