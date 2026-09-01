# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Families and individuals in Chennai (primarily Korukkupet / Old Washermanpet and nearby areas) planning a wedding, reception, naming ceremony, birthday celebration, or corporate event for roughly 150–200 guests. They are comparing local marriage/event halls and deciding where to enquire first; their job on this site is to quickly judge whether the venue fits their guest count and budget, see real proof of the space, and reach the hall directly by phone, WhatsApp, or the enquiry form.

## Product Purpose

AARNA (Hall)'s website is a static marketing and lead-generation site for a real, operating banquet hall in Chennai. Primary goal: generate enquiry leads via WhatsApp, phone call, and the on-site enquiry form. Secondary goal: rank for local Chennai venue searches (marriage hall Chennai, event hall Chennai, banquet hall Chennai, etc.). Success is a visitor placing a call, sending a WhatsApp message, or submitting the enquiry form — there is no online booking or payment flow.

## Positioning

Most Chennai marriage/event halls are sized either for very small gatherings or for 500+ guest weddings. AARNA's confirmed 150–200 guest capacity is the deliberate mid-size sweet spot: full and well-run for an intimate-to-mid-scale celebration, without a family paying for (or getting lost in) space built for a much bigger event. This is the honest differentiator to lead with — not a broader "premium/luxury" claim the venue's real photos and amenities can't yet fully back up on their own.

## Operating Context

- Enquiry channels: phone call (`tel:+919500111647`), WhatsApp (`https://wa.me/919500111647`), and an on-site enquiry form (name, phone, email, event type, preferred date, message) submitted via FormSubmit.co — there is no custom backend.
- Physical venue: 438, Thiruvottiyur High Rd, Korukkupet, Old Washermanpet, Chennai – 600021. No dedicated on-site parking (street parking only) — the site states this honestly rather than hiding it.
- Hosted event types: weddings, receptions, naming ceremonies, birthday celebrations, corporate events.
- The site is a hand-authored static HTML/CSS/vanilla-JS project (no build step, no framework) — deployed at `aarnahall.in`, currently mirrored at a Vercel preview (`aarna-lemon.vercel.app`) during development.

## Capabilities and Constraints

- Confirmed amenities: 150–200 guest capacity, 1 guest room, air conditioning, stage/mandap setup, generator backup, sound system, catering kitchen, bridal room, decoration support, Wi-Fi. No on-site parking.
- No online payment or booking system — all booking happens off-site after an enquiry (call/WhatsApp/form).
- No CMS — content changes are direct code edits to static HTML files (`index.html`, `gallery.html`, `404.html`, `privacy.html`).
- The enquiry form's destination email in `form action` is a placeholder (`enquiries@aarnahall.in`) until the client confirms a real inbox and completes FormSubmit's one-time activation step.
- Real business email address is still not confirmed by the client (shown on-site as "Available Soon").
- Undecided: whether/when real customer testimonials, a confirmed years-in-operation figure, and a finalized amenities list (items beyond the two originally client-confirmed) will be supplied — current copy for these is realistic placeholder content, not fabricated-as-fact metrics.

## Brand Commitments

- Name: **AARNA** (also written "AARNA Hall" on physical signage and in the WhatsApp CTA copy).
- Real logo: a gold star/ribbon mark paired with an "AARNA HALL" wordmark, supplied by the client (`sample/assets/images/logo/`); used as the favicon and in the site footer.
- Palette: warm gold/champagne (`--color-primary #8B6914`, `--color-accent #F5E6C8`, near-black `--color-dark #1A1209`) — client-confirmed to keep; matches the real gold signage visible in the venue's own photography.
- Typography: Cormorant Garamond (display/headings) + Inter (body).
- Tagline: "Celebrating Life's Greatest Moments."
- Tone: warm, direct, and honest rather than overproduced — a prior cinematic hero-video intro was deliberately removed in favor of a straightforward, photo-led hero, taking structural inspiration (directness, simplicity) from a reference competitor site (kglbanquethall.in) without copying its visual design.

## Evidence on Hand

- **Real, usable photography** (client-supplied, in `sample/assets/images/{hero,about,gallery}/`): the venue's front exterior/signage at dusk, the decorated stage area, two dining-area setups, and a themed decoration setup. These are genuine AARNA Hall photos, not stock.
- **Explicitly excluded from public use**: several client-supplied photos in `sample/assets/images/new_assets/` show other families' private event details — a real child's face and full name on personalized welcome/invitation signage, a birthday cake iced with a private client's name, and event photos with identifiable guests. These must not be published on the public site without that family's consent; future work should keep treating them as reserved, not reach for them as "more real photos."
- **Reserved for later, not yet integrated**: menu card images in `sample/assets/images/new_assets/` (multiple veg/non-veg/biryani/seemantham menu cards) — explicitly held back by the client for a future phase.
- Real contact details: phone/WhatsApp `+91 95001 11647`, full street address as above.
- No real customer testimonials yet — the three testimonials currently on the site are realistic placeholder copy, clearly to be replaced.
- No case studies, press mentions, or confirmed "years in operation" figure exist yet; do not invent any of these.

## Product Principles

1. **Honest over aspirational.** State real constraints plainly (no parking, testimonials still placeholder, email "available soon") rather than hiding or dressing them up — this is a small, real local business, not a luxury chain.
2. **Real photography over stock, always preferring the least-intrusive real option.** When a genuine AARNA photo reasonably fits a spot, use it in place of a stock image; never substitute a photo that exposes another family's private event details.
3. **Direct path to enquiry.** Every section should make it easy to get to a call, WhatsApp message, or the enquiry form — that action is the entire commercial purpose of the site.
4. **Lead with the mid-size sweet spot**, not a generic "premium/luxury" claim the venue can't yet back up with a fully built-out proof set (real testimonials, full amenity confirmation, etc.).
5. **No build tooling for its own sake.** The client has twice reaffirmed a plain static HTML/CSS/vanilla-JS stack; keep it that way unless the client explicitly asks to change it.

## Accessibility & Inclusion

No specific accessibility standard has been requested by the client. The existing implementation already follows general good practice (skip link, `:focus-visible` styles, keyboard-operable nav/gallery/FAQ/lightbox, form errors announced via `aria-live`) — treat that as a floor to maintain, not a formal WCAG conformance commitment.
