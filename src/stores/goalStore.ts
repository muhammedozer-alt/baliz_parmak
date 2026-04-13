import { create } from 'zustand'

export type ExamGoal = 'KPSS' | 'YKS' | null

interface GoalState {
  goal: ExamGoal
  setGoal: (goal: ExamGoal) => void
  clearGoal: () => void
}

const GOAL_KEY = 'bp_exam_goal'

export const useGoalStore = create<GoalState>((set) => ({
  goal: (localStorage.getItem(GOAL_KEY) as ExamGoal) ?? null,

  setGoal: (goal) => {
    if (goal) {
      localStorage.setItem(GOAL_KEY, goal)
    } else {
      localStorage.removeItem(GOAL_KEY)
    }
    set({ goal })
  },

  clearGoal: () => {
    localStorage.removeItem(GOAL_KEY)
    set({ goal: null })
  },
}))
