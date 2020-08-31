import * as React from "react";
import * as ReactDOM from "react-dom";
import PanelExample from "../components/Panel/panel";
import CardExample from "../components/Card/Card";

type AppProps = {
    title: string,
    name: string
  }

export const App = ({ title, name }: AppProps) => <div className="main">
  <h2>{ `${title} ${name}` }</h2>

  <PanelExample />
  <CardExample />
</div>