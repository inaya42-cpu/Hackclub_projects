 # Sippy

Sippy is a friendly Discord bot that keeps your server hydrated. It sends gentle water reminders to your channels, tracks shared hydration streaks, and lets members log a glass with a single command.

This repository contains the Sippy landing page: the site that introduces the bot and explains how to add it to a Discord/Slack server.

## Features

- **Friendly reminders:** Customizable nudges that land in your hydration channel.
- **Team streaks:** Shared hydration streaks, weekly goals, and friendly competition.
- **Simple commands:** Log a glass, check your streak, or cheer someone on without leaving chat.

## live demo

https://discord-and-slack-bo-a6ve.bolt.host

## Commands

| Command   | What it does                               |
| --------- | ------------------------------------------ |
| `/sip`    | Log a glass of water and grow your streak  |
| `/streak` | Check your personal or server-wide streak  |
| `/cheer`  | Send encouragement to a friend on a roll   |

## Tech stack

- [Vite](https://vitejs.dev/) for the development server and production build
- Plain HTML, CSS, and JavaScript
- Google Fonts (DM Sans and Nunito)

## Getting started

Requirements: [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev       # start the local development server
npm run build     # create a production build in dist/
npm run preview   # preview the production build locally
```

## Project structure

```
index.html            Page markup and sections
src/main.js           Interactions: setup pop-up, copy button, mobile menu
src/styles.css        All visual styling and responsive layout
public/images/        Static images
```

## Status

The landing page is complete. The "Add to Discord / Add to Slack" buttons open a setup pop-up. The bot's real Discord /Slack invite link is not yet connected, so the copy button currently copies a placeholder invite.

## License

No license has been chosen yet. All rights are reserved by the author until one is added.

## Built with

This is created with bolt.ai
```
