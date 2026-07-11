import { Button } from "@/components/ui/button";
import { usePopupStore } from "@/stores/Popup";
import { SidebarClose } from "lucide-react";
import React from "react";

const Reservation = () => {
  const { toggle } = usePopupStore();

  return (
    <div
      className={
        "bg-black border-2 border-yellow-500 text-white rounded-2xl flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 w-auto max-w-full"
      }
    >
				<button onClick={() => toggle('')} aria-label='close popover' className='absolute top-2 sm:top-2 right-2 flex items-center gap-2'>
					<span>Close</span>
					<SidebarClose />
				</button>

      <div className="p-4 flex flex-col mx-auto my-auto h-full justify-center space-y-6 w-72 md:w-96">
        <h2 className="text-center text-2xl font-medium">Choose a location</h2>

        <Button variant={"secondary"} asChild>
          <a
            href="https://order.tbdine.com/pickup/39366/menu"
            aria-label="Call Us"
            target="_blank"
          >
            Fernie - Order for pickup
          </a>
        </Button>
        <Button variant={"goldenborder"}>
          <a href="tel:7784631117" aria-label="Call Us">
            Nelson - Call us
          </a>
        </Button>
        <Button variant={"default"}>Castlegar - Coming Soon</Button>
      </div>
    </div>
  );
};

export default Reservation;
