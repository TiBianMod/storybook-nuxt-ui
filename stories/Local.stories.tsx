import type { Meta, StoryObj } from "@storybook/vue3";
import { Local } from "~/components/Local";
import LocalSFC from "~/components/LocalSFC.vue";

const meta: Meta<typeof Local> = {
    title: "Local",
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Local>;

export const TSX: Story = {
    render: () => <Local />,
};
export const SFC: Story = {
    render: () => <LocalSFC />,
};
