$(function () {
//method for devouring a burger
    $(".devour").on("click", function (event) {
        var id = this.id;

        var newState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function () {
            console.log("burger has been devoured");
            location.reload();
        });

    });
//method to add input of new burger
    $("#submit").on("click", function (event) {
        event.preventDefault();

        var burg = $("#burgerInput").val().trim();

        var newBurger = {
            burger_name: burg,
            devoured: 0
        };


        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("new burger added");
            location.reload();
        });
    });
//method to delete a devoured burger 
    $("#delete").on("click", function (event) {
        event.preventDefault();

        $.ajax("/api/burgers", {
            type: "DELETE",
        }).then(function () {
            console.log("deleting all devoured burgers");
            location.reload();
        });
    });

});