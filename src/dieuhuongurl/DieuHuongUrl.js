import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import asyncComponent from '../dieuhuongurl/asyncComponent';
class DieuHuongUrl extends Component {
    News = asyncComponent(()=> 
      import('../components/new/News').then(module => module.default)
    )
    NewDetail = asyncComponent(()=> 
      import('../components/newdetail/NEWSDETAIL').then(module => module.default)
    )
    Contact = asyncComponent(()=>
      import('../components/contact/Contact').then(module => module.default)
    )
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/tin" component={this.News}></Route>
                    <Route path="/tin-tuc/:slug.:id.html" component={this.NewDetail}></Route>
                    <Route path="/lien-he" component={this.Contact}></Route>
                </Switch>
            </div>
        );
    }
}

export default DieuHuongUrl;