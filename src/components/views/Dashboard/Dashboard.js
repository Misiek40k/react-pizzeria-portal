import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';

import styles from './Dashboard.module.scss';

const bookings = [
  { id: 1, hour: '12:00', table: 1, ppl: 1 },
  { id: 2, hour: '12:30', table: 2, ppl: 2 },
  { id: 3, hour: '13:00', table: 2, ppl: 3 },
];

const events = [
  { id: 1, hour: '15:00', table: 3, ppl: 5 },
  { id: 2, hour: '16:30', table: 2, ppl: 1 },
  { id: 3, hour: '17:00', table: 1, ppl: 3 },
];

const orderStats = [
  { id: 1, value: 111 },
  { id: 2, value: 55 },
  { id: 3, value: 123 },
  { id: 4, value: 76 },
];

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Container>
      <Toolbar />
      <Paper className={styles.component}>
        <div className={styles.heading}>
          <h2>Dashboard</h2>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className={styles.datePicker}
              value={selectedDate}
              onChange={handleDateChange}
              animateYearScrolling
            />
            <TimePicker
              clearable
              ampm={false}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>
        <List>
          <ListItem>
            <ListItemText primary="Stats" />
          </ListItem>
          <ListItem>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>OrderNo</TableCell>
                  <TableCell>Order value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderStats.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ListItem>
          <Divider />
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Bookings" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={!open} timeout="auto" unmountOnExit>
            <List>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Hour</TableCell>
                    <TableCell>Table Number</TableCell>
                    <TableCell>Guests Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.map(booking => {
                    return (
                      <TableRow key={booking.id}>
                        <TableCell>
                          {booking.hour}
                        </TableCell>
                        <TableCell>
                          {booking.table}
                        </TableCell>
                        <TableCell>
                          {booking.ppl}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </List>
          </Collapse>
          <Divider />
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Events" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={!open} timeout="auto" unmountOnExit>
            <List>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Hour</TableCell>
                    <TableCell>Table</TableCell>
                    <TableCell>Guests</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map(event => {
                    return (
                      <TableRow key={event.id}>
                        <TableCell>
                          {event.hour}
                        </TableCell>
                        <TableCell>
                          {event.table}
                        </TableCell>
                        <TableCell>
                          {event.ppl}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </List>
          </Collapse>
        </List>
      </Paper>
    </Container>
  );
};

export default Dashboard;
