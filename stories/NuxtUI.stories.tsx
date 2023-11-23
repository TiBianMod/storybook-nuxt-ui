import { UAlert, UBadge, UButton, UIcon, UMeter, UMeterGroup, UProgress } from "#components";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
    title: "Nuxt UI",
};

export default meta;

type Story = StoryObj;

export const Alert: Story = {
    render: () => <UAlert title="Heads up!" />,
};

export const Badge: Story = {
    render: () => <UBadge label="Badge" />,
};

export const Button: Story = {
    render: () => <UButton label="Button" />,
};

export const Icon: Story = {
    render: () => <UIcon name="i-heroicons-light-bulb" />,
};

export const Progress: Story = {
    render: () => <UProgress value={70} />,
};

export const Meter: Story = {
    render: () => (
        <UMeterGroup min={0} max={128} size="md" indicator icon="i-heroicons-minus">
            <UMeter value={24} color="gray" label="System" />
            <UMeter value={8} color="red" label="Apps" />
            <UMeter value={12} color="yellow" label="Documents" />
            <UMeter value={42} color="green" label="Multimedia" />
        </UMeterGroup>
    ),
};
