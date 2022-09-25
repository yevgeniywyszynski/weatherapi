import { connect } from "react-redux";
import HistorySearch from './HistorySearch';
import { getHistory } from "../../redux/historySearchRedux";

const mapStateToProps = state => ({
    historyList: getHistory(state),
})

export default connect(mapStateToProps, null )(HistorySearch);