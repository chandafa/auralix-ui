"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Input: () => Input,
  Modal: () => Modal,
  ModalBody: () => ModalBody,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  ModalTitle: () => ModalTitle,
  Select: () => Select,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCell: () => TableCell,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Textarea: () => Textarea,
  Tooltip: () => Tooltip,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = require("react");

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
  ({ className, variant = "primary", size = "md", disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        ref,
        disabled,
        className: cn(
          "inline-flex items-center justify-center rounded-[2rem] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "border border-border bg-transparent hover:bg-muted": variant === "outline",
            "bg-transparent hover:bg-muted": variant === "ghost",
            "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive"
          },
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg"
          },
          className
        ),
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Badge.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Badge({
  children,
  variant = "default",
  size = "md",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full font-medium",
        {
          "bg-muted text-foreground": variant === "default",
          "bg-success/20 text-success": variant === "success",
          "bg-warning/20 text-warning": variant === "warning",
          "bg-destructive/20 text-destructive": variant === "error",
          "bg-info/20 text-info": variant === "info"
        },
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-2.5 py-1 text-sm": size === "md"
        },
        className
      ),
      children
    }
  );
}

// src/components/Alert.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var icons = {
  success: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
  error: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }),
  info: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) })
};
function Alert({
  children,
  variant = "info",
  title,
  icon = true,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      role: "alert",
      className: cn(
        "flex gap-3 rounded-[2rem] border p-4 backdrop-blur-sm",
        {
          "border-success/30 bg-success/10 text-success": variant === "success",
          "border-destructive/30 bg-destructive/10 text-destructive": variant === "error",
          "border-warning/30 bg-warning/10 text-warning": variant === "warning",
          "border-info/30 bg-info/10 text-info": variant === "info"
        },
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex-shrink-0", children: icons[variant] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mb-1 font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm opacity-90", children })
        ] })
      ]
    }
  );
}

// src/components/Card.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Card({ children, className, hoverable }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: cn(
        "rounded-[2rem] border border-white/10 bg-background/60 p-6 backdrop-blur-md",
        hoverable && "transition-all hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1",
        className
      ),
      children
    }
  );
}
function CardHeader({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("mb-4", className), children });
}
function CardTitle({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: cn("text-lg font-semibold", className), children });
}
function CardDescription({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: cn("text-sm text-muted-foreground", className), children });
}
function CardContent({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn(className), children });
}
function CardFooter({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("mt-4 flex items-center gap-2", className), children });
}

// src/components/Input.tsx
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Input = (0, import_react2.forwardRef)(
  ({ className, error, inputSize = "md", disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "input",
      {
        ref,
        disabled,
        className: cn(
          "w-full rounded-[2rem] border bg-background/50 px-4 text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-border": !error,
            "border-destructive focus:ring-destructive": error
          },
          {
            "h-8 text-sm": inputSize === "sm",
            "h-10 text-sm": inputSize === "md",
            "h-12 text-base": inputSize === "lg"
          },
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/Modal.tsx
var import_react3 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Modal({
  isOpen,
  onClose,
  children,
  size = "md",
  closeOnBackdrop = true,
  className
}) {
  const handleKeyDown = (0, import_react3.useCallback)(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );
  (0, import_react3.useEffect)(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);
  if (!isOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-md",
        onClick: closeOnBackdrop ? onClose : void 0,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        className: cn(
          "relative z-10 w-full rounded-[2rem] border border-white/10 bg-background/80 p-6 shadow-2xl backdrop-blur-xl",
          {
            "max-w-sm": size === "sm",
            "max-w-md": size === "md",
            "max-w-lg": size === "lg",
            "max-w-xl": size === "xl"
          },
          className
        ),
        children
      }
    )
  ] });
}
function ModalHeader({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: cn("mb-4", className), children });
}
function ModalTitle({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: cn("text-lg font-semibold", className), children });
}
function ModalBody({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: cn("text-sm text-muted-foreground", className), children });
}
function ModalFooter({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: cn("mt-6 flex items-center justify-end gap-2", className), children });
}

// src/components/Select.tsx
var import_react4 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Select = (0, import_react4.forwardRef)(
  ({ className, options, placeholder, error, selectSize = "md", disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "select",
      {
        ref,
        disabled,
        className: cn(
          "w-full appearance-none rounded-[2rem] border bg-background/50 px-4 text-foreground backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-border": !error,
            "border-destructive focus:ring-destructive": error
          },
          {
            "h-8 text-sm": selectSize === "sm",
            "h-10 text-sm": selectSize === "md",
            "h-12 text-base": selectSize === "lg"
          },
          "bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%2371717a%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10",
          className
        ),
        ...props,
        children: [
          placeholder && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", disabled: true, children: placeholder }),
          options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value))
        ]
      }
    );
  }
);
Select.displayName = "Select";

// src/components/Textarea.tsx
var import_react5 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Textarea = (0, import_react5.forwardRef)(
  ({ className, error, disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "textarea",
      {
        ref,
        disabled,
        className: cn(
          "min-h-[80px] w-full rounded-[2rem] border bg-background/50 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-border": !error,
            "border-destructive focus:ring-destructive": error
          },
          className
        ),
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/Tooltip.tsx
var import_react6 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function Tooltip({
  children,
  content,
  position = "top",
  className
}) {
  const [isVisible, setIsVisible] = (0, import_react6.useState)(false);
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-foreground border-l-transparent border-r-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-foreground border-l-transparent border-r-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-foreground border-t-transparent border-b-transparent border-r-transparent",
    right: "right-full top-1/2 -translate-y-1/2 border-r-foreground border-t-transparent border-b-transparent border-l-transparent"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      className: "relative inline-flex",
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      onFocus: () => setIsVisible(true),
      onBlur: () => setIsVisible(false),
      children: [
        children,
        isVisible && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            role: "tooltip",
            className: cn(
              "absolute z-50 whitespace-nowrap rounded-[1rem] bg-foreground/90 px-3 py-1.5 text-xs text-background shadow-lg backdrop-blur-sm",
              positionClasses[position],
              className
            ),
            children: [
              content,
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "div",
                {
                  className: cn(
                    "absolute h-0 w-0 border-4",
                    arrowClasses[position]
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/components/Table.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function Table({ children, className, striped, hoverable }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full overflow-hidden rounded-[2rem] border border-white/10 bg-background/60 backdrop-blur-md", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "table",
    {
      className: cn(
        "w-full caption-bottom text-sm",
        striped && "[&_tbody_tr:nth-child(even)]:bg-muted/30",
        hoverable && "[&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-muted/50",
        className
      ),
      children
    }
  ) }) });
}
function TableHeader({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("thead", { className: cn("border-b border-border", className), children });
}
function TableBody({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tbody", { className: cn("[&_tr:last-child]:border-0", className), children });
}
function TableRow({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { className: cn("border-b border-border", className), children });
}
function TableHead({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("th", { className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground", className), children });
}
function TableCell({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("td", { className: cn("p-4 align-middle", className), children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Tooltip,
  cn
});
//# sourceMappingURL=index.js.map