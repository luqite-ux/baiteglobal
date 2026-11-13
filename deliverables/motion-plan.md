# Baiteglobal motion plan

Result: PASS. Four scenes are selected. Desktop, 390px and reduced-motion strategies are defined before v0 generation.

## External candidates scored

1. Motion for React whileInView / viewport lifecycle (https://motion.dev/docs/react-scroll-animations): strong for real viewport-triggered sections and cards; selected as implementation principle.
2. GSAP ScrollTrigger reveal/pinning patterns (https://gsap.com/docs/v3/Plugins/ScrollTrigger/): considered for the sorting process; rejected because pinning and heavier orchestration add little buyer value and increase mobile complexity.
3. CSS View Transitions / scroll-driven animation patterns (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations): considered for image reveals; rejected as the core dependency because compatibility and graceful fallback need more control than this launch requires.

## Selected scenes

| ID | Role / location | Effect and reason | Desktop | 390px | Reduced motion / failure |
|---|---|---|---|---|---|
| BT-M01 | Narrative: three-slide hero | Short crossfade and independent DOM-copy entrance after manual/automatic slide selection; each slide keeps its own safe-side data. | 500–650 ms, manual controls and pause | no parallax; image-first reflow when overlay unsafe | no auto movement; current slide and controls remain visible |
| BT-M02 | Content: every major section and repeated card collection | Each section and every card reveals only after its own real viewport entry, with 20–28px bounded movement and 60–90ms group stagger. | full sequence | reduced distance and capped stagger | immediately visible; no hidden base CSS; observer failure restores visibility without marking played |
| BT-M03 | Industry: sorting-process nodes and certificate records | Feed–sense–decide–separate nodes progress in reading order; three certificate groups reveal independently to clarify evidence. | horizontal progress | vertical progress | static nodes and records, all readable |
| BT-M04 | Interaction: product cards, case images, FAQ, navigation and RFQ controls | 4–6px hover lift/image micro-zoom on capable pointers; focus, tap, accordion and form feedback remain short and functional. | hover + focus | tap/focus only, no hover dependency | color/border/focus feedback only |

## Lifecycle safeguards

- Base content is visible; only a synchronous motion-ready enhancement may set temporary pre-animation states.
- No global timeout may mark off-screen content revealed or completed. Fallback-visible and hasAnimated are separate states.
- All public pages and every repeated card collection participate; filtering or newly loaded cards animate on first real appearance.
- At template and full-content review, keep the page at the top beyond the longest fallback duration, then scroll to the final section and verify it still animates.
- Clean observers/listeners on unmount; no infinite decorative loops, particles or glowing orbs.
