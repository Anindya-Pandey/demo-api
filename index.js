var express = require('express');

var app = express();

app.get('/:field', function(req, res, next){
	field = req.params.field;

	switch(field){
		case "motorSpeed":
			res.json({motorSpeed: 10});
			break;
		case "motorControllerTemperature":
			res.json({motorControllerTemperature: 10});
			break;
		case "motorTemperature":
			res.json({motorTemperature: 10});
			break;
		case "voltage":
			res.json({voltage: 10});
			break;
		case "current":
			res.json({current: 10});
			break;
		case "charge":
			res.json({charge: 10});
			break;
		case "temperature":
			res.json({low: 10, high: 10});
			break;
		case "totalMileage":
			res.json({totalMileage: 10});
			break;
		case "speed":
			res.json({speed: 10});
			break;
		default:
			return next(new Error("No such filed"));
	}
	res.end();
});

app.use(function(err, req, res, next){
	if(err){
		res.send(err.message);
	}
	res.end();
});

app.listen(3000, function(){
	console.log("connected");
});