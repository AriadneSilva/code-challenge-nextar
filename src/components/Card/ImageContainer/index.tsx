import type { OfferStatus } from "../../../domain/offer/offer.entity";

type Props = {
  status: OfferStatus;
  urlImage: string;
  imgTitle: string;
  discount: number;
};

const statusStyle = {
  active: {
    badge: "bg-emerald-500",
    gradient: "from-emerald-100 to-transparent",
  },
  scheduled: {
    badge: "bg-yellow-500",
    gradient: "from-yellow-100 to-transparent",
  },
  expired: {
    badge: "bg-red-500",
    gradient: "from-red-100 to-transparent",
  },
};

export function ImageContainer({
  status,
  urlImage,
  imgTitle,
  discount,
}: Props) {
  return (
    <>
      <div
        className={`
        relative
        w-48
        flex
        items-center
        justify-center
        rounded-xl
        bg-gradient-to-r
        ${statusStyle[status].gradient}
        to-transparent
        `}
      >
        <div
          className={`
          absolute
          -top-3
          left-0
          px-4
          py-1
          text-xs
          font-semibold
          text-white
          rounded-full
          uppercase
          ${statusStyle[status].badge}
          `}
        >
          {status}
        </div>

        <div
          className="
          absolute
          top-3
          right-0
          bg-red-500
          text-white
          text-sm
          font-bold
          px-3
          py-1
          rounded-md
          shadow
          "
        >
          {discount}% OFF
        </div>
        <img
          src={urlImage || "https://via.placeholder.com/150"}
          alt={imgTitle}
          className="
          w-36
          object-contain
          drop-shadow-[0_40px_30px_rgba(0,0,0,0.35)]
          "
        />
      </div>
    </>
  );
}
