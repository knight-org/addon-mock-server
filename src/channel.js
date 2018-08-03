
import addons from '@storybook/addons'

let channel = null

export const getChannel = () => {
  if (!channel) {
    channel = addons.getChannel()
  }
  return channel
}
