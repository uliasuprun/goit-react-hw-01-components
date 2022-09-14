import PropTypes from 'prop-types';
import {SectionStats, Title, StatList, Item, Label, Percentage} from './Statistics.styled';

export const Statistics = ({data}) => {
    return (
        <SectionStats>
        <Title>Upload stats</Title>
        <StatList>{data.map(({id, label, percentage}) => (
            <Item key={id} labelType={label}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
            </Item>))}
        </StatList>   
    </SectionStats>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}