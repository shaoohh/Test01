import React from "react";
import "./App.css";
import { ProjectListScreen } from "screens/project-list";
import { TsReact } from "utils/try-test01";
import { LoginScreen } from "screens/login";
function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TsReact /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
