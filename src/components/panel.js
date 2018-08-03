
import React, { Component } from 'react'
import { MOCK_ENABLED } from '../constant'

export default class Panel extends Component {

	constructor(props) {
    super(props)
    this.onSelected = this.onSelected.bind(this)
  }

	onSelected () {
		let { channel } = this.props
		channel.emit(MOCK_ENABLED)
	}

  render () {
    return <div onClick={this.onSelected}>Enable Mock Server</div>
  }
}
