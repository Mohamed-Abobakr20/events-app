import { useRef } from "react";

export default function Search({ onSearch }) {
  const year = useRef();
  const month = useRef();
  function submit(e) {
    e.preventDefault();
    const selectedYear = year.current.value;
    const selectedMonth = month.current.value;
    onSearch(selectedYear, selectedMonth);
  }

  return (
    <div className="mb-5">
      <form className="w-75 mx-auto" onSubmit={submit}>
        <div className="form-gorup mb-2">
          <label htmlFor="year">Year</label>
          <select id="year" className="form-control" ref={year}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="form-gorup mb-3">
          <label htmlFor="month">Month</label>
          <select id="month" className="form-control" ref={month}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Filter
        </button>
      </form>
    </div>
  );
}
