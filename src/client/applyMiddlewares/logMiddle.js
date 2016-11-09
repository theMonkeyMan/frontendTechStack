export default function logMiddle({state, dispatch}) {
  return middleDispatch=>(transmitAction)=> {
    middleDispatch(transmitAction);
  }
}