import React from "react";
import image from "./../assets/search.png"

export default function Search() {
    return(
        <form action="" class="form-search bg-neutral-400 flex items-center w-52 rounded-full box-border px-4 py-0.5">
            <img src={image} alt="Кнопка поиска" />
            <input type="search" class="form-search__input bg-neutral-400 w-11/12 pl-2 focus:outline-none" placeholder="Поиск" />
        </form>
    )
}