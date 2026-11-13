import assert from 'node:assert/strict'
import test from 'node:test'
import { customerPreviewOrigin } from '../lib/site-content/form-origin.ts'

test('preview stays on the exact Vercel production host before formal DNS is live', () => {
  assert.equal(customerPreviewOrigin('https://baiteglobal.vercel.app/api/site-content/preview', 'https://baiteglobal.com', 'baiteglobal.vercel.app'), 'https://baiteglobal.vercel.app')
  assert.equal(customerPreviewOrigin('https://baiteglobal.com/api/site-content/preview', 'https://baiteglobal.com', 'baiteglobal.vercel.app'), 'https://baiteglobal.com')
  assert.equal(customerPreviewOrigin('https://evil.vercel.app/api/site-content/preview', 'https://baiteglobal.com', 'baiteglobal.vercel.app'), 'https://baiteglobal.com')
})
