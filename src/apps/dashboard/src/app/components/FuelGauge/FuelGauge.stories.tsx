import type { Meta, StoryObj } from '@storybook/react';
import { FuelGauge } from './FuelGauge';

const meta: Meta<typeof FuelGauge> = {
  component: FuelGauge,
  title: 'Dashboard/FuelGauge',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Fuel level percentage',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FuelGauge>;

export const Default: Story = {
  args: {
    level: 75,
  },
};

export const Low: Story = {
  args: {
    level: 15,
  },
};

export const Half: Story = {
  args: {
    level: 50,
  },
};