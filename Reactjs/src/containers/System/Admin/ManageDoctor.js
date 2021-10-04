import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManageDoctor.scss';
import * as actions from "../../../store/actions"
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';

const mdParser = new MarkdownIt(/*Markdown-it options */)
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedDoctor: '',
            description: '',

        }
    }
    componentDidMount() {

    }


    componentDidUpdate(prevProps, prevSate, snapshot) {

    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
        console.log('handleEditorChange', html, text);
    }
    handleSaveContentMarkdown = () => {
        console.log('check state: ', this.state)
    }
    handleChange = (selectedDoctor) => {
        this.setState({ selectedDoctor });
        console.log(`Option selected:`, selectedDoctor);
    };
    handleOnChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    render() {
        return (
            <div className="manage-doctor-container">
                <div className="manage-doctor-title">
                    Tao them thong tin bac si
                </div>
                <div className="more-info">
                    <div className="content-left form-group">
                        <label htmlFor="">Chon bac si</label>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleChange}
                            options={options}
                            className=""
                        />
                    </div>
                    <div className="content-right">
                        <label htmlFor="">Thong tin gioi thieu</label>
                        <textarea
                            className="form-control"
                            name="" id="" rows="4"
                            onChange={(event) => this.handleOnChangeDescription(event)}
                            value={this.state.description}
                        >
                            asikjbcasciuasbcaisu
                        </textarea>
                    </div>
                </div>
                <div className="manage-doctor-editor">

                </div>
                <MdEditor
                    style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)}
                    onChange={this.handleEditorChange}
                />
                <button
                    onClick={() => this.handleSaveContentMarkdown()}
                    className="save-content-doctor">
                    Luu thong tin
                </button>
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
