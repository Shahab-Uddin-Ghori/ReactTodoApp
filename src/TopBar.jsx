import React from "react";

function TopBar() {
  return (
    <div className="w-full h-40 bg-zinc-900 flex items-center justify-center">
      <div className="w-3/5 h-20 bg-white rounded flex items-center justify-center gap-4">
        <button type="button" class="btn btn-success">
          + Add Cart
        </button>
        <button type="button" class="btn btn-danger">
          Delete Cart
        </button>
      </div>
    </div>
  );
}

export default TopBar;
