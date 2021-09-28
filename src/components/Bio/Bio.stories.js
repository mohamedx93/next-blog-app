import React from 'react'

import Bio from './'

export default {
  title: 'Components/Bio',
  component: Bio
}

const Template = () => (<Bio
  name='Mazo'
  headshot='https://thispersondoesnotexist.com/image'
  tagline="hard work beats talent when talent doesn't work hard"
  role='a Son, a Father and a whole stack developer'
                        />)

export const Default = Template.bind({})
