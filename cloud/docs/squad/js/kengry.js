// Для Яндекс.Карт

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("ymap", {
        center: [59.93853, 30.313497],
        zoom: 10
    });
    ymaps.route(['Санкт-Петербург, Роменская ул., д. 2', 'Санкт-Петербург, Владимирский пр, д. 15, лит. А'],
    {
        mapStateAutoApply: true // автоматически позиционировать карту
    })
        .then(function (route) {
            myMap.geoObjects.add(route);
            var points = route.getWayPoints();  
            points.options.set('preset', 'twirl#redStretchyIcon');
            points.get(0).properties.set('iconContent', 'Это вы');
            points.get(1).properties.set('iconContent', 'Тревога');
        },
        function (error) {
            alert("Возникла ошибка: " + error.message);
        }
    )
    myMap.controls
        .add('zoomControl')
        .add('typeSelector')
}