import { Card } from "../../components/Card";
import { mockOffers } from "../../mocks/offer.mock";
import { Header } from "../../components/Header";
import { Metrics } from "../../components/Metrics";
import { Filter } from "../../components/Filter";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-8 max-w-7xl mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Metrics />
        </section>
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <Filter />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockOffers.map((offer) => (
            <Card key={offer.id} offerData={offer} />
          ))}
        </section>
      </main>
    </div>
  );
}
