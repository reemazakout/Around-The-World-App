export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="h-20 w-20 animate-spin rounded-full border-8 border-solid border-gray-200 border-t-gray-800"></div>
    </div>
  );
}
