const groupObj = [
  {
    id : 1,
    gId : 1,
    name : "Guruh #1",
    status : "Muzlatilgan",
    subject : "Matematika",
    educationType : "Sanoqli",
    payment : "200,000",
    teacher : "Alisher Xazratov"
  },
  {
    id : 2,
    gId : 13,
    name : "Guruh #13",
    status : "Aktiv",
    subject : "Ona tili",
    educationType : "Sanoqli",
    payment : "200,000",
    teacher : "Valibek Nasimov"
  },
  {
    id : 3,
    gId : 14,
    name : "Guruh #14",
    status : "Aktiv",
    subject : "Ona tili",
    educationType : "Sanoqli",
    payment : "180,000",
    teacher : "Valibek Nasimov"
  },
  {
    id : 4,
    gId : 16,
    name : "Guruh #16",
    status : "Muzlatilgan",
    subject : "Ingliz tili",
    educationType : "Sanoqli",
    payment : "150,000",
    teacher : "Valibek Nasimov"
  },
  {
    id : 4,
    gId : 17,
    name : "Guruh #17",
    status : "Aktiv",
    subject : "Ingliz tili",
    educationType : "Sanoqli",
    payment : "180,000",
    teacher : "Karimberdi Aliyev"
  },
  {
    id : 5,
    gId : 21,
    name : "Guruh #21",
    status : "Aktiv",
    subject : "Ingliz tili",
    educationType : "Sanoqli",
    payment : "100,000",
    teacher : "Karimberdi Aliyev"
  },
  {
    id : 6,
    gId : 22,
    name : "Guruh #22",
    status : "Aktiv",
    subject : "Matematika",
    educationType : "Oylik",
    payment : "70,000",
    teacher : "Elmurod Toshqulov"
  },
  {
    id : 7,
    gId : 23,
    name : "Guruh #23",
    status : "Muzlatilgan",
    subject : "Kimyo",
    educationType : "Sanoqli",
    payment : "140,000",
    teacher : "Aleksandr Ivanov"
  }
];


const studentObj = [
  {
    id : 1,
    name : "Shaxzod Unknown",
    group : [1],
    number : "(95) 151-25-12",
    groupNum : 1,
  },
  {
    id : 2,
    name : "Akbarali Tengelov",
    group : [13, 14, 16],
    number : "(90) 201-90-25",
    groupNum : 3
  },
  {
    id : 3,
    name : "Muhammadsodiq Koziyev",
    group : [17, 1],
    number : "(99) 119-51-51",
    groupNum : 2
  },
  {
    id : 4,
    name : "Jamoliddin Najmiddinov",
    group : [13],
    number : "(94) 251-21-21",
    groupNum : 1
  },
  {
    id : 5,
    name : "Aziz Rakhim",
    group : [14],
    number : "(95) 011-36-33",
    groupNum : 1
  },
  {
    id : 6,
    name : "Samandar Bohodirov",
    group : [16, 17],
    number : "(91) 171-99-11",
    groupNum : 2
  },
  {
    id : 7,
    name : "Abdulloh G'iyasev",
    group : [1],
    number : "(93) 951-51-49",
    groupNum : 1
  },
  {
    id : 8,
    name : "Ulug'bek Vahidov",
    group : [13],
    number : "(73) 501-13-63",
    groupNum : 1
  },
  {
    id : 9,
    name : "Allan Unknown",
    group : [14],
    number : "(71) 616-17-91",
    groupNum : 1
  },
  {
    id : 10,
    name : "Abdunozir Unknown",
    group : [16],
    number : "(33) 719-39-51",
    groupNum : 1
  }
];

export {groupObj, studentObj};