import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import OrderNew from './components/views/Waiter/OrderNew';
import OrderItem from './components/views/Waiter/OrderItem';
import BookingNew from './components/views/Tables/BookingNew';
import BookingItem from './components/views/Tables/BookingItem';
import EventsNew from './components/views/Tables/EventsNew';
import EventsItem from './components/views/Tables/EventsItem';

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
            <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderItem} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingItem} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventsItem} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
