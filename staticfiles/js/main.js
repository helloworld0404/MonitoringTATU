// ========================================
// ==================Time==================
// ========================================
const months = [
	"yanvar",
	"fevrel",
	"mart",
	"aprel",
	"may",
	"iyun",
	"iyul",
	"avgust",
	"sentabr",
	"oktabr",
	"noyabr",
	"dekabr",
];
function load() {
	let nowDay = document.querySelector(".now-day-js");
	let nowHour = document.querySelector(".now-hour-js");
	let nowMinute = document.querySelector(".now-minute-js");
	let nowSecond = document.querySelector(".now-second-js");
	let newDate = new Date();

	let day = newDate.getDate();
	let monthNumber = newDate.getMonth();
	let hour = newDate.getHours();
	let minute = newDate.getMinutes();
	let second = newDate.getSeconds();

	nowDay.textContent = `${day}-${months[monthNumber]}`;
  nowHour.textContent = `${hour = (hour < 10) ? "0" + hour : hour} :`;
  nowMinute.textContent = `${minute = (minute < 10) ? "0" + minute : minute} :`;
  nowSecond.textContent = `${second = (second < 10) ? "0" + second : second}`;
}

setInterval(load, 999);


// ========================================
// ===========Calendar js==================
// ========================================
const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".prev-next-icon");


let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const renderCalendar = () => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

	for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`		
	}

  for(let i = 1; i <= lastDateOfMonth; i++) {
		let isToday = i === date.getDate() && currMonth === new Date().getMonth()
									&& currYear === new Date().getFullYear() ? "active" : ""
    liTag += `<li class="${isToday}">${i}</li>`
  }

	for (let i = lastDayOfMonth; i < 6; i++) {
		liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
	}

  currentDate.innerHTML = `${currYear} ${months[currMonth]} oyi`;
  daysTag.innerHTML = liTag;
}

renderCalendar()

var Message = React.createClass({
	render: function() {
		return (
			<div className="Message">
				<StatusIcon status="bad" />
				{this.props.message}
			</div>
		);
	}
});


Vue.component("alert", {
	template: "#alert-template",
	
	props: ["status"],
	
	data: function() {
		return {
			fade: false,
			isActive: true
		}
	},
	
	computed: {
		headline: function() {
			if(this.status == "success") {
				return "Awesome!";
			}
			else {
				return "Oh no!";
			}
		},
		icon: function() {
			if(this.status == "success") {
				return "fa fa-check";
			}
			else {
				return "fa fa-times"
			}
		},
		alertStatus: function() {
			return this.status;
		}
	},
	
	methods: {
		closeAlert: function() {
			var self = this;
			this.fade = true;
			
			setTimeout(function() {
				self.isActive = !self.isActive;
			}, 500);
		}
	}
});

new Vue({
	el: "#app"
});