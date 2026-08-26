# Firebase A/B Testing & Telemetry Setup Guide

This guide walks through configuring **Google Analytics (GA4)**, **Firebase Remote Config**, and **Firebase A/B Testing** for Tyler Lindow's site (`tlindow.github.io`) to optimize conversions for the **"Recruit Me"** CTA button.

---

## 1. Firebase Project Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project (or use an existing one) and **enable Google Analytics** for the project.
3. Click **Add App** &rarr; Select **Web** (`</>`).
4. Register the app (e.g., `tlindow-web`) and copy the `firebaseConfig` keys.

---

## 2. Environment Variables Configuration

Create a `.env.local` file in `site/` (or copy `.env.example`):

```bash
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSy..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="tlindow-portfolio.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="tlindow-portfolio"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="tlindow-portfolio.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="1234567890"
NEXT_PUBLIC_FIREBASE_APP_ID="1:1234567890:web:abcdef123456"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### GitHub Actions Secrets (for Production Deployments)
Add the identical keys as repository secrets in GitHub (`Settings` &rarr; `Secrets and variables` &rarr; `Actions`):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

---

## 3. Remote Config Parameters

In the Firebase Console, navigate to **Build** &rarr; **Remote Config** &rarr; **Add parameter**.

Create the following parameters with default values:

| Parameter Key | Type | Default Value | Description |
|---|---|---|---|
| `recruit_cta_label` | String | `Recruit Me` | CTA button text across navbar, hero, and floating trigger |
| `recruit_cta_style` | String | `forest_solid` | Visual style (`forest_solid`, `pulse_accent`, `sprout_glow`, `high_contrast`) |
| `hero_headline_variant` | String | `Staff B2B Product Manager` | Main hero H1 text |
| `hero_subtitle_variant` | String | `B2B at B2C scale · $0 – $1B+ GMV enterprises` | Hero subtitle text |

---

## 4. Developed Content Variation Presets

The codebase includes 4 tested content variation presets ready for A/B testing:

### Preset 1: Baseline / Control
- **`recruit_cta_label`**: `"Recruit Me"`
- **`recruit_cta_style`**: `"forest_solid"`
- **`hero_headline_variant`**: `"Staff B2B Product Manager"`
- **`hero_subtitle_variant`**: `"B2B at B2C scale · $0 – $1B+ GMV enterprises"`

### Preset 2: Action-Oriented (Developer Framing)
- **`recruit_cta_label`**: `"Deploy Tyler"`
- **`recruit_cta_style`**: `"pulse_accent"` *(Pulsing glowing ring)*
- **`hero_headline_variant`**: `"Staff Developer Product Manager"`
- **`hero_subtitle_variant`**: `"Software Engineering Manager → Staff PM · $1B+ Scale"`

### Preset 3: Low-Friction (Approachability & Networking)
- **`recruit_cta_label`**: `"Connect on LinkedIn"`
- **`recruit_cta_style`**: `"sprout_glow"` *(Soft green glow with shadow)*
- **`hero_headline_variant`**: `"Staff B2B Product Manager"`
- **`hero_subtitle_variant`**: `"Building high-leverage developer paved paths & $1B+ partner scale"`

### Preset 4: Executive Authority (High Track Record)
- **`recruit_cta_label`**: `"Hire Staff PM"`
- **`recruit_cta_style`**: `"high_contrast"` *(Bold monochrome dark badge)*
- **`hero_headline_variant`**: `"Staff Product Manager & EM"`
- **`hero_subtitle_variant`**: `"Directing high-stakes revamps, $1B+ partner telemetry & SRE support"`

---

## 5. Live Local Previewing

You can preview all variations locally in 2 ways:
1. **Interactive Preview Toolbar**: Open [`http://localhost:3000`](http://localhost:3000) and click the **A/B Variant Preview** widget in the bottom-left corner to switch presets live.
2. **URL Parameter Override**: Append `?variant=action_oriented`, `?variant=low_friction`, or `?variant=executive_authority` to test specific presets via direct links.

---

## 6. Event Telemetry Reference

| Event Name | Parameters | Description |
|---|---|---|
| `recruit_me_click` | `location` (`navbar`, `hero`, `floating_trigger`, `footer`), `label`, `variant`, `destination` | Conversion click to LinkedIn |
| `resume_view` | `source` (`hero_cta`, `download_pdf`, `nav`) | Navigation to web resume or PDF print/export |
| `skills_marketplace_interaction` | `action` (`scroll_left`, `scroll_right`, `sort_toggle`), `sort_order` | Interaction with Skills Marketplace carousel |
| `outbound_click` | `platform` (`github`, `email`, `llms_txt`), `destination` | Outbound external link clicks |
| `scroll_depth` | `depth_percent` (`25`, `50`, `75`, `100`) | User scroll progress milestones |
| `resume_copy_markdown` | `event_category` | Copying raw markdown resume to clipboard |
