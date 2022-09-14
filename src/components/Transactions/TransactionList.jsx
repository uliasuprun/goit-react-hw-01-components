import PropTypes from 'prop-types';
import {TransactionHistory, TableHead, List, Title, TableBody, Row} from './Transactions.styled';

export const TransactionList = ({transactions}) => {
    return (

    <TransactionHistory>
        <TableHead>
            <List>
            <Title>Type</Title>
            <Title>Amount</Title>
            <Title>Currency</Title>
            </List>
        </TableHead>

        <TableBody>{transactions.map(({id, type, amount, currency}) => (
            <List key={id}>
            <Row>{type}</Row>
            <Row>{amount}</Row>
            <Row>{currency}</Row>
            </List>))}
        </TableBody>
    </TransactionHistory>
    );
};


TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}