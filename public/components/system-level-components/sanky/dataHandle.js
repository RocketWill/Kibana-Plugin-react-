export function dataHandleHelper(sankey) {
  var sankeyJson = { nodes: [], links: [] };

  var item;

  var compute = [];
  for (item in sankey) {
    var temp = [];
    temp.push(sankey[item]["key"]["stk1"]);
    temp.push(sankey[item]["key"]["stk2"]);
    temp.push(sankey[item]["key"]["stk3"]);
    temp.push(sankey[item]["doc_count"]);
    compute.push(temp);
  }

  var stk1tostk2 = [];
  var tempStore1to2 = [];
  for (var i = 0; i < compute.length; i++) {
    var tempStr1 = compute[i][0];
    var tempStr2 = compute[i][1];
    var tempStr = tempStr1 + tempStr2;
    ////console.log(tempStr1);
    if (tempStore1to2.includes(tempStr) == false) {
      tempStore1to2.push(tempStr);
      var tempArr = [];
      var value = compute[i][3];
      tempArr.push(compute[i][0]);
      tempArr.push(compute[i][1]);
      //tempArr.push(compute[item][3]);

      if (i != compute.length - 1) {
        for (var j = i + 1; j <= compute.length - 1; j++) {
          //var tempSecondStr = compute[i][0]+compute[i][1];
          var tempSecondStr = compute[j][0] + compute[j][1];

          ////console.log(tempSecondStr);
          if (tempStr == tempSecondStr) {
            value = value + compute[j][3];
            ////console.log(value);
          }
        }
      }
      tempArr.push(value);
      stk1tostk2.push(tempArr);
    }
  }

  ////console.log(stk1tostk2);

  var stk2tostk3 = [];
  var tempStore1to3 = [];
  for (var i = 0; i < compute.length; i++) {
    var tempStr1 = compute[i][1];
    var tempStr2 = compute[i][2];
    var tempStr = tempStr1 + tempStr2;
    ////console.log(tempStr1);
    if (tempStore1to3.includes(tempStr) == false) {
      tempStore1to3.push(tempStr);
      var tempArr = [];
      var value = compute[i][3];
      tempArr.push(compute[i][1]);
      tempArr.push(compute[i][2]);
      //tempArr.push(compute[item][3]);

      if (i != compute.length - 1) {
        for (var j = i + 1; j <= compute.length - 1; j++) {
          //var tempSecondStr = compute[i][0]+compute[i][1];
          var tempSecondStr = compute[j][1] + compute[j][2];

          ////console.log(tempSecondStr);
          if (tempStr == tempSecondStr) {
            value = value + compute[j][3];
            ////console.log(value);
          }
        }
      }
      tempArr.push(value);
      stk2tostk3.push(tempArr);
    }
  }

  ////console.log(stk2tostk3);

  var nameArr = [];
  for (item in sankey) {
    if (nameArr.includes(sankey[item]["key"]["stk1"]) == false) {
      nameArr.push(sankey[item]["key"]["stk1"]);
    }
    if (nameArr.includes(sankey[item]["key"]["stk2"]) == false) {
      nameArr.push(sankey[item]["key"]["stk2"]);
    }
    if (nameArr.includes(sankey[item]["key"]["stk3"]) == false) {
      nameArr.push(sankey[item]["key"]["stk3"]);
    }
  }

  var itemNode;
  for (itemNode in nameArr) {
    sankeyJson.nodes.push({ name: nameArr[itemNode] });
  }

  var linkSrcArr = [];
  var linkMidArr = [];
  var linkDesArr = [];
  var linkValueArr = [];

  for (itemNode in sankey) {
    linkSrcArr.push(sankey[itemNode]["key"]["stk1"]);
    linkMidArr.push(sankey[itemNode]["key"]["stk2"]);
    linkDesArr.push(sankey[itemNode]["key"]["stk3"]);
    linkValueArr.push(sankey[itemNode]["doc_count"]);
  }

  for (itemNode in stk1tostk2) {
    sankeyJson.links.push({
      source: stk1tostk2[itemNode][0],
      target: stk1tostk2[itemNode][1],
      value: stk1tostk2[itemNode][2]
    });
  }

  for (itemNode in stk2tostk3) {
    sankeyJson.links.push({
      source: stk2tostk3[itemNode][0],
      target: stk2tostk3[itemNode][1],
      value: stk2tostk3[itemNode][2]
    });
  }

  ////console.log(sankeyJson);

  //數據總量
  var totalDataNumber = 0;
  for (item in stk1tostk2) {
    totalDataNumber = totalDataNumber + stk1tostk2[item][2];
  }

  //個節點總數
  var totalNodeNumber = {};
  var tempNodeNumber = [];
  for (var i = 0; i < stk1tostk2.length; i++) {
    if (tempNodeNumber.includes(stk1tostk2[i][0]) == false) {
      tempNodeNumber.push(stk1tostk2[i][0]);
      var singleNodeNumber = stk1tostk2[i][2];

      if (i != stk1tostk2.length - 1) {
        for (var j = i + 1; j < stk1tostk2.length; j++) {
          if (stk1tostk2[i][0] == stk1tostk2[j][0]) {
            singleNodeNumber = singleNodeNumber + stk1tostk2[j][2];
            //console.log(stk1tostk2[j][0] + " " + stk1tostk2[j][2]);
          }
        }
      }
      totalNodeNumber[stk1tostk2[i][0]] = singleNodeNumber;
    }
  }

  for (var i = 0; i < stk2tostk3.length; i++) {
    if (tempNodeNumber.includes(stk2tostk3[i][0]) == false) {
      tempNodeNumber.push(stk2tostk3[i][0]);
      var singleNodeNumber = stk2tostk3[i][2];
      ////console.log(stk2tostk3[i][0]+" "+singleNodeNumber);

      if (i != stk2tostk3.length - 1) {
        for (var j = i + 1; j < stk2tostk3.length; j++) {
          if (stk2tostk3[i][0] == stk2tostk3[j][0]) {
            singleNodeNumber = singleNodeNumber + stk2tostk3[j][2];
            ////console.log(stk2tostk3[j][0]+" "+stk2tostk3[j][2]);
          }
        }
        totalNodeNumber[stk2tostk3[i][0]] = singleNodeNumber;
        ////console.log("singleNodeNumber: "+singleNodeNumber);
      }
    }
  }

  for (var i = 0; i < stk2tostk3.length; i++) {
    if (tempNodeNumber.includes(stk2tostk3[i][1]) === false) {
      tempNodeNumber.push(stk2tostk3[i][1]);
      var singleNodeNumber = stk2tostk3[i][2];

      if (i !== stk2tostk3.length - 1) {
        for (var j = i + 1; j < stk2tostk3.length; j++) {
          if (stk2tostk3[i][1] === stk2tostk3[j][1]) {
            singleNodeNumber = singleNodeNumber + stk2tostk3[j][2];
            ////console.log(stk2tostk3[j][1]+" "+stk2tostk3[j][2]);
          }
        }
      }
      //console.log(stk2tostk3[i][1] + " " + singleNodeNumber);
      totalNodeNumber[stk2tostk3[i][1]] = singleNodeNumber;
    }
  }

  //console.log(totalNodeNumber);
  //console.log(tempNodeNumber);

  return [totalDataNumber, totalNodeNumber, sankeyJson];
}
