
export function getQueryParams(params: any) {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      // @ts-ignore
      searchParams.set(name, value)
    }
  })

  return `?${searchParams.toString()}`
}

export function addQueryParams(params: any) {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      // @ts-ignore
      searchParams.set(name, value)
    }
  })
  window.history.pushState(null, '', getQueryParams(params))
}