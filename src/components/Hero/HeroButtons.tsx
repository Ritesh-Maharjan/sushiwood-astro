import { Button } from "@/components/ui/button";
import { usePopupStore } from "@/stores/Popup";

export default function HeroButtons() {
  const { toggle } = usePopupStore();
  return (
    <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 flex justify-center gap-4 md:hidden w-full px-4">
      <Button
        className="w-fit font-semibold text-base text-black"
        variant={"outline"}
        onClick={() => toggle("order")}
      >
        Order Now
      </Button>
      <Button
        className="w-fit font-semibold text-base"
        variant={"destructive"}
        onClick={() => toggle("reservation")}
      >
        Reservations
      </Button>
    </div>
  );
}
