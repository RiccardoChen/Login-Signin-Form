# Login-Signin-Form

A minimal, client-side Login and Sign-in form project built with plain HTML, CSS and JavaScript. This repository provides two simple pages — a login page and a sign-up page — along with styling and small client-side scripts that demonstrate basic form validation and behavior.

## Demo / Preview

- Open `index.html` to view the Login page.
- Open `signin.html` to view the Sign-up (register) page.

You can preview locally by opening those files in a browser, or run a simple static server:

```bash
# From the project root
python -m http.server 8000
# then open http://localhost:8000/index.html
```

## Features

- Clean and simple form layout styled with `styles.css`.
- Client-side form behavior and basic validation implemented in:
  - `login.js` — handles login form interactions
  - `signin.js` — handles sign-up form interactions
- No external dependencies — plain HTML/CSS/JS for quick prototyping.

## File Structure

- `index.html` — Login page HTML.
- `signin.html` — Sign-up page HTML.
- `login.js` — JavaScript logic for login form (validation/submission handling).
- `signin.js` — JavaScript logic for sign-up form (validation/submission handling).
- `styles.css` — Styling for both pages.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/RiccardoChen/Login-Signin-Form.git
   cd Login-Signin-Form
   ```

2. Open `index.html` or `signin.html` in your browser, or use a local server:
   ```bash
   python -m http.server 8000
   ```

3. Try submitting the forms. The included JS files provide basic client-side checks and example behaviors (this project does not include a backend — form submissions are for demonstration only).

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

Copyright&copy; 2026 - Riccardo Chen
