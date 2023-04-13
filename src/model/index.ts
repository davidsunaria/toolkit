import common, { CommonModel } from './Common';
import shipment, { ShipmentModel } from './Event';

export interface StoreModel {
  common: CommonModel;
  shipment:ShipmentModel;
};

const model: StoreModel = {
  common,
  shipment,
};

export default model;
