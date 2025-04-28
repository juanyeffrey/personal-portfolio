export function Button({ children, className = "", asChild = false }) {
    const Tag = asChild ? 'span' : 'button';
    return <Tag className={`inline-block px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition duration-200 ${className}`}>{children}</Tag>;
  }
  