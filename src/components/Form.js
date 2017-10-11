import React from 'react';

class Form extends React.Component {
    handleChange(event) {
        this.props.handleChange(event);
    }
    handleSubmit(event) {
        this.props.handleSubmit(event);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s3">
                        <input
                        name="currentTitle"
                        type="text"
                        value={this.props.currentTitle}
                        onChange={this.props.handleChange}/>
                    </div>
                    <div className="input-field col s7">
                        <input
                        name="currentDetails"
                        type="text"
                        value={this.props.currentDetails}
                        onChange={this.props.handleChange}/>
                    </div>
                    <div className="input-field col s2">
                        <button className="btn-large waves-effect waves-light"
                        type="submit" name="action"> Add note</button>
                    </div>
                </div>
                </form>     
            </div>
        );
    }
}

export default Form;