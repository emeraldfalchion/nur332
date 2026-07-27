/* ============================================================
   data/torture-chamber.js — "The Torture Chamber" practice exam.

   50 questions, ALL of them select all that apply. Cumulative across
   every topic through Week 4 (Weeks 5 and 6 are deliberately excluded,
   consistent with the rest of the Exam Prep section). Content is drawn
   only from the lecture material already taught on the topic pages.

   Deliberate design points:
     • Some questions have only ONE correct option and some have ALL
       options correct — SATA anxiety is the whole point of the page.
     • The question order is scrambled so it is not in topic order
       (no two adjacent questions share a topic, and no two adjacent
       questions are both all-correct).

   Revised 2026-07-26 — difficulty pass. Before this revision the answer
   key was guessable without reading the content: 48 of the 50 questions
   listed every CORRECT option first and put the single wrong option last
   (38 keys were literally [0,1,2,3]), and that wrong option was usually
   an obvious absurdity. Now:
     • Correct and incorrect options are INTERLEAVED — the wrong ones sit
       at varied positions, never a predictable slot.
     • The number of correct options varies unpredictably (1, 3, 4, 5,
       or all of them) and questions have either 5 or 6 options.
     • Distractors are plausible near-misses drawn from the same lecture
       material — a flipped sign (−2 station), a wrong threshold (severe
       preeclampsia at 140, a therapeutic mag level of 5.5 offered as
       "toxicity", 6 contractions in 10 minutes called acceptable), the
       wrong hip for the wedge, the wrong clinician for the fern test —
       rather than throwaways nobody would pick.
     • Self-explaining options were trimmed to bare claims, so the option
       text no longer teaches the answer.
   This is intentionally harder than Practice Exams 1 and 2. Content is
   unchanged and lecture-faithful throughout.

   Shape is the same as any other exam data file (see assets/exam.js).
   ============================================================ */
