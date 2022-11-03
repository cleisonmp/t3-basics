import { trpc } from "../utils/trpc";

export const Messages = () => {
  const {
    data: messages,
    isLoading,
    isFetching,
  } = trpc.guestbook.getAll.useQuery(undefined, {
    refetchInterval: 1000 * 30, //30 seconds,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Fetching messages...</div>;

  return (
    <div className="flex flex-col gap-4 border p-4">
      {messages?.map((msg, index) => {
        return (
          <div key={index}>
            {isFetching && <p>Updating...</p>}

            <p>{msg.message}</p>
            <span className="text-gray-500">From: {msg.name}</span>
          </div>
        );
      })}
    </div>
  );
};
