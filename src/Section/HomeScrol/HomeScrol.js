import Floatingbtn from "../../Atom/FloatingButton";
import Card from "../../Component/Card/Card";
import style from "./HomeScrol.module.css";

export default function HomeScrol() {

  return (
    <>
      <div className={style.ScrolDiv}>
        <Card />
        <span className={style.btn}>
          <Floatingbtn />
        </span>
      </div>
    </>
  );
}
   