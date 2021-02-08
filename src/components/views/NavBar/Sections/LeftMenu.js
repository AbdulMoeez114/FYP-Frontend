import React from "react";
import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/landing">Home</a>
      </Menu.Item>
      <Menu.Item key="Video">
        <a href="/video/upload">Upload Video</a>
      </Menu.Item>
      <Menu.Item key="Quiz">
        <a href="/quiz/upload">Add Quiz</a>
      </Menu.Item>
      <Menu.Item key="QuizEdit">
        <a href="/quiz/edit">Edit/Delete Quiz</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
