import { expect, test } from '@playwright/test'

test('renders the complete showcase responsively and keeps navigation usable', async ({ page }, testInfo) => {
  await page.goto('/')

  await expect(page).toHaveTitle('GitHub Dev Assistant')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Du dépôt à la PR')
  await expect(page.getByRole('heading', { name: 'Un workflow d’ingénierie complet.' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Une boucle disciplinée, pas une boîte noire.' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Certaines opérations restent hors limites.' })).toBeVisible()

  await expect(page.locator('.capability-card')).toHaveCount(8)
  await expect(page.locator('.workflow-list > li')).toHaveCount(8)
  await expect(page.locator('.forbidden-list > li')).toHaveCount(6)
  await expect(page.locator('.guardrail-grid > article')).toHaveCount(4)

  const hasHorizontalOverflow = await page.locator('html').evaluate(
    (element) => element.scrollWidth > element.clientWidth + 1,
  )
  expect(hasHorizontalOverflow).toBe(false)

  await page.getByRole('link', { name: /Voir le workflow/ }).click()
  await expect(page).toHaveURL(/#workflow$/)
  await expect(page.locator('#workflow')).toBeInViewport()

  await page.getByRole('link', { name: 'Explorer les garde-fous' }).click()
  await expect(page).toHaveURL(/#safety$/)
  await expect(page.locator('#safety')).toBeInViewport()

  await page.screenshot({
    path: testInfo.outputPath(`showcase-${testInfo.project.name}.png`),
    fullPage: true,
  })
})
