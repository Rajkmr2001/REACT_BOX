function TodoItem() {

    let TodoName = "Buy Milk";
    let TodoDate = "4/10/2025";

  return (
      <div class="row rg-row">
          <div class="col-6">{TodoName}</div>
          <div class="col-4">{TodoDate}</div>
          <div class="col-2">
              <button type="button" class="btn btn-danger rg-button">Delete</button>
          </div>
      </div>
  );
}
export default TodoItem;