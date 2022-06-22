use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

#[warn(dead_code)]
pub fn create_custom_menu() -> Menu {
    let title = String::from("AppTtile");
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let close = CustomMenuItem::new("close".to_string(), "Close");
    let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
    Menu::new()
        .add_native_item(MenuItem::Cut)
        .add_submenu(Submenu::new(
            title,
            Menu::new().add_item(CustomMenuItem::new("quit".to_string(), "Quit")),
        ))
        .add_submenu(submenu)

}
