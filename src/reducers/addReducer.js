import { ADD } from '../actions/addAction';

const initialState = {
    equipmentName: '',
    sensorName: '',
    setpoint: ''
}

const addReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD:
        return {
            ...state,
            equipmentName: action.payload.equipmentName,
            sensorName: action.payload.sensorName,
            setpoint: action.payload.setpoint,
        };
      default:
        return state;
    }
};

export default addReducer;