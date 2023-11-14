import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();
  return (
    <div className="container">
      <h1>Oops!</h1>
      <p>Кодов чёт поломался...</p>
      <p>
        <i>{404}</i>
      </p>
    </div>
  );
}
