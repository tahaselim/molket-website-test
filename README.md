# MolKet website — plain HTML version

No build step. What you see in this folder is exactly what goes online.

## Pages
| File | Page |
|---|---|
| `index.html` | Home (Hero, About, Services, Videos, How it works, Team, Contact) |
| `projects.html` | Projects (Reference Projects, Research & Open Source) |
| `news.html` | News & Events |
| `usecases.html`, `pp.html`, `molecular-workflow.html` | Older standalone pages, unchanged |

## Editing
- **Text:** open the page in any editor and change the English text directly.
- **French / Dutch:** `assets/translations.js` maps each English sentence to its FR and NL version.
  If you change an English sentence, change its key there too (or add a new entry):
  ```js
  "New English sentence": { "fr": "Nouvelle phrase", "nl": "Nieuwe zin" },
  ```
  Text without an entry stays in English when a visitor picks FR or NL.
- **New news item / project:** copy an existing `<article>` (news.html) or card (projects.html), paste it, and edit.
- **Menu and footer:** these are repeated in each of the three pages — make the same change in all three.
- **Images:** put the file in this folder and use `<img src="name.jpg" ...>`.
- **Styling:** pages use Tailwind CSS classes compiled into `assets/site.css`. Classes already used on the site
  work anywhere; a class used nowhere else on the site may not exist in that file.
- **Chatbot:** questions and answers are in `assets/chatbot.js` (`suggestedQuestions`, `knowledgeBase`).

## Preview
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publish (GitHub Pages, molket.io)
This folder: `/Users/tahaselim/Documents/TSprime/master_work/MolKet/website/new_html_website`

Run from the old `Molket-test` folder (it has the gh-pages tool installed):
```
cd "/Users/tahaselim/Documents/TSprime/master_work/MolKet/Linux_matters/new_website_sourcecode/Molket-test-git/Molket-test"
npx gh-pages -d "/Users/tahaselim/Documents/TSprime/master_work/MolKet/website/new_html_website"
```
`CNAME` (molket.io) is included, so the custom domain keeps working.
After switching, don't run `npm run deploy` in the old folder: it would put the old React version back online.
