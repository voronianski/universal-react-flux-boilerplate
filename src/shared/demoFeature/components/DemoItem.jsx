import React, { PropTypes } from 'react';

class DemoItem extends React.Component {
    render() {
        const { title, price } = this.props;

        return (
            <div>{title} - $ {price}</div>
        );
    }
}

DemoItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number
};

export default DemoItem;
