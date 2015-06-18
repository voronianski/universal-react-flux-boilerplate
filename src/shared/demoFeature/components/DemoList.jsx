import React, { PropTypes } from 'react';

import DemoItem from './DemoItem';

class DemoList extends React.Component {
    render() {
        const { items } = this.props;

        if (!items) {
            return <div>Loading...</div>;
        }

        const itemNodes = items.map(item => {
            return (
                <DemoItem key={item.id} title={item.title} price={item.price} />
            );
        });

        return (
            <div>{itemNodes}</div>
        );
    }
}

DemoList.defaultProps = {
    items: []
};

DemoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

export default DemoList;
