import { useOffer } from "../../hooks/useOffer";

export function Filter() {
  const { setFilter } = useOffer();
  return (
    <>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className="px-4 py-2 bg-white border rounded-lg"
          onClick={() => {
            setFilter("active");
          }}
        >
          Ativas
        </button>

        <button
          className="px-4 py-2 bg-white border rounded-lg"
          onClick={() => setFilter("scheduled")}
        >
          Agendadas
        </button>

        <button
          className="px-4 py-2 bg-white border rounded-lg"
          onClick={() => setFilter("expired")}
        >
          Expiradas
        </button>
      </div>
    </>
  );
}
