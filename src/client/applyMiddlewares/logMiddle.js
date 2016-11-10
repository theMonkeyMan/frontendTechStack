export default function logMiddle({state, dispatch}) {
  return middleDispatch=>(transmitAction)=> {
    console.info("logMiddle");
    middleDispatch(transmitAction);
  }
}