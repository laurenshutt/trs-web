var churches = [
    ["Assumption Church of the Blessed Virgin Mary",38.8413969541904, -77.00431092783036,"http://assumptiondc.org/","Church of the Assumption of the Blessed Virgin Mary is a small faith- and spirit-filled Catholic community that proclaims the Gospel of Jesus Christ. Through liturgy, worship and witness to our faith, we perpetuate the advancement of Catholic education, evangelization, and outreach ministries. Working together as a family, we foster, cultivate and strengthen our Christian community spiritually, socially and culturally."],
    ["Epiphany Catholic Church",38.907711980109305, -77.05622703575526,"https://georgetownepiphany.org/","Epiphany Parish in Georgetown, Washington DC is a parish in the Archdiocese of Washington."],
    ["Holy Comforter Saint Cyprian Roman Catholic Church",38.88971037576002, -76.98605356644684,"https://hcscchurch.org/","Holy Comforter-Saint Cyprian Roman Catholic Church, empowered by the Holy Spirit, exists to evangelize and to uphold Christian values by promoting the teachings of the Church in Word, Sacrament and Witness."],
    ["Holy Redeemer Catholic Church",38.90554916934872, -77.01420325481016,"http://holyredeemerchurchdc.org/hrc/","Holy Redeemer Catholic community is a sharing, faith-filled family, guided by the light and love of Jesus, the Redeemer. Our mission is to imitate Christ Jesus, to show love where no love exists, to offer compassion to those who receive none, to provide hope where despair thrives, to share our Catholic faith so that all can respond to the call of Jesus to follow him."],
    ["Holy Trinity Catholic Church",38.90721863188639, -77.07023176308915,"https://trinity.org/","Holy Trinity is a Roman Catholic parish sponsored by the Society of Jesus (Jesuits), a religious community that was founded by St. Ignatius of Loyola in the 16th century. The mission of the parish, since her inception in 1787, has been to help parishioners live the Gospel of Jesus, that is, to celebrate the Sacraments well and often, to engage in collaborative ministry with the laity and all people of good will, to foster individuals' deepening relationship with Jesus through all forms of the Spiritual Exercises, and to be in solidarity with persons who are living on the margins of society, empowering them to change unjust social structures. In this way, Holy Trinity serves the larger Church and the people of God in the Washington, D.C. area."],
    ["Immaculate Conception Catholic Church", 38.90951064009861, -77.02228362371899, "http://www.immaculateconceptionchurchdc.org/",""],
    ["Basilica of the National Shrine of the Immaculate Conception", 38.93455179492651, -77.00099761234382,"https://www.nationalshrine.org/","The Basilica of the National Shrine of the Immaculate Conception, a Catholic church dedicated to the patroness of our nation, is a place of worship, pilgrimage, evangelization, and reconciliation. It offers visitors the occasion for a deepening conversion, a step forward in the journey to God, with Mary as the model for that journey. This monumental church, raised by Catholics of the United States because of their devotion to Mary the Mother of God, gives visibility to their faith and Catholic heritage. Mary’s Shrine invites people from across the country and beyond into the saving moment of faith, hope, and charity, so that they may be reconciled and transformed into living symbols of Christ’s presence in the world. It is here that the faithful gather to worship God, give honor to Mary, and are sent to spread God’s word wherever they go."],
    ["Nativity Catholic Church",38.96347862951984, -77.02903304428723,"https://nativitychurch.net/",""],
    ["Shrine of the Sacred Heart", 38.9318853757538, -77.03587841403895, "https://sacredheartdc.org/",""],
    ["St. Ann Catholic Church",38.94672300675207, -77.07937478846951,"https://www.stanndc.org/","Saint Ann is that part of the Body of Christ of the Archdiocese of Washington centered in and around the Tenleytown community of our nation’s capital city. Our mission is to provide reverent and prayerful worship of God primarily through the Sacraments of the Church; to foster the bonds of faith and friendship within our community; to evangelize people of all ages and cultures; and to be of service to people regardless of culture, religion or boundaries."],
    ["St. Anthony of Padua Catholic Church",38.932426112854145, -76.99140305963338,"https://stanthonyofpaduadc.org/","St. Anthony of Padua Parish, located in the Brookland area of Northeast Washington, DC, is a Catholic Community of faith filled Christians.  We celebrate Christ’s life and presence through vibrant and meaningful worship and a rich community life based on openness, unity and love.  We proclaim the Good News through hospitality, education and evangelization. We respond in service to the poor and reach out in justice to those in our community and beyond in order to reach the final goal of happiness in Eternity with Almighty God."],
    ["St. Augustine Catholic Church",38.91856846122519, -77.034185976834,"https://saintaugustine-dc.org/","Saint Augustine Church is the oldest Black Catholic church in the Nation’s Capital. As the Mother Church of Black Catholics, Saint Augustine Church continues in the tradition in which it was founded, as a strong Black Catholic institution which witnesses in faith to the Living God, His Son, and the Holy Spirit. Saint Augustine will continue to be a center which recognizes, proclaims and preserves our Black Roman Catholic Heritage. It will expand and improve all activities to advance the education of our children; to continue work in evangelization, liturgy, music, ecumenism and in efforts toward the achievement of a spiritual, economic and social development of all people. This is our call."],
    ["St. Joseph's on Capitol Hill",38.89402248513372, -77.00335600938023,"https://stjosephsdc.org/",""],
    ["St. Martin of Tours Catholic Church",38.91594993943884, -77.00960574614302,"http://www.stmartinsdc.org/","Lorem ipsum dolor sit Amet", "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit. Semper eget duis at tellus at urna condimentum mattis pellentesque. Nunc mattis enim ut tellus. Mi proin sed libero enim sed."],
    ["St. Mary Mother of God", 38.90009536648439, -77.0187126267214, "https://saintmarymotherofgod.org/","Lorem ipsum dolor sit Amet", "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit. Semper eget duis at tellus at urna condimentum mattis pellentesque. Nunc mattis enim ut tellus. Mi proin sed libero enim sed."],
    ["Cathedral of St. Matthew the Apostle", 38.90660910364555, -77.04008538661577, "https://www.stmatthewscathedral.org/","St. Martin's is a welcoming diverse and open parish family, deeply rooted in God's word and open to the Spirit. We give witness to Gospel values by loving and serving one another and by seeking to promote justice and peace to build God's Kingdom. We value and celebrate the Eucharist as the center of our Christian faith. We warm heartedly welcome all visitors, and are pleased to extend an invitation to come and fellowship with us. We look forward to the opportunity to meet and greet you in the near future. Our church family would be very pleased to see you become a part of our Christian community."],
    ["St. Patrick Catholic Church", 38.900797176653725, -77.02486792288451, "https://www.saintpatrickdc.org/","St. Patrick Church is the oldest parish in the Federal City of Washington, D.C. Founded in 1794 to minister to the needs of the stonemasons building the White House and the U.S. Capitol, the parish continues to serve the needs of downtown Washington through daily Mass & confession, adult education, and cultural activities."],
    ["St. Peter's Church on Capitol Hill", 38.88576093044211, -77.00365796459229, "https://saintpetersdc.org/","St. Peter’s Catholic Church is an historic, thriving parish to help you do just that through Jesus Christ. You will get a sense of our parish by browsing this website, but I really hope you come and visit us. You will quickly discover a family-oriented church that is filled with a lively, welcoming spirit. We celebrate beautiful liturgies, offer engaging religious education programs for children and adults, engage in meaningful social justice work, and strive to connect our parishioners across all age demographics, from youth through young adults to middle age and elder citizens."],
    ["St. Stephen Martyr Catholic Church", 38.90350326279364, -77.05314971730688, "https://www.ststephenmartyrdc.org/","An Oasis in the City - a diverse, welcoming Catholic community; dedicated to beautiful worship, spiritual growth and caring. Serving Foggy Bottom and the West End since 1867."],
    ["St. Thomas Apostle Catholic Church", 38.92986664985337, -77.05542209463904, "https://www.stthomasapostledc.org/","Christ's Risen Presence at St. Thomas ensures that we recognize him in a concrete way in our daily lives. For us, this means the encounters we share in this place with these family members, friends, neighbors, colleagues and strangers. The more vibrant our life of communion grows, the more attractive it will become to those who may have fallen away, left the Church or never encountered an authentic Christianity before now."]
];

var internships = [
    ["United States Conference of Catholic Bishops",38.92946112974088, -76.99998545177425,"https://www.usccb.org/","The United States Conference of Catholic Bishops (USCCB) is an assembly of the hierarchy of bishops who jointly exercise pastoral functions on behalf of the Christian faithful of the United States and the U.S. Virgin Islands."],
    ["National Federation for Catholic Youth Ministry",38.93114285940308, -76.99995534622244,"https://nfcym.org/","The Mission of the National Federation for Catholic Youth Ministry (NFCYM) is to support and strengthen those who accompany young people as they encounter and follow Jesus Christ."],
    ["Catholic Apostolate Center",38.93113053438633, -76.99937717133744,"https://www.catholicapostolatecenter.org/","The Catholic Apostolate Center, a ministry of the Society of the Catholic Apostolate (Pallottines) - Immaculate Conception Province, was founded in 2011 to respond to the needs of the Church through developing, in collaboration with dioceses and other institutions and organizations, formation programs for the New Evangelization; assisting pastoral leaders in deepening collaboration with one another; and providing formation and apostolic opportunities for members and collaborators of the Union of Catholic Apostolate. The Center takes its inspiration from the spirituality of St. Vincent Pallotti and achieves its goals through hosting conferences, seminars, webinars, and presentations as well as providing online and print resources."],
    ["Little Sisters of the Poor",38.939180113429835, -77.00634680388279,"https://littlesistersofthepoor.org/","The Little Sisters of the Poor are an international congregation of Roman Catholic women religious founded in 1839 by Saint Jeanne Jugan. Together with a diverse network of collaborators, we serve the elderly poor in over 30 countries around the world. Continuing the work of Saint Jeanne Jugan, our MISSION is to offer the neediest elderly of every race and religion a home where they will be welcomed as Christ, cared for as family and accompanied with dignity until God calls them to himself."],
    ["Gonzaga College High School",38.90244666687591, -77.00941420204127,"https://www.gonzaga.org/","Founded in 1821, Gonzaga is a Catholic college preparatory school for boys in grades 9-12. Drawing its inspiration from the spiritual vision of St. Ignatius Loyola and the apostolic and educational tradition of the Jesuits, we offer a values-oriented and academically challenging curriculum to young men of diverse backgrounds from all over the Washington area."],
    ["Holy Trinity Catholic Church",38.90682711837273, -77.07013821553193,"https://trinity.org/","Holy Trinity is a Roman Catholic parish sponsored by the Society of Jesus (Jesuits), a religious community that was founded by St. Ignatius of Loyola in the 16th century. The mission of the parish, since her inception in 1787, has been to help parishioners live the Gospel of Jesus, that is, to celebrate the Sacraments well and often, to engage in collaborative ministry with the laity and all people of good will, to foster individuals' deepening relationship with Jesus through all forms of the Spiritual Exercises, and to be in solidarity with persons who are living on the margins of society, empowering them to change unjust social structures. In this way, Holy Trinity serves the larger Church and the people of God in the Washington, D.C. area."],
    ["Children's National Hospital",38.92733226188095, -77.01455618854973,"https://childrensnational.org/","Children's National Hospital is ranked the number 1 pediatric hospital in the DC-MD-VA region and one of the top 10 pediatric hospitals in the country by U.S. News & World Report. Last year, we saw more than 219,000 children from the nation’s capital, Maryland and Virginia as well as from across the country and around the world."],
    ["Library of Congress",38.888901104554094, -77.00477264622342,"https://www.loc.gov/","The Library of Congress is the largest library in the world, with millions of books, recordings, photographs, newspapers, maps and manuscripts in its collections. The Library is the main research arm of the U.S. Congress and the home of the U.S. Copyright Office."],
    ["United States House of Representatives",38.886775440362825, -77.01010903687137,"https://www.house.gov/","As per the Constitution, the U.S. House of Representatives makes and passes federal laws. The House is one of Congress’s two chambers (the other is the U.S. Senate), and part of the federal government’s legislative branch. The number of voting representatives in the House is fixed by law at no more than 435, proportionally representing the population of the 50 states."],
    ["Archdiocese of Washington Office of Family Life and Evangelization",38.94126884881564, -77.00444131423583,"https://adw.org/archdiocesan-offices/office-family-life/","The Archdiocese of Washington Office of Family Life serves the Archbishop and the needs of the priests and parishioners to build, strengthen, and create a culture of marriage and family life. The Office of Family Life carries out this mission and its responsibility to coordinate formal preparation in the Sacrament of Matrimony, training in Natural Family Planning, supporting and promoting the healing of separated and/or divorced Catholics, organizing annual retreats for men and women, and has an apostolate for couples suffering from infertility. The Office of Family Life also organizes the annual Jubilarian Mass in honor of Catholic couples who celebrate significant wedding anniversaries, provides resources and training for the ministries of family life in parishes, offers marriage enrichment programs, education in chastity, and collaborates with other archdiocesan offices in the service of evangelization."],
    ["Archdiocese of Washington Office of Young Adult Ministry",38.94126884881564, -77.00444131423583,"https://adw.org/living-the-faith/young-adult-campus-ministry/","The vision of DCCatholic (Office of Young Adult Ministry) is to connect young adults to Jesus Christ, the Church, the mission of the Church in the world, and our peers. DCCatholic hosts social, spiritual and service opportunities for young adults throughout the year, including Theology on Tap, Seven Church Walk, Day of Service, and more."],
    ["Archbishop Carroll Catholic High School",38.94093649026078, -77.00622832902204,"https://www.archbishopcarroll.org/","Archbishop Carroll High School is a Catholic, college preparatory, co-educational school that welcomes young people and empowers them in an academically rigorous, diverse, and supportive learning environment. Our community works daily to think critically, creatively, and morally so that we can serve God with purpose."],
    ["Matthews Memorial Baptist Church",38.858945305685246, -76.99500203087868,"http://www.mmbcdc.org/","Where God is praised, Christ obeyed, and people are loved."]
]

