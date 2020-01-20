import React, {Component} from "react"

class World extends Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

export default World;