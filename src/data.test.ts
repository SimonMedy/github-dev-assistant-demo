import { describe, expect, it } from 'vitest'
import { capabilities, forbiddenActions, guardrails, workflow } from './data'

describe('showcase content', () => {
  it('covers the complete safe development workflow', () => {
    expect(workflow.map((step) => step[1])).toEqual([
      'Analyse',
      'Branche',
      'Code',
      'Commit',
      'CI',
      'Corrections',
      'PR',
      'Merge',
    ])
  })

  it('keeps safety constraints explicit', () => {
    expect(forbiddenActions.length).toBeGreaterThanOrEqual(6)
    expect(capabilities.length).toBeGreaterThanOrEqual(8)
    expect(guardrails.length).toBeGreaterThanOrEqual(4)
  })
})
