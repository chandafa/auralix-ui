# Implementation Plan - On This Page Sidebar

I will implement a right-side table of contents (TOC) for component documentation pages, matching the user's request.

## Proposed Changes

### Components

#### [NEW] [TableOfContents.tsx](file:///d:/my-project/AuralUI/src/components/docs/TableOfContents.tsx)

- A component that renders the "On this page" list.
- It will likely be static for now based on the known sections in `page.tsx` (Preview, Usage, Props), or use a slight intersection observer for active states if requested (but static is safer/faster for now).
- **Structure**:
  ```tsx
  <div>
    <p className="font-medium mb-4">On this page</p>
    <ul>...</ul>
  </div>
  ```

### Pages

#### [MODIFY] [page.tsx](file:///d:/my-project/AuralUI/src/app/components/[name]/page.tsx)

- Update the layout to use a grid.
- Add `id` attributes to the sections (`preview`, `usage`, `props`).
- Include the `TableOfContents` component in the right column.
- **Layout**:
  ```tsx
  <div className="flex flex-col lg:flex-row gap-10">
    <div className="flex-1 min-w-0">{/* Main Content */}</div>
    <div className="hidden xl:block w-64 flex-none">
      <div className="sticky top-24">
        <TableOfContents />
      </div>
    </div>
  </div>
  ```

## Verification Plan

1.  Navigate to any component page (e.g., `/components/button`).
2.  Verify the "On this page" sidebar appears on the right on large screens.
3.  Click links to ensure smooth scrolling to sections.
