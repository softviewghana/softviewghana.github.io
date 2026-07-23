// src/composables/useDisableContentAccess.ts
import { onMounted, onBeforeUnmount } from "vue";

/**
 * Composable to disable right-click, save, view-source, and dev tools shortcuts.
 * Note: This is a deterrent only — cannot fully prevent access to source or dev tools.
 */
export function useDisableContentAccess() {
  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    console.warn("Right-click is disabled.");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const isMac = navigator.platform.toUpperCase().includes("MAC");
    const key = event.key.toLowerCase();

    const saveShortcut = isMac
      ? event.metaKey && key === "s"
      : event.ctrlKey && key === "s";

    const viewSourceShortcut = isMac
      ? event.metaKey && key === "u"
      : event.ctrlKey && key === "u";

    const devToolsShortcut = event.key === "F12";

    if (saveShortcut || viewSourceShortcut || devToolsShortcut) {
      event.preventDefault();
      console.warn("This shortcut is disabled.");
    }
  };

  onMounted(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("keydown", handleKeyDown);
  });
}
