import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import {v4} from "uuid"
import TransactionItem from "../TransactionItem"

const transactionTypeOptions = [
    {
      optionId: 'INCOME',
      displayText: 'Income',
    },
    {
      optionId: 'EXPENSES',
      displayText: 'Expenses',
    },
  ]

class MoneyManager extends Component {
    state = {titleInput: '', amountInput: '', typeOfMoney: transactionTypeOptions[0].displayText, historyList: []}

    getTitleInput = (event) => {
        this.setState({titleInput: event.target.value})
    }

    getAmountInput = (event) => {
        this.setState({amountInput: event.target.value})
    }

    getTypeOfMoney = (event) => {
        this.setState({typeOfMoney: event.target.value})
    }

    addToTransactionHistory = event => {
        event.preventDefault()
        const {titleInput, amountInput, typeOfMoney} = this.state
        const newHistoryItem = {
            id: v4(),
            title:titleInput,
            amount:parseInt(amountInput),
            type:typeOfMoney
        }

        this.setState(prevState => ({
            historyList: [...prevState.historyList, newHistoryItem],
            titleInput: '',
            amountInput: '',
            typeOfMoney: transactionTypeOptions[0].displayText
        }))

    }

    getMoneyDetails = (historyList) => {
        let balance = 0
        let income = 0
        let expenses = 0

        historyList.forEach(eachEntry => {
            if (eachEntry.type === transactionTypeOptions[0].displayText){
                income += eachEntry.amount
            }
            else{
                expenses += eachEntry.amount
            }
        })
        balance = income - expenses
        const array = [balance, income, expenses]
        return array
    }

    updateMoneyDetails = (id) => {
        this.setState(prevState => ({
            historyList: prevState.historyList.filter(eachEntry => eachEntry.id !== id)
        }))
    }

    renderTransactionHistoryList = historyList => {
        return historyList.map(eachItem => (
            <TransactionItem 
                key={historyList.id}
                historyDetails={eachItem}
                updateMoneyDetails={this.updateMoneyDetails}/>
        ))
    }

    render(){
        const {titleInput, amountInput, typeOfMoney, historyList} = this.state
        const moneyDetails = this.getMoneyDetails(historyList)
        return(
            <div className="app-container">
                <div className='money-manager-header'>
                    <h1 className='person-name'>RUPENDRA CH</h1>
                    <p className="description-text">
                        Welcome back to your 
                        <span className="spaned-text"> Money Manager</span>
                    </p>
                </div>
                <div className="money-details-container">
                    <MoneyDetails moneyDetails={moneyDetails}/>
                </div>
                <div className="add-transaction-container">
                    <div className='add-container'>
                        <h1 className="add-heading">Add Transaction</h1>
                        <form className="form" onSubmit={this.addToTransactionHistory}>
                            <div className='title-container'>
                                <label htmlFor="title" className='label-text'>TITLE</label>
                                <div>
                                    <input type="text" id="title" value={titleInput}  className='input-text' onChange={this.getTitleInput}/>
                                </div>
                            </div>
                            <div className='amount-container'>
                                <label htmlFor="amount" className='label-text'>
                                    AMOUNT
                                </label>
                                <div>
                                    <input type="text" value={amountInput}  className='input-text' id="amount" onChange={this.getAmountInput} />
                                </div>
                            </div>
                            <div className='type-container'>
                                <label htmlFor="type" className='label-text'>
                                    TYPE
                                </label>
                                <div>
                                    <select className='drop-down-text' value={typeOfMoney} onChange={this.getTypeOfMoney}>
                                    {transactionTypeOptions.map(eachType => (
                                        <option className="option-text" value={eachType.displayText} key={eachType.optionId}>{eachType.displayText}</option>
                                    ))}
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className='add-btn'>Add</button>
                        </form>
                    </div>
                    <div className='history-container'>
                        <h1 className='history-heading'>History</h1>
                        <div className='table-container'>
                            <ul className='section-details'>
                                <li class="table-header">
                                    <p className="section">Title</p>
                                    <p className='section'>Amount</p>
                                    <p className='section'>Type</p>
                                </li>
                                {this.renderTransactionHistoryList(historyList)}
                            </ul>                  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoneyManager