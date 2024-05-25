import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BreadCrum() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);
  if (!product) return null;
  return (
    <div className="mt-28 container flex items-center gap-3">
      Shop
      <img
        className="w-[15px] h-[15px]"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNDA0LjM3NSA0MDQuMzc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNMTA4LjY2OSA0MDQuMzc1Yy00LjE4IDAtNy44MzctMS41NjctMTAuOTcxLTQuNzAyLTYuMjY5LTYuMjY5LTYuMjY5LTE2LjE5NiAwLTIxLjk0M2wxNzYuMDY1LTE3NS41NDNMOTcuNjk4IDI2LjY0NWMtNi4yNjktNi4yNjktNi4yNjktMTYuMTk2IDAtMjEuOTQzIDYuMjY5LTYuMjY5IDE2LjE5Ni02LjI2OSAyMS45NDMgMGwxODcuMDM3IDE4Ni41MTRjMy4xMzUgMy4xMzUgNC43MDIgNi43OTIgNC43MDIgMTAuOTcxIDAgNC4xOC0xLjU2NyA4LjM1OS00LjcwMiAxMC45NzFMMTE5LjY0MSAzOTkuNjczYy0zLjEzNSAzLjEzNS02Ljc5MiA0LjcwMi0xMC45NzIgNC43MDJ6IiBzdHlsZT0iIiBmaWxsPSIjM2EyYzUxIiBkYXRhLW9yaWdpbmFsPSIjM2EyYzUxIiBjbGFzcz0iIi8+PC9nPjwvc3ZnPg=="
        alt="arrow"
      />
      <span>{product.category}</span>
      <img
        className="w-[15px] h-[15px]"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNDA0LjM3NSA0MDQuMzc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNMTA4LjY2OSA0MDQuMzc1Yy00LjE4IDAtNy44MzctMS41NjctMTAuOTcxLTQuNzAyLTYuMjY5LTYuMjY5LTYuMjY5LTE2LjE5NiAwLTIxLjk0M2wxNzYuMDY1LTE3NS41NDNMOTcuNjk4IDI2LjY0NWMtNi4yNjktNi4yNjktNi4yNjktMTYuMTk2IDAtMjEuOTQzIDYuMjY5LTYuMjY5IDE2LjE5Ni02LjI2OSAyMS45NDMgMGwxODcuMDM3IDE4Ni41MTRjMy4xMzUgMy4xMzUgNC43MDIgNi43OTIgNC43MDIgMTAuOTcxIDAgNC4xOC0xLjU2NyA4LjM1OS00LjcwMiAxMC45NzFMMTE5LjY0MSAzOTkuNjczYy0zLjEzNSAzLjEzNS02Ljc5MiA0LjcwMi0xMC45NzIgNC43MDJ6IiBzdHlsZT0iIiBmaWxsPSIjM2EyYzUxIiBkYXRhLW9yaWdpbmFsPSIjM2EyYzUxIiBjbGFzcz0iIi8+PC9nPjwvc3ZnPg=="
        alt=""
      />
      <span>{product.title}</span>
      <img
        className="w-[15px] h-[15px]"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNDA0LjM3NSA0MDQuMzc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNMTA4LjY2OSA0MDQuMzc1Yy00LjE4IDAtNy44MzctMS41NjctMTAuOTcxLTQuNzAyLTYuMjY5LTYuMjY5LTYuMjY5LTE2LjE5NiAwLTIxLjk0M2wxNzYuMDY1LTE3NS41NDNMOTcuNjk4IDI2LjY0NWMtNi4yNjktNi4yNjktNi4yNjktMTYuMTk2IDAtMjEuOTQzIDYuMjY5LTYuMjY5IDE2LjE5Ni02LjI2OSAyMS45NDMgMGwxODcuMDM3IDE4Ni41MTRjMy4xMzUgMy4xMzUgNC43MDIgNi43OTIgNC43MDIgMTAuOTcxIDAgNC4xOC0xLjU2NyA4LjM1OS00LjcwMiAxMC45NzFMMTE5LjY0MSAzOTkuNjczYy0zLjEzNSAzLjEzNS02Ljc5MiA0LjcwMi0xMC45NzIgNC43MDJ6IiBzdHlsZT0iIiBmaWxsPSIjM2EyYzUxIiBkYXRhLW9yaWdpbmFsPSIjM2EyYzUxIiBjbGFzcz0iIi8+PC9nPjwvc3ZnPg=="
        alt="arrow"
      />
    </div>
  );
}
