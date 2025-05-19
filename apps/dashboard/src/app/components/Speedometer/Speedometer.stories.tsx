import type { Meta, StoryObj } from '@storybook/react';
import { Speedometer } from './Speedometer';

const meta: Meta<typeof Speedometer> = {
  component: Speedometer,
  title: 'Dashboard/Speedometer',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    speed: {
      control: { type: 'range', min: 0, max: 160, step: 5 },
      description: 'Current speed value',
    },
    maxSpeed: {
      control: { type: 'number' },
      description: 'Maximum speed value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Speedometer>;

export const Default: Story = {
  args: {
    speed: 60,
    maxSpeed: 160,
  },
};

export const Low: Story = {
  args: {
    speed: 20,
    maxSpeed: 160,
  },
};

export const High: Story = {
  args: {
    speed: 120,
    maxSpeed: 160,
  },
};