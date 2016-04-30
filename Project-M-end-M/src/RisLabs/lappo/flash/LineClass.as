package {

	import flash.display.MovieClip;
	import flash.events.TimerEvent;
	import flash.utils.Timer;

	public class LineClass extends MovieClip {

		public var MaxClockValue: Number = 0;
		
		private var LineType : int = 2; //0 - hour, 1 - minutes, 2 - seconds

		private var ticker: Timer = new Timer(1000);

		public function LineClass() {
			trace("I am new Line!");
			ticker.addEventListener(TimerEvent.TIMER, onTick);
		}

		public function SetOnClockPosition(value: Number) {
			this.rotation = value / MaxClockValue * 360;
		}

		public function NextClockPosition() {
			this.rotation = this.rotation + 1 / MaxClockValue * 360;
		}

		function onTick(events: TimerEvent): void {
// starts the clock ticking 
			var value: Number = GetCurrentValue();
			var names : String;
			if (LineType == 2)
				names = "Sec";
			if (LineType == 1)
				names = "Min";
			if (LineType == 0)
				names = "Hours";
			trace(value + " " + names);
			SetOnClockPosition(value);			
		}

		public function StartTick() {		
			ticker.start();
		}
		
		
		function GetCurrentValue(): Number {
			if (LineType == 2)
				return new Date().seconds;
			if (LineType == 1)
				return new Date().minutes;
			if (LineType == 0)
				return new Date().hours;
			return 0;
		}
		
		public function SetLineType(value : Number){
			LineType = value;
			if (LineType == 2 || LineType == 1)
				MaxClockValue = 60;
			if (LineType == 0)
				MaxClockValue = 12;
		}
	}

}