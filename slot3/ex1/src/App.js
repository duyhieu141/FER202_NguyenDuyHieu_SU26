import Hello from "./components/Hello";
import Subject from "./components/Subject";
import People from "./components/People"; 

function App() {
  return (
    <div>
      <Hello />
      <Subject />
      <People /> {/* Thêm dòng này để hiển thị danh sách người dùng */}
    </div>
  );
}

export default App;