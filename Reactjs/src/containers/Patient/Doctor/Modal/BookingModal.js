import React, { Component } from "react";
import { connect } from 'react-redux';
import './BookingModal.scss';
import { FormattedMessage } from "react-intl";
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash'

class BookingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }

    }
    render() {
        let { isOpenModal, closeBookingClose, dataTime } = this.props;
        let doctorId = '';
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId
        }
        return (
            <div>
                <Modal
                    isOpen={isOpenModal}
                    size='lg'
                    className={'booking-modal-container'}
                    centered
                //backdrop={true}
                >
                    <div className="booking-modal-content">
                        <div className="booking-modal-header">
                            <span className="left">Thong tin dat lich kham benh</span>
                            <span
                                className="right"
                                onClick={closeBookingClose}
                            >
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="booking-modal-body">
                            {/* {JSON.stringify(dataTime)} */}
                            <div className="doctor-info">
                                <ProfileDoctor
                                    doctorId={doctorId}
                                />
                            </div>
                            <div className="price">
                                
                            </div>
                            <div className="row">
                                <div className="col-6 form-group">
                                    <label>Ho ten</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-6 form-group">
                                    <label>So dien thoai</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-6 form-group">
                                    <label>Dia chi email</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-6 form-group">
                                    <label>Dia chi lien he</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-6 form-group">
                                    <label>Ly do kham</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-6 form-group">
                                    <label>Dat cho ai</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-6 form-group">
                                    <label>Gioi tinh</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="booking-modal-footer">
                            <button className="btn-booking-confirm"
                                onClick={closeBookingClose}
                            >Xac nhan</button>
                            <button className="btn-booking-confirm"
                                onClick={closeBookingClose}
                            >Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);