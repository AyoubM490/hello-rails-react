const initialState = {
    messages: []
  }
  
  const DISPLAY_GREETING = 'greeting/DISPLAY_GREETING'
  
  const displayGreeting = (payload) => ({
    type: DISPLAY_GREETING,
    payload
  })
  
  const greetingReducer = (state=initialState, action) => {
    switch(action.type){
      case DISPLAY_GREETING:
        return { ...state, messages: [action.payload.message] } ;
      default:
        return state;
    }
  }
  
  export const fetchGreeting = () => async (dispatch) => {
    try {
      const res = await fetch('v1/greetings')
      const data = await res.json()
      dispatch(displayGreeting(data));
    }
    catch (err) {
      throw new Error(err)
    }
  }
  
  
  
  export default greetingReducer;