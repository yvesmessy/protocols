import { GetNextOrderIdReq } from './proto_gen/service_dex_pb';
import { DexServiceClient } from './proto_gen/service_dex_grpc_pb';

import common from './lib/wallet/common';
import ethereum from './lib/wallet/ethereum';
// Looks like we don't need WalletUtils
// It also causes an error
// "export 'default' (reexported as 'WalletUtils') 
// was not found in './WalletUtils'
// import WalletUtils from './WalletUtils';
import ContractUtils from './lib/wallet/ethereum/contracts/Contracts';
import EthRpcUtils from './lib/wallet/ethereum/eth';
import Utils from './lib/wallet/common/utils';


export {
    GetNextOrderIdReq,
    DexServiceClient,
    common,
    ethereum,
    // WalletUtils,
    ContractUtils,
    EthRpcUtils,
    Utils
};