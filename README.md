# 🛒 useCart – Manage Cart State with React & useReducer

A clean and modern React project for managing shopping cart state using Context API and `useReducer` instead of `useState`. The goal of this project is to separate the JSX structure from logic by organizing state management more efficiently.

🔗 **Live Demo:** [use-cart.vercel.app](https://use-cart.vercel.app)

---

## ✨ Features

- Replace `useState` with `useReducer` for better state management
- Clear separation between action logic and UI components
- Well-structured and scalable folder organization
- Built with Vite for lightning-fast development
- ESLint support for consistent code quality

---

## 📁 Project Structure

```
useCart/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   └── ProductList.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── reducer/
│   │   └── reducer.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

---

## ⚙️ Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Context API](https://reactjs.org/docs/context.html)
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [ESLint](https://eslint.org/)

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Amirksr/useCart.git
cd useCart
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Available Scripts

- `npm run dev` – Start the development server
-