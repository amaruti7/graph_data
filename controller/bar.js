const bar_default_json = require('../default/chart');
bar_default_json.type = "bar";

const generate_bar_graph_data = (userData, id) => {
    if(id === 'age') {
        return ageDataForBar(userData);
    } else if(id === 'gender'){
        return genderDataForBar(userData);
    } else if(id === 'caste') {
        return casteDataForBar(userData);
    } else if(id === 'religion') {
        return religionDataForBar(userData);
    } else {
        return {message: "Please pass the correct param!!"}
    }
}

const ageDataForBar = (userData) => {
    let ageGroups = ["18-35", "35-49", "50+"];
    let above18Users = userData.filter(user => {
        if(user.age >= 18 && user.age <= 34 ) {
            return user;
        }
    });
    let above35Users = userData.filter(user => {
        if(user.age >= 35 && user.age <= 49 ) {
            return user;
        }
    });
    let above50Users = userData.filter(user => {
        if(user.age >= 50) {
            return user;
        }
    });
    let datasetValues = [
        {
            backgroundColor: ["red", "green","blue"],
            data: [above18Users.length, above35Users.length, above50Users.length]
        }
    ]
    bar_default_json.data.labels = ageGroups;
    bar_default_json.data.datasets = datasetValues;
    bar_default_json.options.title.text = 'Age Group Bar Graph';
    return bar_default_json;
};

const genderDataForBar = userData => {
    let genderGroups = ["Male", "Female", "Others"];
    let MaleUsers = userData.filter(user => user.gender === 'Male');
    let FemaleUsers = userData.filter(user => user.gender === 'Female');
    let OtherUsers = userData.filter(user => user.gender === 'Others');
    let datasetValues = [
        {
            backgroundColor: ["red", "green","blue"],
            data: [MaleUsers.length, FemaleUsers.length, OtherUsers.length]   
        }
    ];
    bar_default_json.data.labels = genderGroups;
    bar_default_json.data.datasets = datasetValues;
    bar_default_json.options.title.text = 'Gender Group Bar Graph';
    return bar_default_json;
}

const religionDataForBar = userData => {
    let religionGroups = ["Hindu", "Muslim", "Christian", "Others"];
    let hinduUsers = userData.filter(user => user.religion === 'Hindu');
    let muslimUsers = userData.filter(user => user.gender === 'Muslim');
    let christianUsers = userData.filter(user => user.gender === 'Christian');
    let otherUsers = userData.filter(user => user.gender === 'Others');
    let datasetValues = [
        {
            backgroundColor: ["orange", "green", "blue", "brown"],
            data: [hinduUsers.length, muslimUsers.length, christianUsers.length, otherUsers.length]   
        }
    ];
    bar_default_json.data.labels = religionGroups;
    bar_default_json.data.datasets = datasetValues;
    bar_default_json.options.title.text = 'Religion Group Bar Graph';
    return bar_default_json;
}

const casteDataForBar = userData => {
    let casteGroups = ["Gen", "SC", "ST", "OBC"];
    let genUsers =  userData.filter(user => user.caste === 'Gen');
    let scUsers =  userData.filter(user => user.caste === 'SC');
    let stUsers = userData.filter(user => user.caste === 'ST');
    let otherUsers = userData.filter(user => user.caste === 'SC');
    let datasetValues = [
        {
            backgroundColor: ["orange", "blue", "yellow", "brown"],
            data: [genUsers.length, scUsers.length, stUsers.length, otherUsers.length]   
        }
    ];
    bar_default_json.data.labels = casteGroups;
    bar_default_json.data.datasets = datasetValues;
    bar_default_json.options.title.text = 'Caste Group Bar Graph';
    return bar_default_json;
} 

module.exports = generate_bar_graph_data;