import React, { Component } from "react";
import { connect } from 'react-redux';
import './RemedyModal.scss'
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { toast } from 'react-toastify';
import moment from 'moment';
import { CommonUtils } from '../../../utils';

class RemedyModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: ''
        }
    }
    async componentDidMount() {
        if (this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataModal !== this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }

    }
    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imgBase64: base64
            })
        }
    }
    handleSendRemedy = () => {
        this.props.sendRemedy(this.state)
    }
    render() {
        let { isOpenModal, closeRemedyModal, dataModal, sendRemedy } = this.props;
        return (
            <Modal
                isOpen={isOpenModal}
                className={"booking-modal-container"}
                size="md"
                centered
            >
                <div className="modal-header">
                    <h5 className="model-title">Gui hoa don kham benh thanh cong</h5>
                    <button type="button" className="close" aria-label="Close"
                        onClick={closeRemedyModal}
                    >
                        <span aria-hidden="true">x</span>
                    </button>
                </div>
                <ModalBody>
                    <div className="row">
                        <div className="col-6 form-group">
                            <label>Email benh nhan</label>
                            <input type="email" className="form-control" value={this.state.email}
                                onChange={(event) => this.handleOnChangeEmail(event)} />
                        </div>
                        <div className="col-6 form-group">
                            <label>Chon file don thuoc</label>
                            <input type="file" className="form-control-file"
                                onChange={(event) => this.handleOnChangeImage(event)} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handleSendRemedy()}>Send</Button>{' '}
                    <Button color="secondary" onClick={closeRemedyModal}>Cancel</Button>
                </ModalFooter>

            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);