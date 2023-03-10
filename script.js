'use strict'

let firstFloor = [
                  "участок упаковки изделий из пластмассы",
                  "бго", 
                  "участок ремонта возвратных изделий", 
                  "склад приборов юго", 
                  "склад", 
                  "участок чистого производства баночек", 
                  "участок измельчения термопластов", 
                  "генераторная",
                  "участок упаковки изделий из пластмассы №1",
                  "трансформаторная подстанция",
                  "участок литья",
                  "центр развития персонала",
                  "директор по персоналу",
                  "заместитель директора по персоналу",
                  "отдел кадров",
                  "отдел труда и заработной платы",
                  "группа подбора персонала",
                  "лаборатория",
                  "помещение для дизинфекции приборов",
                  "гардеробная ж",
                  "ру",
                  "гардеробная м",
                  "сан. узел ж",
                  "сан.узел м",
                  "комната оперативного запаса лвж и гж",
                  "склад несоответствия и входного контроля",
                  "термическое отделение",
                  "участок моточных изделий и нагревательных элементов №1",
                  "отдел обеспечения безопасности труда",
                  "учебный класс лпу",
                  "директор по производству",
                  "заместитель директора по производству",
                  "начальник",
                  "помещение комплектовки и кладовщиков-операторов",
                  "участок моточных изделий и нагревательных элементов №2",
                  "сборочно-монтажный участок №3",
                  "механический участок",
                  "токарный участок",
                  "Раздевалка",
                  "эрозионно-прошивочный участок №1",
                  "эрозионно-прошивочный участок №2",
                  "координатно-расточной участок",
                  "оптико-шлифовальный участок",
                  "участок окрашивания пластмассы",
                  "склад пластмассы",
                  "склад деталей",
                  "склад участка термопластов",
                  "бытовое помещение",
                  "раздевалка",
                  "склад технологической оснастки и материалов",
                  "склад материалов и ПКИ №2",
                  "начальник сб",
                  "сб",
                  "комната охраны",
                  "проходная",
                  "помещение сб",
                  "сан. узел",
                  "архив бухгалтерии",
                  "учебный класс",
                  "архив кадров",
                  "отдел снабжения",
                  "конференцзал",
                  "инструментальный цех",
                  "участок промежуточного хранения материалов и продукции",
                  "комната для курения"
                ];
let secondFloor = [
                  "заместитель технического директора по оборудованию",
                  "отдел 26",
                  "начальник отдела 26",
                  "инженер по документации смк и архив нтц",
                  "начальник отдела 101",
                  "процедурная отдела 65",
                  "кабинет врача",
                  "отдел 53",
                  "отдел 103",
                  "начальник отдела 103",
                  "отдел 65",
                  "начальник цеха 27",
                  "склад отдела 56",
                  "мастерская электро-монтажного участка цеха 27",
                  "архив отдела 101",
                  "архив отдела 73",
                  "бнс отдела 101",
                  "физио-кабинет отдела 65",
                  "сан. узел м",
                  "сан. узел ж",
                  "фотостудия",
                  "техническая зона",
                  "принтерная отдела 56",
                  "архив бухгалтерии отдела 41",
                  "склад отдела 24",
                  "архив отдела 101",
                  "лаборатория отдела 23",
                  "архив основного производства отдела 35",
                  "комната приема пищи",
                  "сан. комната",
                  "раздаточная",
                  "склад плат отдела 35",
                  "с/у ахо отдела 74",
                  "склад ПКИ отдела 35 №1",
                  "склад ПКИ отдела 35 №2",
                  "склад ПКИ отдела 35 №3",
                  "склад несоответствий",
                  "ру цеха 27",
                  "склад рил",
                  "комната ремонта оргтехники цеха 27",
                  "склад рил",
                  "венткамера цеха 27",
                  "начальник отдела 23",
                  "отдел 23",
                  "начальник отдела 24",
                  "отдел 24 №1",
                  "отдел 24 №2",
                  "инженер по технической документации",
                  "начальник цеха 31",
                  "промежуточный склад цеха 31",
                  "участок предварительного контроля и испытаний сборочных единиц готовых изделий",
                  "сборочно-монтажный участок №1 цеха 31",
                  "начальник отдела 35",
                  "отдел 35",
                  "сборочно-монтажный участок №2 цеха 31",
                  "склад материалов и пки отдела 35",
                  "участок копировальной техники",
                  "раздевалка цеха 31",
                  "раздевалка цеха 31",
                  "шумоизоляционная комната цеха 31",
                  "пси(приемно-сдаточные испытания)",
                  "упаковка приборов",
                  "склад приборов участка упаковки",
                  "склад корпусных деталей из пластмассы цеха 35",
                  "склад корпусных деталей из пластмассы №2 цеха 35",
                  "серверная отдела 26",
                  "ипиа",
                  "склад",
                  "помещение для механической очитки оргтехники",
                  "архив цеха 25",
                  "начальник цеха 25",
                  "технологи цеха 25",
                  "атс",
                  "переговорная",
                  "главный бухгалтер",
                  "бухгалтерия №1",
                  "директор по качеству",
                  "административный директор",
                  "юридический отдел",
                  "отдел казначества",
                  "генеральный директор",
                  "бухгалтерия/касса",
                  "приемная",
                  "бухгалтерия №2",
                  "бухгалтерия №3",
                  "бухгалтерия №4",
                  "архив бухгалтерии",
                  "сан. узел",
                  "приемная",
                  "бытовое помещение секретарей",
                  "комната видеоконференц-связи",
                  "отдел сопровождения заказов",
                  "сан. узел м",
                  "сан. узел ж",
                  "приемная № 2",
                  "советник директора по развитию",
                  "руководитель службы по логистике",
                  "начальник отдела сопровождения заказов",
                  "исполнительный директор",
                  "помощник генерального директора по экономической безопасности",
                  "отдел информационных технологий",
                  "директор продуктового направления для физ. лиц",
                  "приемная №3",
                  "коммерческий директор",
                  "отдел сопровождения заказов"
                ];
let thirdFloor = [
                  "сан. узел",
                  "группа \"дезинфекция\"",
                  "группа \"медицинская мебель\"",
                  "планово-экономический отдел",
                  "контрольно-ревизионная группа",
                  "финансовый директор",
                  "начальник службы по капитальному строительству и административно хозяйственной деятельности",
                  "аудитор смк",
                  "отдел по взаимодействию с региональными клиентами",
                  "сан. узел м",
                  "сан. узел ж",
                  "бытовое помещение",
                  "директор направления лпу",
                  "приемная",
                  "руководитель службы поддержки продаж по лпу",
                  "журавлем и.в.",
                  "служба по капитальному строительству и административно-хозяйственной деятельности",
                  "руководитель группы по контролю за дебиторской задолженностью",
                  "группа приборов",
                  "отдел по взаимодействию с региональными клиентами"
                ];

const form = document.querySelector('form');
form.addEventListener('submit', checkSex);
let name = form.querySelector('[name = "inputName"]');

function checkRoom(event) {
  event.preventDefault();
  
  let lowerName = name.value.toLowerCase();
  if (firstFloor.includes(lowerName)){
    alert(`Ваш кабинет находится на первом этаже\nНужный кабинет: ${name.value}`);
  } else if (secondFloor.includes(lowerName)) {
    alert(`Ваш кабинет находится на втором этаже\nНужный кабинет: ${name.value}`);
  } else if (thirdFloor.includes(lowerName)) {
    alert(`Ваш кабинет находится на третьем этаже\nНужный кабинет: ${name.value}`);
  } else{
    alert("Некорректные данные!!!");
  }
}
