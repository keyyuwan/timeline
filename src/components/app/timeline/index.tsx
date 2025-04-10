import { format, getDate } from "date-fns";

export function Timeline() {
  function getFullYearDates(year: number): Date[] {
    const dates: Date[] = [];
    const start = new Date(year, 0, 1); // Jan 1
    const end = new Date(year, 11, 31); // Dec 31

    const current = new Date(start);

    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }

  const year = 2021;
  const dates = getFullYearDates(year);

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