window.EXAM_DATA = {
  id: "torture-chamber",
  title: "The Torture Chamber",
  questions: [
  {
    topic: "Artificial Management of Labor",
    stem: "Which actions are appropriate for a client receiving oxytocin for induction of labor?",
    options: [
      "Hang the infusion by gravity so the rate can be adjusted quickly",
      "Maintain continuous fetal monitoring",
      "Take a blood pressure before each titration",
      "Titrate the rate up every 5 minutes until contractions are 2 minutes apart",
      "Increase by about 1 to 2 milliunits/minute every 30 minutes",
      "Use a volume control holding about 2 hours of medication"
    ],
    answers: [1, 2, 4, 5],
    rationale: "Oxytocin runs on a pump — never by gravity — with continuous fetal monitoring, a blood pressure before each titration, increases of about 1–2 milliunits/minute every 30 minutes, and a volume control (buretrol) holding only about 2 hours' worth in case the pump malfunctions. NEVER let oxytocin bolus in: the uterus clamps down in a constant hard contraction, the baby is not perfused, and you see a prolonged deceleration and fetal bradycardia."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which VEAL CHOP pairings match the pattern to its cause correctly?",
    options: [
      "Variable deceleration → cord compression",
      "Early deceleration → uteroplacental insufficiency",
      "Late deceleration → placental insufficiency",
      "Acceleration → okay",
      "Prolonged deceleration → head compression",
      "Early deceleration → head compression"
    ],
    answers: [0, 2, 3, 5],
    rationale: "VEAL CHOP reads straight across: Variable → Cord compression, Early → Head compression, Acceleration → Okay, Late → Placental (uteroplacental) insufficiency. Early decels are head compression, never placental insufficiency. A prolonged deceleration (at least 2 but under 10 minutes) points to a prolapsed cord or an abruption — not head compression."
  },
  {
    topic: "Intrapartum Complications",
    stem: "The nurse feels the umbilical cord during a vaginal exam. Which actions are appropriate?",
    options: [
      "Lift the presenting part off the cord with the gloved hand",
      "Place her in Trendelenburg",
      "Notify the provider",
      "Apply oxygen",
      "Prepare for a cesarean birth"
    ],
    answers: [0, 1, 2, 3, 4],
    rationale: "All five are the steps for a prolapsed cord: keep the gloved fingers in place lifting the presenting part off the cord (they stay there until delivery), drop the bed into Trendelenburg, notify the provider, give oxygen, and prepare for a cesarean. Prevention comes first — if the water is broken and the presenting part is still high, she stays in bed until the head settles against the cervix."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which statements about fetal station and position are correct?",
    options: [
      "Zero station is at the ischial spines, the narrowest part of the pelvis",
      "Engagement has occurred once the presenting part reaches zero station",
      "A station of −2 means the presenting part is 2 cm below the ischial spines",
      "In \"ROA,\" the R refers to the MOTHER'S right side",
      "In \"ROA,\" the A means the fetal occiput points toward the mother's front",
      "An occiput posterior position is the easier one to push out"
    ],
    answers: [0, 1, 3, 4],
    rationale: "The ischial spines are zero station and the narrowest part of the pelvis, and reaching zero station is engagement. ABOVE the spines is NEGATIVE (−1 to −5), so −2 is 2 cm above, not below. In the three-letter notation the first letter is always the MOTHER's side and the third letter is the direction the landmark faces. Occiput ANTERIOR (born face-down) is the easier delivery; posterior means being born face-up, which causes back labor and is harder to push out."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which statements about fetal heart rate variability are correct?",
    options: [
      "Marked variability (greater than 25 bpm) is the goal in labor",
      "Variability is the single best indicator of fetal oxygenation",
      "Minimal variability always indicates fetal distress",
      "Moderate variability is 6 to 25 bpm",
      "Absent variability may indicate fetal acidosis"
    ],
    answers: [1, 3, 4],
    rationale: "Variability — the fluctuation around the baseline — is the single best indicator of fetal oxygenation, and MODERATE (6–25 bpm) is the goal; marked variability is above the desired range. Absent variability may mean acidosis. Minimal variability is not automatically distress: a fetal sleep cycle, opioid pain medication, or magnesium can all cause it."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which measures does the nurse anticipate when preparing a client for a cesarean birth?",
    options: [
      "Bolus about 1,500 mL of warmed lactated Ringer's",
      "Give famotidine (Pepcid) and metoclopramide (Reglan) if it is unscheduled",
      "Insert an indwelling urinary catheter after the anesthesia is established",
      "Place the wedge under her left hip",
      "Give Bicitra by mouth within 30 minutes of the incision",
      "Withhold antacids so the stomach stays empty"
    ],
    answers: [0, 1, 2, 4],
    rationale: "Cesarean prep includes a warmed LR bolus (~1,500 mL), a Foley after anesthesia, and — because a pregnant client is treated as a 'full stomach' — famotidine, metoclopramide, and Bicitra to neutralize and reduce stomach acid, not withhold it. The wedge goes under the RIGHT hip to tilt her to the LEFT, off the vena cava."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which statements about preterm labor and its management are correct?",
    options: [
      "Nifedipine is held for a systolic pressure below 90 mm Hg",
      "Betamethasone is indicated only after 34 weeks",
      "Terbutaline is for acute use only — about 2 to 3 days",
      "A POSITIVE fetal fibronectin means the risk of preterm birth is lower",
      "Betamethasone is 12 mg IM for 2 doses, 12 to 24 hours apart",
      "A cervical length shortening to less than 25 mm before term is abnormal"
    ],
    answers: [0, 2, 4, 5],
    rationale: "Nifedipine relaxes uterine muscle but drops the blood pressure, so hold it if the systolic is under 90; terbutaline is subcutaneous and for acute use only (2–3 days). Betamethasone is 12 mg IM × 2 doses, 12–24 hours apart, and is given UNDER about 34 weeks — the 'steroid window' is the 48 hours after the first dose. Cervical shortening under 25 mm before term is abnormal. Fibronectin is the glue holding the sac to the uterine lining, so a POSITIVE result means that glue is disrupted — the risk is INCREASED."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which are cardinal movements (mechanisms) of labor?",
    options: [
      "Effacement",
      "Descent",
      "Flexion",
      "Internal rotation",
      "Dilation",
      "Extension"
    ],
    answers: [1, 2, 3, 5],
    rationale: "The mechanisms of labor, in order, are engagement, descent, flexion, internal rotation, extension, external rotation, and expulsion — all movements of the FETUS. Effacement (thinning) and dilation (opening) are changes in the CERVIX, not cardinal movements."
  },
  {
    topic: "Intrapartum Complications",
    stem: "A client on oxytocin develops uterine tachysystole. Which actions are appropriate?",
    options: [
      "Reposition the client",
      "Turn the oxytocin down or off",
      "Increase the oxytocin to push through the pattern",
      "Give oxygen",
      "Consider subcutaneous terbutaline",
      "Notify the provider"
    ],
    answers: [0, 1, 3, 4, 5],
    rationale: "Everything here is appropriate EXCEPT increasing the oxytocin — it is the cause. Reposition, turn the oxytocin down or off, give oxygen, consider terbutaline to relax and space out the contractions, and notify the provider. Tachysystole is 6 or more contractions in 10 minutes; the uterus never gets time to rest, so the baby is not perfused between contractions."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Using the COAT mnemonic, what does the nurse document when the membranes rupture?",
    options: [
      "Color of the fluid",
      "Odor",
      "Onset of the contractions",
      "Amount",
      "Temperature at the time of rupture",
      "Time it ruptured"
    ],
    answers: [0, 1, 3, 5],
    rationale: "COAT = Color (clear or faint yellow is normal; bloody may signal abruption; green is meconium), Odor (foul suggests chorioamnionitis), Amount (trickle vs. gush), and Time (over 18 hours raises the infection risk). Temperature is monitored every 2 hours AFTER rupture, and the onset of contractions is documented separately — neither is part of COAT."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which findings indicate that the placenta has separated and is ready to deliver?",
    options: [
      "A globular-shaped uterus",
      "The uterus rising in the abdomen",
      "A sudden gush or trickle of blood",
      "A drop in maternal blood pressure",
      "Lengthening of the visible umbilical cord"
    ],
    answers: [0, 1, 2, 4],
    rationale: "Signs of separation are a globular uterus, the uterus rising in the abdomen, a gush or trickle of blood, and more of the cord becoming visible. The third stage should last no longer than 30 minutes. A DROPPING blood pressure is a sign of hemorrhage, not of normal separation."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which statements about a forceps-assisted birth are correct?",
    options: [
      "Maternal cardiac disease is an indication, to reduce her pushing effort",
      "The client stops pushing once the forceps are applied",
      "A prolonged second stage with maternal exhaustion is an indication",
      "A non-reassuring fetal heart rate is an indication",
      "Facial bruising and transient facial paralysis are known newborn risks",
      "They may be applied while the head is still at −2 station"
    ],
    answers: [0, 2, 3, 4],
    rationale: "Forceps require a real indication — maternal cardiac disease or pulmonary compromise, intrapartum infection, a prolonged second stage, or a non-reassuring FHR — and the head must already be engaged and low, never floating at a negative station. Forceps only GUIDE the head: the client keeps pushing, and the provider never pulls when she is not pushing. Newborn risks include bruising, facial edema, caput or cephalohematoma, transient facial paralysis, and a rising bilirubin."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which finding reliably distinguishes TRUE labor from false labor?",
    options: [
      "Contractions occurring about every 5 minutes",
      "Contractions the client rates as severe",
      "Rupture of the membranes",
      "Progressive cervical dilation and effacement",
      "Bloody show"
    ],
    answers: [3],
    rationale: "Progressive cervical change is the only reliable discriminator. False-labor (Braxton Hicks) contractions can be painful and can come at regular-seeming intervals, but they produce no cervical change and ease with rest, warmth, or massage. Ruptured membranes and bloody show are signs of impending labor, not proof of true labor."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which statements about intrapartum Group B Strep (GBS) prophylaxis are correct?",
    options: [
      "A positive GBS status requires a cesarean birth",
      "Penicillin is the drug of choice",
      "Clindamycin 900 mg IV every 4 hours is used if she is penicillin-allergic",
      "The antibiotic runs during labor and continues until delivery",
      "GBS may live harmlessly in the vaginal flora yet make the newborn ill",
      "The prophylactic dose is given in the office at the 36-week visit"
    ],
    answers: [1, 2, 3, 4],
    rationale: "GBS may live harmlessly in the vaginal flora but can make the baby ill, so prophylactic antibiotics are given INTRAPARTUM — during labor, continuing until delivery — not in the office beforehand. Penicillin is first line (5 million units IV, then 2.5 million units q4h); clindamycin 900 mg IV q4h if she is allergic. A positive status does not call for a cesarean. (Screening is what happens around 36 weeks.)"
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which are fetal risks of a post-term (past 42 weeks) pregnancy?",
    options: [
      "Decreased placental perfusion",
      "An increased amniotic fluid volume",
      "Oligohydramnios",
      "Macrosomia or, conversely, small-for-gestational-age",
      "Meconium-stained fluid with a risk of meconium aspiration"
    ],
    answers: [0, 2, 3, 4],
    rationale: "Past 42 weeks the aging placenta perfuses the fetus less well, raising the risk of macrosomia or SGA and of meconium-stained fluid with meconium aspiration. Amniotic fluid DECREASES — oligohydramnios — it does not increase."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which are appropriate cautions before giving systemic (IV/IM) analgesia during labor?",
    options: [
      "Avoid it when birth is imminent",
      "Confirm a well-established labor pattern first",
      "Naloxone can be relied on to reverse meperidine (Demerol) in the newborn",
      "The fetal liver clears these medications about as efficiently as the mother's",
      "Use caution or avoid it with a Category III (abnormal) tracing",
      "Remember that all of it crosses the placenta"
    ],
    answers: [0, 1, 4, 5],
    rationale: "Systemic analgesia is given only in well-established labor, never right before birth (newborn respiratory depression), and is used with caution or avoided with a non-reassuring/Category III tracing. All of it crosses the placenta, and the fetal liver and kidneys metabolize it POORLY — that is the whole problem. Naloxone does NOT reverse meperidine (Demerol) in the infant."
  },
  {
    topic: "Intrapartum Care I",
    stem: "During the fourth stage of labor, which nursing actions and findings are appropriate?",
    options: [
      "Postpartum shaking is an early sign of hemorrhage",
      "Assess the fundus, perineum, and vaginal bleeding every 15 minutes for the first hour",
      "A fundus displaced to the right is an expected finding",
      "Expect the uterus to stay contracted and midline",
      "Check the bladder for fullness — it is often hypotonic",
      "Encourage skin-to-skin (kangaroo) care"
    ],
    answers: [1, 3, 4, 5],
    rationale: "In the fourth stage the nurse checks the fundus, perineum, and bleeding every 15 minutes for the first hour, expects a firm midline uterus, checks the often-hypotonic bladder, and encourages kangaroo care. A fundus displaced upward and to the RIGHT means a FULL BLADDER — have her void. Postpartum shaking is a normal CNS/adrenaline response with fluid and heat loss; warm blankets help, and it is not by itself a sign of hemorrhage."
  },
  {
    topic: "Intrapartum Care II",
    stem: "An intrauterine pressure catheter (IUPC) is in place. Which statements about it are correct?",
    options: [
      "More than 200 Montevideo units in a 10-minute period indicates adequate labor",
      "A resting tone above 25 mm Hg is desirable",
      "Montevideo units should not exceed 300",
      "Six contractions in a 10-minute window is acceptable",
      "A contraction lasting longer than 2 minutes is too long",
      "It can only be placed once the membranes are ruptured"
    ],
    answers: [0, 2, 4, 5],
    rationale: "Adequate labor is more than 200 Montevideo units in 10 minutes without exceeding 300, and the IUPC — an internal monitor — requires ruptured membranes. The resting tone should stay UNDER 25 mm Hg so the uterus relaxes between contractions, a contraction over 2 minutes is too long, and 6 or more contractions in 10 minutes is tachysystole, not an acceptable pattern."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which factors are scored on the Bishop score?",
    options: [
      "Cervical dilatation",
      "Cervical effacement",
      "Fetal station",
      "Cervical consistency",
      "Cervical position"
    ],
    answers: [0, 1, 2, 3, 4],
    rationale: "All five are scored. The Bishop score estimates how likely a vaginal delivery is — the higher the score the better, with about 8 or higher considered favorable. The findings come from a sterile vaginal exam, which is obtained before an induction is started."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which findings and actions are associated with an amniotic fluid embolism?",
    options: [
      "Hypertension is the earliest sign",
      "Sudden dyspnea and chest pain",
      "Frothy sputum and cyanosis",
      "Hypotension with possible massive hemorrhage",
      "It is a common event, and the mortality rate is low",
      "During CPR, the uterus is displaced to the side"
    ],
    answers: [1, 2, 3, 5],
    rationale: "Amniotic fluid embolism strikes the respiratory and cardiovascular systems: sudden chest pain, dyspnea, cyanosis, frothy sputum, tachycardia, HYPOtension, and possible massive hemorrhage. Care supports cardiorespiratory function, and during CPR on a client at or past 20 weeks the uterus is displaced to the side. It is very rare — but carries an 80–90% mortality rate."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which fetal presentations are classified as breech?",
    options: [
      "Frank breech",
      "Vertex",
      "Complete breech",
      "Military",
      "Footling breech",
      "Shoulder"
    ],
    answers: [0, 2, 4],
    rationale: "Frank (hips flexed, knees extended), complete (hips and knees flexed), and footling (one or both feet first) are the breech presentations. Vertex and military are CEPHALIC presentations differing only in how flexed the head is, and a shoulder presentation is a transverse lie."
  },
  {
    topic: "Disorders & Genetics",
    stem: "Which sexually transmitted infections are treated with penicillin?",
    options: [
      "Chlamydia",
      "Syphilis",
      "Gonorrhea",
      "Trichomoniasis",
      "Bacterial vaginosis"
    ],
    answers: [1],
    rationale: "Only syphilis is treated with penicillin. Chlamydia is treated with azithromycin; gonorrhea with ceftriaxone (Rocephin) plus azithromycin; trichomoniasis and bacterial vaginosis both with metronidazole (which is why the discharge, not the drug, is what tells those two apart)."
  },
  {
    topic: "Hypertensive Disorders",
    stem: "Which statements about medications used in hypertensive disorders of pregnancy are correct?",
    options: [
      "IV labetalol is avoided in a client with a history of asthma",
      "IV hydralazine is avoided in a client who is tachycardic",
      "Magnesium sulfate is given in preeclampsia to bring the blood pressure down",
      "Oral nifedipine is avoided in a client who is tachycardic",
      "Calcium gluconate is infused alongside every magnesium drip",
      "Low-dose aspirin 81 mg is started at 12 to 28 weeks for clients at risk for preeclampsia"
    ],
    answers: [0, 1, 3, 5],
    rationale: "Know the drug, route, and contraindication: labetalol — \"labetalol, lungs\" — is avoided in asthma, while hydralazine and nifedipine are avoided with tachycardia. Low-dose aspirin at 12–28 weeks reduces preeclampsia, IUGR, and preterm birth. Magnesium sulfate PREVENTS SEIZURES; it is not an antihypertensive. Calcium gluconate is the magnesium ANTIDOTE — kept available, not co-infused."
  },
  {
    topic: "Intrapartum Complications",
    stem: "The head has delivered but the shoulders are trapped. Which actions are appropriate?",
    options: [
      "Apply fundal pressure",
      "Perform the McRoberts maneuver",
      "Apply suprapubic pressure",
      "Raise the head of the bed so she can push harder",
      "Lower the head of the bed",
      "Document the maneuvers used and how long the dystocia lasted"
    ],
    answers: [1, 2, 4, 5],
    rationale: "For shoulder dystocia: lower the head of the bed, perform McRoberts (hips flexed, knees back toward the chest), apply SUPRAPUBIC pressure where the shoulder is trapped, and document the maneuvers and duration. NEVER apply FUNDAL pressure — it only jams the shoulder harder against the pubic bone. Internal maneuvers (Mazzanti, Rubin, and Zavanelli as a last resort) belong to the provider."
  },
  {
    topic: "Antepartum Care II",
    stem: "Which teaching points about relieving common discomforts of pregnancy are correct?",
    options: [
      "Dorsiflex the foot to stretch the calf for a leg cramp",
      "Point the toes downward for a leg cramp",
      "Eat dry crackers or toast before rising for nausea",
      "Elevate the feet and legs for ankle edema",
      "Use a sodium-containing antacid for heartburn",
      "Use pelvic tilt exercises and good body mechanics for backache"
    ],
    answers: [0, 2, 3, 5],
    rationale: "Dorsiflexing the foot (toes toward the shin) stretches the cramping calf — pointing the toes down makes it worse. Dry crackers before rising and small frequent meals help early nausea, elevating the legs helps the decreased venous return causing ankle edema, and pelvic tilts with good posture ease the backache of lordosis. Heartburn is treated with NON-sodium antacids as recommended by the provider."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which fetal heart rate findings are NON-reassuring?",
    options: [
      "Late decelerations of any magnitude",
      "Absent variability",
      "Early decelerations that mirror the contractions",
      "A sinusoidal pattern",
      "Recurrent, severe variable decelerations",
      "Moderate variability with accelerations"
    ],
    answers: [0, 1, 3, 4],
    rationale: "Non-reassuring findings include late decelerations of ANY magnitude, absent variability, a sinusoidal pattern, prolonged decelerations, recurrent severe variables, and severe bradycardia or prolonged tachycardia. Early decelerations mirror the contraction and reflect head compression — benign. Moderate variability with accelerations is exactly what you want."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which statements about cesarean birth are correct?",
    options: [
      "The transverse (Pfannenstiel) \"bikini cut\" is the most common skin incision",
      "The skin incision always matches the direction of the uterine incision",
      "The low transverse uterine incision is the one most often used",
      "She is positioned with a wedge under the LEFT hip",
      "A classical (vertical) uterine incision raises the risk of uterine rupture if a vaginal birth is attempted later",
      "Both the skin incision and the uterine incision should be documented"
    ],
    answers: [0, 2, 4, 5],
    rationale: "The Pfannenstiel skin incision and the low transverse uterine incision are the most common — but the two directions may NOT match, which is exactly why both are documented. A classical or vertical uterine incision raises the rupture risk in a later labor, so a repeat cesarean is recommended. The wedge goes under the RIGHT hip, tilting her to the LEFT off the vena cava."
  },
  {
    topic: "Antepartum Complications",
    stem: "Which statements about Rh alloimmunization and RhoGAM are correct?",
    options: [
      "An indirect Coombs test is drawn at the first prenatal visit and again at 20 weeks",
      "RhoGAM 300 mcg is given prophylactically at 28 weeks if the antibody screen is negative",
      "A POSITIVE direct Coombs at birth means a larger dose of RhoGAM is given",
      "RhoGAM is indicated after a spontaneous abortion, an ectopic pregnancy, an amniocentesis, or maternal trauma",
      "RhoGAM is given to the newborn rather than to the mother",
      "If the direct Coombs on cord blood is NEGATIVE, RhoGAM is given within 72 hours"
    ],
    answers: [0, 1, 3, 5],
    rationale: "The indirect Coombs screens the MOTHER's antibodies at the first visit and at 20 weeks; 300 mcg of RhoGAM goes to the MOTHER at 28 weeks if that screen is negative, and any time fetal and maternal blood could mix. A negative direct Coombs on cord blood means give RhoGAM within 72 hours. A POSITIVE direct Coombs means she is already sensitized — RhoGAM cannot help, so it is not given at all; monitor the infant for hemolytic disease."
  },
  {
    topic: "Antepartum Care",
    stem: "Which findings should a pregnant client be taught to report to her provider?",
    options: [
      "A gush of fluid from the vagina",
      "Vaginal bleeding",
      "A severe headache with blurred vision or visual spots",
      "Epigastric pain or pain under the right breast",
      "Decreased fetal movement"
    ],
    answers: [0, 1, 2, 3, 4],
    rationale: "All five are danger signs of pregnancy. A gush of fluid may be ruptured membranes; bleeding suggests a placental complication; visual changes are neurologic warning signs of hypertension; epigastric or right-upper-quadrant pain reflects liver involvement in hypertensive disorders; and decreased fetal movement is a fetal well-being concern."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which statements about the four pelvis shapes are correct?",
    options: [
      "Gynecoid is the most favorable shape for a vaginal birth",
      "Gynecoid is the least common shape",
      "Android is more likely to lead to cephalopelvic disproportion",
      "Platypelloid (flat) is more likely to result in a transverse lie",
      "Platypelloid is the most common shape",
      "Anthropoid carries an increased risk of an occiput posterior position"
    ],
    answers: [0, 2, 3, 5],
    rationale: "Gynecoid — the classic female pelvis at about 50% — is both the MOST common and the most favorable for vaginal birth. Android raises the risk of CPD, anthropoid raises the risk of occiput posterior, and platypelloid (the LEAST common, about 3%) has a wide flat inlet that encourages a transverse lie, which cannot deliver vaginally."
  },
  {
    topic: "Maternal Nutrition",
    stem: "Which statements about nutrition in pregnancy are correct?",
    options: [
      "At least 400 mcg of folic acid daily is recommended during pregnancy or when trying to conceive",
      "About 300 extra kcal per day are needed in the second and third trimesters",
      "If the diet is adequate, iron is the only supplement truly needed",
      "Pica can lead to iron-deficiency anemia",
      "Eight to ten 8-oz glasses of fluid a day are recommended, at least half of it water"
    ],
    answers: [0, 1, 2, 3, 4],
    rationale: "All five are correct. Folic acid at 400 mcg/day is the one number to memorize; calorie needs rise about 300 kcal/day in the second and third trimesters; iron is the only truly required supplement if the diet is adequate (a prenatal vitamin is still recommended, since most diets fall short); pica — eating non-nutritive substances such as clay or laundry starch — displaces nutritious food and causes iron-deficiency anemia; and the fluid recommendation is eight to ten 8-oz glasses daily, at least half water."
  },
  {
    topic: "Antepartum Care II",
    stem: "Which statements about the contraction stress test (CST) are correct?",
    options: [
      "A NEGATIVE result is the desired result",
      "A negative result means no late decelerations over a 20-minute period",
      "A POSITIVE result means late decelerations with more than half of the contractions",
      "An equivocal result is considered reassuring",
      "A positive result suggests poor placental perfusion"
    ],
    answers: [0, 2, 4],
    rationale: "The CST is \"backwards\": NEGATIVE is what you want — no late decelerations in a 10-minute period, not 20 — and POSITIVE is bad, meaning late decels with more than half of the contractions, which indicates poor placental oxygen and CO₂ exchange. An equivocal result is suspicious and inconclusive, requiring further monitoring, not reassurance."
  },
  {
    topic: "Intrapartum Care II",
    stem: "A client on oxytocin has recurrent late decelerations. Which nursing interventions are appropriate?",
    options: [
      "Reposition her, preferably onto her left side",
      "Turn the oxytocin off",
      "Give an IV fluid bolus of lactated Ringer's",
      "Raise the head of the bed to high Fowler's",
      "Apply oxygen at 10 L by tight non-rebreather face mask",
      "Slow the IV rate to avoid fluid overload"
    ],
    answers: [0, 1, 2, 4],
    rationale: "UNCOIL — Undo what's happening, Change position (the left side especially improves blood flow), Oxygen / turn Oxytocin off, IV fluid bolus of LR, and LOWER the head of the bed to improve perfusion. Raising the head of the bed and slowing the IV are both the opposite of what is wanted — the bolus is what restores perfusion. Notify the provider and document any non-reassuring finding."
  },
  {
    topic: "Hypertensive Disorders",
    stem: "Which findings in a client receiving magnesium sulfate indicate TOXICITY rather than an expected side effect?",
    options: [
      "Absent deep tendon reflexes",
      "Feeling hot and flushed",
      "A respiratory rate of 10",
      "A serum magnesium level of 5.5 mEq/L",
      "Slurred speech with a decreased level of consciousness",
      "Mild drowsiness"
    ],
    answers: [0, 2, 4],
    rationale: "Toxicity is decreased or absent reflexes, a falling respiratory rate, and a change in level of consciousness or slurred speech; the antidote is IV calcium gluconate. Feeling hot and flushed, headache, nausea, tiredness, and mild drowsiness are EXPECTED — and 5.5 mEq/L sits inside the therapeutic range of 4–7, so it is a target level, not toxicity."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which findings point to placental ABRUPTION rather than placenta previa?",
    options: [
      "Severe abdominal pain",
      "A uterus that is very tender and feels firm or stone-hard",
      "Bright red, painless bleeding",
      "Bleeding that may be concealed rather than visible",
      "An abdomen that enlarges and changes shape",
      "A soft, relaxed uterus"
    ],
    answers: [0, 1, 3, 4],
    rationale: "The biggest difference is pain and how the abdomen feels. An abruption causes severe pain, a tender board-like uterus, bleeding that may be concealed (especially a central abruption), and an abdomen that enlarges as blood accumulates behind the placenta. Bright red PAINLESS bleeding with a soft, relaxed uterus is a previa — and with a previa you do not perform a vaginal exam."
  },
  {
    topic: "Disorders & Genetics",
    stem: "Which statements describe autosomal RECESSIVE inheritance?",
    options: [
      "Each child of one affected parent has a 50% chance of being affected",
      "The affected individual usually has two clinically normal carrier parents",
      "Two abnormal alleles are required for the trait to be expressed",
      "Carrier × carrier gives a 25% chance of an affected child with each pregnancy",
      "There is no silent carrier state",
      "Cystic fibrosis is an example"
    ],
    answers: [1, 2, 3, 5],
    rationale: "Recessive disorders need TWO abnormal alleles, so the affected child typically has two clinically normal CARRIERS as parents; carrier × carrier yields 25% affected, 50% carrier, 25% completely unaffected. Cystic fibrosis is the lecture's example. A 50% chance from one affected parent, and the absence of a carrier state, both describe autosomal DOMINANT inheritance."
  },
  {
    topic: "Anatomy & Physiology",
    stem: "Which statements about the umbilical cord and the placenta are correct?",
    options: [
      "The cord contains two arteries that carry waste away from the fetus",
      "The cord contains one vein that delivers oxygenated blood to the fetus",
      "The cord vessels are surrounded by Wharton's jelly",
      "The cord has no pain receptors, so cutting it hurts neither the mother nor the baby",
      "The placenta produces hCG"
    ],
    answers: [0, 1, 2, 3, 4],
    rationale: "All five are correct. The cord is \"backwards\" from adult circulation — 2 arteries carry waste away, 1 vein delivers oxygenated blood — and the vessels sit cushioned in Wharton's jelly. There are no pain receptors, so cutting the cord hurts no one. Along with immune protection, excretion, respiration, and nutrient transfer, the placenta produces hormones including hCG."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which statements about amnioinfusion are correct?",
    options: [
      "Warmed lactated Ringer's or normal saline is instilled through an IUPC",
      "It requires intact membranes",
      "It is used for repetitive or worsening variable decelerations",
      "Clear fluid returning onto the pad is expected",
      "If the pad stays dry and the resting tone rises, stop the infusion",
      "It is given to speed up cervical dilation"
    ],
    answers: [0, 2, 3, 4],
    rationale: "Amnioinfusion instills warm LR or saline through an IUPC — which means the membranes must already be RUPTURED — to restore cushion around the cord for repetitive or worsening variable decelerations. Fluid going in must come back out: clear return is expected, and a dry pad with a climbing resting tone means fluid is trapped, so stop immediately. It does not speed dilation."
  },
  {
    topic: "Antepartum Complications",
    stem: "The nurse assesses a pregnant client with a cardiac disorder at each prenatal visit. Which findings suggest cardiac DECOMPENSATION?",
    options: [
      "A new cough",
      "Dyspnea",
      "Weight loss",
      "Palpitations",
      "Bradycardia at rest",
      "Edema"
    ],
    answers: [0, 1, 3, 5],
    rationale: "Decompensation shows as a new cough, dyspnea, edema, a murmur, palpitations, rales, and weight GAIN — not weight loss, and not a slow heart rate. Management reduces cardiac workload: 8–10 hours of rest, a high-iron, high-protein, low-sodium diet, an epidural in labor, and side-lying or semi-Fowler's positioning."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which statements about testing for rupture of membranes are correct?",
    options: [
      "Amniotic fluid is alkaline and turns nitrazine paper deep blue",
      "A positive fern test shows a crystallized, fern-like pattern under the microscope",
      "The nurse can perform the nitrazine test at the bedside",
      "A deep-blue nitrazine result means the fluid is acidic",
      "The nurse performs the fern test at the bedside",
      "Nitrazine paper that stays yellow suggests it is probably not amniotic fluid"
    ],
    answers: [0, 1, 2, 5],
    rationale: "Amniotic fluid is ALKALINE, so it turns nitrazine paper deep blue — a positive result; paper that stays yellow is probably not amniotic fluid. Nitrazine is non-invasive and done by the NURSE at the bedside; the FERN test is the PROVIDER's, read under a microscope, where a crystallized fern pattern is positive."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which statements about water intoxication (acute hyponatremia) from oxytocin are correct?",
    options: [
      "It is corrected by increasing the oxytocin rate",
      "It results from oxytocin's antidiuretic-hormone-like effect",
      "Confusion, lethargy, and vomiting are signs",
      "It can progress to seizures",
      "Management includes stopping the oxytocin and giving furosemide",
      "Normal saline (0.9%) is given as part of the correction"
    ],
    answers: [1, 2, 3, 4, 5],
    rationale: "A large amount of oxytocin has an antidiuretic effect, causing water intoxication and hyponatremia — confusion, lethargy, vomiting, and possibly a seizure. Management is to STOP the oxytocin, give 0.9% normal saline, and give furosemide to pull off the excess fluid. Increasing the rate would only make it worse."
  },
  {
    topic: "Maternal Nutrition",
    stem: "For which of these is NO real increase needed during pregnancy?",
    options: [
      "Iron",
      "Fat intake",
      "Vitamin E",
      "Folic acid",
      "Vitamin K",
      "Sodium"
    ],
    answers: [1, 2, 4, 5],
    rationale: "No real change is needed for fat intake, vitamin E, vitamin K, iodine, and sodium — sodium is not normally restricted in pregnancy. Iron IS increased (the only supplement truly needed if the diet is adequate), and folic acid is the one number to memorize at 400 mcg daily."
  },
  {
    topic: "Antepartum Care",
    stem: "Which findings are POSITIVE (diagnostic) signs of pregnancy?",
    options: [
      "Auscultation of the fetal heartbeat by the examiner",
      "A positive urine pregnancy test",
      "Fetal movement felt by the examiner",
      "Braxton Hicks contractions",
      "Visualization of the fetus on ultrasound",
      "Quickening reported by the mother"
    ],
    answers: [0, 2, 4],
    rationale: "Positive signs can be explained ONLY by pregnancy: the EXAMINER hearing the fetal heartbeat, the EXAMINER palpating fetal movement, and seeing the fetus on ultrasound. A positive pregnancy test and Braxton Hicks contractions are PROBABLE (objective) signs, and quickening — movement felt by the MOTHER — is PRESUMPTIVE (subjective)."
  },
  {
    topic: "Antepartum Complications",
    stem: "Which measures help reduce perinatal (mother-to-baby) transmission of HIV?",
    options: [
      "ZDV antiretroviral therapy",
      "An elective cesarean birth before the membranes rupture",
      "Breastfeeding, to pass along maternal antibodies",
      "Bottle-feeding where formula is available",
      "Avoiding invasive procedures such as a fetal scalp electrode",
      "Holding antiretroviral therapy until after the birth"
    ],
    answers: [0, 1, 3, 4],
    rationale: "Antiretroviral therapy (ZDV) during pregnancy reduces transmission to about 1–2% — holding it until after birth defeats the purpose. An elective cesarean before the membranes rupture, avoiding invasive procedures such as a scalp electrode, and universal precautions all lower risk further. Breast milk can carry HIV, so bottle-feeding is recommended where formula is available."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which are recognized risks of oligohydramnios?",
    options: [
      "Cord compression",
      "Uterine overdistention with preterm labor",
      "Pulmonary hypoplasia",
      "Renal and urinary malformations",
      "An amniotic fluid volume over 2,000 mL",
      "Skin and skeletal abnormalities"
    ],
    answers: [0, 2, 3, 5],
    rationale: "Oligohydramnios (less than 500 mL, AFI under 5) risks cord compression, pulmonary hypoplasia — the fetus must breathe fluid in for the lungs to develop — and renal, urinary, skin, and skeletal abnormalities. Over 2,000 mL and uterine overdistention with preterm labor both describe hydramnios (polyhydramnios), the opposite problem."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which are recognized signs of impending labor?",
    options: [
      "Lightening — the presenting part settles into the true pelvis",
      "Loss of the mucus plug (bloody show)",
      "Braxton Hicks contractions",
      "A sudden burst of energy (nesting)",
      "Mild weight loss or GI upset"
    ],
    answers: [0, 1, 2, 3, 4],
    rationale: "All of these are premonitory signs of impending labor: lightening, bloody show, Braxton Hicks 'practice' contractions, nesting, and mild weight loss with GI upset. Beginning cervical change and rupture of membranes are also signs. Losing the mucus plug does not mean labor is imminent, but it does mean the cervix is softening."
  },
  {
    topic: "Hypertensive Disorders",
    stem: "Which statements about the classification of hypertensive disorders in pregnancy are correct?",
    options: [
      "Gestational hypertension is a BP of 140/90 or higher after 20 weeks without proteinuria",
      "Chronic hypertension is hypertension that first appears after 20 weeks",
      "Diagnosis requires two readings of 140/90 or higher at least 4 hours apart",
      "HELLP stands for Hemolysis, Elevated Liver enzymes, and Low Platelets",
      "Eclampsia is preeclampsia plus a grand mal seizure",
      "Severe preeclampsia requires a systolic of at least 140 mm Hg"
    ],
    answers: [0, 2, 3, 4],
    rationale: "Gestational hypertension is a new BP of 140/90 or higher AFTER 20 weeks with no proteinuria, and no hypertensive diagnosis is made on a single reading — it takes two, at least 4 hours apart. HELLP accompanies severe preeclampsia; eclampsia is preeclampsia plus a grand mal seizure. CHRONIC hypertension predates pregnancy or appears BEFORE 20 weeks (or persists 6 weeks postpartum), and SEVERE preeclampsia takes a systolic of at least 160 or a diastolic of at least 110."
  },
  {
    topic: "Antepartum Care II",
    stem: "Which components of the biophysical profile (BPP) are assessed by ultrasound?",
    options: [
      "The non-stress test",
      "Fetal breathing",
      "Amniotic fluid index",
      "Fetal tone",
      "Fetal movement",
      "Fetal heart rate variability"
    ],
    answers: [1, 2, 3, 4],
    rationale: "BATMAN — Breathing, Amniotic fluid, Tone, Movement — are the four ultrasound components, each scored 0 or 2 (never a 1) for up to 8/8. The non-stress test is the fifth component and is not done by ultrasound; a reactive NST brings it to 10/10. Variability is read off the fetal monitor strip, not the ultrasound."
  },
  {
    topic: "Anatomy & Physiology",
    stem: "Which findings describe monochorionic-monoamniotic (mono-mono) identical twins?",
    options: [
      "The blastocyst divides at about 8 to 12 days",
      "They share one chorion",
      "They may be of different sexes",
      "They share one amniotic sac",
      "They always have two placentas",
      "They are at the highest risk, including cord entanglement"
    ],
    answers: [0, 1, 3, 5],
    rationale: "Mono-mono twins result from a LATE division (8–12 days), share both the chorion and the amnion — one placenta, one sac — and carry the highest risk of the twin types, including cord entanglement, so they are monitored closely. Identical (monozygotic) twins come from one egg and one sperm, so they are ALWAYS the same sex; a boy and a girl means fraternal."
  },
  {
    topic: "Disorders & Genetics",
    stem: "Which statements about genital herpes in pregnancy are correct?",
    options: [
      "Acyclovir suppresses the virus but does not cure it",
      "Neonatal infection is usually mild and self-limiting",
      "Suppressive therapy is started at 36 weeks' gestation",
      "An active lesion at delivery requires a cesarean birth",
      "A cesarean is required for any history of herpes, whether or not a lesion is present",
      "Diagnosis is made by culturing a lesion"
    ],
    answers: [0, 2, 3, 5],
    rationale: "Acyclovir keeps the virus dormant — there is no cure — and suppressive therapy starts at 36 weeks to prevent an outbreak near delivery. Diagnosis is by culturing a lesion. It is the ACTIVE lesion at delivery that requires a cesarean, not the history alone, because neonatal herpes can be FATAL — not mild."
  }
  ]
};
