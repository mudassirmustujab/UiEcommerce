import {useRouteError} from "react-router-dom"

const ErrElem = () => {

    let err = useRouteError()
  return <div>This is error element {err}</div>
};

export default ErrElem;
