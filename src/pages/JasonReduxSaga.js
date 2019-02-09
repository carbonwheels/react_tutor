import React from "react";
import { connect } from 'react-redux';
import Typography from "@material-ui/core/Typography";

import { getJasonPlaceHolder } from '../actions/jasonPlaceHolder'
import JasonList from "../controls/jason/JasonList";

class JasonReduxSagaPage extends React.Component {
    state = {
        data: [],
    }

    componentDidMount() {
        this.props.getJasonPlaceHolder();
    }

    render() {
        return (
            <div>
                <Typography variant="h2" color="secondary">Jason Redux</Typography>
                <JasonList data={this.props.data} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.jasonPlaceHolderReducer.data,
        fetching: state.jasonPlaceHolderReducer.fetching,
        error: state.jasonPlaceHolderReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJasonPlaceHolder: () => dispatch(getJasonPlaceHolder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JasonReduxSagaPage);