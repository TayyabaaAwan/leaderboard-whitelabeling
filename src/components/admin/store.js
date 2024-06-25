import { createStore } from 'redux';

const initialState = {
    theme: {
        inputId: "",
        cellBackground: "",
        cellBorder: "",
        topRowBackground: "",
        topRowTextColor: "",
        topRowFontSize: "",
        topRowFontFamily: "",
        cellsFontSize: "",
        paginationRowColor: "",
        paginationRowTextColor: "",
        paginationButtonsBg: "",
        currentPageClr: "",
        dropDownBg: "",
        dropDownTextClr: "",
        dropDownBorder: "",
        dropDownBorderRadius: "",
        customFooterBg: ""
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, theme: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;

