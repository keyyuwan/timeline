import { useDates } from "@hooks/timeline/useDates";
import { format, getDate } from "date-fns";

export function Timeline() {
  const { dates } = useDates({ year: 2021 });

  return (
    <div className="w-full flex items-end gap-10">
      {dates.map((date) => {
        const dayOfTheMonth = getDate(date);

        const isFirst = dayOfTheMonth === 1;
        const label = isFirst
          ? `${format(date, "MMM")}, ${date.getFullYear()}`
          : "";

        return (
          <div
            key={date.toString()}
            className="relative w-3 text-xs text-zinc-400"
          >
            {isFirst && (
              <div className="mb-4 font-medium text-zinc-300">{label}</div>
            )}
            <div className="w-inherit">
              {dayOfTheMonth.toString().padStart(2, "0")}
            </div>

            <div className="absolute top-full left-1/2 -translate-x-1/2 w-px bg-zinc-700 opacity-70 h-full" />
          </div>
        );
      })}
    </div>
  );
}
