"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <a href="/cards">Go to the cards page</a>
        <img src="/static/img/balloonicorn.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));