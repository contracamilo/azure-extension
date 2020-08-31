import "azure-devops-ui/Core/override.css";
import "es6-promise/auto";
import './styles/main.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from './app/app';


const props = {
    title: 'Hi,',
    name: 'camilo'
  }

ReactDOM.render(<App {...props}/>, document.getElementById("app"));
