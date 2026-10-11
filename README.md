# Rytham Maalpani · Portfolio

My personal portfolio showcasing full-stack and AI projects, technical skills, education and achievements.

**Built with:** React 19 · Tailwind CSS 4 · Vite · Lucide React · EmailJS

## What's inside

- Featured projects: After The Last Page, Memory Palace, Mini Git, an e-commerce platform and a deterministic question generator.
- Responsive layout with mobile navigation, a dark theme and scroll reveal animations.
- Downloadable resume, GitHub and LinkedIn links.
- Contact form integrated with EmailJS.

## Run locally

```bash
git clone https://github.com/V-Rytham/My-Portfolio-Website.git
cd My-Portfolio-Website
npm ci
npm run dev
```

To enable the contact form, create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template receives `name`, `email` and `message`. The rest of the site runs without EmailJS configuration.

## Build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`. A Render static-site configuration is included in `render.yaml`.

## Editing content

| Location | Content |
| --- | --- |
| `src/sections/` | Intro, skills, projects, education and contact form |
| `src/layout/` | Navigation and footer |
| `src/index.css` | Theme and animations |
| `public/` | Resume, profile photo and project images |
