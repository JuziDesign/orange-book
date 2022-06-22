mod route_handle;
mod menu;

use tauri::Manager;
use crate::route_handle::event_handle;
use crate::menu as app_menu;


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
        .menu(app_menu::menu::create_custom_menu())
        .on_menu_event(app_menu::custom_event_click)
        .invoke_handler(tauri::generate_handler![event_handle::handler_event1])
        .run(context)
        .expect("error while running tauri application");
}
