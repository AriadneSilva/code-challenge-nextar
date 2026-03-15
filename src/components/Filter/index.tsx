export function Filter() {
  return (
    <>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          All
        </button>

        <button className="px-4 py-2 bg-white border rounded-lg">Active</button>

        <button className="px-4 py-2 bg-white border rounded-lg">
          Scheduled
        </button>

        <button className="px-4 py-2 bg-white border rounded-lg">
          Expired
        </button>
      </div>

      <input
        type="text"
        placeholder="Search offers..."
        className="border rounded-lg px-4 py-2 w-full md:w-72"
      />
    </>
  );
}
