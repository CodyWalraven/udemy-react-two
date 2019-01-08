import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import "normalize.css/normalize.css"
import "./styles/styles.scss"

const ExpenseDashboardPage = () => <div>This is from expense dashboard</div>
const AddExpensePage = () => <div>This is from add expense page</div>

const EditExpensePage = () => <div>Edit Expense Page</div>

const HelpPage = () => <div>Help Page</div>

const NotFoundPage = () =>
  <div>
   404! - <Link to="/">Go Home</Link>
  </div>

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"))
