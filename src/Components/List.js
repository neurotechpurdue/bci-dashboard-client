import { React, useState } from "react";
import ListItem from "./ListItem";
import "./List.scss";
import Layout from "./Game/Layout/Layout";
import Dropdown from "./Dropdown/Dropdown";
const List = (props) => {
  const [allowSelectDropdown, setAllowSelectDropdown] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const data = [
    {
      name: "Recording 1",
      author: "Victoire Beaufils",
      experiment: "Experiment 1",
      lastEdited: new Date().toUTCString,
      redirect:
        "https://i.pinimg.com/originals/78/ac/4a/78ac4ac4187e998abcd1d8d23db171e8.jpg",
    },
    {
      name: "Recording 2",
      author: "Victoire Beaufils",
      experiment: "Experiment 1",
      lastEdited: new Date().toUTCString,
      redirect:
        "https://i.pinimg.com/originals/78/ac/4a/78ac4ac4187e998abcd1d8d23db171e8.jpg",
    },
  ];

  const listItems = data.map((item, i) => {
    console.log("item " + i + ", ischecked: " + isCheck.includes(i));
    return (
      <ListItem
        key={i}
        name={item.name}
        author={item.author}
        experiment={item.experiment}
        lastEdited={item.lastEdited}
        redirect={item.redirect}
        isChecked={isCheck.includes(i)}
      ></ListItem>
    );
  });

  const selectAllRecordings = (e) => {
    //1 check all checkboxes on the page
    setIsCheckAll(!isCheckAll);
    console.log(listItems.map((item) => item.key));
    setIsCheck(listItems.map((item) => item.key));
    if (isCheckAll) {
      console.log("uncheck everything");
      setIsCheck([]);
    }
  };

  //   const handleClick = (e) => {
  //     const { id, checked } = e.target;
  //     setIsCheck([...isCheck, id]);
  //     if (!checked) {
  //       setIsCheck(isCheck.filter((item) => item !== id)); //nani?
  //     }
  //   };

  return (
    <Layout>
      <div
        className="header"
        //    style={{ display: "flex", flexDirection: "row" }}
      >
        <p>
          {/* <button */}
          {/* onClick={() => setAllowSelectDropdown(!allowSelectDropdown)} >*/}
          <input
            type="checkbox"
            onClick={selectAllRecordings}
            checked={isCheckAll}
          ></input>
          {/* <Dropdown
              content={dropdownContent}
              visible={allowSelectDropdown}
            ></Dropdown> */}
          {/* </button> */}
        </p>
        <p>Name</p>
        <p>Author</p>
        <p>Experiment</p>
        <p>Last edited</p>
      </div>
      {listItems}
    </Layout>
  );
};
export default List;
