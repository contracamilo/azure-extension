import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "azure-devops-ui/Button";
import { Panel } from "azure-devops-ui/Panel";

interface IPanelExampleState {
    expanded: boolean;
}

export default class PanelExample extends React.Component<{}, IPanelExampleState> {
    constructor(props: {}) {
        super(props);
        this.state = { expanded: false };
    }

    public render(): JSX.Element {
        return (
            <div>
                <Button onClick={() => this.setState({ expanded: true })}>Show Panel</Button>
                {this.state.expanded && (
                    <Panel
                        onDismiss={() => this.setState({ expanded: false })}
                        titleProps={{ text: "Sample Panel Title" }}
                        description={
                            "A description of the header. It can expand to multiple lines. Consumers should try to limit this to a maximum of three lines."
                        }
                        footerButtonProps={[
                            { text: "Cancel", onClick: () => this.setState({ expanded: false }) },
                            { text: "Create", primary: true }
                        ]}
                    >
                        <div style={{ height: "1200px" }}>Panel Content</div>
                    </Panel>
                )}
            </div>
        );
    }
}