mod route_handle;

use tauri::Manager;
use crate::route_handle::event_handle;


fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(|app| {
            #[cfg(debug_assertions)]
            {
                let window = app.get_window("main").unwrap();
                if !window.is_devtools_open() {
                    window.open_devtools();
                }
            }
            Ok(())
        })
        .menu(tauri::Menu::os_default(&context.package_info().name))
        .invoke_handler(tauri::generate_handler![event_handle::handler_event1])
        .run(context)
        .expect("error while running tauri application");
}
