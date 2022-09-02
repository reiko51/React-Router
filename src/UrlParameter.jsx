import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは{id}です</p>
      <p>nameパラメータは{query.get("Name")}です</p>
      <p>ageパラメータは{query.get("Age")}です</p>
    </div>
  );
};
