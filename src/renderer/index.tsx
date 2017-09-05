import * as React from 'react'
import { Button } from 'semantic-ui-react'
import { render } from 'react-dom'

class RootComponent extends React.Component {
  render() {
    return (
      <Button>
        Test button
      </Button>
    )
  }
}

render(
  <RootComponent/>,
  document.getElementById('root')
)
