/* 
    @param wait 等待时间
    @param leading 首要的
    @param trailing 拖延
*/
export interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}
