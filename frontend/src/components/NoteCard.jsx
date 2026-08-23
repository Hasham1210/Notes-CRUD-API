import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const NoteCard = ({ note }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">

      <div className="card-body">

        <h2 className="card-title">
          {note.title}
        </h2>

        <p className="text-base-content/70 line-clamp-3">
          {note.content}
        </p>

        <div className="flex items-center gap-2 text-sm text-base-content/50 mt-3">
          <Calendar size={15} />

          {note.createdAt
            ? new Date(note.createdAt).toLocaleDateString()
            : "No date"}
        </div>

        <div className="card-actions justify-end mt-4">

          <Link
            to={`/notes/${note._id}`}
            className="btn btn-sm btn-outline"
          >
            View
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default NoteCard;