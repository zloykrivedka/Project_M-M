package C.Users.dnapl.OneDrive.Учеба.РИС_4.flash{

	import flash.display.MovieClip;


	public class SimpleLine extends MovieClip {

		private var clockValue : int = 0;

		private static var MaxClockValue : int = 60;

		public function SimpleLine() {
			// constructor code
		}

		//0-59
		public function SetClockValue(value: int) :void{
			this.rotation = value / MaxClockValue * 360;
		}

		public function GetClockValue() : int{
			return this.rotation;
		}


	}

}