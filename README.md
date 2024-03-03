# Simple Calculator
This is a simple calculator built using react, redux and tailwind. 
## Features
1. Color coded buttons to easily distinguish between numbers and operators.
2. `00` and `000` buttons to save clicks/keystrokes.
3. Separate input and output fields so user can see both.
4. Mild animation on button clicks.
5. Automatic comma separators both in input and output.
6. Automatically removes unnecessary leading and trailing zeros.
7. Keyboard shortcuts for faster input.

## Keyboard shortcuts
| Calculator Button | Keyboard Key |
|--------------|-----------|
| `0` to `9` | `0` to `9`  |
|`.`| `.`|
|`00`| `r` or `f`|
|`000`|`t` or `g`|
|`+`|`+` or `a` (add)|
|`-`|`-` or `s` (subtract)|
|`*`|`*` or `x`|
|`/`|`/` or `d` (divide)|
|`⌫` | `BackSpace` or `Delete` or `b`|
|`=`| `=` or `e`|
|`AC`| `Esc` or `c`|


## Project Set up
Note: This section details how the project was set up and is just for information purposes. You can simply clone the repo and run it to see it in action. 
### Project Creation with Vite
Reference: [Scaffolding your first Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

```bash
npm create vite@latest simple-calculator  
# framework -> react, variant -> Javascript
cd simple-calculator
# much of the default content (logos, main page, css) was removed
```

### Tailwind Setup
Reference: [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure your template paths in `tailwind.config.js` 

```js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
Add the Tailwind directives to your CSS in `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Redux Setup
Reference: [Install Redux Toolkit and React-Redux](https://redux.js.org/tutorials/quick-start#install-redux-toolkit-and-react-redux)  

```bash
npm install @reduxjs/toolkit react-redux
```

## Run the app in dev mode

```bash
npm install
npm run dev
```

## Build the app

```bash
npm run build
```
