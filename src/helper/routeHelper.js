export const navigateToSearch = (history, searchQuery, searchParams) =>
    history.push(`/search${searchQuery ? '/' + searchQuery : '/'}?${searchParams.toString()}`)
