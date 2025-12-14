export function ChangeMode(){
    const element = document.getElementById("app-container")
    const attribute = element?.getAttribute("data-theme")
        if ((attribute) === "dark"){
            element?.removeAttribute("data-theme")
        }
        else{
            element?.setAttribute("data-theme", "dark");
        }
}
