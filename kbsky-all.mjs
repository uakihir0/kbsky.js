import {
  PLCDirectoryFactory_instance2nmwz5ob8wash as PLCDirectoryFactory_instance,
  ATProtocolFactory_instancelkgfpi1mnb72 as ATProtocolFactory_instance,
  BlueskyFactory_instance2swvrp9atethz as BlueskyFactory_instance,
  ATProtocolTypes_instancergj7iy2p1rui as ATProtocolTypes_instance,
  BlueskyTypes_instance1mf3hiqsenjed as BlueskyTypes_instance,
} from './kbsky-core.mjs';
import { ATProtocolStreamFactory_instance1zxu66p4al9se as ATProtocolStreamFactory_instance } from './kbsky-stream.mjs';
import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  defineProp3ur6h3slcvq4x as defineProp,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.mjs';
import './ktor-ktor-client-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  getPLCDirectoryFactory() {
    return PLCDirectoryFactory_instance;
  }
  getATProtocolStreamFactory() {
    return ATProtocolStreamFactory_instance;
  }
  getATProtocolFactory() {
    return ATProtocolFactory_instance;
  }
  getBlueskyFactory() {
    return BlueskyFactory_instance;
  }
  getATProtocolTypes() {
    return ATProtocolTypes_instance;
  }
  getBlueSkyTypes() {
    return BlueskyTypes_instance;
  }
}
class BskyFactory {
  stream(apiUri, streamUri) {
    return ATProtocolStreamFactory_instance.instanceFromUri(apiUri, streamUri);
  }
  bluesky(uri) {
    return BlueskyFactory_instance.instanceFromUri(uri);
  }
  atproto(uri) {
    return ATProtocolFactory_instance.instanceFromUri(uri);
  }
  plc() {
    return PLCDirectoryFactory_instance.instance();
  }
  plcFromUri(uri) {
    return PLCDirectoryFactory_instance.instanceFromUri(uri);
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(BskyFactory, 'BskyFactory', BskyFactory);
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
defineProp(BskyFactory, 'Companion', Companion_getInstance, VOID, true);
export {
  BskyFactory as BskyFactory,
};
//endregion

//# sourceMappingURL=kbsky-all.mjs.map
