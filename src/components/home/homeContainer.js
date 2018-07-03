import { connect } from 'react-redux';
import Home from '../home/home';
import increaseNumber from '../../actions/homeActions/actionCreators';

const mapStateToProps = (state) => {
    return {
        countNumber: state.home.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: (number) => dispatch(increaseNumber(number))
    }
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);