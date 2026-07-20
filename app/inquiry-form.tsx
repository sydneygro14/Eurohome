"use client";

import { useState } from "react";

const projectTypes = [
  "Whole Home Design",
  "New Construction",
  "Renovation and Refresh",
  "Living, Dining and Bedroom",
  "Custom Furniture and European Collections",
  "3D Visualization",
];

const timingOptions = [
  "Exploring options",
  "Ready to begin",
  "Within 3 months",
  "3–6 months",
  "6+ months",
];

const investmentOptions = [
  "To be discussed",
  "$25k–$50k",
  "$50k–$100k",
  "$100k–$250k",
  "$250k+",
];

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="inquiryForm"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="formGrid">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Location
          <input name="location" type="text" autoComplete="address-level2" />
        </label>
        <label>
          Project type
          <select name="projectType" required defaultValue="">
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          Timing
          <select name="timing" required defaultValue="">
            <option value="" disabled>
              Select timing
            </option>
            {timingOptions.map((timing) => (
              <option key={timing}>{timing}</option>
            ))}
          </select>
        </label>
        <label>
          Estimated investment range
          <select name="investment" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {investmentOptions.map((investment) => (
              <option key={investment}>{investment}</option>
            ))}
          </select>
        </label>
        <label>
          Rooms or areas
          <input name="rooms" type="text" />
        </label>
      </div>
      <label>
        Project description
        <textarea
          name="description"
          rows={7}
          placeholder="Tell us what you want your home to make possible."
          required
        />
      </label>
      <button className="button primary" type="submit">
        Submit Project
      </button>
      {submitted ? (
        <p className="formStatus" role="status">
          Thank you. Your project inquiry has been prepared in this local
          preview.
        </p>
      ) : null}
    </form>
  );
}
