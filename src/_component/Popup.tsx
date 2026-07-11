import React, { Suspense, lazy } from "react";
import { usePopupStore } from "@/stores/Popup";

// Form code (react-hook-form, zod, date-fns — ~230KB) only downloads when a popup is first opened
const Calendar = lazy(() => import("./Calendar"));
const Reservation = lazy(() => import("./Reservation"));

const Popup = () => {
  const popup = usePopupStore((state) => state.popup);

  if (popup !== "reservation" && popup !== "order") return <></>;

  return (
    <section className="fixed flex justify-center overflow-scroll inset-0 z-50 bg-black/60">
      <Suspense fallback={<div className="text-white self-center">Loading…</div>}>
        {popup === "reservation" ? (
          <Calendar classname="relative h-fit p-8 bottom-4 top-0" />
        ) : (
          <Reservation />
        )}
      </Suspense>
    </section>
  );
};

export default Popup;
