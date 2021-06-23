import axios from "axios";


//constantes
const dataInicial = {
    array: [],
    offset: 0
}
//types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO';
const SIGUIENTES_POKEMONES_EXITO = 'SIGUIENTES_POKEMONES_EXITO';

//reducer
export default function pokeReducer(state = dataInicial, actions) {
    switch (actions.type) {
        case OBTENER_POKEMONES_EXITO:

            return { ...state, array: actions.payload };
        case SIGUIENTES_POKEMONES_EXITO:
            return { ...state, array: actions.payload.array, offset: actions.payload.offset };
        default:
            return state;
    }
}

//actions
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    const { offset } = getState().pokemones;

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {
    const { offset } = getState().pokemones;
    const siguiente = offset + 20;
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`);
        dispatch({
            type: SIGUIENTES_POKEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}