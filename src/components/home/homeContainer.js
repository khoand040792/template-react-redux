import { connect } from 'react-redux';
import Home from '../home/home';
import increaseNumber from '../../actions/homeActions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        countNumber: state.home.count,
        isLoading: state.ui.loading,
        dataTables: state.home.dataTables
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: (number) => dispatch(increaseNumber(number)),
        searchTable: (txtSearch) => {
            dispatch({ type: 'SHOW_SPINER_CALL_API' })
            dispatch({ type: "HOME_SEARCH_TABLE", payload: txtSearch, meta: { debounce: 4000 } })
            setTimeout(() => {
                dispatch({ type: 'DONE_API_HIDE_SPINER' })
            }, 4000)
        }
    }
}

export const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));