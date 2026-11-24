import { registerPlugin } from "@capacitor/core";

export interface BlockerPlugin {
    echo(options: { value: string }): Promise<{ value: string }>
};

const Blocker = registerPlugin<BlockerPlugin>('Blocker');

export default Blocker;