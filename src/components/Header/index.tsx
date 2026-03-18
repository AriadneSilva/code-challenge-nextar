type Props = {
  onOpenModal: () => void;
};

export function Header({ onOpenModal }: Props) {
  return (
    <>
      <header className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Controle de Ofertas</h1>

        <button
          className="bg-gray-200 text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
          onClick={() => {
            onOpenModal();
          }}
        >
          + Nova Oferta
        </button>
      </header>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </>
  );
}
