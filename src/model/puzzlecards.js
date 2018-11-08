import request from '../util/reuqest'

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond)
    })
}

export default {
    namespace: 'puzzlecards',
    state: [],
    effects: {
        *queryInitCards(_, {call, put}) {
            const url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'

            const cardData = yield call(request, url)
            yield put({
                type: 'addNewCard',
                payload: cardData
            })

            yield call(delay, 3000)

            const cardData2 = yield call(request, url)
            yield put({
                type: 'addNewCard',
                payload: cardData2
            })
        }
    },
    reducers: {
        addNewCard(state, {payload}) {
            const newCard = {
                id: state.length+1,
                ...payload
            }
            const newState = state.concat(newCard)
            return newState
        }
    }
}