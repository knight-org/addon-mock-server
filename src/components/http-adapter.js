
import React, { Component } from 'react'
import { MOCK_ENABLED } from '../constant'

export default class WrapStory extends Component {

  constructor(props) {
    super(props)
    this.knobChanged = this.knobChanged.bind(this)
    this.state = { 'storyContent': this.props.initialContent }
  }

  componentDidMount() {
    this.props.channel.on(MOCK_ENABLED, this.knobChanged)
  }

  componentWillReceiveProps(props) {
    this.setState({ 'storyContent': props.initialContent })
  }

  componentWillUnmount() {
    this.props.channel.removeListener(MOCK_ENABLED, this.knobChanged)
  }

  knobChanged(enabled = true) {
    const { storyFn, context } = this.props
    this.adapterFetch()
    // this.setState({ 'storyContent': storyFn(context) })
  }

  adapterFetch() {
    let context = window
    this.native = context.fetch
    context.fetch = (url, options = {}) => {
      return this.native(`http://localhost:9004/`, options)
    }
  }

  render() {
    return this.state.storyContent
  }
}
