import type { IMachine } from "./machine.service";
import machineService from "./machine.service";
import producerService from "./producer.service";
import productService from "./product.service";
import type {
  IPartConfiguration,
  IConfiguredParameter,
  IUpdateSessionData,
} from "./session.service";
import sessionService from "./session.service";

export { machineService, producerService, productService, sessionService };

export type {
  IMachine,
  IPartConfiguration,
  IConfiguredParameter,
  IUpdateSessionData,
};
