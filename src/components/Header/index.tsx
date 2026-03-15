export function Header() {
  return (
    <header className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Controle de Ofertas</h1>

      <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
        + Nova Oferta
      </button>
    </header>
  );
}
