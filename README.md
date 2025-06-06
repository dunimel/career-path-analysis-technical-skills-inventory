# Career Path Analysis: Technical Skills Inventory for Social Impact Tech Roles
This application is your go-to tool for navigating the tech landscape, especially if you're looking to make a real impact. It helps you get a clear picture of your current technical skills and then maps out a personalized path for you to grow into social impact roles. What's cool about it is how it combines your self-assessment with a custom learning plan, complete with direct links to free online resources. It's all about giving you a clear, actionable roadmap to build the skills you need for a career that truly matters. Try it out [here](https://career-path-analysis-technical-skil.vercel.app/)!

![tech-skills-inventory](https://github.com/user-attachments/assets/8fc9b469-b789-4af2-a7e1-f4ee321838cf)

## Features
- **Skill Self-Assessment:** You can rate your own skills, from "not familiar" to "expert level." It's like a personal check-in.
- **Detailed Skill Descriptions:** Each skill has a little blurb and an example, so you know exactly what's up.
- **Personalized Learning Plan:** Based on your ratings, I'll whip up a custom learning plan for you. It highlights the skills you might wanna focus on.
- **Curated Free Resources:** For each skill in your learning plan, I've got some direct links to free online courses and materials. No cap, it's all about making it easy to learn.
- **PDF Export:** You can export your whole assessment or just your learning plan as a PDF. Super handy for keeping track or sharing.
- **Responsive Design:** Works great on your phone, tablet, or desktop. It's built to be accessible wherever you are.

## System Requirements
To get this thing running on your machine, you'll need:
- Node.js (I'm usually rockin' with the latest LTS version, but anything recent should be good)
- npm, Yarn, or pnpm (your package manager of choice)

## Installation/Setup
Ready to dig in? Here's how to get it set up:

1. **Clone the repo:**
   ```bash
   git clone git@github.com:daaimah123/career-path-analysis-technical-skills-inventory.git
   cd career-path-analysis-technical-skills-inventory
   ```
2. **Install dependencies:**
   ```bash
   npm install

   # or yarn install

   # or pnpm install

   ```
3. **Fire it up (run the development server):**
   ```bash
   npm run dev

   # or yarn dev

   # or pnpm dev

   ```
   Then just open your browser and hit up http://localhost:3000.

## User Guide
Using this app is pretty straightforward, no stress:
1. **Rate Your Skills:** Head over to the "Technical Skills Inventory" section. You'll see different categories like "Core Technical" or "Domain Specific." Click on a category to expand it, then just click the numbers (1-4) next to each skill to rate your current level. Don't trip, you can change them anytime.
2. **Generate Your Learning Plan:** Once you've rated some skills, hit that "Generate Learning Plan" button at the bottom. A pop-up will show you the skills I think you should focus on, along with some cool free resources.
3. **Explore Resources:** If you wanna just browse all the free learning stuff, peep the "Free Learning Resources" tab. It's all organized by category.
4. **Export Your Stuff:** Wanna save your progress or share your plan? Use the "Export Assessment" button for the full rundown, or the "Export Plan" button (inside the learning plan pop-up) for just your personalized roadmap. Both will give you a PDF.

## Technical Documentation
This project is built with some solid tech, keeping things modern and snappy.
- **Framework:** Next.js (using the App Router, which is pretty sweet for building full-stack React apps)
- **UI Library:** React for building out all the interactive bits
- **Language:** TypeScript, which helps keep the code robust and catches errors early
- **Styling:** Tailwind CSS for super fast and flexible styling, and shadcn/ui components for a clean, accessible look right out the box

The data for skills and resources lives right in the client-side code for now, so it's all self-contained. When you export to PDF, it's just rendering the HTML content in a new window and then printing it. Pretty neat, right?

## Design Choices
I went with a clean, functional design so you can focus on your skills without any distractions. The goal was to make it easy to navigate and use, whether you're on a big screen or just your phone. Accessibility was also a big deal, making sure folks with different needs can still get the most out of it. It's all about making this tool work for *you*.

## Troubleshooting
Ran into a snag? It's all good, happens to the best of us.
- **"Failed to load module" error:** If you see something like this, it usually means there's a hiccup with how the files are being imported. I've tried to keep things tidy, but sometimes the browser gets confused. Try restarting the development server (`Ctrl+C` then `npm run dev` again). If that doesn't work, double-check your file paths.
- **Port already in use:** If `npm run dev` complains about port 3000 being busy, another app is probably using it. You can usually just kill that other process or try running on a different port (like `PORT=3001 npm run dev`).
- **PDF export not working:** If the export buttons aren't doing anything, your browser might be blocking pop-ups. Just allow pop-ups for this site and try again.

## How to Run Locally
Just a quick reminder, once you've got everything installed, you can always fire up the development server with:

```bash
npm run dev

# or yarn dev

# or pnpm dev

```

Then head to http://localhost:3000 in your browser.

## Project Structure
Here's how everything's organized:

```
├── app/
│   ├── layout.tsx          # Main app layout
│   ├── page.tsx            # Home page that brings everything together
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── utils.ts            # Utility functions
│   └── resources-data.ts   # All the learning resources data
├── career-feedback-form.tsx    # Career feedback component
├── gap-analysis.tsx           # Gap analysis for different career paths
├── learning-resources.tsx     # Free learning resources browser
├── technical-skills-inventory.tsx  # Main skills assessment tool
└── README.md              # You're reading it!
```

## Contributing
Got ideas for making this better? I'm all ears! Feel free to open an issue or submit a pull request. Just keep it friendly and constructive.

## License
This project is open source and available under the MIT License. Do what you want with it, just don't blame me if something breaks! 😄
