import NothingSelected from "./NothingSelect";
import { useSelector } from "react-redux";
import NoteScreen from "../notes/NoteScreen";
import SideBar from "./Sidebar";
const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate_faster">
      <SideBar />
      <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
