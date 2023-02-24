//ExpenseDate.js

import React from "react";
import "./ExpenseData.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* 날짜를 보기 쉽게 바꾸는 방법 */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
