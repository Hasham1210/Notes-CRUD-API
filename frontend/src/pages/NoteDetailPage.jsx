import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Trash2, Save } from "lucide-react";
import toast from "react-hot-toast";

import api from "../lib/axios";

const NoteDetailPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Get single note
  const fetchNote = async () => {

    try {

      const response = await api.get(`/notes/${id}`);

      const data = response.data;

      setNote(data);
      setTitle(data.title);
      setContent(data.content);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load note");

      navigate("/");

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchNote();
  }, [id]);

  // Update note
  const handleUpdate = async (e) => {

    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    }

    setSaving(true);

    try {

      await api.put(`/notes/${id}`, {
        title,
        content,
      });

      toast.success("Note updated successfully");

      navigate("/");

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to update note"
      );

    } finally {

      setSaving(false);

    }
  };

  // Delete note
  const handleDelete = async () => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) return;

    setDeleting(true);

    try {

      await api.delete(`/notes/${id}`);

      toast.success("Note deleted");

      navigate("/");

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to delete note"
      );

    } finally {

      setDeleting(false);

    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!note) {
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200">

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="btn btn-ghost mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center mb-6">

              <h1 className="text-3xl font-bold">
                Edit Note
              </h1>

              <button
                onClick={handleDelete}
                disabled={deleting}
                className="btn btn-error btn-outline"
              >
                <Trash2 size={18} />

                {deleting ? "Deleting..." : "Delete"}
              </button>

            </div>

            <form
              onSubmit={handleUpdate}
              className="space-y-5"
            >

              {/* Title */}
              <div className="form-control">

                <label className="label">
                  <span className="label-text">
                    Title
                  </span>
                </label>

                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

              </div>

              {/* Content */}
              <div className="form-control">

                <label className="label">
                  <span className="label-text">
                    Content
                  </span>
                </label>

                <textarea
                  className="textarea textarea-bordered w-full h-64"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

              </div>

              {/* Save */}
              <button
                type="submit"
                disabled={saving}
                className="btn btn-primary w-full"
              >

                {saving ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Save Changes
                  </>
                )}

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NoteDetailPage;