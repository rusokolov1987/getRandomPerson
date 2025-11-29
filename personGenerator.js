const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Ольга",
            "id_3": "Ирина",
            "id_4": "Светлана",
            "id_5": "Любовь",
            "id_6": "Ирина",
            "id_7": "Елена",
            "id_8": "Василиса",
            "id_9": "Татьяна",
            "id_10": "Марина"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Сергеевич",
            "id_3": "Викторович",
            "id_4": "Романович",
            "id_5": "Юрьевьич",
            "id_6": "Васильевич",
            "id_7": "Павлович",
            "id_8": "Олегович",
            "id_9": "Петрович",
            "id_10": "Дмитриевич"
        }
    }`,
    middleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Сергеевна",
            "id_3": "Викторовна",
            "id_4": "Дмитриевна",
            "id_5": "Петровна",
            "id_6": "Олеговна",
            "id_7": "Павловна",
            "id_8": "Валериевна",
            "id_9": "Тимофеевна",
            "id_10": "Романовна"
        }
    }`,
    professionJson: `{
        "count": 10,
        "list": {     
            "id_1": {
                "gender": "",
                "profession": "повар"
            },
            "id_2": {
                "gender": "Мужчина",
                "profession": "шахтёр"
            },
            "id_3": {
                "gender": "Мужчина",
                "profession": "военный"
            },
            "id_4": {
                "gender": "",
                "profession": "дизайнер"
            },
            "id_5": {
                "gender": "",
                "profession": "продавец"
            },
            "id_6": {
                "gender": "",
                "profession": "программист"
            },
            "id_7": {
                "gender": "",
                "profession": "архитектор"
            },
            "id_8": {
                "gender": "Мужчина",
                "profession": "строитель"
            },
            "id_9": {
                "gender": "Мужчина",
                "profession": "грузчик"
            },
            "id_10": {
                "gender": "",
                "profession": "врач"
            }
        }
    }`,
    mounthJson: `{
        "count": 12,
        "list": {     
            "id_1": {
                "mounth": "января",
                "maxDay": 31
            },
            "id_2": {
                "mounth": "февраля",
                "maxDay": 28
            },
            "id_3": {
                "mounth": "марта",
                "maxDay": 31
            },
            "id_4": {
                "mounth": "апреля",
                "maxDay": 30
            },
            "id_5": {
                "mounth": "мая",
                "maxDay": 31
            },
            "id_6": {
                "mounth": "июня",
                "maxDay": 30
            },
            "id_7": {
                "mounth": "июля",
                "maxDay": 31
            },
            "id_8": {
                "mounth": "августа",
                "maxDay": 31
            },
            "id_9": {
                "mounth": "сентября",
                "maxDay": 30
            },
            "id_10": {
                "mounth": "октября",
                "maxDay": 31
            },
            "id_11": {
                "mounth": "ноября",
                "maxDay": 30
            },
            "id_12": {
                "mounth": "декабря",
                "maxDay": 31
            }
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender = this.GENDER_MALE) {
        if (gender == this.GENDER_FEMALE) return this.randomValue(this.firstNameFemaleJson);
        return this.randomValue(this.firstNameMaleJson);
    },

    randomSurname: function(gender = this.GENDER_MALE) {
        let surname = this.randomValue(this.surnameJson);
        if (gender == this.GENDER_FEMALE) return surname + 'а';
        return surname;
    },

    randomGender: function() {
        return (this.randomIntNumber(1, 0) == 0)? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomMiddleName: function(gender = this.GENDER_MALE) {
        if (gender == this.GENDER_FEMALE) return this.randomValue(this.middleNameFemaleJson);
        return this.randomValue(this.middleNameMaleJson);
    },

    randomProfession: function(gender = this.GENDER_MALE) {
        let obj = this.randomValue(this.professionJson);
        let profession = obj.profession;
        let male = obj.gender;
        if (male == "Мужчина" & gender == this.GENDER_FEMALE) return this.randomProfession(gender);
        return profession;
    },

    randomBirthDate: function() {
        let year = this.randomIntNumber(2000, 1940);
        let obj = this.randomValue(this.mounthJson);
        let mounth = obj.mounth;
        let day = this.randomIntNumber(obj.maxDay, 1);
        return day + ' ' + mounth + ' ' + year;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
}