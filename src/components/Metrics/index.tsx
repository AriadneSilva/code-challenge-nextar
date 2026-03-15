export function Metrics() {
  return (
    <>
      <div className="bg-white rounded-xl p-4 shadow">
        <p className="text-gray-500">Active Offers</p>
        <h2 className="text-2xl font-bold">5</h2>
      </div>

      <div className="bg-white rounded-xl p-4 shadow">
        <p className="text-gray-500">Scheduled</p>
        <h2 className="text-2xl font-bold">2</h2>
      </div>

      <div className="bg-white rounded-xl p-4 shadow">
        <p className="text-gray-500">Expired</p>
        <h2 className="text-2xl font-bold">1</h2>
      </div>

      <div className="bg-white rounded-xl p-4 shadow">
        <p className="text-gray-500">Revenue</p>
        <h2 className="text-2xl font-bold">$12,500</h2>
      </div>
    </>
  );
}
