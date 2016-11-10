export default function secondMiddle({state, dispatch}) {
  return middleDispatch=>(transmitAction)=> {
    console.info("secondMiddle");
    middleDispatch(transmitAction);
  }
}