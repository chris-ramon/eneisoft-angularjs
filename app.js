var myApp = angular.module('myApp', []);
function draw_graph (data) {
    var graph = Viva.Graph.graph();
    var data_length = data.length;

    // Construct the graph
    graph.addNode('chris-ramon', {url : 'https://secure.gravatar.com/avatar/a143738283e203b253441b597301f97d?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'});
    for (var i=0; i < data_length; i++) {
        var name = data[i].login,
            avatar_url = data[i].avatar_url;
        graph.addNode(name, {url : avatar_url});
        graph.addLink('chris-ramon', name);
    }

    // Set custom nodes appearance
    var graphics = Viva.Graph.View.svgGraphics();
    graphics.node(function(node) {
        // The function is called every time renderer needs a ui to display node
        return Viva.Graph.svg('image')
            .attr('width', 24)
            .attr('height', 24)
            .link(node.data.url); // node.data holds custom object passed to graph.addNode();
    })
        .placeNode(function(nodeUI, pos){
            // Shift image to let links go to the center:
            nodeUI.attr('x', pos.x - 12).attr('y', pos.y - 12);
        });

    var renderer = Viva.Graph.View.renderer(graph,
        {
            graphics : graphics
        });
    renderer.run();

}

myApp.controller('myController', function($scope, graphDataFactory) {
    function draw() {
        graphDataFactory.get_graph_data_real()
            .then(function(data) {
                draw_graph(data);
            });
    }

    $scope.reDrawGraph = function() {
        draw();
    }

    draw();
});

myApp.factory('graphDataFactory', ['$http', function($http) {
    // this factory, will fetch graph data from server
    var factory = {};
    // this is just mock data
    factory.get_graph_data = function() {
        return [
            [1,2],
            [4,8]
        ]
    }
    // example how would you call server for data
    factory.get_graph_data_real = function() {
        var url = 'https://api.github.com/users/chris-ramon/followers';
        return $http.get(url)
            .then(function(response) {
                return response.data;
            });
    }

    return factory;
}]);