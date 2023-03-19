import React from 'react';

import Me from '@/components/atoms/Me/Me'

export default {
  title: 'Components/Me',
  component: Me,
};

export const MeComponent1 = (args: any) => <Me {...args} />
export const MeComponent2 = () => <Me boxSize={500} borderRadiusType={'none'} />
