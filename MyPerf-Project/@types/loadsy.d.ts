/* Do NOT modify this file */
interface ILoadsyResponse {
  status: number;
  headers: Record<string, string>;
  body: string | Record<string, any>;
}

declare namespace loadsy {
  export function get(
    url: string,
    headers: Record<string, string>,
    callId: string
  ): ILoadsyResponse;
  export function post(
    url: string,
    headers: Record<string, string>,
    body: Record<string, any>,
    callId: string
  ): ILoadsyResponse;
  export function put(
    url: string,
    headers: Record<string, string>,
    body: Record<string, any>,
    callId: string
  ): ILoadsyResponse;
  export function options(
    url: string,
    headers: Record<string, string>,
    body: Record<string, any>,
    callId: string
  ): ILoadsyResponse;
  export function patch(
    url: string,
    headers: Record<string, string>,
    body: Record<string, any>,
    callId: string
  ): ILoadsyResponse;
  function del(
    url: string,
    headers: Record<string, string>,
    body: Record<string, any>,
    callId: string
  ): ILoadsyResponse;
  export { del as delete };
  export function csv(fileName: string): Array<any>;
  export function sleep(milliseconds: number): void;
}

declare const env: Record<string, string>;
declare function uuidv4(): string;
