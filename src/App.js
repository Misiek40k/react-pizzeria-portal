import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { settings } from './data/dataStore';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import OrderNew from './components/views/Waiter/OrderNew';
import OrderItem from './components/views/Waiter/OrderItem';
import BookingNew from './components/views/Tables/BookingNew';
import BookingItem from './components/views/Tables/BookingItem';
import EventsNew from './components/views/Tables/EventsNew';
import EventsItem from './components/views/Tables/EventsItem';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
},
);

function App() {
  const url = settings.url;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${url}/`} component={Dashboard} />
                <Route exact path={`${url}/login`} component={Login} />
                <Route exact path={`${url}/tables`} component={Tables} />
                <Route exact path={`${url}/waiter`} component={Waiter} />
                <Route exact path={`${url}/kitchen`} component={Kitchen} />
                <Route exact path={`${url}/waiter/order/new`} component={OrderNew} />
                <Route exact path={`${url}/waiter/order/:id`} component={OrderItem} />
                <Route exact path={`${url}/tables/booking/new`} component={BookingNew} />
                <Route exact path={`${url}/tables/booking/:id`} component={BookingItem} />
                <Route exact path={`${url}/tables/events/new`} component={EventsNew} />
                <Route exact path={`${url}/tables/events/:id`} component={EventsItem} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
