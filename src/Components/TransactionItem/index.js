import "./index.css"

const TransactionItem = props => {
    const {historyDetails, updateMoneyDetails} = props
    const {id,title, amount, type} = historyDetails

    const deleteHistoryItem = () => {
        updateMoneyDetails(id)
    }

    return (
        <li className="table-row">
            <p className="text">{title}</p>
            <p className='text'>{amount}</p>
            <p className='text'>{type}</p>
            <div className="delete-container">
                <button className="delete-button" onClick={deleteHistoryItem}>
                    <img className="delete-img" alt="delete" src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"/>
                </button>
            </div>
        </li>
    )
}

export default TransactionItem