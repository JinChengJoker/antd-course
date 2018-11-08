import React from 'react'
import { Card, Button } from 'antd'
import { connect } from 'dva'

const namespace = 'puzzlecards'
const mapStateToProps = (state) => {
    const cardList = state[namespace]
    return {
        cardList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`
            })
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)

class PuzzleCards extends React.Component {
    componentDidMount() {
        this.props.onDidMount()
    }
    render() {
        return (
            <div>
                {this.props.cardList.map((card) => {
                    return (
                        <Card key={card.id}>
                            <div>Q: {card.setup}</div>
                            <div><strong>A: {card.punchline}</strong></div>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default PuzzleCards