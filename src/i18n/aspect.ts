export function aspect<
  B extends {
    [p in N]: (args: any[]) => any;
  },
  N extends string
>(
  base: B,
  name: N,
  before?: (args: Parameters<B[N]>) => void,
  after?: (res: ReturnType<B[N]>) => ReturnType<B[N]>
) {
  const func = base[name];
  const hack = function (this: any, ...args: Parameters<B[N]>) {
    if (before) before(args);
    let res: ReturnType<B[N]> = func.apply(this, args);
    if (after) res = after(res);
    return res;
  };
  /* eslint-disable-next-line no-param-reassign */
  base[name] = hack as B[N];
}
