function Main() {
  return (
    <div className="bgr">
      <div className="container">
        <div className="button_wrapper">
          <div>
            <a className="link_color btn btn-dark" href="/create">
              Создать note
            </a>
          </div>
          <div>
            <a className="link_color btn btn-dark" href="/note">
              Просмотреть note
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
