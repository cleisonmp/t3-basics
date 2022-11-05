import { trpc } from "../utils/trpc";
import { Loading } from "./common/loading";

export const Messages = () => {
  const {
    data: messages,
    isLoading,
    isFetching,
  } = trpc.guestbook.getAll.useQuery(undefined, {
    refetchInterval: 1000 * 30, //30 seconds,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="relative flex items-center justify-center gap-1">
        <div className="absolute left-0">
          {isFetching && <Loading width="20" height="20" />}
        </div>
        <p className="text-center ">Message board</p>
      </div>
      {isLoading ? (
        <div>Fetching messages...</div>
      ) : (
        <div className="mt-2 flex h-96 w-full flex-col gap-4 overflow-auto border p-4">
          {messages?.map((msg, index) => {
            return (
              <div key={index} className="w-full">
                <p className="">{msg.message}</p>
                <span className="text-gray-500">From: {msg.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
