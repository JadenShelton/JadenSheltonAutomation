const $ = go.GraphObject.make;

const myDiagram = new go.Diagram("myDiagramDiv");

//adjust view window on intial load
const START_SCALE = 0.4;
myDiagram.addDiagramListener("InitialLayoutCompleted", (e) => {
    const d = e.diagram;
    d.zoomToFit();
    d.scale = START_SCALE;

    });

    //sets the Diagram image as the background
myDiagram.add($(go.Part,
    {
        layerName: "Background",
        position: new go.Point(0, 0),
        selectable: false,
        pickable: false    
    },
    $(go.Picture,
        "/ARTCC_ZDV.png"  
    )
  )
);
