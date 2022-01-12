export const navigateToSearch = (navigate, searchQuery, searchParams) =>
    navigate(`/search${searchQuery ? '/' + searchQuery : '/'}?${searchParams.toString()}`)
