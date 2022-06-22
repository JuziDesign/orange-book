pub mod menu;

use tauri::WindowMenuEvent;
use tauri::Wry;

pub fn custom_event_click (event: WindowMenuEvent<Wry>) {
    let id = event.menu_item_id();
    match id {
        "quit" => {
            std::process::exit(0);
        }
        "close" => {
            event.window().close().unwrap();
        }
        _ => {}
    }
}