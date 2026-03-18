import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter";
import { useOffer } from "../../hooks/useOffer";
import { useToast } from "../../hooks/useToast";
import { Toast } from "../../components/Toast";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import type { Offer } from "../../domain/offer/offer.entity";

export function Dashboard() {
  const { filteredOffers, createOffer, updateOffer, deleteOffer, cancelOffer } =
    useOffer();
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal(offerData: Offer | undefined) {
    setSelectedOffer(offerData);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  const { toast, showToast, hideToast } = useToast();

  async function handleSubmit(data: Offer, action: string) {
    const result =
      action === "new" ? await createOffer(data) : await updateOffer(data);

    showToast(result.message, result.success ? "success" : "error");

    if (result.success) {
      closeModal();
    }
  }

  async function handleDelete(id: string) {
    const result = await deleteOffer(id);

    showToast(result.message, result.success ? "success" : "error");

    if (result.success) {
      closeModal();
    }
  }

  async function handleCancel(id: string) {
    const result = await cancelOffer(id);

    showToast(result.message, result.success ? "success" : "error");
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header onOpenModal={() => openModal(undefined)} />
        <main className="p-8 max-w-7xl mx-auto">
          <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <Filter />
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredOffers.map((offer) => (
              <Card
                key={offer.id}
                offerData={offer}
                onOpenModal={() => openModal(offer)}
                onCancel={handleCancel}
              />
            ))}
          </section>
        </main>
      </div>
      <Modal
        isOpen={isModalOpen}
        offerData={selectedOffer}
        onClose={closeModal}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </>
  );
}
