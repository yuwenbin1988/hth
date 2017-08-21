import React, {Component}from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import PageHome from './components/pageHome'

import './common.css'
import App from './components/app'


class PageRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={PageHome} />

                </Route>

            </Router>
        )
    }
}
export default PageRouter