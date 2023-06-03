import { useState } from "react";
import CardJob from "./shared/cardjob";
import { company } from "./shared/komponen/data";
import JobDetail from "./shared/komponen/jobDetail";


export default function Home() {

  return (
    <div >
      <div>
        <JobDetail></JobDetail>
      </div>
    </div>
  );
}
