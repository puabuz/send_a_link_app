import React from "react";
import { useState } from "react";
import env from "../env.json";

function Create() {
  const [url, setUrl] = useState("");
  const [lineClass, setLineClass] = useState("hide"); // скрываем
  const [formClass, setFormClass] = useState(""); // скрываем

  let sendData = (obj) => {
    setFormClass("hide");
    setLineClass("");
    fetch(env.urlBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result) {
          setUrl(response.url);
        }
      });
  };

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === "") {
      alert("Заполните поля");
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={loadDataFromForm} className={formClass}>
          <div className="create_wrapper mb-3">
            <textarea
              className="form-control"
              name="note"
              id="note"
              placeholder="Введите заметку..."
            ></textarea>
            <div className="button_wrap">
              <button className="btn btn-dark" type="submit">
                Создать
              </button>
            </div>
          </div>
        </form>

        <div className="container">
          <div className="note_style">
          <div className={lineClass}>
            <div className="url_style">{url}</div>
            <div className="button_wrap">
              <button className="btn btn-dark"
                onClick={function () {
                  window.location.reload();
                }}
              >
                Создать новую заметку.
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
