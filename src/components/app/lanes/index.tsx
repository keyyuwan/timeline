import { differenceInDays, parseISO } from "date-fns";
import { assignLanes } from "../../../utils/assign-lanes";
import {
  TIMELINE_ITEMS,
  type TimelineItem,
} from "../../../utils/timeline-items";

const ITEM_HEIGHT_IN_PX = 32;
const GAP_IN_PX = 8;
const DAY_ITEM_WIDTH_IN_PX = 12;
const DAY_WIDTH_IN_PX = 40;
const TIMELINE_START_DATE = new Date("2021-01-01");

type Layout = {
  left: number; // px
  width: number; // px
};

export function Lanes() {
  function getItemLayout(item: TimelineItem, timelineStartDate: Date): Layout {
    const startDateISO = parseISO(item.startDate);
    const endDateISO = parseISO(item.endDate);

    const daysFromStart = differenceInDays(startDateISO, timelineStartDate);
    const durationInDays = differenceInDays(endDateISO, startDateISO);

    const left =
      daysFromStart * DAY_WIDTH_IN_PX + daysFromStart * DAY_ITEM_WIDTH_IN_PX;
    const width =
      durationInDays * DAY_WIDTH_IN_PX +
      (durationInDays + 1) * DAY_ITEM_WIDTH_IN_PX;

    return { left, width };
  }

  const lanes = assignLanes(TIMELINE_ITEMS);
  const lanesHeight = lanes.length * (ITEM_HEIGHT_IN_PX + GAP_IN_PX);

  return (
    <div className="w-full relative" style={{ height: lanesHeight }}>
      {lanes.map((lane, laneIndex) =>
        lane.map((item) => {
          const { left, width } = getItemLayout(item, TIMELINE_START_DATE);

          return (
            <div
              key={item.id}
              className="absolute flex items-center rounded-md text-xs whitespace-nowrap overflow-hidden text-ellipsis text-zinc-50 py-1 px-2 bg-indigo-500"
              style={{
                top: laneIndex * (ITEM_HEIGHT_IN_PX + GAP_IN_PX),
                left,
                width,
                height: ITEM_HEIGHT_IN_PX,
              }}
              title={item.name}
            >
              {item.name}
            </div>
          );
        })
      )}
    </div>
  );
}
