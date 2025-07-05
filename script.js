// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - при помощи метода forEach вывести в консоль сообщения в таком виде:

// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt(
            "Сколько фильмов вы уже посмотрели?",
            ""
        ).trim();

        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                "Сколько фильмов вы уже посмотрели?",
                ""
            ).trim();
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt(
                "Один из последних просмотренных фильмов?",
                ""
            ).trim();
            let b = +prompt("На сколько оцените его?", "").trim();

            if (
                a != "" &&
                a != null &&
                b != "" &&
                b != null &&
                a.length <= 50
            ) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == "" || genre == null) {
                console.log(
                    "Вы ввели некорректные данные или не ввели их вообще"
                );
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${genre}`);
        });
    },
    showMyDB: function (privat) {
        if (!privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};
