export default function NewTask() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-4"
    >
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-none focus:border-b-2"
      />
      <button className="text-stone-700 hover:text-stone-950">Add Task</button>
    </form>
  );
}
