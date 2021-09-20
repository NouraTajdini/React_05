import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import './stylesheets/index.css'

const App = () => {
  return(
    <section className="Container">
      <Form></Form>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))