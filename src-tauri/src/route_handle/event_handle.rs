#[tauri::command]
pub fn handler_event1 () -> String {
    return "hello world".to_string();
}