
import React from 'react'
import addons from '@storybook/addons'
import Panel from './components/panel'
import { getChannel } from './channel'
import { ADDON_ID, PANEL_ID } from './constant'

addons.register(ADDON_ID, api => {
  const channel = getChannel()
  addons.addPanel(PANEL_ID, {
    title: 'MockServer',
    render() {
      return <Panel channel={channel} api={api} />
    }
  })
})
