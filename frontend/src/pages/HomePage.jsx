import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import api from "../lib/axios";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const response = await api.get("/notes");

      setNotes(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-base-200">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-3xl font-bold">
              My Notes
            </h1>

            <p className="text-base-content/60 mt-1">
              Manage your notes easily
            </p>
          </div>

          <Link
            to="/create"
            className="btn btn-primary"
          >
            <Plus size={18} />
            New Note
          </Link>

        </div>

        {/* Loading */}
        {loading && (
          // <div className="flex justify-center py-20">
          //   <span className="loading loading-spinner loading-lg"></span>
          // </div>
          <div className="flex justify-center items-center py-20">
  <div className="w-10 h-10 border-4 border-base-300 border-t-primary rounded-full animate-spin"></div>
</div>

        )}

        {/* Empty state */}
        {!loading && notes.length === 0 && (
          <div className="text-center py-20">

            <h2 className="text-2xl font-semibold">
              No notes yet
            </h2>

            <p className="text-base-content/60 mt-2 mb-5">
              Create your first note to get started.
            </p>

            <Link
              to="/create"
              className="btn btn-primary"
            >
              Create Note
            </Link>

          </div>
        )}

        {/* Notes */}
        {!loading && notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default HomePage;