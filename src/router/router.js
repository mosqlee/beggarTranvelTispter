import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import TravelList from 'bundle-loader?lazy&name=travelList!pages/TravelList/TravelList';
import MainList from 'bundle-loader?lazy&name=travelList!pages/List/List';
import ListCards from 'bundle-loader?lazy&name=listCards!pages/listCards/listCards';
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component /> : <Loading />
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)} />
            <Route path="/userinfo" component={createComponent(UserInfo)} />
            <Route path="/travelList" component={createComponent(TravelList)} />
            <Route path="/MainList" component={createComponent(MainList)} />
            <Route path="/listCards" component={createComponent(ListCards)} />
            <Route component={createComponent(NotFound)} />
        </Switch>
    </div>
)
