# Shikhar Gupta — Portfolio

A company-agnostic portfolio for product, growth, and AI roles. It presents selected outcomes from my resume, case studies, independent builds, experience, and contact links.

## Run locally

Serve the repository root with any static file server:

    python3 -m http.server 3000 --bind 127.0.0.1

Then open http://127.0.0.1:3000.

## Motion

The process animation in assets/process-reel.mp4 was made with Remotion. The editable composition is in motion/src/. To rerender:

    cd motion
    npm install
    npx remotion render src/index.jsx ProcessReel ../assets/process-reel.mp4 --codec h264 --crf 24

The site uses assets/process-poster.svg as a poster and pauses the video when reduced motion is preferred.

## Deployment

The static site is configured for Vercel in vercel.json and published from the separate shikhar-gupta-work project at https://shikhar-gupta-work.vercel.app/. The original Sun King site remains on the sun-king-vercel project at https://sun-king-vercel.vercel.app/, mapped to its July 17, 2026 deployment. The motion/ source folder is excluded from deployment; the rendered video in assets/ is included.

All career claims should be checked against assets/Shikhar_Gupta_Resume.pdf before future edits. The portfolio intentionally does not publish proprietary Eshopbox systems or data.
