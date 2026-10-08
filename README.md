# Ahmed & Dalia

A romantic, bilingual wedding invitation for 14 October 2026 at Coco Loco Wedding Venue. The design uses ivory paper, sage green, botanical details, and real portraits of the couple.

Open `index.html` in a browser, or serve this folder with any static web server. No build step is needed. Keep both stylesheets, `motion.js`, `fonts.css`, the audio files, and the `assets` folder beside the page when publishing.

Features include English and Arabic with a saved language preference, a countdown to the 9 PM wedding start, calendar downloads, directions, an optional music player, and a guestbook. The guestbook uses Cloud Firestore in the `ahmed-dalia` Firebase project, with records scoped by `coupleId: ahmed-dalia`. Firestore rules allow public reads and validated guestbook submissions for this invitation; public visitors cannot edit or delete messages. The database is in `me-central1` (Doha).

The photo-sharing album is not available yet; the memories section says it will open soon. Add the album link there when it is ready.

Typefaces are served locally from `assets/fonts`; their open font licenses are included.

## Photos and film

The hero uses the wedding portrait; the memories section uses the confetti portrait. Responsive WebP versions are available at 480, 960, and 1440 pixels wide. Only modest display brightness and saturation adjustments are applied; faces are unchanged. `preview.jpg` is used for social sharing.

`assets/couple/our-film.mp4` preserves the complete 24.24-second film at 1280 × 720, with H.264 video, AAC audio, and fast-start metadata. It is approximately 4.5 MB. The poster is a still of the couple from the supplied film. No video source is requested until a guest presses play.

The film has native inline controls and a keyboard-accessible play button. It pauses Juliet and restores it on pause or completion only when music was previously playing. Playback errors show a translated retry message.

The venue section links to the supplied Coco Loco Facebook page and Google Maps directions, and embeds the destination at 27.1877335, 31.0409508. The schedule shows a photo session at 4 PM, reception at 8 PM, and wedding start at 9 PM Cairo time.

Motion includes a staged hero entrance, botanical line drawing, gentle portrait parallax, staggered schedule reveals, a reading-progress line. Reduced-motion preferences disable ornamental movement.

## Local verification

Reviewed English and Arabic layouts at mobile (390 px), tablet (820 px), and desktop widths. Checked photo framing, horizontal overflow, deferred video loading, keyboard play/pause, and music restoration. Temporary local fixtures exercised failed-video feedback in both languages and the reduced-motion branch. Confirmed the live guestbook empty state without posting a message. JavaScript parses successfully; the MP4 metadata confirms full duration, H.264/AAC, 720p, and the fast-start atom order.

GitHub Pages deploys automatically from `main` using `.github/workflows/pages.yml`. In the repository settings, set Pages' build and deployment source to **GitHub Actions**. The workflow packages the static site and skips repository configuration and documentation files. The guestbook continues to use Firebase Firestore; its rules remain in `firestore.rules` and are managed separately from the website deployment.
