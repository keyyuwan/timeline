import { useTimeline } from "@hooks/timeline/useTimeline";
import { ITEM_HEIGHT_IN_PX, LANES_GAP_IN_PX } from "@utils/constants";

const TIMELINE_START_DATE = new Date("2021-01-01");

export function Lanes() {
  const { lanes, lanesHeight, getItemLayout } = useTimeline();

  return (
    <div className="w-full relative" style={{ height: lanesHeight }}>
      {lanes.map((lane, laneIndex) =>
        lane.map((item) => {
          const { left, width } = getItemLayout(item, TIMELINE_START_DATE);

          return (
            <div
              key={item.id}
              className="absolute flex items-center rounded-md text-xs text-zinc-50 py-1 px-2 bg-indigo-500"
              style={{
                top: laneIndex * (ITEM_HEIGHT_IN_PX + LANES_GAP_IN_PX),
                left,
                width,
                height: ITEM_HEIGHT_IN_PX,
              }}
              title={item.name}
            >
              <p className="truncate">{item.name}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