var consortium = [
    ["Howard University School of Divinity",38.943534160205104, -77.05921090211251,"https://divinity.howard.edu/","<img src='https://i.postimg.cc/N0LQKY5Z/HUSD-library.png'/>Howard University School of Divinity (HUSD) is one of the oldest fully accredited theological schools affiliated with the Association of Theological Schools in the United States. And, as one of the 12 schools and colleges within Howard, it is the only African-American theological school connected to a comprehensive category I research institution."],
    ["Pontifical Faculty of the Immaculate Conception at the Dominican House",38.93180924371333, -76.99906335978382,"https://dhs.edu/","<img src='https://i.postimg.cc/6Q7N90PX/035-1300x550.png'/>In service to the evangelizing mission of the Dominican Order, the Pontifical Faculty of the Immaculate Conception (PFIC) at the Dominican House of Studies provides a Roman Catholic theological education that chiefly prepares students for the ordained ministry in the Province of St. Joseph. Recognizing the wide appeal of a theological education in the Dominican tradition, the Dominican House of Studies accepts all interested and qualified students (including diaconal and lay students) without regard to race, gender, religion, or ethnic background."],
    ["Reformed Theological Seminary",38.913097371227046, -77.23042670026462,"http://www.rts.edu/washington/","<img src='https://i.postimg.cc/qv59ZKvZ/home-hero-bg.png'/>RTS Washington DC is one of five campuses of the Reformed Theological Seminary, begun in Jackson, MS. RTS aims to equip the next generation of Christian leaders to articulate and defend their faith in an urban, postmodern environment in a way that stands up to intellectual scrutiny and gives an account for the hope that is within them.  Our focus is to prepare Christian leaders for our community, our nation and the global church with “a mind for truth and a heart for God.”  RTS emerged from the Reformed and Presbyterian traditions, but it serves students from a variety of denominations and non-denominational evangelical churches."],
    ["Wesley Theological Seminary",38.93947405983456, -77.09097905978375,"https://www.wesleyseminary.edu/","<img src='https://i.postimg.cc/ZRkXJh38/IMG-9266-e1448136404951.png'/>Seated in the nation’s capital, centered in Christian faith, Wesley Theological Seminary prepares over 700 students annually to become exemplary teachers, preachers, and leaders in the world today.  Founded by the United Methodist Church, the school serves students from over 25 denominations."],
    ["Paulist Fathers House of Mission and Studies",38.94374481421423, -76.98929333094804,"https://paulist.org/location/house-of-studies/","The Paulist Fathers House of Mission and Studies, established in 1914, is the house of studies for Paulist seminarians. Temporarily located at the Josephite Seminary, the house is the center of pastoral and spiritual formation for Paulist seminariansk who complete their academic work at the Catholic University of America. The Paulist Fathers are a religious order founded in the United States, dedicated to the work of ecumenism, interfaith dialogue, and evangelization.   They serve dozens of campus ministries, parishes, and other ministries across the country."],
    ["Shalem Institute of Spiritual Formation",38.90700530731464, -77.03151900211343,"https://shalem.org/","Shalem’s mission is to nurture contemplative living and leadership. Grounded in an understanding of God’s desire for peace, wholeness and well-being, Shalem envisions a world transformed by contemplative living and leadership in which all people honor one another and creation, recognize their unity and interconnectedness, and courageously seek to live out of this reality."],
    ["Museum of the Bible",38.88496430798742, -77.01741318677186,"https://www.museumofthebible.org/","<img src='https://i.postimg.cc/DwJG1VJ4/Bible-Museum-56a239b63df78cf772736e9c.png'/>The Museum of the Bible describes itself as “an innovative, global, educational institution whose purpose is to invite all people to engage with the history, narrative and impact of the Bible.” "]
]

console.log("---------------------------------------------------");
console.log("TRS Homepage design and development by Lauren Shutt","\n","Email: lauren.e.shutt@gmail.com","\n","LinkedIn: https://www.linkedin.com/in/laurenshutt/","\n","Website: https://laurenshutt.dev/");
console.log("---------------------------------------------------");

var head = document.head;
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";
link.href = "https://trs.catholic.edu/media/new-homepage/trs-css.css";

head.appendChild(link);

var html = '<div class="background-blue" id="intro-container"> <div class="contained"> <div class="schools-intro"> <div class="schools-intro-inner"> <p> Explore the depths of Catholic intellectual tradition at the pontifical School of Theology and Religious Studies. We have provided world-class education under the finest theological minds for over 130 years&mdash;from seminarians and religious sisters, to biomedical ethicists, liturgists, and laity. Come discover the answers to life’s ultimate questions. </p><div class="trs-row"> <div class="trs-col-md-4 brag"> <span class="brag"> 91% </span> <p class="balance-text"> More than 90% of full-time undergraduate students receive financial aid. </p></div><div class="trs-col-md-4 brag"> <span class="brag"> 1888 </span> <p class="balance-text"> The School of Theology and Religious Studies is the oldest at Catholic University. </p></div><div class="trs-col-md-4 brag"> <span> 11:1 </span> <p class="balance-text"> Catholic University&rsquo;s student-faculty ratio is 11:1, and 64% of classes have fewer than 20 students. </p></div></div></div></div></div></div><div id="yourStoryContainer"> <div class="container"> <div class="row"> <h2> Your story begins here. </h2> <p class="balance-text"> Where the relentless pursuit of knowledge is met with divine revelation. </p><div class="custom-dropdown"> <select class="trs-select" name="yourStory"> <option> I am interested in... </option> <option> Undergraduate options </option> <option> Biblical studies </option> <option> Catechetics </option> <option> Church history </option> <option> Historical and systematic theology </option> <option> Liturgical studies and sacramental theology </option> <option> Moral theology/ethics </option> <option> Pastoral studies </option> <option> Religion and culture </option> <option> Spirituality </option> </select> </div><div class="schools-grid-with-image three-up-carousel"></div></div></div></div><div id="mapContainer" class="background-blue"> <div class="container"> <div class="trs-container-fluid"> <div class="trs-row"> <div class="trs-col-md-6"> <div> <h2>At the heart of the Church.</h2> <p class="balance-text"> Our Washington, D.C. location fosters opportunities for theological scholarship that can&rsquo;t be found anywhere outside of Rome. </p><div class="custom-dropdown"><select class="trs-select" name="neighborhood"><option value="explore">Explore our neighborhood...</option><option value="internships">Where our students have interned</option><option value="churches">Local Catholic churches and shrines</option><option value="consortium">Washington Theological Consortium schools</option></select></div><div id="mapInfo" style="display:none;background:white;padding:30px;margin-top:30px;margin-bottom:60px"><i class="zmdi zmdi-close zmdi-hc-lg" id="closeMapInfo" style="float:right;margin-top:-10px;margin-right:-10px"></i></div></div></div><div class="trs-col-md-6"><div id="map" style="min-height:660px;height:100%;width:100%;flex:1"></div></div></div></div></div></div><div class="background-blue" id="videos"> <div class="container"> <div class="copy-block"> <div class="copy-block-inner"> <div class="row"> <h2> In consecration to the Truth. </h2> <p> Your future classmates share their thoughts on why you should study theology at The Catholic University of America. </p><div class="text-container one-third" playing="false"> <div class="video-container" id="will"> <div class="videoInfo"> <i class="zmdi zmdi-play-circle zmdi-hc-4x"></i> <h5> Will Deatherage, &rsquo;22 </h5> <p class="balance-text"> Our Washington, D.C. campus is an unparalleled advantage. </p></div><video muted loop playsinline class="waving"> <source src="https://trs.catholic.edu/media/new-homepage/students/will-waving.mp4" type="video/mp4"> </video> <div class="overlay-container"> <video class="overlay-video"> <source src="https://trs.catholic.edu/media/new-homepage/students/will.mp4" type="video/mp4"> </video> </div></div></div><div class="text-container one-third" playing="false"> <div class="video-container" id="ariel"> <div class="videoInfo"> <i class="zmdi zmdi-play-circle zmdi-hc-4x"></i> <h5> Ariel Hobbs, &rsquo;22 </h5> <p class="balance-text"> Theology prepares you for a wide range of opportunities. </p></div><video muted loop playsinline> <source src="https://trs.catholic.edu/media/new-homepage/students/ariel-waving.mp4" type="video/mp4"> </video> <div class="overlay-container"> <video class="overlay-video"> <source src="https://trs.catholic.edu/media/new-homepage/students/ariel.mp4" type="video/mp4"> </video> </div></div></div><div class="text-container one-third" playing="false"> <div class="video-container" id="taylor"> <div class="videoInfo"> <i class="zmdi zmdi-play-circle zmdi-hc-4x"></i> <h5> Taylor Kniphfer, &rsquo;25 </h5> <p class="balance-text"> Theology makes your faith your own. </p></div><video muted loop playsinline> <source src="https://trs.catholic.edu/media/new-homepage/students/taylor-waving.mp4" type="video/mp4"> </video> <div class="overlay-container"> <video class="overlay-video"> <source src="https://trs.catholic.edu/media/new-homepage/students/taylor.mp4" type="video/mp4"> </video> </div></div></div></div></div></div></div></div><div class="background-blue" id="newsBlocks"> <div class="container"> <div class="trs-container-fluid"> <div class="trs-row"> <div class="trs-col-md-8 trs-col-sm-12"> <h2> Explore TRS </h2> <p class="balance-text"> See the latest news and highlights from the School of Theology. </p><div class="custom-dropdown" id="features"> <select class="trs-select" name="features"> <option value="explore"> Select a topic... </option> </select> </div><div class="trs-clearfix"></div><button value="Shuffle" id="shuffle" class="button trs-btn waves-effect"> <i class="zmdi zmdi-refresh"></i>Shuffle </button> <div class="trs-clearfix"></div><div class="dynamic-news-feed" data-limit="10" data-schools="School of Theology and Religious Studies" data-url="https://communications.catholic.edu/in-the-media/feed.json,https://trs.catholic.edu/news/feed.json,https://communications.catholic.edu/feeds/university-news.json"> <ul class="dynamic-news-target"></ul> <script class="dynamic-news-template" type="x-tmpl-mustache">{{#news}}<li> <a href="{{link}}"><span class="name">{{{title}}}</span></a> <img class="image" src="{{image}}"/> <img class"headshotImage" src="{{headshotImage}}"/> </li>{{/news}}{{^news}}<li>No articles found.</li>{{/news}}<\/script> </div><div id="grid"> <div class="trs-row"> <div class="trs-col-sm-4 feature sm-feature"> <div class="overlay"></div><div class="paragraph-container"> <h4></h4> </div></div><div class="trs-col-sm-4 feature sm-feature"> <div class="overlay"></div><div class="paragraph-container"> <h4></h4> </div></div><div class="trs-col-sm-4 feature sm-feature"> <div class="overlay"></div><div class="paragraph-container"> <h4></h4> </div></div><div class="trs-col-sm-4 feature sm-feature"> <div class="overlay"></div><div class="paragraph-container"> <h4></h4> </div></div><div class="trs-col-sm-4 feature sm-feature"> <div class="overlay"></div><div class="paragraph-container"> <h4></h4> </div></div><div class="trs-col-sm-4 feature sm-feature"> <div class="overlay"></div><div class="paragraph-container"> <h4></h4> </div></div></div></div></div><div class="trs-col-md-4 trs-col-sm-12 feature lg-feature"> <div class="image-container"> <div class="overlay"></div><div class="paragraph-container"> <h3></h3> </div></div></div></div></div></div></div><div class="background-blue" id="events"> <div class="container"> <div class="copy-block"> <div class="copy-block-inner"> <div class="row eventsRow"> <h2> Upcoming Events </h2> <p class="balance-text"> For a full list of events, please visit our <a target="_blank" href="https://trs.catholic.edu/lectures-and-events/index.html">event calendar</a>. </p></div></div></div></div></div><div class="background-blue" id="keepInTouch"> <div class="container"> <div class="trs-container-fluid"> <div class="trs-row"> <div class="trs-col-md-7"> <h2 class="balance-text"> Keep in touch with us. </h2> <p> It would be a privilege to share our news and events with you. Please complete the form below to receive updates from TRS via email. </p><div id="mc_embed_signup"> <form action="https://cua.us20.list-manage.com/subscribe/post?u=9f919819081bab2a4c0c8e3d8&amp;id=828eec5989" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate> <div id="mc_embed_signup_scroll"> <div class="mc-field-group input-field"> <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"> <label for="mce-EMAIL">Your preferred email address <span class="asterisk"> * </span> </label> </div><div class="mc-field-group input-field"> <input type="text" value="" name="FNAME" class="" id="mce-FNAME"> <label for="mce-FNAME"> First name </label> </div><div class="mc-field-group input-field"> <input type="text" value="" name="LNAME" class="" id="mce-LNAME"> <label for="mce-LNAME"> Last name </label> </div><div class="mc-field-group input-group"> Which best describes you? <ul> <li> <label for="mce-group[196764]-196764-0"> <input type="checkbox" value="1" name="group[196764][1]" id="mce-group[196764]-196764-0"> <span> Potential undergraduate student </span> </label> </li><li> <label for="mce-group[196764]-196764-1"> <input type="checkbox" value="2" name="group[196764][2]" id="mce-group[196764]-196764-1"> <span> Potential graduate student </span> </label> </li><li> <label for="mce-group[196764]-196764-2"> <input type="checkbox" value="4" name="group[196764][4]" id="mce-group[196764]-196764-2"> <span> Alumni </span> </label> </li><li> <label for="mce-group[196764]-196764-3"> <input type="checkbox" value="8" name="group[196764][8]" id="mce-group[196764]-196764-3"> <span> Community member </span> </label> </li></ul> </div><div id="mce-responses" class="clear"> <div class="response" id="mce-error-response"></div><div class="response" id="mce-success-response"></div></div><div aria-hidden="true" id="mc"> <input type="text" name="b_9f919819081bab2a4c0c8e3d8_828eec5989" tabindex="-1" value=""> </div><div class="clear"> <button type="submit" value="Join our mailing list" name="subscribe" id="mc-embedded-subscribe" class="button trs-btn waves-effect"> Join our mailing list<i class="zmdi zmdi-mail-send zmdi-hc-lg"></i> </button> </div></div></form> </div></div><div class="trs-col-md-5" id="social"> <div id="socialContainer"> <button class="newsButton" href="https://www.facebook.com/CatholicUTRS/"> <i class="zmdi zmdi-facebook zmdi-hc-lg"></i> Facebook </button> <button class="newsButton" href="https://www.instagram.com/catholicu_theology/?hl=en"> <i class="zmdi zmdi-instagram zmdi-hc-lg"></i> Instagram </button> <button class="newsButton" href="https://www.youtube.com/channel/UC60pj-FfEmDPU3xtL9gEPsg"> <i class="zmdi zmdi-youtube-play zmdi-hc-lg"></i> YouTube </button> <!--<button id="chat"> <i class="zmdi zmdi-comment-more zmdi-hc-lg animated bounce"></i> Chat with TRS Bot </button>--> <div id="chatbot"> <input type="text" data-conv-question="Hi there! Welcome to TRS!|It&rsquo;s a great day at TRS, nice to see you here!|Hello! We&rsquo;re happy you stopped by!" data-no-answer="true"/> <input type="text" data-conv-question="What brings you here today?" data-no-answer="true"/> <select name="reasonForVisit" data-conv-question="(You can scroll right to see more options, or start typing!) 😉"> <option value="potential">I&rsquo;m a potential student.</option> <option value="current">I&rsquo;m a current student.</option> <option value="donor">I&rsquo;m an alumni or would like to support TRS financially.</option> </select> <div data-conv-fork="reasonForVisit"> <div data-conv-case="potential"> <input type="text" data-conv-question="&lt;img src=&apos;https://i.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.webp&apos;&gt;" data-no-answer="true"/> <input type="text" data-conv-question="That&rsquo;s great!|I&rsquo;m so glad to hear that!|You will love it here!" data-no-answer="true"/> <select name="potentialStudentResponse" data-conv-question="Are you looking for information about a particular program?"> <option value="yes">Yes!</option> <option value="no">No, thank you.</option> </select> <div data-conv-fork="potentialStudentResponse"> <div data-conv-case="yes"> <input data-conv-question="Which program(s) were you interested in?" name="programResponse"/> </div><div data-conv-case="no"> <select name="potentialStudentPages" data-conv-question="That&rsquo;s okay! Here are some pages you might be interested in, are you looking for any of these?"> <option value="about">About TRS</option> <option value="studentLife">Student life</option> <option value="academicAreas">Academic areas</option> <option value="scholarships">Scholarships and aid</option> <option value="tour">Virtual campus tour</option> <option value="admission">Admissions</option> <option value="no">No, it&rsquo;s something else</option> </select> </div></div></div><div data-conv-case="current"> <input type="text" data-conv-question="Well hello, fellow Cardinal!" data-no-answer="true"/> <select name="currentStudentResponse" data-conv-question="Are you looking for information about your program?"> <option value="yes">Yes!</option> <option value="no">No, thank you.</option> </select> <div data-conv-fork="currentStudentResponse"> <div data-conv-case="yes" name="programResponse"> <input data-conv-question="Great! What program are you enrolled in?" name="programResponse"/> </div><div data-conv-case="no"> <select name="currentStudentPages" data-conv-question="Here are some pages you might be interested in, are you looking for any of these?"> <option value="forms">Enrollment forms</option> <option value="calendar">Academic calendar</option> <option value="timetable">Course schedules</option> <option value="catalog">Course catalog</option> <option value="studentLife">Course catalog</option> <option value="no">No, it&rsquo;s something else</option> </select> </div></div></div><div data-conv-case="donor"> <input type="text" data-conv-question="That&rsquo;s great news!" data-no-answer="true"/> <input type="text" data-conv-question="We have a diverse range of opportunities for our alumni and friends to contribute to the important work of TRS students and faculty." data-no-answer="true"/> <select name="donorOpportunities" data-conv-question="Would you like to browse the information on our website? I can also have someone be in touch with you to tell you more and answer any questions."> <option value="givingPage">I&rsquo;d like to browse your website.</option> <option value="no">I&rsquo;d like to talk to a person.</option> </select> </div></div></div></div></div></div></div></div></div></div><div id="callout" class="schools-callout-full-image background-image"> <div class="contained"> <div class="row"> <div class="callout-text"> <h4 class="balance-text">Serving the Church and the Nation</h4> <p></p><p class="balance-text">We are forming the next generation of theologians and pastoral leaders. Our world-class faculty prepare students of all backgrounds for religious, academic, and professional careers&mdash;bringing the practice of faith and reason into all that they do.<p></p><a href="https://www.catholic.edu/admission/apply-now.html" title="Designing a Better World"> <button class="trs-btn btn-secondary">Apply today</button> </a> </div></div></div></div>';

