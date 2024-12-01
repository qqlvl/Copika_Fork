import type { Plugin } from '@ai16z/eliza'
import { base } from 'viem/chains';
import { getOnChainActions } from './actions';
import { erc20, USDC } from '@goat-sdk/plugin-erc20';
import { getWalletClient } from './wallet';

export const goatPlugin: Plugin = {
    name: "On Chain Actions",
    description: "Base integration plugin",
    providers: [],
    evaluators: [],
    services: [],
    actions: [
        ...(await getOnChainActions({
            getWalletClient,
            // Add plugins here based on what actions you want to use
            // See all available plugins at https://ohmygoat.dev/chains-wallets-plugins#plugins
            plugins: [erc20({ tokens: [USDC] })],
            // Add the chain you want to use
            chain: {
                type: "evm",
                id: base.id,
            },
        })),
    ],
};

export default goatPlugin
