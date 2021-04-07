import { createSelector } from 'reselect'

export class ProjectSelector {
    static projectBasicInfo = (state) => state.project.projectBasicInfo
    static projectAdvanceInfo = (state) => state.project.projectAdvanceInfo
}

export const makeSelectProjectBasicInfo = createSelector(
        ProjectSelector.projectBasicInfo,
        (projectBasicInfo) => (projectBasicInfo ? projectBasicInfo : '')
)
export const makeSelectProjectAdvanceInfo = createSelector(
    ProjectSelector.projectAdvanceInfo,
    (projectAdvanceInfo) => (projectAdvanceInfo ? projectAdvanceInfo : '')
)