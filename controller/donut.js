const bar_default_json = require('../default/chart');
bar_default_json.type = "doughnut";

const generate_donut_graph_data = userdata => {
    const partyGroups = ["INC", "BJP", "JDS", "Others"];
    const incSupports = userdata.filter(user => user.party === 'INC');
    const bjpSupports = userdata.filter(user => user.party === 'BJP');
    const jdsSupports = userdata.filter(user => user.party === 'JDS');
    const otherSupports = userdata.filter(user => user.party === 'Others');
    let datasetValues = [
        {
            backgroundColor: ["blue", "orange", "green", "brown"],
            data: [incSupports.length, bjpSupports.length, jdsSupports.length, otherSupports.length]   
        }
    ];
    bar_default_json.data.labels = partyGroups;
    bar_default_json.data.datasets = datasetValues;
    bar_default_json.options.title.text = 'Supporting Party Donut Graph';
    return bar_default_json;
}

module.exports = generate_donut_graph_data;