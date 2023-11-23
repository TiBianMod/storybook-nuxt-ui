import { NuxtWelcome } from "#components";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof NuxtWelcome> = {
    title: "Nuxt",
    tags: ["autodocs"],
    render: () => <NuxtWelcome />,
};

export default meta;

type Story = StoryObj<typeof NuxtWelcome>;

export const Welcome: Story = {};
