import { assignLanes } from '@utils/assign-lanes'
import {
  DAY_ITEM_WIDTH_IN_PX,
  DAY_WIDTH_IN_PX,
  ITEM_HEIGHT_IN_PX,
  LANES_GAP_IN_PX,
} from '@utils/constants'
import { TIMELINE_ITEMS, type TimelineItem } from '@utils/timeline-items'
import { differenceInDays, parseISO } from 'date-fns'

interface Layout {
  left: number // px
  width: number // px
}

export function useTimeline() {
  function getItemLayout(item: TimelineItem, timelineStartDate: Date): Layout {
    const startDateISO = parseISO(item.startDate)
    const endDateISO = parseISO(item.endDate)

    const daysFromStart = differenceInDays(startDateISO, timelineStartDate)
    const durationInDays = differenceInDays(endDateISO, startDateISO)

    const left =
      daysFromStart * DAY_WIDTH_IN_PX + daysFromStart * DAY_ITEM_WIDTH_IN_PX
    const width =
      durationInDays * DAY_WIDTH_IN_PX +
      (durationInDays + 1) * DAY_ITEM_WIDTH_IN_PX

    return { left, width }
  }

  const lanes = assignLanes(TIMELINE_ITEMS)
  const lanesHeight = lanes.length * (ITEM_HEIGHT_IN_PX + LANES_GAP_IN_PX)

  return {
    lanes,
    lanesHeight,
    getItemLayout,
  }
}
