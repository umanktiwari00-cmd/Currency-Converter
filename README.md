# 💱 Currency Converter

A simple and responsive **Currency Converter** built with **React, Vite, and Tailwind CSS**. The application fetches currency exchange rates from an external API and allows users to quickly convert between different currencies.

## 🚀 Live Demo

🔗 **[View Live Project](YOUR_LIVE_PROJECT_LINK)**

## 📂 GitHub Repository

🔗 **[Currency Converter – GitHub](https://github.com/umanktiwari00-cmd/Currency-Converter)**

## ✨ Features

- 💰 Enter an amount to convert
- 🌍 Select from multiple currencies
- 🔄 Swap the source and target currencies
- ⚡ Fetches exchange rates dynamically using an API
- 📱 Responsive user interface
- 🎨 Clean UI built with Tailwind CSS
- ⚛️ Reusable React components
- 🪝 Custom React hook for fetching currency information

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript**
- **Currency API**

## 🔌 API

This project uses the **Fawaz Ahmed Currency API** to retrieve currency exchange rates.

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/
```

## 🧠 How It Works

The application uses a custom React hook called `useCurrencyInfo`.

When the selected source currency changes, the hook fetches the latest exchange-rate data from the API.

The conversion is then calculated using:

```javascript
Number(amount) * currencyInfo[to]
```

The **Swap** button exchanges the source and target currencies and also swaps their corresponding amounts.

## 📁 Project Structure

```text
Currency-Converter/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── InputBox.jsx
│   │   └── index.js
│   │
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/umanktiwari00-cmd/Currency-Converter.git
```

Navigate into the project:

```bash
cd Currency-Converter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal.

## 📸 Preview

Add a screenshot of your application here:

```markdown
![Currency Converter Preview](./screenshot.png)
```

## 📚 What I Learned

While building this project, I practiced:

- React functional components
- `useState` and `useEffect`
- Creating and using custom hooks
- API fetching with `fetch()`
- Handling asynchronous data
- Passing props between components
- Controlled inputs
- Dynamic currency selection
- Component reusability
- Tailwind CSS
- Vite project setup

## 🔮 Future Improvements

- Add loading states
- Add API error handling
- Add conversion history
- Add currency search
- Add dark mode
- Display the current exchange rate
- Improve mobile UI and animations

## 👨‍💻 Author

**Umank Tiwari**

GitHub: [@umanktiwari00-cmd](https://github.com/umanktiwari00-cmd)

---

⭐ If you found this project useful, consider giving the repository a star!
