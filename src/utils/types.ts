export type TMessageData = {
  message: string,
  isError: boolean
};
export type TRecordRequest = {
  service: string,
  startTime: string,
  endTime: string,
  duration: string,
  date: string | null
}
