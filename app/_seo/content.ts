// All text for the service pages and guides, in English and Arabic.
// Edit the text here. Keep every claim true and consistent with your contract and your main page.
export type Lang = "en" | "ar";
export type Kind = "service" | "guide";
type L<T> = { en: T; ar: T };
export interface Section { h: string; p?: string[]; ul?: string[] }
export interface Faq { q: string; a: string }
export interface PageData {
  slug: string;
  kind: Kind;
  title: L<string>;       // <title> without the brand (the layout adds it)
  h1: L<string>;
  description: L<string>; // meta description, about 150 characters
  intro: L<string>;
  sections: L<Section[]>;
  faq: L<Faq[]>;
  related: string[];      // slugs of related pages
}

const survey: L<Faq> = {
  en: { q: "How do I start?", a: "Contact us on WhatsApp to book a free site survey. After the survey you receive a technical offer and a financial offer, and the work starts after the contract." },
  ar: { q: "أبدأ إزاي؟", a: "ابعتلنا على واتساب لحجز معاينة مجانية. بعد المعاينة بتستلم عرض فني وعرض مالي، والشغل بيبدأ بعد التعاقد." },
};

export const pages: PageData[] = [
  {
    slug: "smart-lighting", kind: "service",
    title: { en: "Smart Lighting Control in Cairo, Egypt", ar: "التحكم الذكي في الإضاءة في القاهرة ومصر" },
    h1: { en: "Smart lighting for apartments, villas and offices", ar: "إضاءة ذكية للشقق والفيلات والمكاتب" },
    description: {
      en: "Smart lighting scenes, dimming and schedules for apartments, villas and offices in Cairo, Egypt. Every project starts with a free site survey.",
      ar: "مشاهد إضاءة ذكية وتعتيم وجداول تشغيل للشقق والفيلات والمكاتب في القاهرة ومصر. كل مشروع بيبدأ بمعاينة مجانية.",
    },
    intro: {
      en: "Smart lighting lets you control every light from a wall panel, your phone or your voice, and run scenes such as Welcome home, Movie night and Good night with one touch.",
      ar: "الإضاءة الذكية بتخليك تتحكم في كل نور من لوحة على الحيطة أو من الموبايل أو بصوتك، وتشغّل مشاهد زي أهلاً في البيت وليلة فيلم وتصبح على خير بلمسة واحدة.",
    },
    sections: {
      en: [
        { h: "What we install", ul: ["Relays and modules behind your existing wall switches", "Dimmers for compatible dimmable lights", "Wall panels and scene buttons", "Presence and motion sensors that switch lights automatically", "Colour LED strips for ambient lighting"] },
        { h: "Your normal switches keep working", p: ["Manual switches stay connected, so the lights still work if the Wi-Fi or the internet goes down."] },
        { h: "Older apartments without a neutral wire", p: ["Many older switch boxes have no neutral wire. We check every box during the free site survey and choose a module designed for that situation."] },
      ],
      ar: [
        { h: "اللي بنركّبه", ul: ["ريليهات ومديولات خلف السويتشات الحالية", "دايمرز للإضاءة القابلة للتعتيم", "لوحات حيطة وأزرار سيناريوهات", "حساسات تواجد وحركة بتشغّل النور أوتوماتيك", "شرايط LED ملونة للإضاءة الديكورية"] },
        { h: "السويتشات العادية بتفضل شغالة", p: ["السويتشات اليدوية بتفضل متوصلة، فالنور بيشتغل حتى لو الواي فاي أو الإنترنت وقع."] },
        { h: "الشقق القديمة اللي مفيهاش نيوترال", p: ["علب سويتشات كتير قديمة مفيهاش سلك نيوترال. بنفحص كل علبة في المعاينة المجانية ونختار مديول مصمم للحالة دي."] },
      ],
    },
    faq: {
      en: [
        { q: "Can I keep my existing switches?", a: "Yes. We install the smart modules behind your switches and keep the manual switches connected." },
        { q: "Can any light be dimmed?", a: "No. The lamp or driver must be dimmable, so we check each circuit during the survey." },
        survey.en,
      ],
      ar: [
        { q: "أقدر أحتفظ بالسويتشات الحالية؟", a: "أيوه. بنركّب المديولات الذكية خلف السويتشات وبنسيب السويتشات اليدوية متوصلة." },
        { q: "أي لمبة تتعتّم؟", a: "لأ. لازم اللمبة أو الدرايفر يكون قابل للتعتيم، عشان كده بنفحص كل دايرة في المعاينة." },
        survey.ar,
      ],
    },
    related: ["no-neutral-wire-smart-home-egypt", "motorized-curtains-shading", "zigbee-vs-wifi-smart-home"],
  },
  {
    slug: "motorized-curtains-shading", kind: "service",
    title: { en: "Motorized Curtains and Shutters in Cairo, Egypt", ar: "ستاير وشتر موتورات في القاهرة ومصر" },
    h1: { en: "Motorized curtains and shutters with scenes and schedules", ar: "ستاير وشتر بموتور مع سيناريوهات وجداول" },
    description: {
      en: "Motorized curtains and roller shutters with schedules, scenes and phone or voice control for homes in Cairo, Egypt. Free site survey first.",
      ar: "ستاير وشتر بموتور مع جداول وسيناريوهات وتحكم بالموبايل أو بالصوت للبيوت في القاهرة ومصر. معاينة مجانية الأول.",
    },
    intro: {
      en: "Motorized shading opens and closes curtains and shutters at the touch of a button, on a schedule, or as part of a scene such as Good night or Movie night.",
      ar: "التحكم الموتوري بيفتح ويقفل الستاير والشتر بضغطة زرار أو بجدول أو كجزء من سيناريو زي تصبح على خير وليلة فيلم.",
    },
    sections: {
      en: [
        { h: "What we install", ul: ["Control modules for electric roller shutters and blinds", "Motorized curtain tracks and motors", "Wall buttons, remotes and panels", "Scenes that combine curtains with lights"] },
        { h: "Motor type matters", p: ["Not every motor works with every controller. During the free site survey we check the motor type, its current rating and the wall box so the right control is chosen from the start."] },
        { h: "Good night in one press", p: ["A scene can switch off the lights and close the curtains together, and a morning scene can open them again."] },
      ],
      ar: [
        { h: "اللي بنركّبه", ul: ["مديولات تحكم لشتر وبرادي كهربية", "مجاري ستاير وموتورات", "أزرار حيطة وريموتات ولوحات", "سيناريوهات بتربط الستاير بالنور"] },
        { h: "نوع الموتور مهم", p: ["مش كل موتور بيشتغل مع أي كنترولر. في المعاينة المجانية بنفحص نوع الموتور وتياره وعلبة الحيطة عشان نختار التحكم المناسب من الأول."] },
        { h: "تصبح على خير بضغطة", p: ["السيناريو بيقدر يطفي النور ويقفل الستاير مع بعض، وسيناريو الصبح يفتحها تاني."] },
      ],
    },
    faq: {
      en: [
        { q: "Can my existing curtains or shutters be motorized?", a: "Often yes, but it depends on the motor or track you have. We check this during the free site survey." },
        { q: "Can curtains open automatically in the morning?", a: "Yes. Schedules and scenes can open and close them at set times." },
        survey.en,
      ],
      ar: [
        { q: "الستاير أو الشتر الحالي ينفع يتحوّل لموتور؟", a: "في حالات كتير أيوه، بس ده بيتوقف على الموتور أو المجرى اللي عندك. بنفحصه في المعاينة المجانية." },
        { q: "الستاير تفتح لوحدها الصبح؟", a: "أيوه. الجداول والسيناريوهات بتفتحها وتقفلها في مواعيد محددة." },
        survey.ar,
      ],
    },
    related: ["smart-lighting", "voice-mobile-control", "start-a-smart-home-apartment-cairo"],
  },
  {
    slug: "security-cctv", kind: "service",
    title: { en: "Smart Security and CCTV in Cairo, Egypt", ar: "كاميرات وأمان ذكي في القاهرة ومصر" },
    h1: { en: "Smart security: cameras, sensors and alerts", ar: "أمان ذكي: كاميرات وحساسات وتنبيهات" },
    description: {
      en: "Indoor and outdoor cameras, door and motion sensors and water-leak alerts for homes and offices in Cairo, Egypt. Free site survey first.",
      ar: "كاميرات داخلية وخارجية وحساسات أبواب وحركة وتنبيهات تسريب مياه للبيوت والمكاتب في القاهرة ومصر. معاينة مجانية الأول.",
    },
    intro: {
      en: "A smart security system joins cameras and sensors in one app, so you get an alert on your phone when something happens and can look at your home from anywhere.",
      ar: "نظام الأمان الذكي بيجمع الكاميرات والحساسات في تطبيق واحد، فبيوصلك تنبيه على موبايلك لما يحصل حاجة وتقدر تشوف بيتك من أي مكان.",
    },
    sections: {
      en: [
        { h: "What we install", ul: ["Indoor and outdoor cameras", "Door and window sensors", "Motion and presence sensors", "Water-leak sensors and smart water valves", "Alerts and scenes that react to events"] },
        { h: "Water-leak protection", p: ["A leak sensor under the sink alerts your phone, and a scene can close a smart water valve automatically."] },
        { h: "Recording options", p: ["Storage options such as memory cards or cloud depend on the camera model. We explain them in the technical offer."] },
      ],
      ar: [
        { h: "اللي بنركّبه", ul: ["كاميرات داخلية وخارجية", "حساسات أبواب وشبابيك", "حساسات حركة وتواجد", "حساسات تسريب مياه ومحابس مياه ذكية", "تنبيهات وسيناريوهات بتتفاعل مع الأحداث"] },
        { h: "الحماية من تسريب المياه", p: ["حساس تسريب تحت الحوض بيبعتلك تنبيه على الموبايل، والسيناريو يقدر يقفل محبس مياه ذكي أوتوماتيك."] },
        { h: "خيارات التسجيل", p: ["خيارات التخزين زي كروت الذاكرة أو السحابة بتختلف حسب موديل الكاميرا. بنشرحها في العرض الفني."] },
      ],
    },
    faq: {
      en: [
        { q: "Can I watch the cameras from my phone?", a: "Yes. Remote viewing and alerts are available through the app of the system we install." },
        { q: "Do door sensors work with lights?", a: "Yes. For example, opening the front door can switch on the entrance lights as part of a Welcome home scene." },
        survey.en,
      ],
      ar: [
        { q: "أقدر أشوف الكاميرات من موبايلي؟", a: "أيوه. المشاهدة عن بعد والتنبيهات متاحة من تطبيق النظام اللي بنركّبه." },
        { q: "حساس الباب ممكن يشغّل النور؟", a: "أيوه. مثلاً فتح باب الشقة يقدر يضوّي نور المدخل ضمن سيناريو أهلاً في البيت." },
        survey.ar,
      ],
    },
    related: ["smart-locks-access", "smart-lighting", "voice-mobile-control"],
  },
  {
    slug: "smart-locks-access", kind: "service",
    title: { en: "Smart Locks and Access Control in Cairo, Egypt", ar: "أقفال ذكية وتحكم في الدخول في القاهرة ومصر" },
    h1: { en: "Smart locks and access control for homes and offices", ar: "أقفال ذكية وتحكم في الدخول للبيوت والمكاتب" },
    description: {
      en: "Fingerprint, PIN and card smart locks with temporary access for guests, for homes and offices in Cairo, Egypt. Free site survey first.",
      ar: "أقفال ذكية بالبصمة والكود والكارت مع دخول مؤقت للضيوف، للبيوت والمكاتب في القاهرة ومصر. معاينة مجانية الأول.",
    },
    intro: {
      en: "Smart locks let family, guests and staff in with a fingerprint, a code or a card, and you decide who can enter and when.",
      ar: "الأقفال الذكية بتدخّل العيلة والضيوف والموظفين بالبصمة أو الكود أو الكارت، وإنت اللي بتحدد مين يدخل وإمتى.",
    },
    sections: {
      en: [
        { h: "What we install", ul: ["Fingerprint, PIN and card locks", "Temporary codes for guests", "Entrance scenes that react to the door", "Door sensors that report open and closed"] },
        { h: "Fits the door you have", p: ["Lock models differ in size and door preparation. We check your door during the free site survey before recommending a model."] },
      ],
      ar: [
        { h: "اللي بنركّبه", ul: ["أقفال بالبصمة والكود والكارت", "أكواد مؤقتة للضيوف", "سيناريوهات مدخل بتتفاعل مع الباب", "حساسات أبواب بتبلّغ فتح وقفل"] },
        { h: "بيناسب الباب اللي عندك", p: ["موديلات الأقفال بتختلف في المقاس وتجهيز الباب. بنفحص بابك في المعاينة المجانية قبل ما نرشح موديل."] },
      ],
    },
    faq: {
      en: [
        { q: "Can I give temporary access to a guest?", a: "Yes, with locks that support temporary codes. We confirm this when choosing the model." },
        survey.en,
      ],
      ar: [
        { q: "أقدر أدي ضيف دخول مؤقت؟", a: "أيوه، مع الأقفال اللي بتدعم الأكواد المؤقتة. بنأكد ده وقت اختيار الموديل." },
        survey.ar,
      ],
    },
    related: ["security-cctv", "smart-lighting", "start-a-smart-home-apartment-cairo"],
  },
  {
    slug: "climate-hvac", kind: "service",
    title: { en: "Climate and AC Automation in Cairo, Egypt", ar: "التحكم الذكي في التكييف والحرارة في القاهرة ومصر" },
    h1: { en: "Climate and air-conditioning automation", ar: "أتمتة التكييف والحرارة" },
    description: {
      en: "Temperature sensors, schedules and phone control for compatible air conditioners in homes and offices in Cairo, Egypt. Free site survey first.",
      ar: "حساسات حرارة وجداول وتحكم بالموبايل للتكييفات المتوافقة في البيوت والمكاتب في القاهرة ومصر. معاينة مجانية الأول.",
    },
    intro: {
      en: "Climate automation lets you set schedules and scenes for your air conditioners and see room temperature, so rooms are comfortable when you need them.",
      ar: "أتمتة التكييف بتخليك تعمل جداول وسيناريوهات للتكييفات وتشوف حرارة الأوضة، فالأوض تبقى مريحة وقت ما تحتاجها.",
    },
    sections: {
      en: [
        { h: "What we install", ul: ["Temperature and humidity sensors", "Smart controllers for compatible air conditioners", "Schedules and scenes", "Room readings on a wall panel or in the app"] },
        { h: "Compatibility", p: ["Control depends on how your air conditioner can be controlled. We check each unit during the free site survey."] },
      ],
      ar: [
        { h: "اللي بنركّبه", ul: ["حساسات حرارة ورطوبة", "كنترولرات ذكية للتكييفات المتوافقة", "جداول وسيناريوهات", "قراءات الأوض على لوحة حيطة أو في التطبيق"] },
        { h: "التوافق", p: ["التحكم بيعتمد على الطريقة اللي بيتحكم بيها التكييف بتاعك. بنفحص كل وحدة في المعاينة المجانية."] },
      ],
    },
    faq: {
      en: [
        { q: "Can my existing air conditioner be controlled from the phone?", a: "In many cases yes, with a compatible controller. We check each unit during the survey." },
        survey.en,
      ],
      ar: [
        { q: "التكييف الحالي ينفع يتحكم فيه من الموبايل؟", a: "في حالات كتير أيوه بكنترولر متوافق. بنفحص كل وحدة في المعاينة." },
        survey.ar,
      ],
    },
    related: ["energy-optimization", "voice-mobile-control", "smart-lighting"],
  },
  {
    slug: "energy-optimization", kind: "service",
    title: { en: "Energy Monitoring and Optimization in Egypt", ar: "مراقبة وترشيد الطاقة في مصر" },
    h1: { en: "Energy monitoring and optimization", ar: "مراقبة وترشيد استهلاك الطاقة" },
    description: {
      en: "Live energy metering, alerts and schedules for homes and offices in Egypt, to see and reduce avoidable consumption. Free site survey first.",
      ar: "قياس استهلاك الكهرباء لحظياً وتنبيهات وجداول للبيوت والمكاتب في مصر، عشان تشوف الاستهلاك وتقلل الهدر. معاينة مجانية الأول.",
    },
    intro: {
      en: "Energy monitoring shows where electricity is used, so schedules and automation can switch off what you do not need.",
      ar: "مراقبة الطاقة بتوريك الكهرباء بتتصرف فين، فالجداول والأتمتة تقدر تطفي اللي مش محتاجه.",
    },
    sections: {
      en: [
        { h: "What we install", ul: ["Energy meters for circuits and appliances", "Smart plugs with energy readings where suitable", "Alerts and schedules", "Reports in the app"] },
        { h: "What to expect", p: ["Savings depend on the home and how it is used. We do not promise a fixed percentage; we show you the readings so you can decide."] },
      ],
      ar: [
        { h: "اللي بنركّبه", ul: ["عدادات طاقة للدوائر والأجهزة", "فيش ذكية بقراءات استهلاك في الأماكن المناسبة", "تنبيهات وجداول", "تقارير في التطبيق"] },
        { h: "إيه المتوقع", p: ["التوفير بيعتمد على البيت وطريقة الاستخدام. مبنوعدش بنسبة ثابتة؛ بنوريك القراءات وإنت اللي تقرر."] },
      ],
    },
    faq: {
      en: [
        { q: "How much electricity will I save?", a: "It depends on your home and habits. We show live readings so you can see the effect of schedules and automation." },
        survey.en,
      ],
      ar: [
        { q: "هوفّر كام من الكهرباء؟", a: "ده بيعتمد على بيتك وعاداتك. بنوريك قراءات لحظية عشان تشوف تأثير الجداول والأتمتة." },
        survey.ar,
      ],
    },
    related: ["climate-hvac", "smart-lighting", "custom-iot-solutions"],
  },
  {
    slug: "voice-mobile-control", kind: "service",
    title: { en: "Voice and Mobile Control for Smart Homes in Egypt", ar: "التحكم الصوتي والموبايل في البيت الذكي في مصر" },
    h1: { en: "Voice and mobile control for your smart home", ar: "تحكم صوتي وبالموبايل في بيتك الذكي" },
    description: {
      en: "Control your lights, curtains and scenes from the phone or with Alexa and Google Home. Smart home installation in Cairo, Egypt.",
      ar: "تحكم في النور والستاير والسيناريوهات من الموبايل أو بـ Alexa وGoogle Home. تركيب بيت ذكي في القاهرة ومصر.",
    },
    intro: {
      en: "One app controls the whole home, and compatible devices also respond to voice assistants such as Amazon Alexa and Google Home.",
      ar: "تطبيق واحد بيتحكم في البيت كله، والأجهزة المتوافقة كمان بتستجيب للمساعدات الصوتية زي Amazon Alexa وGoogle Home.",
    },
    sections: {
      en: [
        { h: "What you can control", ul: ["Lights and dimmers", "Curtains and shutters", "Scenes such as Good night and Leaving home", "Compatible air conditioners and plugs"] },
        { h: "Voice language", p: ["Voice assistant language support differs between platforms, regions and devices. We confirm what is available before you decide, including whether Arabic commands are supported."] },
      ],
      ar: [
        { h: "اللي تقدر تتحكم فيه", ul: ["الإضاءة والدايمرز", "الستاير والشتر", "سيناريوهات زي تصبح على خير وخروج من البيت", "التكييفات والفيش المتوافقة"] },
        { h: "لغة الأوامر الصوتية", p: ["دعم اللغة في المساعدات الصوتية بيختلف حسب المنصة والدولة والجهاز. بنأكدلك المتاح قبل ما تقرر، ومنها هل الأوامر بالعربي مدعومة."] },
      ],
    },
    faq: {
      en: [
        { q: "Can I control the house in Arabic by voice?", a: "It depends on the assistant and device. We confirm the current support before you commit." },
        survey.en,
      ],
      ar: [
        { q: "أقدر أتحكم في البيت بالأوامر الصوتية بالعربي؟", a: "ده بيعتمد على المساعد والجهاز. بنأكدلك الدعم الحالي قبل ما تلتزم." },
        survey.ar,
      ],
    },
    related: ["smart-lighting", "motorized-curtains-shading", "zigbee-vs-wifi-smart-home"],
  },
  {
    slug: "custom-iot-solutions", kind: "service",
    title: { en: "Custom IoT and Building Automation in Egypt", ar: "حلول IoT وأتمتة المباني المخصصة في مصر" },
    h1: { en: "Custom IoT solutions for offices and businesses", ar: "حلول IoT مخصصة للمكاتب والشركات" },
    description: {
      en: "Sensors, gateways, MQTT and dashboards for offices, hospitality and businesses in Egypt, scoped after a free site survey.",
      ar: "حساسات وبوابات وMQTT ولوحات متابعة للمكاتب والفنادق والشركات في مصر، بنحددها بعد معاينة مجانية.",
    },
    intro: {
      en: "For spaces that need more than a standard system, we design custom setups with sensors, gateways and dashboards that match how the space is used.",
      ar: "للأماكن اللي محتاجة أكتر من نظام جاهز، بنصمم حلول مخصصة بحساسات وبوابات ولوحات متابعة تناسب طريقة استخدام المكان.",
    },
    sections: {
      en: [
        { h: "What we can build", ul: ["Sensor networks for temperature, occupancy and water", "Gateways and MQTT integration", "Dashboards and alerts", "Integration with lighting, climate and access systems"] },
        { h: "How it starts", p: ["Every custom project starts with a free site survey and a technical offer that defines the scope before any financial offer."] },
      ],
      ar: [
        { h: "اللي نقدر نعمله", ul: ["شبكات حساسات للحرارة والتواجد والمياه", "بوابات وتكامل MQTT", "لوحات متابعة وتنبيهات", "تكامل مع أنظمة الإضاءة والتكييف والدخول"] },
        { h: "بنبدأ إزاي", p: ["كل مشروع مخصص بيبدأ بمعاينة مجانية وعرض فني بيحدد النطاق قبل أي عرض مالي."] },
      ],
    },
    faq: { en: [survey.en], ar: [survey.ar] },
    related: ["energy-optimization", "climate-hvac", "security-cctv"],
  },
  {
    slug: "no-neutral-wire-smart-home-egypt", kind: "guide",
    title: { en: "Smart Home Without a Neutral Wire: A Guide for Egypt", ar: "سمارت هوم من غير سلك نيوترال: دليل لمصر" },
    h1: { en: "Can I install smart switches if my switch box has no neutral wire?", ar: "أقدر أركّب سويتشات ذكية لو علبة السويتش مفيهاش نيوترال؟" },
    description: {
      en: "Many older apartments have no neutral wire in the switch box. Learn what it means and how smart lighting can still work. Cairo, Egypt.",
      ar: "شقق قديمة كتير مفيهاش سلك نيوترال في علبة السويتش. اعرف ده معناه إيه وإزاي الإضاءة الذكية تشتغل برضه. القاهرة، مصر.",
    },
    intro: {
      en: "A neutral wire completes the electrical circuit. Some smart switches and modules need it to power themselves, and many older switch boxes do not have one.",
      ar: "سلك النيوترال بيكمّل الدايرة الكهربية. بعض السويتشات والمديولات الذكية بتحتاجه عشان تشتغل، وعلب سويتشات كتير قديمة مفيهاش.",
    },
    sections: {
      en: [
        { h: "Does my switch box have one?", p: ["This differs from building to building and sometimes from box to box. It must be checked by a qualified person, so please do not open live electrical boxes yourself."] },
        { h: "Smart lighting without a neutral wire", p: ["There are modules designed to work without a neutral wire. During our free site survey we check every box and choose the right module for each circuit."] },
        { h: "Your wall switches stay", p: ["With a module behind the switch, the manual switch stays connected and keeps working."] },
        { h: "Planning before finishing", ul: ["If the walls are still open, ask your contractor to run a neutral wire to the switch boxes", "Plan wall box sizes and depth early", "Plan cables for motorized curtains"] },
      ],
      ar: [
        { h: "علبتي فيها نيوترال؟", p: ["ده بيختلف من مبنى لمبنى وأحياناً من علبة لعلبة. لازم يتفحص بواسطة شخص مؤهل، فمتفتحش علب الكهرباء بنفسك."] },
        { h: "إضاءة ذكية من غير نيوترال", p: ["فيه مديولات مصممة تشتغل من غير سلك نيوترال. في المعاينة المجانية بنفحص كل علبة ونختار المديول المناسب لكل دايرة."] },
        { h: "السويتشات اللي على الحيطة بتفضل", p: ["مع مديول خلف السويتش، السويتش اليدوي بيفضل متوصل وشغال."] },
        { h: "خطط قبل التشطيب", ul: ["لو الحيطان لسه مفتوحة، اطلب من المقاول يمدد سلك نيوترال لعلب السويتشات", "حدد مقاسات وعمق العلب بدري", "جهّز كابلات الستاير الموتورات"] },
      ],
    },
    faq: {
      en: [
        { q: "Is a neutral wire always required for smart lighting?", a: "No. It depends on the device model. Some models need it and some are designed to work without it." },
        survey.en,
      ],
      ar: [
        { q: "النيوترال لازم دايماً للإضاءة الذكية؟", a: "لأ. ده بيعتمد على موديل الجهاز. في موديلات بتحتاجه وموديلات مصممة تشتغل من غيره." },
        survey.ar,
      ],
    },
    related: ["smart-lighting", "start-a-smart-home-apartment-cairo", "zigbee-vs-wifi-smart-home"],
  },
  {
    slug: "zigbee-vs-wifi-smart-home", kind: "guide",
    title: { en: "Zigbee or Wi-Fi for a Smart Home? A Simple Guide", ar: "Zigbee ولا Wi-Fi للبيت الذكي؟ دليل بسيط" },
    h1: { en: "Zigbee or Wi-Fi: which is better for your smart home?", ar: "Zigbee ولا Wi-Fi: إيه الأنسب لبيتك الذكي؟" },
    description: {
      en: "The difference between Wi-Fi and Zigbee smart home devices, and when each makes sense for an apartment or villa in Egypt.",
      ar: "الفرق بين أجهزة البيت الذكي بالـ Wi-Fi وبالـ Zigbee، وإمتى كل واحد مناسب لشقة أو فيلا في مصر.",
    },
    intro: {
      en: "Both work. The right choice depends on how many devices you plan to use and how you want the system to behave.",
      ar: "الاتنين شغالين. الاختيار الصح بيعتمد على عدد الأجهزة اللي هتستخدمها وإزاي عايز النظام يتصرف.",
    },
    sections: {
      en: [
        { h: "Wi-Fi devices", ul: ["Connect straight to your router, no extra hub", "Simple to start with", "Best for a small number of devices", "Many devices on one router can load the network"] },
        { h: "Zigbee devices", ul: ["Join a mesh through a Zigbee hub", "Light on your Wi-Fi network", "Stable for whole-home projects with many devices", "Need a hub, which can also run scenes locally"] },
        { h: "Matter", p: ["Matter is a newer standard that lets devices from different brands work together. Selected devices support it, and we choose per project."] },
        { h: "What we recommend", p: ["For a few devices, Wi-Fi is enough. For a whole apartment or villa, a Zigbee-based system is usually more stable. We decide per project during the free site survey."] },
      ],
      ar: [
        { h: "أجهزة Wi-Fi", ul: ["بتتصل مباشرة بالراوتر من غير هَب إضافي", "بسيطة للبداية", "الأنسب لعدد قليل من الأجهزة", "أجهزة كتير على راوتر واحد ممكن تحمّل الشبكة"] },
        { h: "أجهزة Zigbee", ul: ["بتنضم لشبكة عن طريق هَب Zigbee", "خفيفة على شبكة الواي فاي", "مستقرة لمشاريع البيت كله بأجهزة كتير", "محتاجة هَب، وهو كمان يقدر يشغّل السيناريوهات محلياً"] },
        { h: "Matter", p: ["Matter معيار أحدث بيخلي أجهزة ماركات مختلفة تشتغل مع بعض. موديلات مختارة بتدعمه، وبنقرر حسب كل مشروع."] },
        { h: "إحنا بنرشح إيه", p: ["لعدد قليل من الأجهزة، الـ Wi-Fi كفاية. لشقة أو فيلا كاملة، نظام Zigbee غالباً أكتر استقراراً. بنقرر لكل مشروع في المعاينة المجانية."] },
      ],
    },
    faq: {
      en: [
        { q: "Do I need a hub for Zigbee?", a: "Yes. Zigbee devices connect through a hub or a compatible speaker or panel that works as one." },
        survey.en,
      ],
      ar: [
        { q: "محتاج هَب لـ Zigbee؟", a: "أيوه. أجهزة Zigbee بتتصل عن طريق هَب أو سماعة أو لوحة متوافقة بتشتغل كهَب." },
        survey.ar,
      ],
    },
    related: ["smart-lighting", "voice-mobile-control", "no-neutral-wire-smart-home-egypt"],
  },
  {
    slug: "start-a-smart-home-apartment-cairo", kind: "guide",
    title: { en: "How to Turn Your Apartment into a Smart Home in Cairo", ar: "إزاي تحوّل شقتك لبيت ذكي في القاهرة" },
    h1: { en: "How to turn your apartment into a smart home, step by step", ar: "إزاي تحوّل شقتك لبيت ذكي خطوة بخطوة" },
    description: {
      en: "A simple step-by-step path to a smart apartment in Cairo: free site survey, technical offer, financial offer, contract, installation and handover.",
      ar: "طريق بسيط خطوة بخطوة لشقة ذكية في القاهرة: معاينة مجانية، عرض فني، عرض مالي، تعاقد، تركيب وتسليم.",
    },
    intro: {
      en: "You do not need to change everything at once. Start with what matters most to you and expand later.",
      ar: "مش لازم تغيّر كل حاجة مرة واحدة. ابدأ بالأهم عندك ووسّع بعدين.",
    },
    sections: {
      en: [
        { h: "Step by step", ul: ["Decide your priorities: lighting, curtains, security or climate", "Free site survey: we visit, check the wiring and rooms, and listen to what you need", "Technical offer: what goes in each room and how it works together", "Financial offer: a transparent price for the whole project", "Contract: scope, schedule and terms in writing", "Installation and programming: a typical apartment takes 2 to 5 days", "Handover: we test everything with you and show you how to use it"] },
        { h: "Warranty", p: ["5-year warranty against manufacturing defects and misuse. Full terms are in the contract."] },
        { h: "Still finishing the apartment?", p: ["That is the best time to plan. Neutral wires, curtain cables and wall boxes are easiest to arrange while the walls are open."] },
      ],
      ar: [
        { h: "خطوة بخطوة", ul: ["حدد أولوياتك: إضاءة أو ستاير أو أمان أو تكييف", "معاينة مجانية: بنزور ونفحص التمديدات والغرف ونسمع احتياجك", "عرض فني: إيه اللي هيتركب في كل أوضة وإزاي هيشتغل مع بعض", "عرض مالي: سعر شفاف للمشروع كله", "تعاقد: النطاق والمواعيد والشروط كتابةً", "تركيب وبرمجة: شقة عادية بتاخد من 2 لـ 5 أيام", "تسليم: بنجرّب كل حاجة معاك ونشرحلك إزاي تستخدمها"] },
        { h: "الضمان", p: ["ضمان 5 سنين ضد عيوب الصناعة وسوء الاستخدام. التفاصيل الكاملة في العقد."] },
        { h: "لسه بتشطّب الشقة؟", p: ["ده أنسب وقت للتخطيط. النيوترال وكابلات الستاير وعلب الحيطة أسهل بكتير وهي مفتوحة."] },
      ],
    },
    faq: {
      en: [
        { q: "How long does installation take?", a: "A typical apartment takes 2 to 5 days. Villas and commercial spaces vary by scope. We give a clear timeline before any work begins." },
        { q: "Is the site survey free?", a: "Yes. Every project starts with a free site survey." },
        { q: "Can I start small and expand later?", a: "Yes. Systems are designed to be modular, so you can start with lighting or security and add more later." },
      ],
      ar: [
        { q: "التركيب بياخد قد إيه؟", a: "شقة عادية بتاخد من 2 لـ 5 أيام. الفيلات والأماكن التجارية بتختلف حسب النطاق. بنديك جدول زمني واضح قبل ما أي شغل يبدأ." },
        { q: "المعاينة مجانية؟", a: "أيوه. كل مشروع بيبدأ بمعاينة مجانية." },
        { q: "أقدر أبدأ صغير وأوسّع بعدين؟", a: "أيوه. الأنظمة متصممة بشكل مرن، فتقدر تبدأ بالإضاءة أو الأمان وتضيف بعدين." },
      ],
    },
    related: ["no-neutral-wire-smart-home-egypt", "smart-lighting", "motorized-curtains-shading"],
  },
];

export const getPage = (slug: string, kind: Kind) => pages.find((p) => p.slug === slug && p.kind === kind);
export const byKind = (kind: Kind) => pages.filter((p) => p.kind === kind);
export const base = (kind: Kind) => (kind === "service" ? "services" : "guides");
export const pathFor = (p: PageData, lang: Lang) => `${lang === "ar" ? "/ar" : ""}/${base(p.kind)}/${p.slug}`;
