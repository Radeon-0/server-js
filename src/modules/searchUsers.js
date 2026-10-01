
import { render } from "./render";
import { debounce } from "./helpers";
export const searchUsers = () =>{
    const input = document.getElementById('search-input');

    const debounceSearch = debounce(() =>{
        userService.getSortSearchUsers(input.value).then(users=>{
            render(users)
            debounce();
        })
    });
    
    

    input.addEventListener('input',()=>{
        debounceSearch();
    })

}