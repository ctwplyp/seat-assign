import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const FilterNav = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ASSIGNED}>
      Assigned
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_UNASSIGNED}>
      Unassigned
    </FilterLink>
  </div>
)

export default FilterNav
