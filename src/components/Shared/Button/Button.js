import React from "react";
import { Link } from "react-router-dom";
// import { LocationStates } from "routers/types";
import twFocusClass from "../../../utils/twFocusClass";

const Button = ({
  className = "text-neutral-700 dark:text-neutral-200",
  translate = "",
  sizeClass = "px-4 py-3 sm:px-6",
  fontSize = "text-sm sm:text-base font-medium",
  disabled = false,
  href,
  children,
  targetBlank,
  type,
  loading,
  onClick = () => {},
}) => {
  const CLASSES =
    `nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors ${fontSize} ${sizeClass} ${translate} ${className} ` +
    twFocusClass(true);

  const _renderLoading = () => {
    return (
      <svg
        className="w-5 h-5 mr-3 -ml-1 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };

  if (!!href) {
    return (
      <Link
        to={href}
        target={targetBlank ? "_blank" : undefined}
        className={`${CLASSES} `}
        onClick={onClick}
        rel="noopener noreferrer"
      >
        {children || `This is Link`}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${CLASSES}`}
      onClick={onClick}
      type={type}
    >
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;
