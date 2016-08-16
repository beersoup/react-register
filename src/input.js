import React, { Component } from 'react'


class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <div className="input-group">
                    <span className="input-group-addon">
                        <span className={this.props.classInput}></span>
                    </span>
                    <input
                        type="text"
                        ref={this.props.refInput}
                        className="form-control"
                        placeholder={this.props.placeholderInput} />
                </div>
            </div>
        );
    }
}

export default Input;