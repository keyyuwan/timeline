interface UseDatesParams {
  year: number
}

export function useDates({ year }: UseDatesParams) {
  function getFullYearDates(year: number): Date[] {
    const dates: Date[] = []
    const start = new Date(year, 0, 1) // Jan 1
    const end = new Date(year, 11, 31) // Dec 31

    const current = new Date(start)

    while (current <= end) {
      dates.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }

    return dates
  }

  const dates = getFullYearDates(year)

  return {
    dates,
  }
}
