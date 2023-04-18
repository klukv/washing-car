import { API_URL_POST_RECORD, API_URL_RECORD_DATE } from "../utils/const";
import { TRecordRequest } from "../utils/types";
import { $authHost } from "./auth";

export const getRecordsDate = async (date: string | null) => {
  const { data } = await $authHost.get(API_URL_RECORD_DATE + `?date=${date}`);
  return data;
};

export const createRecord = async (record: TRecordRequest, id: number) => {
  const { data } = await $authHost.post(API_URL_POST_RECORD + `/${id}`, {
    service: record.service,
    startTime: record.startTime,
    endTime: record.endTime,
    duration: record.duration,
    date: record.date
  });
  return data;
};
