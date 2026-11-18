
function extractMessageID(message) {
  if (!message) return null;

  if (typeof message === "string" || typeof message === "number") {
    return String(message);
  }

  return (
    message.messageID ||
    message.messageId ||
    message.mid ||
    message.id ||
    message.message?.messageID ||
    null
  );
}

function isErrorResult(result) {
  return Boolean(
    result &&
    typeof result === "object" &&
    (result.error || result.success === false)
  );
}

async function dispatchMessageReaction(api, messageID, reaction) {
  if (!api || !messageID || !reaction) {
    return { success: false, error: "Missing required arguments" };
  }

  try {
    if (typeof api.setMessageReactionMqtt === "function") {
      const result = await api.setMessageReactionMqtt(
        reaction,
        messageID
      );

      if (!isErrorResult(result)) {
        return { success: true, method: "mqtt" };
      }
    }

    if (typeof api.setMessageReaction === "function") {
      const result = await api.setMessageReaction(
        reaction,
        messageID
      );

      if (!isErrorResult(result)) {
        return { success: true, method: "fallback" };
      }

      return { success: false, error: result };
    }

    return { success: false, error: "No reaction method available" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = {
  extractMessageID,
  dispatchMessageReaction,
  isErrorResult
};
    
