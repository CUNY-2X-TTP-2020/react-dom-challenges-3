import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A presentational component which is rendered by Table
 * 
 * The TableRow component will:
 * - receive props from Table
 * - be a parent of TableCell
 * - render the cells (columns) of the row
 * - push down color state from Table to TableCell
 */
export default class TableRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            key: props.key,
            cells: props.cells,
            color: props.color
        }
    }

    render()
    {
        return (
            <tr className="grid-row">
                {this.props.cells}
            </tr>
        );
    }
}

TableRow.propTypes =
{
    key: PropTypes.string.isRequired,
    cells: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired
}