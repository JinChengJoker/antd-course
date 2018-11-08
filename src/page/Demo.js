import React from 'react'

const MyInput = ({ value = '', onChange }) => (
    <input value={value} onChange={onChange} />
)

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onTextReset = () => {
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <MyInput value={this.state.text} onChange={this.onTextChange} />
                <button onClick={this.onTextReset}>Reset</button>
            </div>
        )
    }
}

export default Demo