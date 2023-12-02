import "./index.css"

const MoneyDetails = props => {
    const {moneyDetails} = props
    return(
        <div className="money-details-container">
            <div className="balance-amount-container">
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
                        alt="balance" className="img"/>
                </div>
                <div className="amount-container">
                    <p className="your-balance">Your Balance</p>
                    <p className="balance-text">Rs {moneyDetails[0]}</p>
                </div>
            </div>
            <div className="income-amount-container">
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
                        alt="income" className="img"/>
                </div>
                <div className="amount-container">
                    <p className="your-balance">Your Income</p>
                    <p className="balance-text">Rs {moneyDetails[1]}</p>
                </div>
            </div>
            <div className="expenses-amount-container">
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
                        alt="expenses" className="img"/>
                </div>
                <div className="amount-container">
                    <p className="your-balance">Your Expenses</p>
                    <p className="balance-text">Rs {moneyDetails[2]}</p>
                </div>
            </div>
        </div>
    )
}
export default MoneyDetails