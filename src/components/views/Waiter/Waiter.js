import React from 'react';
import { Link } from 'react-router-dom';
import { settings } from '../../../data/dataStore';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    changeStatus: PropTypes.func,
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status) {
    const { changeStatus } = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => changeStatus({ id, status: 'thinking' })}>thinking</Button>
            <Button onClick={() => changeStatus({ id, status: 'ordered' })}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => changeStatus({ id, status: 'ordered' })}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => changeStatus({ id, status: 'prepared' })}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => changeStatus({ id, status: 'delivered' })}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => changeStatus({ id, status: 'paid' })}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => changeStatus({ id, status: 'free' })}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    const tablesArray = Array.from(tables);

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Container>
          <Toolbar />
          <Paper className={styles.component}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tablesArray.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Link to={`${settings.url}/waiter/order/${row.id}`}>{row.id}</Link>
                    </TableCell>
                    <TableCell>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      {row.order && (
                        <Button to={`${settings.url}/waiter/order/${row.order}`}>
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {this.renderActions(row.id, row.status)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Fab variant="extended" color="primary" component={Link} to={`${settings.url}/waiter/order/new`}>
              <AddIcon />
              New order
            </Fab>
          </Paper>
        </Container>
      );
    }
  }
}

export default Waiter;
