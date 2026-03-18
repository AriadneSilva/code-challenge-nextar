// components/OfferForm/index.tsx

import { useState } from "react";
import type { Offer, OfferFormData } from "../../domain/offer/offer.entity";


type Props = {
  initialOfferData?: Offer;
  onSubmit: (data: Offer, action: string) => void;
};

export function FormOffer({ initialOfferData, onSubmit }: Props) {
  const [formDataOffer, setFormDataOffer] = useState<OfferFormData>({
    id: initialOfferData?.id || "",
    version: initialOfferData?.version || 0,
    title: initialOfferData?.title || "",
    price: initialOfferData?.price || 0,
    urlImage: initialOfferData?.urlImage || "",
    discountPercentage: initialOfferData?.discountPercentage || 0,
    stock: initialOfferData?.stock || 0,
    startDate: initialOfferData?.startDate || new Date(),
    endDate: initialOfferData?.endDate || new Date(),
    status: initialOfferData?.status || "active",
  });

  function parseValue(name: string, value: string) {
    if (["price", "discountPercentage", "stock", "version"].includes(name)) {
      return Number(value);
    }

    if (["startDate", "endDate"].includes(name)) {
      return new Date(value);
    }

    return value;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setFormDataOffer((prev) => ({
      ...prev,
      [name]: parseValue(name, value),
    }));
  }
  async function handleImageUpload(file: File) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result as string);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Selecione uma imagem válida");
      return;
    }

    const imageUrl = await handleImageUpload(file);

    setFormDataOffer((prev) => ({
      ...prev,
      urlImage: imageUrl,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    //onSubmit(formDataOffer as Offer);

    if (initialOfferData) {
      onSubmit(formDataOffer as Offer, "update");
    } else {
      onSubmit(formDataOffer as Offer, "new");
    }

    // onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label
          htmlFor="title"
          className="block mb-1 text-sm font-medium text-heading"
        >
          Nome do produto
        </label>
        <input
          name="title"
          value={formDataOffer.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label
          htmlFor="imagem"
          className="block mb-1 text-sm font-medium text-heading"
        >
          Imagem
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded"
        />

        {formDataOffer.urlImage && (
          <img
            src={formDataOffer.urlImage}
            alt="Preview"
            className="w-32 h-32 object-cover rounded border"
          />
        )}
      </div>
      <div className="flex flex-row gap-1">
        <div className="flex flex-col mr-2">
          <div>
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Preço
            </label>
            <input
              placeholder="Price"
              name="price"
              value={formDataOffer.price}
              onChange={handleChange}
              className="w-[154px] border p-2 rounded "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="discount"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Desconto (%)
            </label>
            <input
              placeholder="Discount"
              name="discountPercentage"
              value={formDataOffer.discountPercentage}
              onChange={handleChange}
              className="w-[154px] border p-2 rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-1">
        <div className="flex flex-col mr-2">
          <div>
            <label
              htmlFor="stock"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Qnt em Estoque
            </label>
            <input
              placeholder="Stock"
              name="stock"
              value={formDataOffer.stock}
              onChange={handleChange}
              className="w-[154px]  border p-2 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="status"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Status
            </label>
            <select
              name="status"
              value={formDataOffer.status}
              onChange={handleChange}
              className="border p-2 rounded w-[150px]"
            >
              <option value="active">Active</option>
              <option value="expired">Expired</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="startDate"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Inicio da Oferta
            </label>
            <input
              type="date"
              placeholder="Data de Inicio"
              name="startDate"
              value={
                formDataOffer.startDate
                  ? formDataOffer.startDate.toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
              className=" w-[154px] border p-2 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="endDate"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Fim da Oferta
            </label>
            <input
              type="date"
              placeholder="Price"
              name="endDate"
              value={
                formDataOffer.endDate
                  ? formDataOffer.endDate.toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
              className="w-[154px] border p-2 rounded"
            />
          </div>
        </div>
      </div>

      <button type="submit" className="bg-blue-600 text-white rounded p-2 mt-2">
        Salvar
      </button>
    </form>
  );
}
