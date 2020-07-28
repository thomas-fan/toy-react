import {ToyReact, Component} from "./ToyReact"

class MyComponent extends Component {
    render() {
        return<div>
            <span>hello</span>
            <span>world</span>
            <div>
                {this.children}
            </div>
        </div>
    }

}

let a = <MyComponent name="a" id="idMyComponent"><div>abc</div></MyComponent>

ToyReact.render(
    a,
    document.body
)
