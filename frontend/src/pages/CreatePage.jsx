import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

import api from "../lib/axios";

const CreatePage = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {

      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully");

      navigate("/");

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to create note"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-base-200">

      <div className="max-w-3xl mx-auto px-6 py-10">

        <button
          onClick={() => navigate("/")}
          className="btn btn-ghost mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <h1 className="text-3xl font-bold mb-6">
              Create New Note
            </h1>

            <form
              onSubmit={handleSubmit}
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
                  placeholder="Enter note title"
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
                  placeholder="Write your note..."
                  className="textarea textarea-bordered w-full h-48"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full"
              >

                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Creating...
                  </>
                ) : (
                  "Create Note"
                )}

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreatePage;