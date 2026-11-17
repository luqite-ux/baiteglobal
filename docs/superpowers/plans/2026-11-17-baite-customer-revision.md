# Baite Customer Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the three customer-requested visual corrections, publish them to the existing production site, and verify every item on the formal domain at desktop and 390px mobile widths.

**Architecture:** Keep the incumbent Next.js visual system and change only the three evidenced defects. Add a source-contract regression test for the customer-visible requirements, then verify the built application, GitHub/Vercel release identity, and formal-domain browser output.

**Tech Stack:** Next.js 16.4, React 19, TypeScript, Tailwind CSS 4, Node.js test runner, Vercel.

**Spec:** Customer document `合肥百特光电科技 （修改.docx`, interpreted through `D:/Cursor/Grand/huanqiu-admin/docs/客户修改任务复审方法论.md`.

## Global Constraints

- Preserve the approved WCBEST visual identity and all customer facts outside the three requested changes.
- Product detail pages must retain the primary product image and remove only the repeated secondary presentation image.
- All three home-page Banner slides must make the machinery/scene materially clearer while retaining readable copy and CTA contrast.
- Contact-page added copy must use already verified facts and must not invent capabilities, certifications, guarantees, or service commitments.
- Every requirement must be verified on `https://baiteglobal.com` at desktop and 390px mobile widths before completion.
- Company GitHub remote `luqite-ux/baiteglobal` must be authenticated with the company token, and local/GitHub/Production SHAs must agree.

## Review Focus

- All four product slugs render exactly one product image in the detail content and no `product-scenes` duplicate.
- Each of the three carousel slides uses a copy-side-aware local overlay instead of a full-width heavy dark wash.
- Banner copy and CTA contrast remain readable on both left-copy and right-copy slides.
- Contact-page copy closes the empty left-column gap without making unsupported claims or competing with the inquiry form.
- Desktop and 390px layouts have no crop, overflow, hidden CTA, or broken carousel-navigation regression.

---

### Task 1: Add customer-revision regression contract

**Files:**
- Create: `tests/customer-revision.test.mjs`

**Interfaces:**
- Consumes: current product page, hero carousel, hero data, and contact page source.
- Produces: a repeatable Node test command guarding the three requested outcomes.

- [ ] **Step 1: Write tests that assert the duplicate product-scene block is absent, all slides receive copy-side-aware overlays, and the verified contact guidance is present.**
- [ ] **Step 2: Run `node --test tests/customer-revision.test.mjs` and confirm it fails on the current implementation for the expected three defects.**
- [ ] **Step 3: Keep the failing tests unchanged while implementing Tasks 2–4.**

### Task 2: Remove repeated images from all product details

**Files:**
- Modify: `app/products/[slug]/page.tsx`
- Test: `tests/customer-revision.test.mjs`

**Interfaces:**
- Consumes: `fetchProductData(slug)` and the existing primary `p.image` rendering.
- Produces: one primary product image per product detail page for all four product slugs.

- [ ] **Step 1: Remove only the hard-coded `/images/product-scenes/product-N.jpg` detail block.**
- [ ] **Step 2: Run the focused regression test and confirm the product-image assertion passes.**

### Task 3: Increase Banner subject clarity without losing copy contrast

**Files:**
- Modify: `components/hero-carousel.tsx`
- Test: `tests/customer-revision.test.mjs`

**Interfaces:**
- Consumes: each slide's existing `copySide` and image focal point.
- Produces: a lighter, directional overlay that darkens only the copy-safe side and leaves the machinery side visibly brighter.

- [ ] **Step 1: Replace the global heavy gradient with a `copySide`-specific overlay class.**
- [ ] **Step 2: Preserve the existing mobile stacked-panel behavior and carousel controls.**
- [ ] **Step 3: Run the focused regression test and confirm the Banner assertions pass.**

### Task 4: Fill the contact-page information gap with verified inquiry guidance

**Files:**
- Modify: `app/contact/page.tsx`
- Test: `tests/customer-revision.test.mjs`

**Interfaces:**
- Consumes: verified product-input fields already requested by the page and inquiry form.
- Produces: concise left-column guidance for representative material/sample information, with no unsupported claims.

- [ ] **Step 1: Add a restrained information block below the address using only verified inquiry-input facts.**
- [ ] **Step 2: Run `node --test tests/customer-revision.test.mjs` and confirm all assertions pass.**

### Task 5: Build, release, and formal-domain full review

**Files:**
- Modify: only files required by verified defects from the bounded audit.
- Evidence: task-scoped screenshots and verification records outside production source.

**Interfaces:**
- Consumes: Tasks 1–4 and the formal production environment.
- Produces: matching local/GitHub/Production release identity and per-requirement formal-domain review URLs/evidence.

- [ ] **Step 1: Install dependencies using the committed lockfile, then run the regression test, lint, Impeccable detector, and production build.**
- [ ] **Step 2: Commit the precise files, push company `main`, and verify GitHub `main` SHA via the company token.**
- [ ] **Step 3: Verify Vercel Production is READY on the same SHA and the formal domain serves that deployment.**
- [ ] **Step 4: In a safe browser, review all four product pages, all three Banner slides, and the contact page at desktop and 390px mobile widths; record PASS/FAIL/NOT_VISUALLY_VERIFIED per item.**
- [ ] **Step 5: Run an independent second pass against the customer wording and report only when no FAIL or unverified item remains.**
