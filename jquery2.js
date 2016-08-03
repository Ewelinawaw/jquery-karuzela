/**
 * Created by Ewelina on 12.07.2016.
 */



$(function(){
    var carouselList = $("#carousel ul");//pobieranie listy elementów i przypisanie do zmiennej

    setInterval(changeSlide, 3000); //co 3 sek. wykona funkcję zmieniającą slajd


    function changeSlide(){
        carouselList.animate({marginLeft:-500}, 500, placeFirstSlideAfterLast); //przesunięcide całej listy 500 px w lewo za pomocą ustawienia marginesu na -500px. Po animacji wykona się funkcja
    }

    //po animacji należy przenieść pierwszy element listy na jej koniec (aby po ostatnim slajdzie pojawiła się pierwszy).
    function placeFirstSlideAfterLast(){
        carouselList
            .find("li:last")
            .after(carouselList.find("li:first"));
        carouselList
            .css({marginLeft:0});
    };
});


