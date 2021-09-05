const initiaState = [ 1, 2, 3, 4, 5 ]

const imageUrls = (state = initiaState, action: { type: any }) => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            return 'data'
        default:
            return state
    }
}

export default imageUrls
