import { connect } from "react-redux";
import { Dispatch } from "redux";
import { loadShows } from "../../actions";
import { AppActions } from "../../types/actions";
import Search from "./Search";
import './Search.scss'

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
    onSearch: (query: string) => {
        dispatch(loadShows(query));
      },
})

export default connect(
  null,
  mapDispatchToProps
)(Search);