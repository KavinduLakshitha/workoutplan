import React  from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WorkoutPlan from "./components/Workout Plan/WorkoutPlan";
import EditPlan from "./components/Workout Plan/EditPlan";

export default function App() {
  return (
    <div>

      <BrowserRouter>
      
      <Routes>
        <Route path="/workoutplans" element={<WorkoutPlan/>}></Route>
        <Route path="/editworkoutplan/:id" element={<EditPlan/>}></Route>
      </Routes>

      </BrowserRouter>

    </div>
  )
}


