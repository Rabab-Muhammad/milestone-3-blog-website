"use client";

import React, { useState } from "react";

function CommentsSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh on form submission
    if (newComment.trim()) {
      // Add new comment to the list
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment(""); // Clear the input field after adding comment
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
        Leave a Comment
      </h2>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded shadow-sm">
              {comment}
            </div>
          ))
        ) : (
          <p className="text-amber-500  text-sm sm:text-lg ">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      {/* Comment input and submit form */}
      <form onSubmit={handleAddComment} className="mt-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          rows={4}
          required
          className="w-full p-3 sm:p-4 border-2 rounded-lg text-sm sm:text-base"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white sm:px-6 sm:py-2 rounded-lg hover:bg-blue-600 text-sm sm:text-base"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentsSection;
