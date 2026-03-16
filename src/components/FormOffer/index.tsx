// components/OfferForm/index.tsx

import { useState } from "react";
import type { Offer } from "../../domain/offer/offer.entity";
import { useOffer } from "../../hooks/useOffer";

type Props = {
  initialOfferData?: Offer;
  onSuccess?: () => void;
};

export function FormOffer({ initialOfferData, onSuccess }: Props) {
  const { createOffer, updateOffer } = useOffer();

  const [title, setTitle] = useState(initialOfferData?.title || "");
  const [price, setPrice] = useState(initialOfferData?.price || 0);
  const [discount, setDiscount] = useState(
    initialOfferData?.discountPercentage || 0,
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      title,
      price,
      discountPercentage: discount,
    };

    if (initialOfferData) {
      await updateOffer(initialOfferData.id, payload);
    } else {
      // await createOffer(payload);
    }

    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        placeholder="Title"
        value={initialOfferData?.title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        disabled={true}
      />
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
              type="number"
              placeholder="Price"
              value={initialOfferData?.price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-[154px] border p-2 rounded "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Desconto (%)
            </label>
            <input
              type="number"
              placeholder="Price"
              value={initialOfferData?.discountPercentage}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-[154px] border p-2 rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-1">
        <div className="flex flex-col mr-2">
          <div>
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Qnt em Estoque
            </label>
            <input
              type="number"
              placeholder="Price"
              value={initialOfferData?.stock}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-[154px]  border p-2 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Status
            </label>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              //className="inline-flex items-center justify-center text-black bg-brand box-border border hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              className="inline-flex items-center justify-center text-black bg-brand box-border border hover:bg-brand-strong focus:ring-1 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-sm px-4 py-2.5 focus:outline-none"
              type="button"
            >
              {initialOfferData?.status}
              <svg
                className="w-4 h-4 ms-1.5 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden rounded bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
            >
              <ul
                className="p-2 text-sm font-medium"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Inicio da Oferta
            </label>
            <input
              type="date"
              placeholder="Price"
              value={initialOfferData?.startDate}
              onChange={(e) => setPrice(Number(e.target.value))}
              className=" w-[154px] border p-2 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-heading"
            >
              Fim da Oferta
            </label>
            <input
              type="date"
              placeholder="Price"
              value={initialOfferData?.endDate}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-[154px] border p-2 rounded"
            />
          </div>
        </div>
      </div>

      <button type="submit" className="bg-blue-600 text-white rounded p-2 mt-2">
        Save
      </button>
    </form>
  );
}
