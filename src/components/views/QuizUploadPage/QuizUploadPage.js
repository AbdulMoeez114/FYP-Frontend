// import Axios from "axios";
import React, { Component } from "react";
// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";

class QuizUploadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          name: "question",
          question: "",
          options: [
            { name: "a", value: "" },
            { name: "b", value: "" },
            { name: "c", value: "" },
            { name: "d", value: "" },
          ],
        },
      ],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.questions);
    console.log(e);
  };

  addQuestion = () => {
    let { questions } = this.state;
    questions.push({
      name: "question_" + this.state.questions.length,
      question: "",
      options: [
        { name: "a", value: "" },
        { name: "b", value: "" },
        { name: "c", value: "" },
        { name: "d", value: "" },
      ],
    });
    this.setState({ questions });
  };

  render() {
    return (
      <div style={{ padding: "20px", margin: "40px" }}>
        <div className="row border rounded shadow p-2 mb-5">
          <div className="col-sm-6 h3 text-primary">Add Quiz</div>
          <div className="col-sm-6 text-right">
            <button
              type="button"
              className="btn btn-outline-primary mr-2"
              onClick={this.addQuestion}
            >
              Add Question
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
        <div className="col-sm-6 h6 text-primary">
          Write correct answser in option a.
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.state.questions.map((question, index) => (
            <div className="p-1">
              <div className="row shadow rounded" key={index}>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor={question.name}>Question {index + 1}</label>
                    <input
                      type="text"
                      className="form-control"
                      id={question.name}
                      placeholder={"Question " + (index + 1)}
                      value={question.question}
                      onChange={(e) => {
                        let { questions } = this.state;
                        question.question = e.target.value;
                        questions[index] = question;
                        this.setState({ questions });
                      }}
                    />
                  </div>
                </div>
                {question.options.map((option, innerIndex) => (
                  <div className="col-sm-6" key={innerIndex + 500000}>
                    <div className="form-group">
                      <label htmlFor={option.name + index}>
                        Option {option.name}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={option.name + index}
                        placeholder={"Option " + option.name}
                        value={option.value}
                        onChange={(e) => {
                          let { questions } = this.state;
                          question.options[innerIndex].value = e.target.value;
                          questions[index] = question;
                          this.setState({ questions });
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default QuizUploadPage;
