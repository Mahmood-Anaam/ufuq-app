import { model, FormatMessagesPrompt } from "@/lib/ai/allam";
import { SystemPrompts } from "@/lib/ai/Prompts";
import { LangChainAdapter, Message, StreamData } from "ai";



export const maxDuration = 10;

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();
  const newmessages = [
    {
      role: "system",
      content: SystemPrompts.sys_ar_1,
    },
    ...messages,
  ];
  const formatmessages = FormatMessagesPrompt(newmessages);

  const stream = await model.stream(formatmessages);

  return LangChainAdapter.toDataStreamResponse(stream);
}
