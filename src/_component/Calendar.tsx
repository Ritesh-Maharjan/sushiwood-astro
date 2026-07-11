import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, SidebarClose, SidebarOpen } from "lucide-react";
import { Calendar as Cal } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { usePopupStore } from "@/stores/Popup";

const TIMES = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

const isDisabledDate = (date: Date) => {
  const month = date.getMonth(); // 0-based (Dec = 11)
  const day = date.getDate();

  // December 22 or December 25
  return month === 11 && (day === 22 || day === 25);
};

// Canadian phone number regex
const canadianPhoneNumberRegex =
  /^(\+?1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(2),

  dor: z
    .date({
      required_error: "A date of reservation is required.",
    })
    .refine(
      (date) => {
        const month = date.getMonth();
        const day = date.getDate();

        // Block December 22 & 25
        return !(month === 11 && (day === 22 || day === 25));
      },
      {
        message: "Reservations are not available on December 22 or 25.",
      }
    ),
  time: z.string({
    required_error: "Please select the timezone to book.",
  }),
  numberOfPeople: z.coerce
    .number({
      required_error: "Please enter the number of people",
    })
    .min(6, {
      message:
        "We are currently only taking reservation for groups of 6 or more",
    }),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .refine(
      (value) => canadianPhoneNumberRegex.test(value),
      "Invalid Canadian phone number. Please use a valid format (e.g., (123) 456-7890)."
    ),
  store: z.string({ required_error: "Please select a store" }),
});

const Calendar = ({ classname }: { classname?: string }) => {
  const { toggle } = usePopupStore();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dor: tomorrow,
      time: "12:00 PM",
      numberOfPeople: 1,
      phoneNumber: "",
      store: "fernie",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // ✅ This will be type-safe and validated.

    const { dor } = values;

    if (
      dor.getFullYear() == 2025 &&
      dor.getMonth() + 1 == 4 &&
      dor.getDate() == 11
    ) {
      alert("Everything's packed today sorry");
    } else {
      try {
        const response = await fetch("/api/sendemail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          alert("Reservation confirmed!! See you soon.");
          form.reset();
        } else {
          alert("Failed to reserve. Please try again!!");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className={cn(
        "bg-black border-2 border-yellow-500 text-white rounded-2xl my-16 w-full max-w-md mx-auto p-4 flex flex-col justify-center items-center min-h-[750px] sm:min-h-[500px]",
        classname
      )}
    >
      {classname && (
        <button
          onClick={() => toggle("")}
          aria-label="close popover"
          className="absolute top-2 sm:top-2 right-2 flex items-center gap-2"
        >
          <span>Close</span>
          <SidebarClose />
        </button>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 flex flex-col mx-auto h-full justify-center space-y-6 w-72 md:w-96"
        >
          <h2 className="text-center text-2xl font-medium">
            Book your reservations
          </h2>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Please enter your name"
                    className="bg-primary text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dor"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of reservations</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"default"}
                        className={cn(
                          " pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Cal
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      fromDate={tomorrow}
                      initialFocus
                      disabled={isDisabledDate}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select the time</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-primary text-white">
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-primary text-white">
                    {TIMES.map((el, index) => (
                      <SelectItem value={el} key={index}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of People</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="bg-primary text-white"
                    placeholder="1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="text" // Use "text" instead of "number"
                    placeholder="(123) 456-7890)"
                    className="bg-primary text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="store"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange} // Update form state when the value changes
                    defaultValue={field.value} // Set the initial value
                  >
                    <SelectTrigger className="bg-primary text-white">
                      <SelectValue placeholder="Select a store" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fernie">Fernie</SelectItem>
                      <SelectItem value="nelson" disabled>
                        Nelson
                      </SelectItem>
                      <SelectItem value="castlegar" disabled>
                        Castlegar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="italic text-gray-400">Reservations will be cancelled for no-shows exceeding 20 minutes past the scheduled time.</p>

          <div className="flex flex-col gap-2">
            <Button variant={"default"} type="submit">
              Book Now
            </Button>
            <span className="text-center">or</span>

            <Button variant="goldenborder" asChild>
              <a href="tel:+7785195255" aria-label="Call Us">
                Call Us
              </a>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Calendar;
