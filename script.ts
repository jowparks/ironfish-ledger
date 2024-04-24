import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";

import IronfishApp, { IronfishKeys, ResponseAddress, ResponseProofGenKey, ResponseViewKey } from "@zondax/ledger-ironfish";

async function main() {
    const PATH = "m/44'/1338'/0"
    const transport = await TransportNodeHid.create();
    const app = new IronfishApp(transport)
    const resp: ResponseAddress = await app.retrieveKeys(PATH, IronfishKeys.PublicAddress, false);
    console.log(`Address: ${resp.publicAddress.toString('hex')}`)
    const resp1: ResponseViewKey = await app.retrieveKeys(PATH, IronfishKeys.ViewKey, true);
    console.log(`ViewKey: ${resp1.viewKey.toString('hex')}, ovk: ${resp1.ovk.toString('hex')} ivk: ${resp1.ivk.toString('hex')}`)
    const resp2: ResponseProofGenKey = await app.retrieveKeys(PATH, IronfishKeys.ProofGenerationKey, false);
    console.log(`ak: ${resp2.ak.toString('hex')}, nsk: ${resp2.nsk.toString('hex')}`)
}

main();