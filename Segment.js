/**
 * Class: Segment Represents a virtual segment geometry
 * 
 * 
 * 
 */
function Segment(point1, point2) {
	this.point1 = point1;
	this.point2 = point2;

	/*
	 * returns distance from a given point P(x,y) and this segment distance is
	 * computed from P to its projection on the segment
	 */
	this.distance = function(x, y) {
		var dx = this.point2.getClientX() - this.point1.getClientX();
		var dy = this.point2.getClientY() - this.point1.getClientY();

		// dx0 dy0 computes distance from segment point1 and the point P
		dx0 = x - this.point1.getClientX();
		dy0 = y - this.point1.getClientY();

		var r = (dx0 * dx + dy0 * dy) / (dx * dx + dy * dy);

		// computes distance from P to first segment point
		if (r < 0) {
			return Math.sqrt(Math.pow((point1.getClientX() - x), 2)
					+ Math.pow((point1.getClientY() - y), 2));
		} else if (r > 1) {
			return Math.sqrt(Math.pow((point2.getClientX() - x), 2)
					+ Math.pow((point2.getClientY() - y), 2));
		} else {
			var x_proj = this.point1.getClientX() + r * dx;
			var y_proj = this.point1.getClientY() + r * dy;
			return Math.sqrt(Math.pow((x_proj - x), 2)
					+ Math.pow((y_proj - y), 2));
		}
	};
}