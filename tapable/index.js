const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");

 class Car {
	constructor() {
		this.hooks = {
			accelerate: new SyncHook(["newSpeed"]),
			brake: new SyncHook(),
      calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"]),
      waterFall: new SyncWaterfallHook(["source", "origin"])
		};
	}

	/* ... */
}

const myCar = new Car();

// Use the tap method to add a consument
myCar.hooks.accelerate.tap("WarningLampPlugin", (speed) => console.log('ddd1', speed));
myCar.hooks.accelerate.tap("WarningLampPlugin2", (speed) => console.log('ddd2', speed));
myCar.hooks.accelerate.call(12)

myCar.hooks.waterFall.tap('waterPlugin1', (source, origin) => {
  console.log('soruce, origin:', source, origin)
  return [source, 'new origin']
})
myCar.hooks.waterFall.tap('waterPlugin2', (source, origin) => {
  console.log('soruce, origin:', source, origin)
  return {
    source: [source, 'new origin'],
    origin: 'new origin'
  }
})
myCar.hooks.waterFall.call('source', 'origin')