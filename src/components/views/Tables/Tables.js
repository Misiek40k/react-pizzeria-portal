import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { settings } from '../../../data/dataStore';

import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import styles from './Tables.module.scss';

const intervals = ['12:00', '12:30', '13:00'];

const tables = [
  {
    id: 1, bookings: {
      '12:00': { hour: '12:00', booked: false },
      '12:30': { hour: '12:30', booked: false },
      '13:00': { hour: '13:00', booked: false },
    }, events: {
      '12:00': { hour: '12:00', booked: true },
      '12:30': { hour: '12:00', booked: true },
      '13:00': { hour: '12:00', booked: true },
    },
  },
  {
    id: 2, bookings: {
      '12:00': { hour: '12:00', booked: true },
      '12:30': { hour: '12:30', booked: false },
      '13:00': { hour: '13:00', booked: false },
    }, events: {
      '12:00': { hour: '12:00', booked: false },
      '12:30': { hour: '12:00', booked: false },
      '13:00': { hour: '12:00', booked: true },
    },
  },
  {
    id: 3, bookings: {
      '12:00': { hour: '12:00', booked: false },
      '12:30': { hour: '12:30', booked: false },
      '13:00': { hour: '13:00', booked: false },
    }, events: {
      '12:00': { hour: '12:00', booked: false },
      '12:30': { hour: '12:00', booked: false },
      '13:00': { hour: '12:00', booked: true },
    },
  },
  {
    id: 4, bookings: {
      '12:00': { hour: '12:00', booked: false },
      '12:30': { hour: '12:30', booked: true },
      '13:00': { hour: '13:00', booked: true },
    }, events: {
      '12:00': { hour: '12:00', booked: false },
      '12:30': { hour: '12:00', booked: false },
      '13:00': { hour: '12:00', booked: false },
    },
  },
];

const Tables = ({ id }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const url = settings.url;
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Paper className={styles.component}>
        <div className={styles.datePicker}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour/Table</TableCell>
              {tables.map(table => (
                <TableCell key={table.id}>{table.id}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {intervals.map(i => {
              return (
                <TableRow key={i}>
                  <TableCell>{i}</TableCell>
                  {tables.map(table => {
                    const isBooked = table.bookings[i].booked;
                    const isEvent = table.events[i].booked;
                    return (
                      <TableCell key={table.id}>{isBooked ?
                        <Button component={Link} to={`${url}/tables/booking/${id}`}>booked</Button>
                        : isEvent ? <Button component={Link} to={`${url}/tables/events/${id}`}>event</Button>
                          : null}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Toolbar />
        <div className={styles.fabs}>
          <Fab className={styles.fab} variant="extended" color="primary" component={Link} to={`${url}/tables/booking/new`}>
            <AddIcon />
            New booking
          </Fab>
          <Fab className={styles.fab} variant="extended" color="primary" component={Link} to={`${url}/tables/events/new`}>
            <AddIcon />
            New event
          </Fab>
        </div>

      </Paper>
    </Container>
  );
};

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
