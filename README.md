# Ahmed & Dalia

A romantic, bilingual wedding invitation for 14 October 2026 at Coco Loco Wedding Venue. The design uses ivory paper, sage green, botanical details, and a custom garden illustration.

Open `index.html` in a browser, or serve this folder with any static web server. No build step is needed. Keep `styles.css`, `fonts.css`, and the `assets` folder beside the page when publishing.

Features include English and Arabic with a saved language preference, a countdown to the 9 PM wedding start, calendar downloads, directions, an optional music player, and a guestbook. The guestbook uses Cloud Firestore in the `ahmed-dalia` Firebase project, with records scoped by `coupleId: ahmed-dalia`. Firestore rules allow public reads and validated guestbook submissions for this invitation; public visitors cannot edit or delete messages. The database is in `me-central1` (Doha).

The original photo-sharing URL and QR image were placeholders. The memories section clearly says the album will open soon; replace that note with the real album link when it is available.

Typefaces are served locally from `assets/fonts`; their open font licenses are included. The original unused decorative assets remain in the folder.

## Artwork

Generated with the built-in imagegen tool. The original is saved at `assets/garden-illustration.png`, and the optimized website asset is `assets/garden-illustration.webp`. `preview.jpg` is a refreshed preview of the redesigned invitation.

Final generation prompt:

> Create a refined editorial botanical wedding illustration to use as an atmospheric hero image for a romantic wedding invitation website. Portrait 2:3 composition. A dreamy elegant Mediterranean garden courtyard with a cream stone archway at the center, large climbing white roses and soft pale blush flowers with sage and olive leaves framing the arch, dappled sunlight, a little stone garden path leading through the arch into distant greenery, tiny pale flowers in the foreground. Painterly watercolor and gouache on warm ivory cotton paper, sophisticated fine art wedding stationery aesthetic, restrained colors of sage green, faded olive, warm cream and very subtle blush. Soft hand-painted edges, lovely natural detail, atmospheric depth, peaceful and romantic. The garden scene fills the entire image, no outer frame, no lettering, no text, no people, no furniture, no logos. This is a decorative illustration, not a real venue photograph.

The venue section links to the supplied Coco Loco Facebook page and Google Maps directions, and embeds the destination at 27.1877335, 31.0409508. The schedule shows a photo session at 4 PM, reception at 8 PM, and wedding start at 9 PM Cairo time.

Motion includes a staged hero entrance, botanical line drawing, gentle garden parallax, staggered schedule reveals, a reading-progress line, and animated question expansion. Reduced-motion preferences disable ornamental movement.
