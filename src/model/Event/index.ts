import { StoreModel } from "../index";
import { Action, action, Thunk, thunk } from "easy-peasy";

import { getApi, getData } from "../../api";
import { IShipForm,IPayload } from "../../interfaces";

const paginationObject = {
  total: 0,
  currentPage: 0,
  limit: 0,
  pages: 0,
  prevPage: null,
  nextPage: null,
};

const initialState = {
  response: [],
  shipmentData: [],
  groups: [],
  paginationObject: paginationObject,
};

interface IPaginate {
  total: number;
  currentPage: number;
  limit: number;
  pages: number;
  prevPage: number | null | undefined;
  nextPage: number | null | undefined;
}
export interface ShipmentModel {
  response: string | object | any;
  shipmentData: string | object | any;
  paginationObject: IPaginate;
  groups: string | object | any;
  //**************State Actions************///
  setResponse: Action<ShipmentModel, object | any>;
  setGroups: Action<ShipmentModel, object | any>;
  setPaginationObject: Action<ShipmentModel, IPaginate>;
  setShipmentData:Action<ShipmentModel, IPaginate>;
  //**************State  Actions************///

  //**************Thunk Actions************///
  getEvents: Thunk<ShipmentModel, object>;
  getShipmentData:Thunk<ShipmentModel, object>;
  //**************Thunk Actions************///
}

const shipment: ShipmentModel = {
  ...initialState,
  setResponse: action((state, payload) => {
    state.response = payload;
  }),
  setPaginationObject: action((state, payload) => {
    state.paginationObject = payload;
  }),
  setGroups: action((state, payload) => {
    state.groups = payload;
  }),
  setShipmentData: action((state, payload) => {
    state.shipmentData = payload;
  }),



  getEvents: thunk<ShipmentModel, IPayload, any, StoreModel>(
    async (actions, payload: IPayload, { getStoreActions, getState }) => {
      // getStoreActions().common.setLoading(true);
      if (
        (getState().response?.data === undefined &&
          payload?.payload?.page === 1) ||
        (getState().response?.length > 0 && payload?.payload?.page > 1)
      ) {
        getStoreActions().common.setLoading(true);
      }
      let response = await getApi(payload);
      if (response && response.status !== 200) {
        getStoreActions().common.setLoading(false);
      } else if (response && response.status === 200) {
        const { currentPage } =
          response?.data.pagination.length > 0 && response?.data.pagination[0];
        if (currentPage) {
          actions.setPaginationObject(
            response?.data.pagination.length > 0 && response?.data.pagination[0]
          );
        } else {
          actions.setPaginationObject(paginationObject);
        }
        if (response?.data?.data?.length > 0) {
          if (currentPage && currentPage === 1) {
            actions.setResponse(response?.data?.data);
          } else {
            actions.setResponse([
              ...getState().response,
              ...response?.data?.data,
            ]);
          }
        } else {
          actions.setResponse([]);
        }

        getStoreActions().common.setLoading(false);
      } else {
        getStoreActions().common.setLoading(false);
        return true;
      }
    }
  ),


 
  getShipmentData: thunk<ShipmentModel, IShipForm, any, StoreModel>(
    async (actions, payload: IShipForm, { getStoreActions, getState }) => {
      console.log(payload)
      let response = await getData(payload);
       console.log("rwedwe",response)
      if (!response ) {
        alert("wdwe");
      } else if (response) {
        actions.setShipmentData(response);
      } else {
        // actions.setLoadingAction(false)
        return true;
      }
    }
  ),
};

export default shipment;
