import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState("");
  const [lineClass, setLineClass] = useState("hide");
  const [formClass, setFormClass] = useState("");
  const [errorClass, setErrorClass] = useState("");

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.result) {
            setNoteText(response.note);
            setLineClass("");
            setFormClass("hide");
            setErrorClass("hide");
          } else if (!response.result) {
            setLineClass("hide");
            setFormClass("hide");
            setErrorClass("");
          }
        });
    } else {
      setLineClass("hide");
      setFormClass("");
      setErrorClass("hide");
    }
  }, []);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === "") {
      alert("Заполните поля");
      return false;
    }
    noteURL = url;
    window.location.href = env.url + "/" + url;
  }

  function searchNote() {
    window.location.href = env.url;
  }

  return (
    <div>
      <div className="container">
        <div className={lineClass}>
          <div className="url_style">
            <h4>Note:</h4>
            <div>{noteText}</div>
          </div>
          <div className="button_wrap">
            <button className="btn btn-dark" onClick={searchNote}>
              Смотреть еще один note
            </button>
          </div>
        </div>
        <div className="url_style">
          <div className={errorClass}>
            Произошла ошибка. Такой note не найден.
          </div>
        </div>

        <div className="note_wrap">
          <div className={formClass}>
            <form action="" onSubmit={getNote}>
              <input
                type="text"
                name="url"
                id="url"
                className="form-control"
                placeholder="Введите hash заметки..."
              />
              <div className="button_wrap">
                <button type="submut" className="btn btn-dark">
                  Искать Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
