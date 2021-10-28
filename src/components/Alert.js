import React, { Component } from 'react';
import { FiAlertCircle, FiAlertTriangle } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai"

const type = {
    success: "alert alert-success",
    info: "alert alert-info",
    danger: "alert alert-danger",
}

const message = {
    success: "This is a Success Alert",
    info: "This is an Info Alert",
    danger: "This is a Danger Alert",
}

const arrangement = {
    layout1: "layout1",
    layout2: "layout2",
    layout3: "layout3",
}

const Box = (props) => {
    return (
        <div className="box">
            <div className={props.type} id={props.arrangement} role="alert">
                <h6 className="icon">{props.icon}</h6>
                <h6 className="description">{props.description}</h6>
                <h6 className={props.color}>{props.message}</h6>
            </div>
        </div>
    )
}


export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            message: "Click A Button",
            icon: "",
            color: "",
            arrangement: "",
            description: "",
        }
    }

    findDescription = () => {
        if (this.state.type === type.success) {
            return "Success Alert"
        } else if (this.state.type === type.info) {
            return "Info Alert"
        } else {
            return "Danger Alert"
        }
    }

    handleSuccess = () => {
        this.setState({
            type: type.success,
            message: message.success,
            icon: <AiOutlineCheckCircle color="green" />,
            color: "green"
        })
    }

    handleInfo = () => {
        this.setState({
            type: type.info,
            message: message.info,
            icon: <FiAlertCircle color="blue" />,
            color: "blue"
        })
    }

    handleDanger = () => {
        this.setState({
            type: type.danger,
            message: message.danger,
            icon: <FiAlertTriangle color="red" />,
            color: "red"
        })
    }

    handleLayout1 = () => {
        this.setState({
            arrangement: arrangement.layout1,
            description: "",
        })
    }

    handleLayout2 = () => {
        this.setState({
            arrangement: arrangement.layout2,
            description: "",
        })
    }

    handleLayout3 = () => {
        this.setState({
            arrangement: arrangement.layout3,
            description: this.findDescription()
        })
    }

    render() {
        return (
            <div className="container">
                <Box type={this.state.type}
                    message={this.state.message}
                    icon={this.state.icon}
                    arrangement={this.state.arrangement}
                    color={this.state.color}
                    description={this.state.description}
                />
                <div className="buttons">
                    <button className="btn btn-success" onClick={this.handleSuccess}>Success</button>
                    <button className="btn btn-primary" onClick={this.handleInfo}>Info</button>
                    <button className="btn btn-danger" onClick={this.handleDanger}>Error</button>
                </div>
                
                <div className="buttons">
                    <button className="btn btn-outline-dark" onClick={this.handleLayout1}>Layout 1</button>
                    <button className="btn btn-outline-dark" onClick={this.handleLayout2}>Layout 2</button>
                    <button className="btn btn-outline-dark" onClick={this.handleLayout3}>Layout 3</button>
                </div>
            </div>
        )
    }
}
