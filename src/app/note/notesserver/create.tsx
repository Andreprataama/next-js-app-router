"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { saction } from "./action";

const initalState = {
  massage: "",
  error: {
    title: "",
    description: "",
  },
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      submit
    </button>
  );
}

export default function CreateForm() {
  const [state, FormAction] = useActionState(saction, initalState);
  console.log(state);
  return (
    <div className="max-w  p-6 bg-white shadow-lg rounded-lg sticky-top mb-10">
      <h2 className="text-2xl font-bold mb-4">Create</h2>
      <form className="space-y-4 " action={FormAction}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Input title ..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {state.errors && typeof state.errors === "object" && state.errors && (
            <small className="text-red-500">{state.errors.title}</small>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            placeholder="Input description ..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {state.errors && typeof state.errors === "object" && state.errors && (
            <small className="text-red-500">{state.errors.description}</small>
          )}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
