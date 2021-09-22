import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService'
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions"

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: []
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getPositionStart()
        this.props.getRoleStart()
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        //     console.log(res);
        // } catch (e) {
        //     console.log(e)
        // }
    }
    //check xem state có thay đổi hay k để cập nhật
    //function componentWillReceiveProps() > UNSAFE ( k khuyến khích dùng nữa)
    componentDidUpdate(prevProps, preState, snapshot) {
        //render => didupdate
        //hiện tại (this)  và quá khứ (previous)
        // []   [3]
        // [3]   [3]
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux,
            })
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux,
            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }

    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let isGetGenders = this.props.isLoadingGender
        console.log('check state component: ', this.state)
        return (
            <div className="user-redux-container">
                <div className="title" >User redux</div>

                <div className="user-redux-body">
                    <div className="container">

                        <div className="row">
                            <div className="col-12 my-3"><FormattedMessage id="manage-user.add" /></div>
                            <div className="col-12 my-3">{isGetGenders === true ? 'Loading genders' : ''}</div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.email" /></label>
                                <input className="form-control" type="email" />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.password" /></label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.first-name" /></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.last-name" /></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.phonenumber" /></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-9">
                                <label htmlFor=""><FormattedMessage id="manage-user.address" /></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-control">
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.position" /></label>
                                <select className="form-control">
                                    {roles && roles.length > 0 && roles.map((item, index) => {
                                        return (
                                            <option key={index}>
                                                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.role" /></label>
                                <select className="form-control">
                                    {positions && positions.length > 0 && positions.map((item, index) => {
                                        return (
                                            <option key={index}>
                                                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.image" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 mt-3">
                                <button className="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),

        getPositionStart: () => dispatch(actions.fetchPositionStart()),

        getRoleStart: () => dispatch(actions.fetchRoleStart()),

        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
