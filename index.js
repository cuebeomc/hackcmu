/**
 * index.js
 */

var overviewText =  
    `<p>You've been invited to:</p>
    <h2>HackCMU 2019!</h2>

    <p>
    <br>
    Location: Rashid Auditorium, GHC 4401<br>
    Start: Friday, Sep 13, 5:00 PM<br>
    End: Saturday, Sep 14, 8:00 PM<br><br></p>

    <a href="https://www.acmatcmu.org/dashboard"><p>Register here!</p></a>`;

var scheduleText = 
    `<h2>Schedule of Events</h2>
    <div id="schedule-container">
        <div class="schedule">
            <h3>Friday, Sep 13</h3>
            <h4>Afternoon:</h4>
            <p>
            5:00 Check in<br>
            6:00 Opening ceremony<br>
            7:00 Hacking starts!<br>
            11:59 Midnight snack
            </p>
        </div>
        <div class="schedule">
            <h3>Saturday, Sep 14</h3>
            <p>
            <h4>Morning:</h4>
            9:00 Breakfast<br>

            <h4>Afternoon:</h4>
            12:30 Lunch<br>
            5:30 Hacking ends + dinner!<br>
            6:00 Exhibition 1<br>
            6:45 Exhibition 2<br>
            8:00 Closing
            </p>
        </div>
    </div>`;

var faqText = 
    `<h2>FAQ</h2>
    <h4>Q: What is HackCMU?</h4>
    <p class="answer">HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack.</p>
    <h4>Q: Where will this be held?</h4>
    <p class="answer">Saturday dinner, exhibitions, and closing will be in Simmons Auditorium at the Tepper Quad, but opening and all other meals will be in Rashid Auditorium at the Gates Hillman Center.</p>
    <h4>Q: Who can attend?</h4>
    <p class="answer">Any student is welcome to apply. HackCMU is a beginner-focused hackathon, and preference will be given to first years. More experienced hackers are encouraged to sign up as mentors.</p>
    <h4>Q: I have another event during the weekend — can I miss part of the event?</h4>
    <p class="answer">Probably. Contact us at acm-exec[at]cs.cmu.edu for any specific concerns.</p>
    <h4>Q: How much does this cost?</h4>
    <p class="answer">$0! We provide all food, drinks, and swag. This event is made possible only by our wonderful sponsors.</p>
    <h4>Q: I’m not a “hacker”, can I still participate?</h4>
    <p class="answer">Students of all skill levels are encouraged to attend, even if you’ve never written a line of code! Creative individuals of all kinds are welcome to apply — such as designers, ECE majors, statistics, etc. The only requirement is your attitude to learn!</p>
    <h4>Q: Are there teams? Do I need one to sign up!</h4>
    <p class="answer">Working as a team is highly encouraged, but not required. You are welcome to form teams ahead of the event, but there will also be team forming day-of the event!</p>
    <h4>Q: How big can a team be?</h4>
    <p class="answer">A team can have anywhere between 2 and 4 people.</div>
    <h4>Q: What are the rules? Can I work on my project ahead of time?</h4>
    <p class="answer">All work must be original, and you are not permitted to start building or designing your project until the event. Brainstorming ideas and forming teams beforehand is fine, though.</p>
    <h4>Any other questions, comments, or concerns?</h4><p class="answer">Email us at acm-exec[at]cs.cmu.edu.</p>
    `;

var sponsorText = 
    `<h2>Sponsors</h2>
    <p id="sponsor-text">This event would simply not be possible without the help of our sponsors. We are immensely thankful for our sponsors below.</p>
    <div id="sponsor-logos">
        <img id="aptiv" src="logos/aptiv.svg">
        <img id="asml" src="logos/asml.svg">
        <img id="bloomberg" src="logos/bloomberg.svg">
        <img id="gm" src="logos/gm.jpg">
        <img id="google" src="logos/google.svg">
        <img id="microsoft" src="logos/microsoft.svg">
        <img id="sandia" src="logos/sandia.svg">
        <img id="riotgames" src="logos/riotgames.svg">
        <img id="deshaw" src="logos/deshaw.svg">
        <img id="scm" src="logos/scm.png">
    </div>
    `;

function show(elem) {
    var body = document.getElementById('event-body');

    switch(elem.getAttribute('id')) {
        case 'event-overview-btn':
            body.innerHTML = overviewText;
            break;
        case 'schedule-btn':
            body.innerHTML = scheduleText;
            break;
        case 'faq-btn':
            body.innerHTML = faqText;
            break;
        case 'sponsors-btn':
                body.innerHTML = sponsorText;
            break;
    }
}

function scrollDown() {
    var container = document.getElementById('container');
    container.scrollTo({
        top: container.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
}