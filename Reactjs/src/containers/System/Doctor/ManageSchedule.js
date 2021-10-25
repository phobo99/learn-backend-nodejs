import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManageSchedule.scss';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from "../../../store/actions"
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils'


class ManageSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDoctors: []
        }
    }

    componentDidMount() {
        this.props.fetchAllDoctorsRedux()
    }

    componentDidUpdate(prevProps, prevSate, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctors: dataSelect
            })
        }
        // if (prevProps.language !== this.props.language) {
        //     let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
        //     this.setState({
        //         listDoctors: dataSelect
        //     })
        // }
    }

    buildDataInputSelect = (inputData) => {
        let result = []
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {}
                let labelVie = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`
                object.label = language === LANGUAGES.VI ? labelVie : labelEn;
                object.value = item.id;
                result.push(object)
            })

        }
        return result;

    }
    handleChangeSelect = async (selectedOption) => {
        this.setState({ selectedDoctor: selectedOption });
    };
    render() {
        return (
            <div className="manage-schedule-container">
                <div className="m-s-title">
                    <FormattedMessage id="manage-schedule.title" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 form-group">
                            <label htmlFor="">Chọn bác sĩ</label>
                            <Select
                                value={this.state.selectedDoctor}
                                onChange={this.handleChangeSelect}
                                options={this.state.listDoctors}
                                className=""
                            />
                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="">Chọn ngày</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 pick-hour-container">

                        </div>
                        <button className="btn btn-primary">Luu thong tin</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctorsRedux: () => dispatch(actions.fetchAllDoctors()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);