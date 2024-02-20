import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;
  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (error && typeof error === "object" && "statusText" in error) {
    errorMessage = (error as { statusText: string }).statusText;
  } else {
    errorMessage = "An unknown error occurred";
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
