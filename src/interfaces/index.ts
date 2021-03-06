import { ObjectId } from "bson";

export type Tuples = [Tuple];

export type TupleSpace = {
  tuples: Tuples;
};

export type Memory = {
  [key: string]: Tuples;
};

export type Tuple = {
  [key: string]: number | string | boolean | Object;
};
export type InsertData = {
  _time: number;
  _from: string;
  _payload: Object;
  _id?: number;
};

export type SavedData = {
  _time: number;
  _from: string;
  _id: ObjectId;
  _payload: Object;
};

export type ResponseTuple = {
  _isMuched: boolean;
  _time: number;
  _from: string;
  _id: ObjectId;
  _payload: Object;
};

export type WatchResponseTuple = {
  _time: number;
  _from: string;
  _payload: Object;
};

export type IsMuchResponse = {
  isMuched: boolean;
  res: Tuple | null;
};

export type LindaOperation = {
  tsName: string;
  payload: Tuple;
};

export interface InsertOneWriteOpResult {
  insertedCount: number;
  ops: Array<any>;
  insertedId: ObjectId;
  connection: any;
  result: { ok: number; n: number };
}

export interface DeleteWriteOpResultObject {
  result: {
    ok?: number;
    n?: number;
  };
  connection?: any;
  deletedCount?: number;
}

export interface WatchCallback {
  (resData: WatchResponseTuple): void;
}

export interface WriteCallback {
  (resData: InsertOneWriteOpResult): void;
}

export interface ReadTakeCallback {
  (resData: ResponseTuple): void;
}
