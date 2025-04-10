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
    <div className="w-full flex items-end gap-8 px-6">
      {dates.map((date) => {
        const isFirst = getDate(date) === 1;
        const label = isFirst
          ? `${format(date, "MMM")} ${date.getFullYear()}`
          : "";

        return (
          <div key={date.toString()} className="w-4 text-xs text-zinc-400">
            {isFirst && <div className="mb-4">{label}</div>}
            <div>{date.getDate()}</div>
          </div>
        );
      })}
    </div>
  );
}
