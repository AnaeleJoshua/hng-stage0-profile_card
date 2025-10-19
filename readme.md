# Profile Card — Frontend Wizards Stage 0

A small static profile card demo built with plain HTML, CSS and JavaScript.

## Repo structure

- [index.html](index.html) — main markup file. Key element: [`#current-time`](index.html) (span where time is rendered).
- [style.css](style.css) — styles for the card. Main classes: [`.profile-card`](style.css), [`.avatar-img`](style.css).
- [script.js](script.js) — simple script that updates the timestamp. Key symbols: [`updateTime`](script.js), [`timeElement`](script.js).
- [uriel.png](uriel.png) — local avatar image (unused by default; external avatar used in HTML).

## Tech stack

- HTML5 — structure (`index.html`)
- CSS3 — styling (`style.css`)
- Vanilla JavaScript — behavior (`script.js`)

## Features

- Responsive profile card layout.
- Shows current time in milliseconds and refreshes every second (see [`updateTime`](script.js) and [`timeElement`](script.js)).
- Semantic markup with data-testid attributes for easy testing (e.g. `data-testid="test-profile-card"` in [index.html](index.html)).

## Install / Run locally

This is a static site. Two simple options:

1. Open directly
   - Open [index.html](index.html) in your browser.

2. Serve via a local HTTP server (recommended for extensions/features that require a server)

- Using Python 3:
  ```sh
  python3 -m http.server 8000
  # then open http://localhost:8000 in your browser