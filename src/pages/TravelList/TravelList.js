import React, { Component } from 'react';

import style from './TravelList.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { getTravelList } from "actions/getTravelList";

class TravelList extends Component {
    render() {
        const { travelList,isLoading, errorMsg } = this.props.getTravelList;
        return (
            <div>
                {
                    isLoading ? 'loading':
                        (
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell numeric>Calories</TableCell>
                                            <TableCell numeric>Fat (g)</TableCell>
                                            <TableCell numeric>Carbs (g)</TableCell>
                                            <TableCell numeric>Protein (g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map(n => {
                                            return (
                                                <TableRow key={n.id}>
                                                    <TableCell>{n.name}</TableCell>
                                                    <TableCell numeric>{n.calories}</TableCell>
                                                    <TableCell numeric>{n.fat}</TableCell>
                                                    <TableCell numeric>{n.carbs}</TableCell>
                                                    <TableCell numeric>{n.protein}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Paper>
                        )
                }
                <button onClick={() => this.props.getTravelList()}>请求用户信息</button>
            </div>

        )
    }
}
export default connect((state) => ({ travelList: state.userInfo }), { getUserInfo })(UserInfo);