import { useOffer } from "../../hooks/useOffer";

export function Filter() {
  const { filter, setFilter, metrics } = useOffer();

  function getButtonStyle(current: string) {
    return filter === current
      ? "px-4 py-2 bg-blue-600 text-white rounded-lg transition-colors duration-200"
      : "px-4 py-2 bg-white border rounded-lg transition-colors duration-200";
  }

  return (
    <>
      <div className="flex gap-2">
        <button
          className={getButtonStyle("All")}
          onClick={() => setFilter("All")}
        >
          Todas
        </button>

        <button
          className={getButtonStyle("active")}
          onClick={() => {
            setFilter("active");
          }}
        >
          Ativas ({metrics.active})
        </button>

        <button
          className={getButtonStyle("scheduled")}
          onClick={() => setFilter("scheduled")}
        >
          Agendadas ({metrics.scheduled})
        </button>

        <button
          className={getButtonStyle("expired")}
          onClick={() => setFilter("expired")}
        >
          Expiradas ({metrics.expired})
        </button>
      </div>
    </>
  );
}
