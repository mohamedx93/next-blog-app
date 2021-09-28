import React from 'react'

import Post from './'

export default {
  title: 'Components/Post',
  component: Post
}

const Template = () => (<Post
  content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem orci, mollis et orci eu, suscipit bibendum massa. Integer blandit ut tortor sit amet fermentum.'
  date='26/9/2021'
                        />)

export const Default = Template.bind({})
