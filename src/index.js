
import React from 'react'
import { getChannel } from './channel'
import HttpAdapter from './components/http-adapter'
import { ADDON_ID, PANEL_ID } from './constant'

const reactHandler = channel => getStory => context => {
  const initialContent = getStory(context)
  const props = { context, getStory, channel, initialContent }
  return <HttpAdapter { ...props } />
}

const adapterHttpWrapper = (options) => {
  let channel = getChannel()
  return reactHandler(channel)
}

export const mockServer = (storyFn, context) => {
  return adapterHttpWrapper()(storyFn)(context)
}
