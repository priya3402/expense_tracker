
import './app.css';
import { Header } from './components/header';
import { Balance } from './components/Balance';
import { incomeExpenses } from './components/incomeExpenses';
import { transactionlist } from './components/transactionlist';
import { Transaction } from './components/transaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <incomeExpenses />
        <transactionlist />
        <addTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;