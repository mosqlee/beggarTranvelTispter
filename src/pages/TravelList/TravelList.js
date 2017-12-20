import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './TravelList.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { getTravelList } from "actions/travelList";
//  import classes from './TravelList';
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});
class TravelLists extends Component {
    componentDidMount() {
        this.props.getTravelList();
    }
    render() {
        const { travelList,isLoading, errorMsg } = this.props.travelList;
        return (
            <div>
                {
                    isLoading ? 'loading':
                        (
                            errorMsg ? errorMsg :
                                    (
                                    <Paper className={this.props.classes.root}>
                                        <Table className={this.props.classes.table}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>标题</TableCell>
                                                    <TableCell numeric>图片</TableCell>
                                                    <TableCell numeric>简介</TableCell>
                                                    <TableCell numeric>日期</TableCell>
                                                    <TableCell numeric>地点</TableCell>
                                                </TableRow>
                                            </TableHead>
                                        <TableBody>
                                        {travelList.travelList.map(n => {
                                            return (
                                            <TableRow key={n.id}>
                                                <TableCell>{n.title}</TableCell>
                                                <TableCell numeric><img src={n.img} /></TableCell>
                                                <TableCell numeric>{n.intro}</TableCell>
                                                <TableCell numeric>{n.date}</TableCell>
                                                <TableCell numeric>{n.location}</TableCell>
                                            </TableRow>
                                            );
                                        })}
                                        </TableBody>
                                        </Table>
                                     </Paper>
                                    )
                        )
                }
            </div>

        )
    }
}
const TravelList = withStyles(styles)(TravelLists);
export default connect((state) => ({ travelList: state.travelList }), { getTravelList })(TravelList);