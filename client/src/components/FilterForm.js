import React,{ Component } from 'react';
import { connect } from 'react-redux';

class FilterForm extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <nav className="navbar navbar-light p-0">
                        <form
                            onSubmit={this.props.onSubmit}
                            className="form-inline"
                        >
                            <div className="form-group m-0">
                                <input
                                    type="text"
                                    name="name"
                                    id="item"
                                    className="form-control"
                                    placeholder="Search..."
                                    autoComplete="off"
                                    pattern="^[a-zA-Z0-9_]{1,}(\s+[a-zA-Z0-9_])*$"
                                    // [a-zA-Z0-9_]+(\s[a-zA-Z0-9_])
                                    required={true}
                                    onChange={this.props.onChange} />
                            </div>
                            <button className="btn btn-dark ml-2">Search</button>
                        </form>
                    </nav>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps)(FilterForm);