import { expect, test, type Page, type TestInfo } from '@playwright/test'

async function captureVisuals(page: Page, testInfo: TestInfo) {
  const output = (name: string) => testInfo.outputPath(`visuals/${name}-${testInfo.project.name}.png`)

  await page.evaluate(async () => {
    await document.fonts.ready
  })

  await page.screenshot({
    path: output('01-hero-viewport'),
    fullPage: false,
    scale: 'device',
  })

  await page.locator('#capabilities').screenshot({
    path: output('02-capabilities'),
    scale: 'device',
  })

  await page.locator('#workflow').screenshot({
    path: output('03-workflow'),
    scale: 'device',
  })

  await page.locator('#safety').screenshot({
    path: output('04-safety'),
    scale: 'device',
  })

  await page.screenshot({
    path: output('05-full-page'),
    fullPage: true,
    scale: 'device',
  })
}

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

  await captureVisuals(page, testInfo)

  await page.getByRole('link', { name: /Voir le workflow/ }).click()
  await expect(page).toHaveURL(/#workflow$/)
  await expect(page.locator('#workflow')).toBeInViewport()

  await page.getByRole('link', { name: 'Explorer les garde-fous' }).click()
  await expect(page).toHaveURL(/#safety$/)
  await expect(page.locator('#safety')).toBeInViewport()
})
