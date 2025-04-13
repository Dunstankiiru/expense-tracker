# Expense Tracker Application
A React-based web application for tracking personal expenses with search and filtering capabilities.

➡️ **Live Demo:** [https://expense-tracker-delta-coral.vercel.app/](https://expense-tracker-delta-coral.vercel.app/)

## Features

✅ Add new expenses with details (name, description, amount, category, date)  
✅ View expenses in a sortable table  
✅ Search and filter expenses  
✅ Responsive design  
✅ Persistent data storage (local storage)  
✅ Clean, modern UI

## Technologies Used

- React.js
- JavaScript
- CSS
- HTML5

## Project Structure

```
expense-tracker/
├── public/                  # Static files
├── src/
│   ├── components/          # React components
│   │   ├── ExpenseForm.js   # Form for adding expenses
│   │   ├── ExpenseTable.js  # Table displaying expenses
│   │   └── SearchBar.js     # Search functionality
│   ├── Data/
│   │   └── expensesData.js  # Sample expense data
│   ├── App.js               # Main application component
│   ├── App.css              # Main styles
│   └── index.js             # Entry point
├── package.json             # Project dependencies
└── README.md                # This file
```

## Installation & Local Development

1. Clone the repository:
```bash
git clone https://github.com/Dunstankiiru/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a new Vercel project
3. Connect your GitHub repository
4. Deploy!

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App configuration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

