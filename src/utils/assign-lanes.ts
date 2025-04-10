import type { TimelineItem } from './timeline-items'

type Lane = TimelineItem[]

const buffer = 2 * 24 * 60 * 60 * 1000 // 2 days

/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */
export function assignLanes(items: TimelineItem[]): Lane[] {
  const sortedItems = items.sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  )

  const lanes: Lane[] = []

  for (const item of sortedItems) {
    assignItemToLane(item, lanes)
  }

  return lanes
}

function assignItemToLane(item: TimelineItem, lanes: Lane[]) {
  const itemStartDate = new Date(item.startDate)

  for (const lane of lanes) {
    const lastItemInLane = lane[lane.length - 1]
    const lastItemEndDate = new Date(lastItemInLane.endDate)

    if (lastItemEndDate.getTime() + buffer < itemStartDate.getTime()) {
      lane.push(item)
      return
    }
  }

  lanes.push([item])
}
