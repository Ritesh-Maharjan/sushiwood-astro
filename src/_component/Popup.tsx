import React from "react";
import Calendar from "./Calendar";
import { usePopupStore } from "@/stores/Popup";
import Reservation from "./Reservation";

const Popup = () => {
  const popup = usePopupStore((state) => state.popup);

  return popup === "reservation" ? (
    <section className="fixed flex justify-center overflow-scroll inset-0 z-50 bg-black/60">
      <Calendar classname="relative h-fit p-8 bottom-4 top-0" />
    </section>
  ) : popup === "order" ? (
    <section className="fixed flex justify-center overflow-scroll inset-0 z-50 bg-black/60">
      <Reservation />
    </section>
  ) : (
    <></>
  );
};

export default Popup;
