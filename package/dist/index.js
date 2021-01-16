"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FetchSelector_1 = __importDefault(require("./utils/FetchSelector"));
const LoggerSelector_1 = __importDefault(require("./utils/LoggerSelector"));
function registerLogger(logger) {
    LoggerSelector_1.default.setLogger(logger);
}
exports.registerLogger = registerLogger;
function registerFetch(fetch) {
    FetchSelector_1.default.setFetch(fetch);
}
exports.registerFetch = registerFetch;
__export(require("./chain/tezos/TezosContractIntrospector"));
__export(require("./chain/tezos/TezosLanguageUtil"));
__export(require("./chain/tezos/TezosMessageUtil"));
__export(require("./chain/tezos/TezosNodeReader"));
__export(require("./chain/tezos/TezosNodeWriter"));
__export(require("./chain/tezos/contracts/TezosContractUtils"));
__export(require("./chain/tezos/contracts/BabylonDelegationHelper"));
__export(require("./chain/tezos/contracts/CryptonomicNameServiceHelper"));
__export(require("./chain/tezos/contracts/DexterPoolHelper"));
__export(require("./chain/tezos/contracts/MurbardMultisigHelper"));
__export(require("./chain/tezos/contracts/StakerDAOTokenHelper"));
__export(require("./chain/tezos/contracts/TCFBakerRegistryHelper"));
__export(require("./chain/tezos/contracts/Tzip7ReferenceTokenHelper"));
__export(require("./chain/tezos/contracts/tzip12/ChainlinkTokenHelper"));
__export(require("./chain/tezos/contracts/tzip12/MultiAssetTokenHelper"));
__export(require("./chain/tezos/contracts/tzip12/SingleAssetTokenHelper"));
__export(require("./chain/tezos/contracts/TzbtcTokenHelper"));
__export(require("./chain/tezos/contracts/WrappedTezosHelper"));
__export(require("./reporting/tezos/TezosConseilClient"));
__export(require("./reporting/ConseilDataClient"));
__export(require("./reporting/ConseilMetadataClient"));
__export(require("./reporting/ConseilQueryBuilder"));
__export(require("./types/conseil/MetadataTypes"));
__export(require("./types/conseil/QueryTypes"));
__export(require("./types/tezos/TezosConstants"));
__export(require("./types/tezos/TezosChainTypes"));
__export(require("./types/tezos/TezosP2PMessageTypes"));
__export(require("./types/ExternalInterfaces"));
//# sourceMappingURL=index.js.map