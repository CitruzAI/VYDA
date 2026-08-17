import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { vydaHotels } from "../data/hotels.js";

function fmt(d) {
  return d.toISOString().split("T")[0];
}

export default function BookingWidget() {
  const cities = [...new Set(vydaHotels.map((h) => h.city))];
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [checkin, setCheckin] = useState(fmt(today));
  const [checkout, setCheckout] = useState(fmt(tomorrow));

  useEffect(() => {
    const inD = new Date(checkin);
    if (new Date(checkout) <= inD) {
      const next = new Date(inD);
      next.setDate(next.getDate() + 1);
      setCheckout(fmt(next));
    }
  }, [checkin, checkout]);

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("stays")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="booking" className="relative z-20 max-w-[1400px] mx-auto px-5 md:px-10 -mt-[92px]">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onSubmit={handleSubmit}
        className="bg-white-warm rounded-sm shadow-[0_30px_60px_-20px_rgba(20,14,9,0.35)] p-6 md:p-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_auto] gap-6 lg:gap-0"
      >
        <Field label="Hotel">
          <select
            required
            defaultValue=""
            className="w-full bg-transparent font-display text-lg text-ink focus:outline-none"
          >
            <option value="" disabled>
              Select a hotel
            </option>
            {vydaHotels.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Destination">
          <select
            required
            defaultValue=""
            className="w-full bg-transparent font-display text-lg text-ink focus:outline-none"
          >
            <option value="" disabled>
              Select a city
            </option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Check-in">
          <input
            type="date"
            required
            value={checkin}
            min={fmt(today)}
            onChange={(e) => setCheckin(e.target.value)}
            className="w-full bg-transparent font-display text-lg text-ink focus:outline-none"
          />
        </Field>
        <Field label="Check-out" border={false}>
          <input
            type="date"
            required
            value={checkout}
            min={fmt(new Date(new Date(checkin).getTime() + 86400000))}
            onChange={(e) => setCheckout(e.target.value)}
            className="w-full bg-transparent font-display text-lg text-ink focus:outline-none"
          />
        </Field>
        <div className="flex items-center md:col-span-2 lg:col-span-1 lg:pl-6">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-espresso text-ivory px-8 py-[18px] text-[0.82rem] font-semibold uppercase tracking-[0.09em] transition-colors duration-300 hover:bg-champagne hover:text-espresso"
          >
            <Search className="w-4 h-4" strokeWidth={1.75} />
            Search Rooms
          </button>
        </div>
      </motion.form>
    </div>
  );
}

function Field({ label, children, border = true }) {
  return (
    <div
      className={`px-1 md:px-6 py-1.5 flex flex-col gap-1.5 ${border ? "md:border-r border-ink/10" : ""} border-b md:border-b-0 border-ink/10 pb-4 md:pb-1.5`}
    >
      <label className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ink/55">
        {label}
      </label>
      {children}
    </div>
  );
}
