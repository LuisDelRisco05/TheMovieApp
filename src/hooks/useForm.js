import { useState } from 'react';

export const useForm = ( initState ) => {
    
    const [state, setState] = useState( initState );

    const onChange = ( field, value ) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
    }

}