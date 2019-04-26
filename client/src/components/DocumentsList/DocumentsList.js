import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import Document from './Document';
import NoFoundAlert from '../NoFoundAlert';

class DocumentsList extends Component {

    componentDidMount() {
        this.props.getItems();
    };

    itemsRenderMethod = (toggle, filteredArr) => {
        if(filteredArr.length > 0 && toggle) {
            return (
                filteredArr.map((document) => {
                    if (toggle) {
                        return (
                            <Document document={document} key={document._id} />
                        )
                    }
                })
            )
        }  else if(filteredArr.length <= 0 && toggle){
            return <NoFoundAlert />
        }
    }

    render() {
        const { items } = this.props.item;
        const { toggle, filteredArr} = this.props.state;
        console.log(`DB: `, items)
        return(
            <div className="container mt-5">
                <div className="row">
                    <ul className="list-group w-100 pb-5">
                        {this.itemsRenderMethod(toggle, filteredArr)}
                    </ul>
                </div>
          </div>
        )
    }
};

DocumentsList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, { getItems })(DocumentsList);