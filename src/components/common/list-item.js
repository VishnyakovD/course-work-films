import React from 'react';

const ListItemFilm = ({film, size}) => {
  return(
    <div key={film.id} className="list-item">
        <div className="row">
          <div className={`col-${size}`}>
            <img 
             className="figure-img img-fluid"
             src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
             title={film.title} />
          </div> 
          
          <div className={`col-${12-Number(size)}`}>
            <h4>{film.title}</h4>
            <h5>Original title "<i>{film.original_title}</i>"</h5>
            <div>
              <span className="alert-link">Budget</span>
              <span>${film.budget}</span>
            </div>
            <div>
              <span className="alert-link">Release date</span>
              <span>{film.release_date}</span>
            </div>
            <div>
              <span className="alert-link">Homepage</span>
              <a href={film.homepage} target="_blank">{film.homepage}</a>
            </div>            
            <div>
              <span className="alert-link">Status</span>
              <span>{film.status}</span>
            </div>
            <div>
              <span className="alert-link">Tagline</span>
              <span>{film.tagline}</span>
            </div>     
          </div>
        </div>
    </div>
  )
}

export default ListItemFilm;
/*
2. Приложение по поиску фильмов
Используя апи: https://developers.themoviedb.org/3/getting-started/introduction
Написать приложение по поиску фильмов и сортировкой их по каталогам.

Нужно реализовать следующие страницы и модули:
- Шапка с поиском: глобальный модуль который отображается на всех страничках.
	-> Подмодуль: При вводе названия отправляется запрос на поиск соответствующего фильма.
	-> Подмодуль: Меню
- Главная страница: выводит последние фильмы
- Страница фильма: Краткая информация о фильме - постер, название, бюджет, дата выхода и т.д
	-> Подмодуль: Показать похожие фильмы
	-> Подмодуль: Поставить фильму рейтинг (Записывает ваш рейтинг в localstorage)
- Странца каталога: Показывает фильмы определеного жанра
*/