var heroText = '<div class="schools-hero-text-area"><div class="schools-hero-text-area-inner"><h3 class="page-title animated animatedFadeInUp fadeInUp">We teach in the name of the Church.</h3><p class="animated animatedFadeInUp fadeInUp">Our mission comes straight from the Vatican:</p><p class="animated animatedFadeInUp fadeIn">To teach and offer academic degrees by the authority of the Pope.</span></p><i class="animated animatedFadeInDown fadeInDown zmdi zmdi-chevron-down"></i></div></div>' ;

var checkExist = setInterval(function() {
 if ($(".schools-hero-full").length) {
    document.querySelector(".bg-video").insertAdjacentHTML("afterend", "<div class='trs-hero-overlay'></div>");
    document.querySelector(".schools-hero-full").insertAdjacentHTML("afterend", html);
    document.querySelector(".schools-hero-container").insertAdjacentHTML("afterend", heroText);
    clearInterval(checkExist);
 }
}, 100); 

/*!
* 
*   typed.js - A JavaScript Typing Animation Library
*   Author: Matt Boldt <me@mattboldt.com>
*   Version: v2.0.12
*   Url: https://github.com/mattboldt/typed.js
*   License(s): MIT
* 
*/
(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()})(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var i=s[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s(1),o=s(3),a=function(){function t(e,s){n(this,t),r.initializer.load(this,s,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;return this.pause.status===!0?void this.setPauseStatus(t,e,!0):void(this.timeout=setTimeout(function(){e=o.htmlParser.typeHtmlChars(t,e,s);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;r=/\d+/.exec(r)[0],a+=r.length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+l+c,i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},n)},n))}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(this.pause.status===!0)return void this.setPauseStatus(t,e,!1);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&n===i.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),a=s(2),u=n(a),l=function(){function t(){i(this,t)}return o(t,[{key:"load",value:function(t,e,s){if("string"==typeof s?t.el=document.querySelector(s):t.el=s,t.options=r({},u["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var o=0;o<i;o+=1){var a=n[o];t.strings.push(a.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var o in t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var e="";return e=t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.type="text/css",s.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==s.length&&(s.innerHTML=n,document.body.appendChild(s))}}}]),t}();e["default"]=l;var c=new l;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=function(){function t(){s(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i="";for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&(e++,!(e+1>t.length)););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i="";for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&(e--,!(e<0)););e--}return e}}]),t}();e["default"]=i;var r=new i;e.htmlParser=r}])});
  //# sourceMappingURL=typed.min.js.map

//https://github.com/adobe/balance-text
(function(root,factory){if(typeof define==="function"&&define.amd){define([],factory)}else if(typeof module==="object"&&module.exports){module.exports=factory()}else{root.balanceText=factory()}})(this,()=>{let breakMatches,wsnwMatches,wsnwOffset;const watching={sel:[],el:[]};let handlersInitialized=false;let polyfilled=false;function noop(){}function forEach(elements,callback){Array.prototype.forEach.call(elements,callback)}function ready(fn){if(document.readyState!=="loading"){fn()}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",fn)}else{document.attachEvent("onreadystatechange",()=>{if(document.readyState!=="loading"){fn()}})}}function debounce(func,threshold,execAsap,...args){let timeout;return function(){const obj=this;function delayed(){if(!execAsap){func.apply(obj,args)}timeout=null}if(timeout){clearTimeout(timeout)}else if(execAsap){func.apply(obj,args)}timeout=setTimeout(delayed,threshold||100)}}function hasTextWrap(){if(typeof window==="undefined"){return false}const{style:style}=document.documentElement;return style.textWrap||style.WebkitTextWrap||style.MozTextWrap||style.MsTextWrap}function NextWS_params(){this.reset()}NextWS_params.prototype.reset=function(){this.index=0;this.width=0};function isWhiteSpaceNoWrap(index){return wsnwMatches.some(range=>range.start<index&&index<range.end)}function recursiveCalcNoWrapOffsetsForLine(el,includeTag){if(el.nodeType===el.ELEMENT_NODE){const style=window.getComputedStyle(el);if(style.whiteSpace==="nowrap"){const len=el.outerHTML.length;wsnwMatches.push({start:wsnwOffset,end:wsnwOffset+len});wsnwOffset+=len}else{forEach(el.childNodes,child=>{recursiveCalcNoWrapOffsetsForLine(child,true)});if(includeTag){wsnwOffset+=el.outerHTML.length-el.innerHTML.length}}}else if(el.nodeType===el.COMMENT_NODE){wsnwOffset+=el.length+7}else if(el.nodeType===el.PROCESSING_INSTRUCTION_NODE){wsnwOffset+=el.length+2}else{wsnwOffset+=el.length}}function calcNoWrapOffsetsForLine(el,oldWS,lineCharOffset){if(lineCharOffset===0){el.style.whiteSpace=oldWS;wsnwOffset=0;wsnwMatches=[];recursiveCalcNoWrapOffsetsForLine(el,false);el.style.whiteSpace="nowrap"}else{const newMatches=[];wsnwMatches.forEach(match=>{if(match.start>lineCharOffset){newMatches.push({start:match.start-lineCharOffset,end:match.end-lineCharOffset})}});wsnwMatches=newMatches}}function removeTags(el){let brs=el.querySelectorAll('br[data-owner="balance-text-hyphen"]');forEach(brs,br=>{br.outerHTML=""});brs=el.querySelectorAll('br[data-owner="balance-text"]');forEach(brs,br=>{br.outerHTML=" "});let spans=el.querySelectorAll('span[data-owner="balance-text-softhyphen"]');if(spans.length>0){forEach(spans,span=>{const textNode=document.createTextNode("­");span.parentNode.insertBefore(textNode,span);span.parentNode.removeChild(span)})}spans=el.querySelectorAll('span[data-owner="balance-text-justify"]');if(spans.length>0){let txt="";forEach(spans,span=>{txt+=span.textContent;span.parentNode.removeChild(span)});el.innerHTML=txt}}const isJustified=function(el){const style=el.currentStyle||window.getComputedStyle(el,null);return style.textAlign==="justify"};function justify(el,txt,conWidth){txt=txt.trim();const words=txt.split(" ").length;txt=`${txt} `;if(words<2){return txt}const tmp=document.createElement("span");tmp.innerHTML=txt;el.appendChild(tmp);const size=tmp.offsetWidth;tmp.parentNode.removeChild(tmp);const wordSpacing=Math.floor((conWidth-size)/(words-1));tmp.style.wordSpacing=`${wordSpacing}px`;tmp.setAttribute("data-owner","balance-text-justify");const div=document.createElement("div");div.appendChild(tmp);return div.innerHTML}function isBreakChar(txt,index){const re=/([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;let match;if(!breakMatches){breakMatches=[];match=re.exec(txt);while(match!==null){if(!isWhiteSpaceNoWrap(match.index)){breakMatches.push(match.index)}match=re.exec(txt)}}return breakMatches.indexOf(index)!==-1}function isBreakOpportunity(txt,index){return index===0||index===txt.length||isBreakChar(txt,index-1)&&!isBreakChar(txt,index)}function findBreakOpportunity(el,txt,conWidth,desWidth,dir,c,ret){let w;if(txt&&typeof txt==="string"){for(;;){while(!isBreakOpportunity(txt,c)){c+=dir}el.innerHTML=txt.substr(0,c);w=el.offsetWidth;if(dir<0){if(w<=desWidth||w<=0||c===0){break}}else if(desWidth<=w||conWidth<=w||c===txt.length){break}c+=dir}}ret.index=c;ret.width=w}function getSpaceWidth(el,h){const container=document.createElement("div");container.style.display="block";container.style.position="absolute";container.style.bottom=0;container.style.right=0;container.style.width=0;container.style.height=0;container.style.margin=0;container.style.padding=0;container.style.visibility="hidden";container.style.overflow="hidden";const space=document.createElement("span");space.style.fontSize="2000px";space.innerHTML="&nbsp;";container.appendChild(space);el.appendChild(container);const dims=space.getBoundingClientRect();container.parentNode.removeChild(container);const spaceRatio=dims.height/dims.width;return h/spaceRatio}function getElementsList(elements){if(!elements){return[]}if(typeof elements==="string"){return document.querySelectorAll(elements)}if(elements.tagName&&elements.querySelectorAll){return[elements]}return elements}function balanceText(elements){forEach(getElementsList(elements),el=>{const maxTextWidth=5e3;removeTags(el);const oldWS=el.style.whiteSpace;const oldFloat=el.style.float;const oldDisplay=el.style.display;const oldPosition=el.style.position;const oldLH=el.style.lineHeight;el.style.lineHeight="normal";const containerWidth=el.offsetWidth;const containerHeight=el.offsetHeight;el.style.whiteSpace="nowrap";el.style.float="none";el.style.display="inline";el.style.position="static";let nowrapWidth=el.offsetWidth;const nowrapHeight=el.offsetHeight;const spaceWidth=oldWS==="pre-wrap"?0:getSpaceWidth(el,nowrapHeight);if(containerWidth>0&&nowrapWidth>containerWidth&&nowrapWidth<maxTextWidth){let remainingText=el.innerHTML;let newText="";let lineText="";const shouldJustify=isJustified(el);const totLines=Math.round(containerHeight/nowrapHeight);let remLines=totLines;let lineCharOffset=0;let desiredWidth,guessIndex,le,ge,splitIndex,isHyphen,isSoftHyphen;while(remLines>1){breakMatches=null;calcNoWrapOffsetsForLine(el,oldWS,lineCharOffset);desiredWidth=Math.round((nowrapWidth+spaceWidth)/remLines-spaceWidth);guessIndex=Math.round((remainingText.length+1)/remLines)-1;le=new NextWS_params;findBreakOpportunity(el,remainingText,containerWidth,desiredWidth,-1,guessIndex,le);ge=new NextWS_params;guessIndex=le.index;findBreakOpportunity(el,remainingText,containerWidth,desiredWidth,+1,guessIndex,ge);le.reset();guessIndex=ge.index;findBreakOpportunity(el,remainingText,containerWidth,desiredWidth,-1,guessIndex,le);if(le.index===0){splitIndex=ge.index}else if(containerWidth<ge.width||le.index===ge.index){splitIndex=le.index}else{splitIndex=Math.abs(desiredWidth-le.width)<Math.abs(ge.width-desiredWidth)?le.index:ge.index}lineText=remainingText.substr(0,splitIndex).replace(/\s$/,"");isSoftHyphen=Boolean(lineText.match(/\u00ad$/));if(isSoftHyphen){lineText=lineText.replace(/\u00ad$/,'<span data-owner="balance-text-softhyphen">-</span>')}if(shouldJustify){newText+=justify(el,lineText,containerWidth)}else{newText+=lineText;isHyphen=isSoftHyphen||Boolean(lineText.match(/(-|\u2014|\u2013)$/));newText+=isHyphen?'<br data-owner="balance-text-hyphen" />':'<br data-owner="balance-text" />'}remainingText=remainingText.substr(splitIndex);lineCharOffset=splitIndex;remLines--;el.innerHTML=remainingText;nowrapWidth=el.offsetWidth}if(shouldJustify){el.innerHTML=newText+justify(el,remainingText,containerWidth)}else{el.innerHTML=newText+remainingText}}el.style.whiteSpace=oldWS;el.style.float=oldFloat;el.style.display=oldDisplay;el.style.position=oldPosition;el.style.lineHeight=oldLH})}function updateWatched(){const selectors=watching.sel.join(",");const selectedElements=getElementsList(selectors);const elements=Array.prototype.concat.apply(watching.el,selectedElements);balanceText(elements)}function initHandlers(){if(handlersInitialized){return}ready(updateWatched);window.addEventListener("load",updateWatched);window.addEventListener("resize",debounce(updateWatched));handlersInitialized=true}function balanceTextAndWatch(elements){if(typeof elements==="string"){watching.sel.push(elements)}else{forEach(getElementsList(elements),el=>{watching.el.push(el)})}initHandlers();updateWatched()}function unwatch(elements){if(typeof elements==="string"){watching.sel=watching.sel.filter(el=>el!==elements)}else{elements=getElementsList(elements);watching.el=watching.el.filter(el=>elements.indexOf(el)===-1)}}function polyfill(){if(polyfilled){return}watching.sel.push(".balance-text");initHandlers();polyfilled=true}function publicInterface(elements,options){if(!elements){polyfill()}else if(options&&options.watch===true){balanceTextAndWatch(elements)}else if(options&&options.watch===false){unwatch(elements)}else{balanceText(elements)}}publicInterface.updateWatched=updateWatched;if(hasTextWrap()){noop.updateWatched=noop;return noop}return publicInterface});

/*!
* Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
* 
* Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
* All Rights Reserved. Apache Software License 2.0
* 
* http://www.apache.org/licenses/LICENSE-2.0
*/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]))}L&&(k+=1)}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m)}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),c&&o(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=S+y,C=1<<(S<=31?S-1:30),I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O)}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])});

    var programs = [{"name":"Undergraduate Options","area":"Undergraduate options","website":"https://trs.catholic.edu/academics/undergraduate/index.html","image":"undergraduate.png"},{"name":"M.A. in Biblical Studies","area":"Biblical studies","website":"https://trs.catholic.edu/academics/graduate/biblical-studies/ma/index.html","image":"biblical-studies-1.png"},{"name":"S.T.L. in Biblical Studies","area":"Biblical studies","website":"https://trs.catholic.edu/academics/graduate/biblical-studies/stl/index.html","image":"biblical-studies-2.png"},{"name":"Ph.D. in Biblical Studies","area":"Biblical studies","website":"https://trs.catholic.edu/academics/graduate/biblical-studies/phd/index.html","image":"biblical-studies-3.png"},{"name":"S.T.D. in Biblical Studies","area":"Biblical studies","website":"https://trs.catholic.edu/academics/graduate/biblical-studies/std/index.html","image":"biblical-studies-4.png"},{"name":"M.A. in Catechetics","area":"Catechetics","website":"https://trs.catholic.edu/academics/graduate/catechetics/ma-catechetics/index.html","image":"catechetics-1.png"},{"name":"M.Cat. in Catechesis","area":"Catechetics","website":"https://trs.catholic.edu/academics/graduate/catechetics/mcat-catechesis/index.html","image":"catechetics-2.png"},{"name":"Ph.D. in Catechetics","area":"Catechetics","website":"https://trs.catholic.edu/academics/graduate/catechetics/phd-catechetics/index.html","image":"catechetics-3.png"},{"name":"D.Min. in Liturgical Catechesis","area":"Catechetics","website":"https://trs.catholic.edu/academics/graduate/catechetics/dmin-liturgical-catechesis/index.html","image":"liturgical-catechesis.png"},{"name":"M.A. in Church History","area":"Church history","website":"https://trs.catholic.edu/academics/graduate/church-history/ma/index.html","image":"church-history-1.png"},{"name":"Ph.D. in Church History","area":"Church history","website":"https://trs.catholic.edu/academics/graduate/church-history/phd/index.html","image":"church-history-2.png"},{"name":"S.T.L. in Church History","area":"Church history","website":"https://trs.catholic.edu/academics/graduate/church-history/stl/index.html","image":"church-history-3.png"},{"name":"S.T.D. in Church History","area":"Church history","website":"https://trs.catholic.edu/academics/graduate/church-history/std/index.html","image":"church-history-4.png"},{"name":"M.A. in Historical and Systematic Theology","area":"Historical and systematic theology","website":"https://trs.catholic.edu/academics/graduate/historical-systematic-theology/ma/index.html","image":"hst-1.png"},{"name":"S.T.L. in Historical Theology","area":"Historical and systematic theology","website":"https://trs.catholic.edu/academics/graduate/historical-systematic-theology/stl-historical-theology/index.html","image":"hst-2.png"},{"name":"S.T.D. in Historical Theology","area":"Historical and systematic theology","website":"https://trs.catholic.edu/academics/graduate/historical-systematic-theology/std-historical-theology/index.html","image":"hst-3.png"},{"name":"Ph.D. in Historical Theology","area":"Historical and systematic theology","website":"https://trs.catholic.edu/academics/graduate/historical-systematic-theology/phd-historical-theology/index.html","image":"hst-4.png"},{"name":"S.T.L. in Systematic Theology","area":"Historical and systematic theology","website":"https://trs.catholic.edu/academics/graduate/historical-systematic-theology/stl-systematic-theology/index.html","image":"hst-5.png"},{"name":"S.T.D. in Systematic Theology","area":"Historical and systematic theology","website":"https://trs.catholic.edu/academics/graduate/historical-systematic-theology/std-systematic-theology/index.html","image":"hst-6.png"},{"name":"Ph.D. in Systematic Theology","area":"Historical and systematic theology","website":"https://trs.catholic.edu/academics/graduate/historical-systematic-theology/phd-systematic-theology/index.html","image":"hst-7.png"},{"name":"M.A. in Liturgical Studies and Sacramental Theology","area":"Liturgical studies and sacramental theology","website":"https://trs.catholic.edu/academics/graduate/liturgical-studies-sacramental-theology/ma/index.html","image":"liturgical-1.png"},{"name":"S.T.L. in Liturgical Studies and Sacramental Theology","area":"Liturgical studies and sacramental theology","website":"https://trs.catholic.edu/academics/graduate/liturgical-studies-sacramental-theology/stl/index.html","image":"liturgical-2.png"},{"name":"Ph.D. in Liturgical Studies and Sacramental Theology","area":"Liturgical studies and sacramental theology","website":"https://trs.catholic.edu/academics/graduate/liturgical-studies-sacramental-theology/phd/index.html","image":"liturgical-3.png"},{"name":"S.T.D. in Liturgical Studies and Sacramental Theology","area":"Liturgical studies and sacramental theology","website":"https://trs.catholic.edu/academics/graduate/liturgical-studies-sacramental-theology/std/index.html","image":"liturgical-4.png"},{"name":"M.A. in Moral Theology/Ethics","area":"Moral theology/ethics","website":"https://trs.catholic.edu/academics/graduate/moral-theology-ethics/ma/index.html","image":"moral-1.png"},{"name":"S.T.L. in Moral Theology/Ethics","area":"Moral theology/ethics","website":"https://trs.catholic.edu/academics/graduate/moral-theology-ethics/stl/index.html","image":"moral-2.png"},{"name":"Ph.D. in Moral Theology/Ethics","area":"Moral theology/ethics","website":"https://trs.catholic.edu/academics/graduate/moral-theology-ethics/phd/index.html","image":"moral-3.png"},{"name":"S.T.D. in Moral Theology/Ethics","area":"Moral theology/ethics","website":"https://trs.catholic.edu/academics/graduate/moral-theology-ethics/std/index.html","image":"moral-4.png"},{"name":"M.Div. in Pastoral Studies","area":"Pastoral studies","website":"https://trs.catholic.edu/academics/graduate/pastoral-studies/mdiv/index.html","image":"pastoral-1.png"},{"name":"D.Min. in Evangelization","area":"Pastoral studies","website":"https://trs.catholic.edu/academics/graduate/pastoral-studies/dmin-evangelization/index.html","image":"evangelization.png"},{"name":"D.Min. in Seminary Formation","area":"Pastoral studies","website":"https://trs.catholic.edu/academics/graduate/pastoral-studies/dmin-seminary-formation/index.html","image":"seminary.png"},{"name":"D.Min. in Liturgical Catechesis","area":"Pastoral studies","website":"https://trs.catholic.edu/academics/graduate/catechetics/dmin-liturgical-catechesis/index.html","image":"liturgical-catechesis.png"},{"name":"M.A. in Religion and Culture","area":"Religion and culture","website":"https://trs.catholic.edu/academics/graduate/religion-culture/ma/index.html","image":"religion-culture-1.png"},{"name":"Ph.D. in Religion and Culture","area":"Religion and culture","website":"https://trs.catholic.edu/academics/graduate/religion-culture/phd/index.html","image":"religion-culture-2.png"},{"name":"D.Min. in Spirituality","area":"Spirituality","website":"https://trs.catholic.edu/academics/graduate/spirituality/dmin/index.html","image":"spirituality.png"}];

        var areas = [];

        programs.forEach(function(area){
            areas.push(area["area"]);
        });

        areas = areas.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);

        for (let i = areas.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = areas[i]
            areas[i] = areas[j]
            areas[j] = temp
        }

        function initMap() {

        	var startLatLng = {lat: 38.8964598, lng: -77.0147393};

            var map = new google.maps.Map(document.getElementById('map'), {
              gestureHandling: "cooperative",
                zoom: 12,
                center: startLatLng, 
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": "-1"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#63b5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "gamma": 0.01
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "saturation": -31
                            },
                            {
                                "lightness": -33
                            },
                            {
                                "weight": 2
                            },
                            {
                                "gamma": 0.8
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": "-99"
                            },
                            {
                                "color": "#113149"
                            },
                            {
                                "saturation": "-75"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 30
                            },
                            {
                                "saturation": 30
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "saturation": 20
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 20
                            },
                            {
                                "saturation": -20
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "lightness": "-20"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 10
                            },
                            {
                                "saturation": -30
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "saturation": 25
                            },
                            {
                                "lightness": 25
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": "1"
                            }
                        ]
                    }
                ],
                mapTypeControl: false,
                streetViewControl: false
            });

            //https://stackoverflow.com/a/40135709/4659792
            map.data.setStyle({
                fillColor: '#f8f5f5',
                strokeWeight: 10,
                strokeColor: '#fff',
                fillOpacity: 1
            });
            
            map.data.loadGeoJson("https://trs.catholic.edu/media/new-homepage/dc.json");

            var icon = {
                url: "https://trs.catholic.edu/media/new-homepage/marker.png",
                //anchor: new google.maps.Point(0,0)
            }

            var caldwell = {
                url: "https://trs.catholic.edu/media/new-homepage/star.png",
            }

            //Add Caldwell Hall
            marker = new google.maps.Marker({
                    position: new google.maps.LatLng(38.935728306754754, -77.00065017343202),
                    map: map,
                    icon: caldwell,
                });

            var markers = [];

            function hideMarkers(marker){
                for (m = 0; m < markers.length; m++){
                    if (markers[m] !== marker){
                        markers[m].setVisible(false);
                    }
                    
                }
            }

            function showMarkers(arr){
                for (i = 0; i < arr.length; i++) {  

                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(arr[i][1], arr[i][2]),
                        map: map,
                        icon: icon,
                        name: arr[i][0],
                        website: arr[i][3]
                    });

                    markers.push(marker);

                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    
                        return function() {
                            hideMarkers(marker);
                            directions(arr[i][1] + ", " + arr[i][2], marker["name"]);

                            document.getElementById("mapInfo").innerHTML = document.getElementById("mapInfo").innerHTML + "<h4 style='color:#2f292b !important;margin-top:12.5px'>" + arr[i][0] + "</h4><div style='padding:5px'><p>" + arr[i][4] + "</p><p><a class='more-link' href='" + arr[i][3] + "' target='_blank'>Learn more</a></p></div>";
                            document.getElementById("mapInfo").style.display = 'block';
                        }
                    })(marker, i));
                }
            }

            var bounds;
            google.maps.event.addListenerOnce(map, 'idle', function(){
                bounds = map.getBounds();
            });
            
            const directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer({
                    suppressPolylines: true,
                    suppressMarkers: true
                });

            //https://jsfiddle.net/Rohith_KP/dk1zp2n8/
            var line, currentArr, timer;

            function directions(destination, marker){

                var coordinatesStr = [];



                directionsService.route(
                    {
                        origin: {"lat": 38.935728306754754, "lng": -77.00065017343202},
                        destination: destination,
                        travelMode: "TRANSIT",
                    },
                    (response, status) => {                        

                        var travelTime = response.routes[0].legs[0].arrival_time.text;

                        if (travelTime.includes("a")){
                            travelTime = travelTime.split("am")[0] + " a.m.";
                        } else if (travelTime.includes("p")){
                            travelTime = travelTime.split("pm")[0] + " p.m.";
                        }

                        document.getElementById("mapInfo").innerHTML = document.getElementById("mapInfo").innerHTML.split("</p>")[0] + "</p><p>If you left campus now, you would arrive at " + marker + " at " + travelTime + "</p>" + document.getElementById("mapInfo").innerHTML.split("</p>")[1];
                        
                        directionsRenderer.setDirections(response);

                        var steps = response.routes[0].legs[0].steps;

                        for (i = 0; i < steps.length; i++) {

                            for (j = 0; j < steps[i].path.length; j++){
                                coordinatesStr.push(steps[i].path[j].toString())
                            }
                        }

                        for (i = 0; i < coordinatesStr.length; i++){
                            coordinatesStr[i] = coordinatesStr[i].replace(/([()])/g, '');
                            coordinatesStr[i] =  {"lat": parseFloat(coordinatesStr[i].split(", ")[0]), "lng": + parseFloat(coordinatesStr[i].split(", ")[1])};
                        }
                        
                        

                        line = new google.maps.Polyline({
                            path: [],
                            strokeColor: "#FFF",
                            strokeOpacity: 1,
                            strokeWeight: 3,
                            geodesic: false, 
                            map: map,
                        });

                        function recursiveAnimate(index) {
                            timer && timer.cancel()
                            var coordsDeparture = coordinatesStr[index];

                            var coordsArrival = coordinatesStr[index + 1];

                            var departure = new google.maps.LatLng(coordsDeparture.lat, coordsDeparture.lng); 
                            var arrival = new google.maps.LatLng(coordsArrival.lat, coordsArrival.lng); 
                            var step = 0;
                            var numSteps = 1; //Change this to set animation resolution
                            var timePerStep = 1; //Change this to alter animation speed
                            timer = InvervalTimer(function(arg) {
                                step += 1;
                                if (step > numSteps) {
                                    step = 0
                                    timer.cancel()
                                    if (index < coordinatesStr.length - 2) {
                                        recursiveAnimate(index + 1)
                                    }
                                } else {
                                    var are_we_there_yet = google.maps.geometry.spherical.interpolate(departure, arrival, step / numSteps);
                                    line.getPath().push(are_we_there_yet);
                                }
                            }, timePerStep);
                        }

                        function InvervalTimer(callback, interval, arg) {
                            var timerId, startTime, remaining = 0;
                            var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
                            var timeoutId
                            this.pause = function() {
                                if (state != 1) return;

                                remaining = interval - (new Date() - startTime);
                                window.clearInterval(timerId);
                                state = 2;
                            };

                            this.resume = function() {
                                if (state != 2) return;

                                state = 3;
                                timeoutId = window.setTimeout(this.timeoutCallback, remaining, arg);
                            };

                            this.timeoutCallback = function(timer) {
                                if (state != 3) return;
                                clearTimeout(timeoutId);
                                startTime = new Date();
                                timerId = window.setInterval(function() {
                                    callback(arg)
                                }, interval);
                                state = 1;
                            };

                            this.cancel = function() {
                                clearInterval(timerId)
                            }
                            startTime = new Date();
                            timerId = window.setInterval(function() {
                                callback(arg)
                            }, interval);
                            state = 1;
                            return {
                                cancel: cancel,
                                pause: pause,
                                resume: resume,
                                timeoutCallback: timeoutCallback
                            };
                        }

                        recursiveAnimate(0);
                    }
                );  
            }

            //Close the infowindow
            document.addEventListener("click",function(e){
                if(e.target && e.target.id== "closeMapInfo"){
                    document.getElementById("mapInfo").innerHTML = "<i class='zmdi zmdi-close zmdi-hc-lg' id='closeMapInfo' style='float:right;margin-top:-10px;margin-right:-10px'></i>";
                    document.getElementById("mapInfo").style.display = "none";
                    hideMarkers(null);
                    showMarkers(eval(currentArr));
                    if (line){
                        line.setMap(null);
                        timer && timer.cancel();
                    }
                    
                    //if (directionsRenderer.directions){
                    //    directionsRenderer.setDirections(null);
                    //}

                    directionsRenderer.setMap(null);

                    directionsRenderer = new google.maps.DirectionsRenderer({
                        suppressPolylines: true,
                        suppressMarkers: true
                    });
                    
                    directionsRenderer.setMap(map); 
                    map.fitBounds(bounds);
                    map.setZoom(12);
                 }
            });

            //https://andrejgajdos.com/custom-select-dropdown/ */
            $("select.trs-select").each(function(){

                // Cache the number of options
                var $this = $(this),
                    numberOfOptions = $(this).children('option').length;

                // Hides the select element
                $this.addClass('s-hidden');

                // Wrap the select element in a div
                $this.wrap('<div class="select"></div>');

                // Insert a styled div to sit over the top of the hidden select element
                if ($this.attr("name") == "yourStory"){

                    $this.after('<div class="styledSelect" tabindex="0" aria-haspopup="listbox" id="' + $this.attr("name") + '"><span id="typed"></span></div>');

                    var options = {
                        strings: areas,
                        typeSpeed: 60,
                        backDelay: 5000,
                        loop: true
                    }

                    var typed = new Typed("#typed", options);

                } else {
                    $this.after('<div class="styledSelect" tabindex="0" aria-haspopup="listbox" id="' + $this.attr("name") + '"></div>');
                }


                if ($this.attr("name") == "addToCalendar"){
                    $this.next(".styledSelect").addClass("addToCalendar");
                }
                
                var $styledSelect = $this.next('div.styledSelect');
                
                // Show the first select option in the styled div
                if (!($this.attr("name") == "yourStory")){

                    if ($(this).attr("name") == "addToCalendar"){
                        $styledSelect.html("<i class='zmdi zmdi-plus zmdi-hc-lg'></i>Add to calendar");
                    } else {
                        $styledSelect.text($this.children('option').eq(0).text());
                    }
                }

                // Insert an unordered list after the styled div and also cache the list
                var $list = $('<ul />', {
                    'class': 'options ' + $(this).attr("name"),
                    'role': 'listbox',
                    'id': $this.attr("name") + "-list"
                }).insertAfter($styledSelect);

                // Insert a list item into the unordered list for each select option
                if (!($this.attr("name") == "addToCalendar")){
                    for (var i = 0; i < numberOfOptions; i++) {
                        $('<li />', {
                            text: $this.children('option').eq(i).text(),
                            rel: $this.children('option').eq(i).val(),
                            tabindex: "0",
                            role: "option"
                        }).appendTo($list);
                    }
                } else {
                    var calendarTypes = [{"name":"Apple", "icon":"apple"},{"name":"Google", "icon":"google"},{"name":"Outlook", "icon": "outlook"},{"name":"Outlook.com", "icon": "outlook"},{"name":"Yahoo", "icon":"yahoo"}];
                    for (i = 0; i < calendarTypes.length; i++){
                        $('<li />', {
                            html: "<i class='zmdi zmdi-" + calendarTypes[i]["icon"] + " zmdi-hc-lg'></i> " + calendarTypes[i]["name"],
                            rel: calendarTypes[i]["name"],
                            tabindex: "0",
                            role: "option",
                        }).appendTo($list);
                    }
                }
                

                // Cache the list items
                var $listItems = $list.children('li');

                // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
                $styledSelect.on("click focus", function (e) {
                    e.stopPropagation();
                    $('div.styledSelect.active').each(function () {
                        $(this).removeClass('active').next('ul.options').hide();
                    });
                    $(this).toggleClass('active').next('ul.options').toggle();
                });
                $styledSelect.keypress(function(e){
                    if(e.which == 13){
                        $($styledSelect).click();
                    }
                });

                // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
                // Updates the select element to have the value of the equivalent option

                $listItems.click(function (e) {
                    e.stopPropagation();
                    $styledSelect.text($(this).text()).removeClass('active');
                    $this.val($(this).attr('rel'));
                    $(this).parent("ul").hide();

                    //Neighborhood
                    if ($(this).parent("ul").attr("id") == "neighborhood-list"){

                        hideMarkers(null);
                    
                        if (line){
                            line.setMap(null);
                        }
                        
                        if (directionsRenderer.directions){
                            directionsRenderer.setDirections(null);
                        }

                        directionsRenderer.setMap(null);

                        directionsRenderer = new google.maps.DirectionsRenderer({
                            suppressPolylines: true,
                            suppressMarkers: true
                        });
                        
                        directionsRenderer.setMap(map); 

                        if ($this.val() == "explore"){
                            
                        } else {
                            //directionsRenderer.setMap(map);
                            //console.log(directionsRenderer.map);
                            currentArr = $this.val();
                            showMarkers(eval($this.val()));
                        }
                    };

                    if ($(this).parent("ul").attr("id") == "yourStory-list"){
                        var area = $(this).attr("rel");
                        var slideNo = $(".schools-grid-third[area='" + area + "']").attr("data-slick-index");
                        $("#1threeup").slick("slickGoTo", slideNo);
                    }
                });

                $listItems.keypress(function(e){
                    if(e.which == 13){
                        $(this).click();
                    }
                });

                // Hides the unordered list when clicking outside of it
                $(document).click(function () {
                    $styledSelect.removeClass('active');
                    $list.hide();
                });

                $(document).on("blur", "ul.options li:last-of-type", function(){
                    $styledSelect.removeClass('active');
                    $list.hide();
                });
            });
        }
            
        document.addEventListener("DOMContentLoaded", function() {

          var checkExist = setInterval(function() {
           if ($(".custom-dropdown").length) {
              //Hack because there's a stupid script at the bottom that tests the source of the iframe. Not all iframes have a source. (WHY CATHOLIC?!)
          		$("<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCdmK2FnHmBBMlITyHXtVnfc86f21LHI1U&libraries=places&callback=initMap'/>").insertAfter("#map");
              clearInterval(checkExist);
           }
          }, 100);


          $(".schools-hero-full.default.centered").css("height","calc(100vh - " + $("#schools-header").height() + "px)");

          balanceText();

          

          function customSlider(){

              if ($("#0threeup").length){

                $('#0threeup').after("<div id='1threeup' class='schools-grid-with-image three-up-carousel'></div>");

                $('#0threeup').remove();
              } else {
                $(".three-up-carousel").attr("id", "#0threeup").after("<div id='1threeup' class='schools-grid-with-image three-up-carousel'></div>");
                $('#0threeup').remove();
              }

              

              programs.forEach(function(program){

                  var html = "<div class='schools-grid-third' area='" + program["area"] + "'><a href='" + program["website"] + "' target='_blank'><img alt='" + program["name"] + "' src='/media/new-homepage/slider-photos/" + program["image"] + "' /><div class='schools-grid-text'><h4>" + program["name"] +"</h4></a></div>";

                  $("#1threeup").append(html);
              });

              $("#1threeup").after("<div class='slick-custom-buttons'><button id='1threeup-previous' class='flickity-prev-next-button previous slick-button--previous' type='button'><svg viewBox='0 0 100 100'><path class='arrow' d='M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z'/></svg></button><button id='1threeup-next' class='flickity-prev-next-button next slick-button--next' type='button'><svg viewBox='0 0 100 100'><path class='arrow' d='M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z' transform='translate(100, 100) rotate(180)'/></svg></button></div>");

              $("#1threeup").slick({

                  dots: false,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  prevArrow:'#1threeup-previous',
                  nextArrow:'#1threeup-next',
                  responsive: [
                    {
                      breakpoint: 919,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
              });
          }

          setTimeout(function(){
            customSlider();
          }, 500);


           var checkExistVideos = setInterval(function() {
           if ($("video.waving").length) {
                          //Videos
            //When user hovers over video (waving)
            $("#videos .video-container").on("mouseenter", function(){
                if ($(this).parent().attr("playing") == "false"){
                    $(this).find("video")[0].play(); 
                    $(this).find("p").slideDown("fast");
                }
            });

            //When user leaves video
            $("#videos .video-container").on("mouseleave", function(){
                if ($(this).parent().attr("playing") == "false"){
                    $(this).find("video")[0].pause(); 
                    $(this).find("p").slideUp("fast");
                    $(this).find("video.overlay-video").hide();
                    $(this).find("video.overlay-video")[0].currentTime = 0
                } 
            });

            $(".overlay-video").each(function(){
                $(this)[0].onended = function(){
                    $(this).parent().parent().parent().attr("playing",false);
                    $(this).parent().parent().find("p").slideUp("fast");
                    $(this).parent().parent().find(".zmdi").removeClass("zmdi-pause-circle").addClass("zmdi-play-circle");
                    $(this).hide();
                }
            });

            $("#videos .zmdi").on("click",function(){

                var container = $(this).parents().eq(2);
                var video = $(this).parent().next("video");
                var overlayVideo = $(container).find(".overlay-container video");

                if ($(this).hasClass("zmdi-play-circle")){
                    $(video)[0].pause();
                    $(this).removeClass("zmdi-play-circle").addClass("zmdi-pause-circle");
                    $(overlayVideo).fadeIn();
                    $(overlayVideo)[0].play();
                    $(container).attr("playing",true);
                } else {
                    $(this).removeClass("zmdi-pause-circle").addClass("zmdi-play-circle");
                    $(overlayVideo)[0].pause();
                    $(container).attr("playing",false);
                }
            });

            if ($(window).width() < 800){
                $("#videos .video-container").each(function(){
                    $(this).trigger('mouseover');
                    $(this).trigger('mouseleave');
                });
                $(window).scroll(function(){


                    
                    $("#videos .video-container").each(function(){

                        //https://stackoverflow.com/a/25690042

                        jQuery.fn.isFullyVisible = function(){

                            var win = $(window);

                            var viewport = {
                                top : win.scrollTop(),
                                left : win.scrollLeft()
                            };
                            viewport.right = viewport.left + win.width();
                            viewport.bottom = viewport.top + win.height();

                            var elemtHeight = this.height(); // Get the full height of current element
                            elemtHeight = Math.round(elemtHeight); // Round it to a whole number

                            var bounds = this.offset(); // Coordinates of current element
                            bounds.top = bounds.top + elemtHeight;
                            bounds.right = bounds.left + this.outerWidth();
                            bounds.bottom = bounds.top + this.outerHeight();

                            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
                        }
   
                        if( $(this).isFullyVisible() ){
                            $(this).trigger("mouseover");
                        } else {
                            $(this).trigger("mouseleave");
                        }

                        if ($(overlay).parent().parent().attr("playing",true)){
                            $(overlay)[0].pause();
                            $(overlay).hide();
                        }
                    });
                });
            }
              clearInterval(checkExistVideos);
           }
          }, 100);


            $("#keepInTouch form input").focus(function(){
                $(this).siblings('label').addClass('active');
            }).blur(function(){
                if (!$(this).val()){
                    $(this).siblings('label').removeClass('active');
                }
            });

            $(window).load(function() {


              //tags: academics, faculty, students, news, student-life
              var features = [{"title":"Faculty and research", "subtitle":"We are the center of Catholic theological scholarship in the United States, offering unparalleled breadth and depth in research, teaching, and publications.","link":"https://trs.catholic.edu/faculty-and-research/index.html","image":"https://trs.catholic.edu/media/2020-photos/caldwell_clouds_1200.jpg","tags":["academics"]},{"title":"The D.C. advantage","subtitle":"Our location in Washington, D.C., means we shape issues of the public moment. This is where theological thinking moves from the classroom to the culture.","link":"https://trs.catholic.edu/about-us/dc-advantage/index.html","image":"https://www.catholic.edu/media/Marketing%20Page%20Images/About%20Us/st-matthews-cathedral-dc-1200x700.jpg","tags":["academics"]},{"title":"Dean's welcome","subtitle":"Welcome to the School of Theology and Religious Studies at The Catholic University of America!","link":"https://trs.catholic.edu/about-us/deans-welcome/index.html","image":"https://trs.catholic.edu/media/2018-photos/MarkMorozowichHomepage.jpg","tags":["academics"]},{"title":"Career outlook","subtitle": "Our graduates can be found working in every area of Catholic life: parishes, dioceses, universities, schools, and on mission.","link":"https://trs.catholic.edu/about-us/career-outlook/index.html","image":"https://trs.catholic.edu/media/2017-photos/careeroutlook1200x700.jpg","tags":["academics"]},{"title":"Study abroad","subtitle":"Study theology in Rome&mdash;the center of the Catholic Church&mdash;or other cities across the globe, and deepen your theological knowledge while expanding your worldview.","link":"https://trs.catholic.edu/academics/study-abroad/index.html","image":"https://trs.catholic.edu/media/2017-photos/rome1200x700.jpg","tags":["academics"]},{"title":"Service opportunities","subtitle":"Through the University’s partnerships with many local charities and organizations, our students put their faith into practice through service to the Church, the community, and the world.","link":"https://trs.catholic.edu/student-experience/service-opportunities/index.html","image":"https://trs.catholic.edu/media/2020-photos/service-opps","tags":["student-life"]},{"title":"Our community","subtitle":"Inside and outside the classroom, the school aims to serve as a hospitable and supportive environment for all students involved in studying theology and religious studies.","link":"https://trs.catholic.edu/student-experience/our-community/index.html","image":"https://trs.catholic.edu/media/2017-photos/ourcommunity1200x700.jpg","tags":["student-life"]},{"title":"Spirituality","subtitle":"Students have a variety of opportunities for prayer and contemplation throughout the academic year, both within TRS and the broader university community.","link":"https://trs.catholic.edu/student-experience/spirituality/index.html","image":"https://trs.catholic.edu/media/2020-photos/spirituality-aquinas-mass","tags":["student-life"]},{"title":"Internships","subtitle":"TRS facilitates student internships with a variety of organizations in order to augment our students’ education with experience outside the classroom.","link":"https://trs.catholic.edu/student-experience/internships/index.html","image":"https://trs.catholic.edu/media/2017-photos/internships1200x700.jpg","tags":["student-life"]},{"title":"Student involvement","subtitle":"STRSSA is the official student organization of TRS.","link":"https://trs.catholic.edu/student-experience/student-involvement/index.html","image":"https://trs.catholic.edu/media/2017-photos/studentinvolvement1200x700.jpg","tags":["student-life"]},{"title":"Institutes","subtitle":"The institutes housed TRS exist to bridge the exacting research carried on by scholars and the needs of local and international communities.","link":"https://trs.catholic.edu/faculty-and-research/institutes/index.html","image":"https://trs.catholic.edu/media/2018-photos/institutes1200.jpg","tags":["academics"]},{"title":"Dr. Clemmons","subtitle":"Assistant Professor of Church History","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/clemmons-thomas/index.html","image":"https://trs.catholic.edu/media/faculty-headshots/Clemmons-Thomas250x324.jpg","tags":["faculty-features"]},{"title":"Dr. Cloutier","subtitle":"Associate Professor of Moral Theology/Ethics","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/cloutier-david/index.html","image":"https://trs.catholic.edu/media/faculty-headshots/Cloutier-David1250x324jpg","tags":["faculty-features"]},{"title":"Dr. Grabowski","subtitle":"Ordinary Professor of Moral Theology/Ethics","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/grabowski-john/index.html","image":"https://trs.catholic.edu/media/faculty-headshots/grabowski250x324.jpg","tags":["faculty-features"]},{"title":"Dr. Jones","subtitle":"Ordinary Professor of Religion and Culture","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/jones-charles/index.html","image":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/jones-charles/jones-charles.jpg","tags":["faculty-features"]},{"title":"Dr. Timoney","subtitle":"Associate Professor of Practice Pastoral Studies Area","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/timoney-susan1/index.html","image":"https://trs.catholic.edu/media/faculty-headshots/_susantimoney_001-250x324.jpg","tags":["faculty-features"]},{"title":"Dr. Ulrickson","subtitle":"Assistant Professor of American Church History","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/maria-cecilia-ulrickson/index.html","image":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/maria-cecilia-ulrickson/ulrickson_photo.jpg","tags":["faculty-features"]},{"title":"Dr. Wessel","subtitle":"Ordinary Professor of Church History and Historical Theology,","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/wessel-susan/index.html","image":"https://trs.catholic.edu/media/faculty-headshots/wessel.jpeg","tags":["faculty-features"]},{"title":"Dr. Young","subtitle":"Associate Professor of Church History","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/young-robin-darling/index.html","image":"https://trs.catholic.edu/media/faculty-headshots/robin-young250x324.jpg","tags":["faculty-features"]},{"title":"Dr. Valkenberg","subtitle":"Ordinary Professor of Religion and Culture","link":"https://trs.catholic.edu/faculty-and-research/faculty-profiles/valkenberg-wilhelmus/index.html","image":"https://trs.catholic.edu/media/faculty-headshots/Valkenberg250x324.jpg","tags":["faculty-features"]},{"title":"Liesl Ament","subtitle":"Class of 2024","link":"https://trs.catholic.edu/student-experience/student-profiles/liesl-ament/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/liesl-ament/ament.png","tags":["student-features"]},{"title":"Kelly Carpenter","subtitle":"Class of 2023","link":"https://trs.catholic.edu/student-experience/student-profiles/kelly-carpenter/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/kelly-carpenter/carpenter.png","tags":["student-features"]},{"title":"Sr. Chelsea Bethany Davis","subtitle":"Class of 2022","link":"https://trs.catholic.edu/student-experience/student-profiles/chelsea-bethany-davis/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/chelsea-bethany-davis/davis1.png","tags":["student-features"]},{"title":"Thomas Do","subtitle":"Class of 2022","link":"https://trs.catholic.edu/student-experience/student-profiles/thomas-do/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/thomas-do/do.png","tags":["student-features"]},{"title":"Raad Eshoo","subtitle":"Class of 2023","link":"https://trs.catholic.edu/student-experience/student-profiles/eshoo-raad/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/eshoo-raad/raad.png","tags":["student-features"]},{"title":"Marie Fitzpatrick","subtitle":"Class of 2023","link":"https://trs.catholic.edu/student-experience/student-profiles/marie-fitzpatrick/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/marie-fitzpatrick/fitzpatrick.png","tags":["student-features"]},{"title":"Theresa Gardner","subtitle":"Class of 2022","link":"https://trs.catholic.edu/student-experience/student-profiles/theresa-gardner/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/theresa-gardner/gardner.png","tags":["student-features"]},{"title":"Joseph Giessuebel","subtitle":"Class of 2023","link":"https://trs.catholic.edu/student-experience/student-profiles/joseph-giessuebel/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/joseph-giessuebel/giessuebel.png","tags":["student-features"]},{"title":"Kelsey Nowack","subtitle":"Class of 2022","link":"https://trs.catholic.edu/student-experience/student-profiles/kelsey-nowack/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/kelsey-nowack/nowack-2.png","tags":["student-features"]},{"title":"Regina Prince","subtitle":"Class of 2022","link":"https://trs.catholic.edu/student-experience/student-profiles/regina-prince/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/regina-prince/prince.png","tags":["student-features"]},{"title":"Madeleine Sanders","subtitle":"Class of 2022","link":"https://trs.catholic.edu/student-experience/student-profiles/madeleine-sanders/index.html","image":"https://trs.catholic.edu/student-experience/student-profiles/madeleine-sanders/sanders.png","tags":["student-features"]},{"title":"Campus ministry","subtitle":"Expand your capacity to serve and love others. Find the freedom to take a deeper dive into what it means to live a life of faith.","link":"https://ministry.catholic.edu/","image":"https://ministry.catholic.edu/_media/Images/message-from-father-jude-1200px.jpg","tags":["student-life"]}];

                function shuffle(array){
                    var i = array.length,
                        j = 0,
                        temp; 

                    while (i--){
                        j = Math.floor(Math.random() * (i + 1));

                        temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }

                    return array;
                }

                function formatTags(tags){
                    for (tag = 0; tag < tags.length; tag++){
                        tags[tag] = (tags[tag].charAt(0).toUpperCase() + tags[tag].slice(1)).replace(/-/g, " ");
                    }
                    return tags;
                }

                features = shuffle(features);

                var colors = ["#005E8C","#739446","#990000","#423C3F"];

                var newsItems = [];

                function populateBlocks(tag){

                    var arr, func;

                    if (tag){
                        tags[tag] = shuffle(tags[tag]);
                        arr = tags[tag];
                    } else {
                        arr = features;
                    }

                    $(".feature").each(function(index){
                        
                        if (!$(this).hasClass("blank")){

                           if (!$(this).hasClass("lg-feature")){

                                if ($(this).find("img")){
                                    $(this).find("img").remove();
                                }

                                if (arr[index]["image"]){
                                    $(this).css("background-image", "url(" + arr[index]["image"] + ")"); 
                                    $(this).find(".overlay").css("background",colors[Math.floor(Math.random() * colors.length)]);
                                } else {
                                    $(this).css("background",colors[Math.floor(Math.random() * colors.length)]);
                                }
                                
                                var subtitle;
                                if (arr[index]["subtitle"]){
                                    subtitle = arr[index]["subtitle"];
                                } else {
                                    subtitle = "";
                                }

                                $(this).find(".paragraph-container h4").html("<span class='blocks-tag'>" + formatTags(arr[index]["tags"]).join(", ") + "</span><a href='" + arr[index]["link"] + "' target='_blank'>" + arr[index]["title"] + "</a><span class='subtitle'>" + subtitle + "</span>");
                             

                           } else {


                                
                                $(this).find(".overlay").css("background","rgba(0,0,0,.6");

                                var index = [Math.floor(Math.random() * newsItems.length)];

                                var newsImage, newsTitle, newsLink;

                                if (newsItems[index] && newsItems[index]["image"]){
                                  newsImage = newsItems[index]["image"];
                                } else {
                                  newsImage = "https://communications.catholic.edu/_media/2021-news-photos/take-flight-fatima.jpg";
                                }

                                if (newsItems[index] && newsItems[index]["title"]){
                                 newsTitle = newsItems[index]["title"];
                                } else {
                                  newsTitle = "University, Peer Support Lift Up First-Generation Students";
                                }

                                if (newsItems[index] && newsItems[index]["link"]){
                                  newsLink = newsItems[index]["link"];
                                } else {
                                  newsLink = "https://communications.catholic.edu/news/2021/11/university-peer-support-lift-up-first-generation-students.html";
                                }

                                
                                $(this).find("div.image-container").css("background-image","url(" + newsImage + ")"); 
                                $(this).find(".paragraph-container h3").html("<span class='blocks-tag'>News</span>" + newsTitle + "<button href='" + newsLink + "' class='button trs-btn newsButton'>Learn more</button>"); 


                           }
                        }
                    });
                }
   
                $("ul.dynamic-news-target li").each(function(item, index){
                    var link = $(this).find("a").attr("href");
                    var title = $(this).find("a span").html();
                    var img;
                    $(this).find("img").each(function(image){
                        if ($(this).attr("src")){
                            img = $(this).attr("src");
                        } 
                    });
                    features.push({"title":title, "link":link, "image":img, "tags":["news"]});
                });

                for (feature = 0; feature < features.length; feature++){
                    if(features[feature]["tags"].indexOf("news") > -1 && features[feature]["image"]){
                        newsItems.push(features[feature]);
                    }
                }

                var tags = [];

                features.forEach(function(feature){
                    tags.push(feature["tags"]);
                });

                tags = Object.fromEntries([...new Set(tags.flat())].sort().map(key => [key, []]));

                for (var key in tags){
                    if (tags.hasOwnProperty(key)) {
                        $("#features ul.options").append("<li rel='" + key + "' tabindex='0' role='option'>" + key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, " ") + "</option>")
                        features.forEach(function(feature){
                            if (feature["tags"].indexOf(key) > -1){
                                tags[key].push(feature);
                            }
                        });
                    }
                }

                populateBlocks();

                $(document).on("click", "button.newsButton", function(){
                  window.open($(this).attr("href"), '_blank').focus();
                });
                
                $(document).on("click","ul.options.features li", function(){
                    populateBlocks($(this).attr("rel"));
                });

                $("#shuffle").click(function(){
                    $("#shuffle i").removeClass("trs-spin");
                    setTimeout(function(){
                        $("#shuffle i").addClass("trs-spin");
                    },1);
                    features = shuffle(features);
                    populateBlocks();
                });

                
                //Convform
                function SingleConvState(input){return this.input=input,this.answer="",this.next=!1,this}function ConvState(wrapper,SingleConvState,form,params,originalFormHtml){this.form=form,this.wrapper=wrapper,this.current=SingleConvState,this.answers={},this.parameters=params,this.originalFormHtml=originalFormHtml,this.scrollDown=function(){$(this.wrapper).find("#messages").stop().animate({scrollTop:$(this.wrapper).find("#messages")[0].scrollHeight},600)}.bind(this)}SingleConvState.prototype.hasNext=function(){return this.next},ConvState.prototype.destroy=function(){return!!this.originalFormHtml&&($(this.wrapper).html(this.originalFormHtml),!0)},ConvState.prototype.newState=function(options){var input=$.extend(!0,{},{name:"",noAnswer:!1,required:!0,questions:["You forgot the question!"],type:"text",multiple:!1,selected:"",answers:[]},options);return input.element=$('<input type="text" name="'+input.name+'"/>'),new SingleConvState(input)},ConvState.prototype.next=function(){if(this.current.hasNext()){if(this.current=this.current.next,this.current.input.hasOwnProperty("fork")&&this.current.input.hasOwnProperty("case")){if(this.answers.hasOwnProperty(this.current.input.fork)&&this.answers[this.current.input.fork].value!=this.current.input.case)return this.next();if(!this.answers.hasOwnProperty(this.current.input.fork))return this.next()}return!0}return!1},ConvState.prototype.printQuestion=function(){var questions=this.current.input.questions,question=questions[Math.floor(Math.random()*questions.length)],ansWithin=question.match(/\{(.*?)\}(\:(\d)*)?/g);for(var key in ansWithin)if(ansWithin.hasOwnProperty(key)){var ansKey=ansWithin[key].replace(/\{|\}/g,""),ansFinalKey=ansKey,index=!1;if(-1!=ansKey.indexOf(":")&&(ansFinalKey=ansFinalKey.split(":")[0],index=ansKey.split(":")[1]),!1!==index){var replacement=this.answers[ansFinalKey].text.split(" ");question=replacement.length>=index?question.replace(ansWithin[key],replacement[index]):question.replace(ansWithin[key],this.answers[ansFinalKey].text)}else question=question.replace(ansWithin[key],this.answers[ansFinalKey].text)}var messageObj=$(this.wrapper).find(".message.typing");setTimeout(function(){messageObj.html(question),messageObj.removeClass("typing").addClass("ready"),"select"==this.current.input.type&&this.printAnswers(this.current.input.answers,this.current.input.multiple),this.scrollDown(),this.current.input.hasOwnProperty("noAnswer")&&!0===this.current.input.noAnswer&&(this.next()?setTimeout(function(){var messageObj=$('<div class="message to typing"><div class="typing_loader"></div></div>');$(this.wrapper).find("#messages").append(messageObj),this.scrollDown(),this.printQuestion()}.bind(this),200):this.parameters.eventList.onSubmitForm(this)),$(this.wrapper).find(this.parameters.inputIdHashTagName).focus()}.bind(this),500)},ConvState.prototype.printAnswers=function(answers,multiple){var opened=!1;if(0!=this.wrapper.find("div.options").height()&&(opened=!0),this.wrapper.find("div.options div.option").remove(),multiple){for(var i in answers)if(answers.hasOwnProperty(i)){var option=$('<div class="option">'+answers[i].text+"</div>").data("answer",answers[i]).click(function(event){Array.isArray(this.current.input.selected)||(this.current.input.selected=[]);var indexOf=this.current.input.selected.indexOf($(event.target).data("answer").value);-1==indexOf?(this.current.input.selected.push($(event.target).data("answer").value),$(event.target).addClass("selected")):(this.current.input.selected.splice(indexOf,1),$(event.target).removeClass("selected")),this.wrapper.find(this.parameters.inputIdHashTagName).removeClass("error"),this.wrapper.find(this.parameters.inputIdHashTagName).val(""),this.current.input.selected.length>0?this.wrapper.find("button.submit").addClass("glow"):this.wrapper.find("button.submit").removeClass("glow")}.bind(this));this.wrapper.find("div.options").append(option),$(window).trigger("dragreset")}}else for(var i in answers)if(answers.hasOwnProperty(i)){var option=$('<div class="option">'+answers[i].text+"</div>").data("answer",answers[i]).click(function(event){this.current.input.selected=$(event.target).data("answer").value,this.wrapper.find(this.parameters.inputIdHashTagName).removeClass("error"),this.wrapper.find(this.parameters.inputIdHashTagName).val(""),this.answerWith($(event.target).data("answer").text,$(event.target).data("answer")),this.wrapper.find("div.options div.option").remove()}.bind(this));this.wrapper.find("div.options").append(option),$(window).trigger("dragreset")}if(!opened){var diff=$(this.wrapper).find("div.options").height(),originalHeight=$(this.wrapper).find(".wrapper-messages").height();$(this.wrapper).find(".wrapper-messages").data("originalHeight",originalHeight),$(this.wrapper).find(".wrapper-messages").css({marginBottom:diff,maxHeight:originalHeight-diff})}},ConvState.prototype.answerWith=function(answerText,answerObject){this.current.input.hasOwnProperty("name")&&("string"==typeof answerObject?("tel"==this.current.input.type&&(answerObject=answerObject.replace(/\s|\(|\)|-/g,"")),this.answers[this.current.input.name]={text:answerText,value:answerObject},this.current.answer={text:answerText,value:answerObject}):(this.answers[this.current.input.name]=answerObject,this.current.answer=answerObject),"select"!=this.current.input.type||this.current.input.multiple?$(this.current.input.element).val(answerObject).change():$(this.current.input.element).val(answerObject.value).change()),"password"==this.current.input.type&&(answerText=answerText.replace(/./g,"*"));var message=$('<div class="message from">'+answerText+"</div>");$(this.wrapper).find("div.options div.option").remove();var diff=$(this.wrapper).find("div.options").height(),originalHeight=$(this.wrapper).find(".wrapper-messages").data("originalHeight");$(this.wrapper).find(".wrapper-messages").css({marginBottom:diff,maxHeight:originalHeight}),$(this.wrapper).find(this.parameters.inputIdHashTagName).focus(),answerObject.hasOwnProperty("callback")&&(this.current.input.callback=answerObject.callback),setTimeout(function(){$(this.wrapper).find("#messages").append(message),this.scrollDown()}.bind(this),100),$(this.form).append(this.current.input.element);var messageObj=$('<div class="message to typing"><div class="typing_loader"></div></div>');setTimeout(function(){$(this.wrapper).find("#messages").append(messageObj),this.scrollDown()}.bind(this),150),this.parameters.eventList.onInputSubmit(this,function(){this.next()?setTimeout(function(){this.printQuestion()}.bind(this),300):this.parameters.eventList.onSubmitForm(this)}.bind(this))},function($){$.fn.convform=function(options){var wrapper=this,originalFormHtml=$(this).html();$(this).addClass("conv-form-wrapper");var parameters=$.extend(!0,{},{placeHolder:"Type Here",typeInputUi:"textarea",timeOutFirstQuestion:1200,buttonClassStyle:"icon2-arrow",eventList:{onSubmitForm:function(convState){return console.log("completed"),convState.form.submit(),!0},onInputSubmit:function(convState,readyCallback){convState.current.input.hasOwnProperty("callback")?"string"==typeof convState.current.input.callback?window[convState.current.input.callback](convState,readyCallback):convState.current.input.callback(convState,readyCallback):readyCallback()}},formIdName:"convForm",inputIdName:"userInput",loadSpinnerVisible:"",buttonText:"â–¶"},options),inputs=$(this).find("input, select, textarea").map(function(){var input={};return $(this).attr("name")&&(input.name=$(this).attr("name")),$(this).attr("data-no-answer")&&(input.noAnswer=!0),$(this).attr("required")&&(input.required=!0),$(this).attr("type")&&(input.type=$(this).attr("type")),input.questions=$(this).attr("data-conv-question").split("|"),$(this).attr("data-pattern")&&(input.pattern=$(this).attr("data-pattern")),$(this).attr("data-callback")&&(input.callback=$(this).attr("data-callback")),$(this).is("select")&&(input.type="select",input.answers=$(this).find("option").map(function(){var answer={};return answer.text=$(this).text(),answer.value=$(this).val(),$(this).attr("data-callback")&&(answer.callback=$(this).attr("data-callback")),answer}).get(),$(this).prop("multiple")?(input.multiple=!0,input.selected=[]):(input.multiple=!1,input.selected="")),$(this).parent("div[data-conv-case]").length&&(input.case=$(this).parent("div[data-conv-case]").attr("data-conv-case"),input.fork=$(this).parent("div[data-conv-case]").parent("div[data-conv-fork]").attr("data-conv-fork")),input.element=this,$(this).detach(),input}).get();if(inputs.length){var form=$(this).find("form").hide(),inputForm;switch(parameters.inputIdHashTagName="#"+parameters.inputIdName,parameters.typeInputUi){case"input":inputForm=$('<form id="'+parameters.formIdName+'" class="convFormDynamic"><div class="options dragscroll"></div><input id="'+parameters.inputIdName+'" type="text" placeholder="'+parameters.placeHolder+'" class="userInputDynamic"></><button type="submit" class="submit">'+parameters.buttonText+'</button><span class="clear"></span></form>');break;case"textarea":inputForm=$('<form id="'+parameters.formIdName+'" class="convFormDynamic"><div class="options dragscroll"></div><textarea id="'+parameters.inputIdName+'" rows="1" placeholder="'+parameters.placeHolder+'" class="userInputDynamic"></textarea><button type="submit" class="submit">'+parameters.buttonText+'</button><span class="clear"></span></form>');break;default:return console.log("typeInputUi must be input or textarea"),!1}$(this).append('<div class="wrapper-messages"><div class="spinLoader '+parameters.loadSpinnerVisible+' "></div><div id="messages"></div></div>'),$(this).append(inputForm);var singleState=new SingleConvState(inputs[0]),state=new ConvState(this,singleState,form,parameters,originalFormHtml);for(var i in inputs)0!=i&&inputs.hasOwnProperty(i)&&(singleState.next=new SingleConvState(inputs[i]),singleState=singleState.next);return setTimeout(function(){$.when($("div.spinLoader").addClass("hidden")).done(function(){var messageObj=$('<div class="message to typing"><div class="typing_loader"></div></div>');$(state.wrapper).find("#messages").append(messageObj),state.scrollDown(),state.printQuestion()})},parameters.timeOutFirstQuestion),$(inputForm).find(parameters.inputIdHashTagName).keypress(function(e){if(13==e.which){var input=$(this).val(),results;if(e.preventDefault(),"select"!=state.current.input.type||state.current.input.multiple)if("select"==state.current.input.type&&state.current.input.multiple){var results;if(""!=input.trim())(results=state.current.input.answers.filter(function(el){return-1!=el.text.toLowerCase().indexOf(input.toLowerCase())})).length?-1==state.current.input.selected.indexOf(results[0].value)?(state.current.input.selected.push(results[0].value),state.wrapper.find(parameters.inputIdHashTagName).val("")):state.wrapper.find(parameters.inputIdHashTagName).val(""):state.wrapper.find(parameters.inputIdHashTagName).addClass("error");else state.current.input.selected.length&&$(this).parent("form").submit()}else""==input.trim()||state.wrapper.find(parameters.inputIdHashTagName).hasClass("error")?$(state.wrapper).find(parameters.inputIdHashTagName).focus():$(this).parent("form").submit();else if(state.current.input.required)state.wrapper.find("#userInputBot").addClass("error");else(results=state.current.input.answers.filter(function(el){return-1!=el.text.toLowerCase().indexOf(input.toLowerCase())})).length?(state.current.input.selected=results[0],$(this).parent("form").submit()):state.wrapper.find(parameters.inputIdHashTagName).addClass("error")}autosize.update($(state.wrapper).find(parameters.inputIdHashTagName))}).on("input",function(e){if("select"==state.current.input.type){var input=$(this).val(),results=state.current.input.answers.filter(function(el){return-1!=el.text.toLowerCase().indexOf(input.toLowerCase())});results.length?(state.wrapper.find(parameters.inputIdHashTagName).removeClass("error"),state.printAnswers(results,state.current.input.multiple)):state.wrapper.find(parameters.inputIdHashTagName).addClass("error")}else if(state.current.input.hasOwnProperty("pattern")){var reg;new RegExp(state.current.input.pattern,"i").test($(this).val())?state.wrapper.find(parameters.inputIdHashTagName).removeClass("error"):state.wrapper.find(parameters.inputIdHashTagName).addClass("error")}}),$(inputForm).find("button.submit").click(function(e){var input=$(state.wrapper).find(parameters.inputIdHashTagName).val();if(e.preventDefault(),"select"!=state.current.input.type||state.current.input.multiple)if("select"==state.current.input.type&&state.current.input.multiple){if(state.current.input.required&&0===state.current.input.selected.length)return!1;var results;""!=input.trim()&&input!=parameters.placeHolder?(results=state.current.input.answers.filter(function(el){return-1!=el.text.toLowerCase().indexOf(input.toLowerCase())})).length?-1==state.current.input.selected.indexOf(results[0].value)?(state.current.input.selected.push(results[0].value),state.wrapper.find(parameters.inputIdHashTagName).val("")):state.wrapper.find(parameters.inputIdHashTagName).val(""):state.wrapper.find(parameters.inputIdHashTagName).addClass("error"):state.current.input.selected.length&&($(this).removeClass("glow"),$(this).parent("form").submit())}else""==input.trim()||state.wrapper.find(parameters.inputIdHashTagName).hasClass("error")?$(state.wrapper).find(parameters.inputIdHashTagName).focus():$(this).parent("form").submit();else{if(state.current.input.required&&!state.current.input.selected)return!1;var results;input==parameters.placeHolder&&(input=""),(results=state.current.input.answers.filter(function(el){return-1!=el.text.toLowerCase().indexOf(input.toLowerCase())})).length?(state.current.input.selected=results[0],$(this).parent("form").submit()):state.wrapper.find(parameters.inputIdHashTagName).addClass("error")}autosize.update($(state.wrapper).find(parameters.inputIdHashTagName))}),$(inputForm).submit(function(e){e.preventDefault();var answer=$(this).find(parameters.inputIdHashTagName).val();$(this).find(parameters.inputIdHashTagName).val(""),"select"==state.current.input.type?state.current.input.multiple?state.answerWith(state.current.input.selected.join(", "),state.current.input.selected):state.answerWith(state.current.input.selected.text,state.current.input.selected):state.answerWith(answer,answer)}),"function"==typeof autosize&&($textarea=$(state.wrapper).find(parameters.inputIdHashTagName),autosize($textarea)),state}return!1}}(jQuery);


                var convForm;
                $("#chat").click(function(){
                    if ($("#chatbot").is(":hidden")){
                        $("#chat .zmdi").removeClass("animated");
                        $("#chatbot").slideDown();
                        jQuery(function($){
                            convForm = $('#chatbot').convform({
                                buttonText: "<i class='zmdi zmdi-arrow-right'></i>",
                                eventList:{
                                    onInputSubmit: function(convState, ready) {

                                        function searchOrEmail(){
                                            convState.current.next = convState.newState({
                                                type: 'select',
                                                name: "searchOrEmail",
                                                questions: ["No worries! Would you like to search our website? I can also send an email to the correct person and ask them to reach out to you."],
                                                answers: [
                                                    {text: "Let's try searching!", value: "search"},
                                                    {text: "I'd like to talk to a person.", value: "email"}
                                                ]
                                            });
                                        }

                                        function grammar(gender){
                                            
                                            var pronoun, possessive;

                                            if (gender == "f"){
                                                pronoun = "her";
                                                possessive = "her";
                                            } else if (gender == "m"){
                                                pronoun = "him";
                                                possessive = "his";
                                            } else if (gender == "n"){
                                                pronoun = "them";
                                                possessive = "their";
                                            }

                                            return {"pronoun":pronoun,"possessive":possessive};
                                        }

                                        function goodbye(){
                                            convState.current.next.next = convState.newState({
                                                type: "input",
                                                noAnswer: true,
                                                questions: ["Please come back if you don't find what you're looking for!"]
                                            });
        
                                        }

                                        function exit(){
                                            setTimeout(function(){
                                                $("#chatbot").slideUp();
                                                setTimeout(function(){
                                                    convState.destroy();
                                                },500);
                                            },750);
                                        }

                                        var areas = [{"area": "Biblical Studies", "director":"Dr. David Bosworth", "website":"https://trs.catholic.edu/academics/graduate/biblical-studies/index.html","email":"bosworth@cua.edu","gender":"m"},{"area": "Catechetics", "director":"Fr. Raymond Studzinski", "website":"https://trs.catholic.edu/academics/graduate/catechetics/index.html","email":"studzinski@cua.edu","phone":"202-319-6848","gender":"m"},{"area": "Church History", "director":"Dr. Susan Wessel", "website":"https://trs.catholic.edu/academics/graduate/church-history/index.html","email":"wessels@cua.edu","gender":"f"},{"area": "Historical and Systematic Theology", "director":"Msgr. Paul McPartlan", "website":"https://trs.catholic.edu/academics/graduate/historical-systematic-theology/index.html","email":"mcpartlan@cua.edu","phone":"202-319-6515","gender":"m"},{"area": "Liturgical Studies and Sacramental Theology", "director":"Fr. Dominic Serra", "website":"https://trs.catholic.edu/academics/graduate/liturgical-studies-sacramental-theology/index.html","email":"serra@cua.edu","phone":"202-319-6519","gender":"m"},{"area": "Moral Theology/Ethics", "director":"Dr. David Cloutier", "website":"https://trs.catholic.edu/academics/graduate/moral-theology-ethics/index.html","email":"mcpartlan@cua.edu","phone":"202-319-6515","gender":"m"},{"area": "Liturgical Studies and Sacramental Theology", "director":"Fr. Dominic Serra", "website":"https://trs.catholic.edu/academics/graduate/liturgical-studies-sacramental-theology/index.html","email":"cloutierd@cua.edu","gender":"m"},{"area": "Pastoral Studies", "director":"Dr. Susan Timoney", "website":"https://trs.catholic.edu/academics/graduate/pastoral-studies/index.html","email":"timoney@cua.edu","phone":"202-319-6522","gender":"f"},{"area": "Religion and Culture", "director":"Dr. Charles Jones", "website":"https://trs.catholic.edu/academics/graduate/religion-culture/index.html","email":"jonesc@cua.edu","phone":"202-319-6882","gender":"m"},{"area": "Spirituality", "director":"Fr. Raymond Studzinksi", "website":"https://trs.catholic.edu/academics/graduate/spirituality/index.html","email":"studzinski@cua.edu","phone":"202-319-6848","gender":"m"},{"area": "our undergraduate program", "director":"Dr. Susan Timoney", "website":"https://trs.catholic.edu/academics/undergraduate/index.html","email":"timoney@cua.edu","gender":"f"},{"area": "our bachelor's program", "director":"Dr. Susan Timoney", "website":"https://trs.catholic.edu/academics/undergraduate/index.html","email":"timoney@cua.edu","gender":"f"}];

                                        var fuseOptions = {
                                            shouldSort: true,
                                            tokenize: true,
                                            threshold: 0.6,
                                            location: 0,
                                            distance: 100,
                                            maxPatternLength: 32,
                                            minMatchCharLength: 1,
                                            keys: [
                                                "area"
                                            ]
                                        };

                                        if (convState.current.input.name == "level" && convState.current.answer.value == "undergrad"){

                                            convState.current.next = convState.newState({
                                                type: "input",
                                                noAnswer: true,
                                                questions: ["Great! You may want to reach out to our Academic Specialist, <b>Tania Valencia-Hernandez</b>."]
                                            });

                                            convState.current.next.next = convState.newState({
                                                type: "select",
                                                questions: ["Her phone number is 202-319-5683, or you can shoot her an email at <a href='valencit@cua.edu' target='_blank'>valencit@cua.edu</a>. She would love to hear from you!"],
                                                answers: [
                                                    {text: "Got it, thanks!", value:"continue"}
                                                ]
                                            });

                                            convState.current.next.next.next = convState.newState({
                                                type: "select",
                                                name: "openNewTab",
                                                questions: ["Would you like me to open a page with more information about our undergraduate programs in a new tab?"],
                                                answers: [
                                                    {text: "Yes, please!", value: "yes"},
                                                    {text: "No thank you.", value: "no"}
                                                ]
                                            });

                                        } else if (convState.current.input.name == "level" && convState.current.answer.value == "grad"){

                                             convState.current.next = convState.newState({
                                                type: "input",
                                                name: "programResponse",
                                                questions: ["Great! What program are you enrolled in?"]
                                            });

                                        } else if (convState.current.input.name == "programResponse") {

                                            var fuse = new Fuse(areas, fuseOptions); 
                                            
                                            program = fuse.search(convState.current.answer.value)[0]["area"];
                                            website = fuse.search(convState.current.answer.value)[0]["website"];
                                            email = fuse.search(convState.current.answer.value)[0]["email"];
                                            phone = fuse.search(convState.current.answer.value)[0]["phone"];
                                            name = fuse.search(convState.current.answer.value)[0]["director"];
                                            gender = fuse.search(convState.current.answer.value)[0]["gender"];
                                            
                                            var contact, pronouns;

                                            if (gender == "m"){
                                                pronouns = ["He","him"]
                                            } else if (gender == "f"){
                                                pronouns = ["She","her"]
                                            }
                                            if (phone){
                                                contact = pronouns[0] + " would love to hear from you! You can call " + pronouns[1] + " at " + phone + ", or shoot " + pronouns[1] + " an email at <a href='" + email + "' target='_blank'>" + email + ".";
                                            } else {
                                                contact = pronouns[0] + " would love to hear from you! You can shoot " + pronouns[1] + " an email at <a href='" + email + "' target='_blank'>" + email + ".";
                                            }

                                            convState.current.next = convState.newState({
                                                type: 'input',
                                                noAnswer: true,
                                                questions: ["Thanks! It sounds like you are looking for " + program + "."]
                                            });


                                            convState.current.next.next = convState.newState({
                                                type: 'input',
                                                noAnswer: true,
                                                questions: ["The area director for " + program + " is <b>" + name + "</b>."]
                                            });
                                           
                                            convState.current.next.next.next = convState.newState({
                                                type: 'select',
                                                questions: [contact],
                                                answers: [
                                                    {text: "Got it, thanks!"}
                                                ]
                                            });


                                            convState.current.next.next.next.next = convState.newState({
                                                type: "select",
                                                name: "openNewTab-undergrad",
                                                questions: ["Would you like me to open the " + program + " webpage in a new tab?"],
                                                answers: [
                                                    {text: "Yes, please!", value: "yes"},
                                                    {text: "No thank you.", value: "no"}
                                                ]
                                            });

                                        } else if (convState.current.input.name == "openNewTab" && convState.current.answer.value == "yes") {

                                            convState.current.next = convState.newState({
                                                type: "input",
                                                noAnswer: true,
                                                questions: ["Sounds good! It was great talking to you!"],
                                            });

                                            goodbye();

                                            setTimeout(function(){
                                                window.open("https://trs.catholic.edu/academics/undergraduate/index.html");
                                                exit();
                                            }, 4000);


                                        //User would like to open program website in a new tab
                                        } else if (convState.current.input.name == "openNewTab" && convState.current.answer.value == "yes"){
                                            convState.current.next = convState.newState({
                                                type: "input",
                                                noAnswer: true,
                                                questions: ["Sounds good! It was great talking to you!"],
                                            });

                                            goodbye();

                                            setTimeout(function(){
                                                window.open(website);
                                                exit();
                                            }, 2000);

                                        //User would not like to open program website in a new tab
                                        } else if (convState.current.input.name.indexOf("openNewTab") > -1 && convState.current.answer.value == "no"){

                                            convState.current.next = convState.newState({
                                                type: "input",
                                                noAnswer: true,
                                                questions: ["Sounds good! It was great talking to you!"],
                                            });

                                            goodbye();
                                            
                                            setTimeout(function(){
                                                exit();
                                            }, 2000);

                                        //Popular pages
                                        } else if (convState.current.input.name == "potentialStudentPages" || convState.current.input.name == "currentStudentPages" || convState.current.input.name == "communityPages" || convState.current.input.name == "donorOpportunities" || convState.current.input.name == "alumOpportunities"){

                                            if (["donorOpportunities","alumOpportunities"].indexOf(convState.current.input.name) <= -1){
                                                userType = convState.current.input.name.split("Pages")[0];
                                            } else if (["donorOpportunities","alumOpportunities"].indexOf(convState.current.input.name) > -1){
                                                userType = convState.current.input.name.split("Opportunities")[0];
                                            }
                                            
                                            var pages = {"about":"https://trs.catholic.edu/about-us/index.html", "studentLife":"https://trs.catholic.edu/student-experience/index.html","academicAreas":"https://trs.catholic.edu/academics/academic-areas/index.html","scholarships":"https://trs.catholic.edu/admission/scholarships-and-aid/index.html","tour":"https://www.catholic.edu/admission/undergraduate/visit-campus/virtual-tour/index.html","admission":"https://trs.catholic.edu/admission/index.html","forms":"https://enrollment-services.catholic.edu/forms/index.html","calendar":"https://enrollment-services.catholic.edu/academic-calendar/index.html","timetable":"https://trs.catholic.edu/academics/courses/course-schedules/index.html","catalog":"https://trs.catholic.edu/academics/courses/index.html","givingPage":"https://engage.catholic.edu/"};
                                        
                                            var page = "no";
                                            for (key in pages){
                                                if (key.indexOf(convState.current.answer.value) > -1){
                                                    page = pages[key];
                                                }
                                            }

                                            //Don't want to field random emails from the community
                                            if (page == "no" && userType == "community"){

                                                convState.current.next = convState.newState({
                                                    type: "input",
                                                    questions: ["Okay, let's search for the information you need."],
                                                    noAnswer: true
                                                });

                                                convState.current.next.next = convState.newState({
                                                    type: "input",
                                                    name: "searchTerm",
                                                    questions: ["Please tell me what you're looking for:"]
                                                });

                                            //Send email to advancement/alumni HERE HERE HERE
                                            } else if (page == "no" && ["donor","alum"].indexOf(userType) > -1){
                                                
                                                convState.current.next = convState.newState({
                                                    type: "input",
                                                    noAnswer: true,
                                                    questions: ["Great! You may want to reach out to our Assistant Dean for Advancement, <b>Malcolm Kelly</b>."]
                                                });

                                                convState.current.next.next = convState.newState({
                                                    type: "select",
                                                    questions: ["His phone number is 202-319-6935, or you can shoot him an email at <a href='kellymal@cua.edu' target='_blank'>kelleymal@cua.edu</a>. He would love to hear from you!"],
                                                    answers: [
                                                        {text: "Got it, thanks!", value:"continue"}
                                                    ]
                                                });

                                            //If they haven't found the page they're looking for
                                            } else if (page == "no" && userType != ("community" || "donor" || "alum")){

                                                searchOrEmail();

                                            //Otherwise open the tab
                                            } else {

                                                convState.current.next = convState.newState({
                                                    type: "input",
                                                    noAnswer: true,
                                                    questions: ["Awesome! I will open the page for you in a new tab. Make sure your pop-ups are enabled!"]
                                                });

                                                goodbye();

                                                setTimeout(function(){
                                                    window.open(page);
                                                    exit();
                                                }, 7000);

                                            }
                       
                                        //Search or email fork
                                        } else if (convState.current.input.name == "searchOrEmail"){

                                            if (convState.current.answer.value == "search"){

                                                convState.current.next = convState.newState({
                                                    type: "input",
                                                    name: "searchTerm",
                                                    questions: ["Great. Go ahead and enter your search here:"]
                                                });
                                
                                            } else if (convState.current.answer.value == "email"){

                                                convState.current.next = convState.newState({
                                                    type: "input",
                                                    noAnswer: true,
                                                    questions: ["No worries. You should reach out to our Academic Specialist, <b>Tania Valencia-Hernandez</b>."]
                                                });

                                                convState.current.next.next = convState.newState({
                                                    type: "select",
                                                    name:"writeItDown",
                                                    questions: ["Her phone number is 202-319-5683, or you can shoot her an email at <a href='valencit@cua.edu' target='_blank'>valencit@cua.edu</a>. She would love to hear from you!"],
                                                    answers: [
                                                        {text: "Got it, thanks!", value: "continue"}
                                                    ]
                                                });

                                                
                                            }

                                        } else if (convState.current.answer.value == "continue"){

                                            convState.current.next = convState.newState({
                                                type: "input",
                                                noAnswer: true,
                                                questions: ["It was great chatting with you!"]
                                            });

                                            goodbye();

                                            setTimeout(function(){
                                                
                                                exit();
                                            }, 3000);

                                        //Search
                                        } else if (convState.current.input.name == "searchTerm"){

                                            var search = convState.current.answer.value;
                                            
                                            convState.current.next = convState.newState({
                                                type: "input",
                                                noAnswer: true,
                                                questions: ["I'm going to open a new tab with the search results for &ldquo;" + search + "&rdquo;. Make sure your pop-ups are enabled! ðŸ™"]
                                            });

                                            goodbye();

                                            setTimeout(function(){
                                                window.open("https://trs.catholic.edu/search/index.html?q=" + search + "+site%3Atrs.catholic.edu");
                                                exit();
                                            }, 3000);
                                        }

                                        setTimeout(ready, Math.random()*500+100);
                                    }
                                }
                            });
                        });
                    } else {
                        $("#chatbot").slideUp();
                        $("#chat .zmdi").addClass("animated");
                        setTimeout(function(){
                            convForm.destroy();
                        }, 500);
                    }
                });
            });
        });
