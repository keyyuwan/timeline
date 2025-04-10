import { useDates } from "@hooks/timeline/useDates";
import { useTimeline } from "@hooks/timeline/useTimeline";
import { DAY_ITEM_WIDTH_IN_PX, DAY_WIDTH_IN_PX } from "@utils/constants";
import { format, getDate } from "date-fns";

export function Timeline() {
  const { dates } = useDates({ year: 2021 });
  const { lanesHeight } = useTimeline();

  return (
    <div className="w-full flex items-end" style={{ gap: DAY_WIDTH_IN_PX }}>
      {dates.map((date) => {
        const dayOfTheMonth = getDate(date);
        const formattedDayOfTheMonth = dayOfTheMonth
          .toString()
          .padStart(2, "0");

        const isFirstDayOfTheMonth = dayOfTheMonth === 1;
        const label = isFirstDayOfTheMonth
          ? `${format(date, "MMM")}, ${date.getFullYear()}`
          : "";

        return (
          <div
            key={date.toString()}
            className="relative text-xs text-zinc-400"
            style={{ width: DAY_ITEM_WIDTH_IN_PX }}
          >
            {isFirstDayOfTheMonth && (
              <div className="mb-4 font-medium text-zinc-300">{label}</div>
            )}

            <div className="w-inherit">{formattedDayOfTheMonth}</div>

            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-px bg-zinc-700 data-[first-day=true]:bg-white"
              data-first-day={isFirstDayOfTheMonth}
              style={{ height: lanesHeight }}
            />
          </div>
        );
      })}
    </div>
  );
}
