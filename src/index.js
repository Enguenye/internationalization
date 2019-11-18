import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";

let idioma2 = ()=>{
    return navigator.language;
}

let idioma = ()=>{
    console.log(navigator.language);
    if(navigator.language==="es"){
        return localeEsMessages;
    }
    
    else if(navigator.language==="en"){
        return localeEnMessages;
    }
}

ReactDOM.render(
	<IntlProvider locale={idioma2()} messages = {idioma()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);