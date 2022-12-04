const delay = (time: number) =>
  new Promise<void>(resolve => setTimeout(resolve, time));
export default delay;
