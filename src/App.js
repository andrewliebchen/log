import { Flex, Text, useColorMode } from "theme-ui";
import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect } from "react";

const statuses = {
  media_aborted: { label: "Media aborted" },
  permission_denied: { label: "Permission denied" },
  no_specified_media_found: { label: "No specified media found" },
  media_in_use: { label: "Media in use" },
  invalid_media_constraints: { label: "Invalid media constraints" },
  no_constraints: { label: "No constraints" },
  recorder_error: { label: "Recorder error" },
  idle: { label: "Whats on your mind?" },
  acquiring_media: { label: "Acquiring media" },
  recording: { label: "Listening" },
  stopping: { label: "Saving" },
  stopped: { label: "Saved" },
};

const App = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });
  const [colorMode, setColorMode] = useColorMode();
  const hasSavedRecording = typeof mediaBlobUrl === "string";

  useEffect(() => setColorMode(hasSavedRecording ? "default" : "dark"));

  return (
    <Flex
      onMouseDown={startRecording}
      onMouseUp={stopRecording}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Text>{statuses[status].label}</Text>
      {hasSavedRecording && <audio src={mediaBlobUrl} autoPlay />}
    </Flex>
  );
};

export default App;
