/* ============================================================
   data/torture-chamber.js — "The Torture Chamber" practice exam.

   50 questions, ALL of them select all that apply. Cumulative across
   every topic through Week 4 (Weeks 5 and 6 are deliberately excluded,
   consistent with the rest of the Exam Prep section). Content is drawn
   only from the lecture material already taught on the topic pages —
   several items are seeded from the SATA questions in data/exam-1.js
   and data/exam-2.js, reworded or expanded here. The Week 3 (Intrapartum
   Care I & II) and Week 4 (Artificial Management of Labor & Intrapartum
   Complications) SATA sets were each expanded by 5 (2026-07-23) to bring
   the exam from 30 to 50 questions; the full set is re-scrambled below.

   Deliberate design points:
     • Some questions have only ONE correct option and some have ALL
       options correct — SATA anxiety is the whole point of the page.
     • The question order is scrambled so it is not in topic order
       (fixed-seed shuffle; no two adjacent questions share a topic).

   Shape is the same as any other exam data file (see assets/exam.js).
   ============================================================ */
window.EXAM_DATA = {
  id: "torture-chamber",
  title: "The Torture Chamber",
  questions: [
  {
    topic: "Artificial Management of Labor",
    stem: "Which actions are appropriate for a patient receiving oxytocin for induction of labor?",
    options: [
      "Maintain continuous fetal monitoring",
      "Increase the rate by about 1 to 2 milliunits/minute every 30 minutes",
      "Check a blood pressure before every titration",
      "Use a volume control (buretrol) holding about 2 hours of medication",
      "Bolus the oxytocin to move a slow labor along"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Continuous fetal monitoring is required, the drip is titrated about 1–2 milliunits/minute every 30 minutes with a blood pressure before each titration, and — as with any high-risk medication — a volume control holds only about 2 hours' worth in case the pump malfunctions. NEVER let oxytocin bolus into a pregnant patient: the uterus clamps down in a constant hard contraction and the baby is not perfused, showing a prolonged deceleration and fetal bradycardia."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which VEAL CHOP pairings correctly match a fetal heart rate pattern to its cause?",
    options: [
      "Variable deceleration → cord compression",
      "Early deceleration → head compression",
      "Late deceleration → uteroplacental insufficiency",
      "Acceleration → okay (reassuring)",
      "Late deceleration → head compression"
    ],
    answers: [0, 1, 2, 3],
    rationale: "VEAL CHOP reads straight across: Variable → Cord compression, Early → Head compression, Acceleration → Okay, Late → Placental (uteroplacental) insufficiency. Late decelerations are a perfusion problem, never head compression."
  },
  {
    topic: "Intrapartum Complications",
    stem: "The nurse feels the umbilical cord during a vaginal exam. Which actions are appropriate?",
    options: [
      "Keep gloved fingers in the vagina and push up on the baby's head, off the cord",
      "Immediately drop the head of the bed into Trendelenburg",
      "Notify the provider that there is a prolapsed cord",
      "Give oxygen as needed",
      "Prepare for a cesarean birth"
    ],
    answers: [0, 1, 2, 3, 4],
    rationale: "All five are the steps for a prolapsed cord, in order: keep your gloved fingers in place to lift the presenting part off the cord, drop the bed into Trendelenburg to take the fetal head's pressure off it, notify the provider, give oxygen as needed, and prepare for a cesarean. Prevention comes first — if the water is broken and the presenting part is still high, she stays in bed until the head settles against the cervix."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which statements about fetal station and position are correct?",
    options: [
      "The ischial spines are zero station and are the narrowest part of the pelvis",
      "A station of −2 means the presenting part is above the ischial spines",
      "Engagement has occurred when the presenting part reaches zero station",
      "In \"ROA,\" the R refers to the MOTHER'S right side",
      "A posterior position is preferred, because the baby is born face up"
    ],
    answers: [0, 1, 2, 3],
    rationale: "The ischial spines are zero station and the narrowest part of the pelvis; above them is negative (−1 to −5), below is positive (+1 to +5), and engagement is reaching zero station. In the three-letter notation, right and left always refer to the MOTHER. An ANTERIOR position is what you want — the baby's face toward the floor at delivery. Occiput posterior means being born face up, which is harder to push out."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which statements about fetal heart rate variability are correct?",
    options: [
      "Variability is the best indicator of fetal oxygenation",
      "Moderate variability (6–25 bpm) is the goal",
      "Absent variability may indicate fetal acidosis or distress",
      "Minimal variability can be caused by a fetal sleep cycle or opioids",
      "Marked variability (>25 bpm) is the most reassuring finding"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Variability — the fluctuation around the baseline — is the single best indicator of fetal oxygenation. Moderate (6–25 bpm) is where you want it; absent may mean acidosis; minimal can be a sleep cycle, pain medication, or magnesium. Marked variability is ABOVE the desired range, not the most reassuring finding."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which measures does the nurse anticipate when preparing a client for a cesarean birth?",
    options: [
      "Bolus warmed IV fluids (about 1,500 mL LR)",
      "Famotidine (Pepcid) and metoclopramide (Reglan) if it is unscheduled",
      "A wedge under the right hip for a left tilt",
      "Insert an indwelling urinary catheter after anesthesia",
      "Withhold all antacids to keep the stomach empty"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Cesarean prep includes a warmed LR bolus (~1,500 mL); famotidine, metoclopramide, and Bicitra if unscheduled (a pregnant client is a 'full stomach'); a wedge under the right hip for a left tilt to prevent supine hypotension; and a Foley after anesthesia. Antacids/Bicitra are GIVEN to neutralize stomach acid, not withheld."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which statements about preterm labor and its management are correct?",
    options: [
      "Nifedipine is given to relax the uterine muscle and is held if the systolic pressure is less than 90",
      "Terbutaline is for acute use only — about 2 to 3 days",
      "Betamethasone 12 mg IM for 2 doses, 12 to 24 hours apart, speeds fetal lung maturity",
      "A cervical length shortening to less than 25 mm before term is abnormal",
      "A POSITIVE fetal fibronectin means the risk of preterm birth is decreased"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Nifedipine as a tocolytic relaxes the uterine muscle — monitor the blood pressure closely and do not give it if the systolic is under 90. Terbutaline is subcutaneous and for acute use only, about 2–3 days. Betamethasone 12 mg IM × 2 doses, 12–24 hours apart, causes a release of surfactant; the \"steroid window\" is the 48 hours after the first dose. Cervical shortening under 25 mm before term is abnormal. Fibronectin is the protein that glues the amniotic sac to the uterine lining, so a POSITIVE result means the glue has been disrupted — the risk is INCREASED."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which are cardinal movements (mechanisms) of labor?",
    options: [
      "Descent",
      "Flexion",
      "Internal rotation",
      "Extension",
      "Effacement"
    ],
    answers: [0, 1, 2, 3],
    rationale: "The mechanisms of labor, in order, are engagement, descent, flexion, internal rotation, extension, external rotation, and expulsion. Effacement is thinning of the cervix — a cervical change, not a cardinal movement of the fetus."
  },
  {
    topic: "Intrapartum Complications",
    stem: "A client on oxytocin develops uterine tachysystole. Which actions are appropriate?",
    options: [
      "Reposition the client",
      "Turn off or turn down the oxytocin",
      "Give oxygen",
      "Consider subcutaneous terbutaline to relax the uterus",
      "Increase the oxytocin to push through the pattern"
    ],
    answers: [0, 1, 2, 3],
    rationale: "For tachysystole the nurse does everything — reposition, provide comfort, give oxygen, and consider terbutaline to relax and space out contractions — EXCEPT increase the oxytocin. If oxytocin is running, turn it down or off; more oxytocin would worsen the tachysystole."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Using the COAT mnemonic, what should the nurse document when the membranes rupture?",
    options: [
      "Color of the fluid",
      "Odor",
      "Amount",
      "Time it ruptured",
      "The mother's blood type"
    ],
    answers: [0, 1, 2, 3],
    rationale: "COAT = Color (clear is normal; a faint yellow tint is normal; bloody may signal abruption; meconium is fetal stool), Odor (foul suggests chorioamnionitis), Amount (trickle vs. gush), and Time (rupture >18 hours raises the infection risk). Blood type is drawn on admission, not part of documenting rupture of membranes."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which findings indicate that the placenta has separated and is ready to deliver?",
    options: [
      "A globular-shaped uterus",
      "The uterus rising in the abdomen",
      "A sudden gush or trickle of blood",
      "Lengthening of the visible umbilical cord",
      "A drop in maternal blood pressure"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Signs of placental separation are a globular uterus, the uterus rising in the abdomen, a gush or trickle of blood, and more of the cord becoming visible. The third stage should last no longer than 30 minutes; oxytocin is given as an IV bolus right after the placenta delivers, followed by fundal massage. A dropping blood pressure is a sign of hemorrhage, not normal separation."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which statements about a forceps-assisted birth are correct?",
    options: [
      "Maternal cardiac disease is an indication (to reduce her pushing effort)",
      "A prolonged second stage with maternal exhaustion is an indication",
      "A non-reassuring fetal heart rate is an indication",
      "The provider must never pull when the client is not pushing",
      "They may be used simply because the client is tired of pushing"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Forceps are used only for a real indication — maternal cardiac disease or pulmonary compromise, intrapartum infection, a prolonged second stage, or a non-reassuring FHR — and are a guiding tool: the client must still push, and the provider must never pull when she is not pushing. They are never used just because she is tired."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which finding reliably distinguishes TRUE labor from false labor?",
    options: [
      "Progressive cervical dilation and effacement",
      "Contractions the patient describes as painful",
      "Contractions occurring about every 5 minutes",
      "Rupture of the membranes",
      "Bloody show"
    ],
    answers: [0],
    rationale: "The single biggest discriminator is progressive cervical change — dilation and effacement. False-labor (Braxton Hicks) contractions can be painful and can come at regular-seeming intervals but produce no cervical change and ease with rest, warmth, or massage. Ruptured membranes and bloody show are signs of impending labor, not proof of true labor."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which statements about intrapartum Group B Strep (GBS) prophylaxis are correct?",
    options: [
      "Penicillin is the drug of choice",
      "Clindamycin is used if she is allergic to penicillin",
      "Antibiotics are given during labor and continued until delivery",
      "GBS in the vaginal flora can make the newborn ill",
      "A positive GBS status requires an immediate cesarean birth"
    ],
    answers: [0, 1, 2, 3],
    rationale: "GBS may live harmlessly in the vaginal flora but can make the baby ill, so prophylactic antibiotics are given during labor until delivery — penicillin first (5 million units IV, then 2.5 million units q4h), clindamycin 900 mg IV q4h if she is penicillin-allergic. A positive status does not call for a cesarean."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which are fetal risks of a post-term (past 42 weeks) pregnancy?",
    options: [
      "Decreased placental perfusion",
      "Oligohydramnios",
      "Macrosomia or, conversely, small-for-gestational-age",
      "Meconium-stained fluid with a risk of meconium aspiration",
      "An increased amniotic fluid volume"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Post-term fetal risks include decreased placental perfusion (the aging placenta), oligohydramnios, macrosomia or SGA, and increased meconium-stained fluid raising the risk of meconium aspiration syndrome. Amniotic fluid tends to DECREASE (oligohydramnios), not increase."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which are appropriate cautions before giving systemic (IV/IM) analgesia during labor?",
    options: [
      "Avoid it when birth is imminent (risk of newborn respiratory depression)",
      "Avoid it with a Category III (abnormal) tracing",
      "Confirm a well-established labor pattern first",
      "Remember the medication crosses the placenta",
      "Rely on naloxone to reverse meperidine (Demerol) in the newborn"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Systemic analgesia is given only in well-established labor, not right before birth (newborn respiratory depression), and is used with caution or avoided with a non-reassuring/Category III tracing; all of it crosses the placenta. Naloxone does NOT reverse meperidine (Demerol) in the infant."
  },
  {
    topic: "Intrapartum Care I",
    stem: "During the fourth stage of labor, which nursing actions and findings are appropriate?",
    options: [
      "Assess the fundus, perineum, and vaginal bleeding every 15 minutes for the first hour",
      "Expect the uterus to stay contracted and midline",
      "Check the bladder for fullness — it is often hypotonic",
      "Encourage skin-to-skin (kangaroo) care",
      "Treat postpartum shaking as a definite sign of hemorrhage"
    ],
    answers: [0, 1, 2, 3],
    rationale: "In the fourth stage the nurse checks the fundus, perineum, and bleeding every 15 minutes for the first hour, expects a firm midline uterus, checks the often-hypotonic bladder, and encourages kangaroo care. Postpartum shaking is a normal CNS/adrenaline response with fluid and heat loss — warm blankets help; it is not by itself a sign of hemorrhage."
  },
  {
    topic: "Intrapartum Care II",
    stem: "An intrauterine pressure catheter (IUPC) is in place. Which findings indicate adequate, safe uterine activity?",
    options: [
      "Montevideo units greater than 200 in a 10-minute period",
      "Montevideo units that do not exceed 300",
      "A resting tone less than 25 mm Hg",
      "Contractions lasting less than 120 seconds",
      "Seven contractions in a 10-minute period"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Adequate labor is more than 200 Montevideo units in 10 minutes, without exceeding 300; resting tone should be under 25 mm Hg so the uterus relaxes between contractions, and a contraction lasting longer than 2 minutes is too long. No more than 5 contractions in 10 minutes — 6 or more is uterine tachysystole."
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
    rationale: "All five are scored. The Bishop score estimates how likely a vaginal delivery is: the higher the score, the greater the likelihood — a score around 8 or higher is considered favorable. A sterile vaginal exam provides the findings needed for it, and it is obtained before an induction is started."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which findings and actions are associated with an amniotic fluid embolism?",
    options: [
      "Sudden dyspnea and chest pain",
      "Frothy sputum and cyanosis",
      "Hypotension and possible massive hemorrhage",
      "During CPR, displace the uterus to the side",
      "It is a common, low-risk event"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Amniotic fluid embolism presents with sudden chest pain, dyspnea, cyanosis, frothy sputum, tachycardia, hypotension, and possible massive hemorrhage. Care supports cardiorespiratory function, and during CPR on a client ≥20 weeks the uterus is displaced to the side. It is very rare but carries an 80–90% mortality rate — not low-risk."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which fetal presentations are classified as breech?",
    options: [
      "Frank breech",
      "Complete breech",
      "Footling breech",
      "Vertex",
      "Shoulder"
    ],
    answers: [0, 1, 2],
    rationale: "Frank (hips flexed, knees extended), complete (hips and knees flexed), and footling (one or both feet first) are all breech presentations. Vertex is a cephalic (head-first) presentation, and a shoulder presentation is a transverse lie — neither is breech."
  },
  {
    topic: "Disorders & Genetics",
    stem: "Which sexually transmitted infections are treated with penicillin?",
    options: [
      "Syphilis",
      "Chlamydia",
      "Gonorrhea",
      "Trichomoniasis",
      "Human papillomavirus (HPV)"
    ],
    answers: [0],
    rationale: "Only syphilis is treated with penicillin. Chlamydia is treated with azithromycin; gonorrhea with ceftriaxone (Rocephin) plus azithromycin; trichomoniasis with metronidazole; HPV with cryotherapy, shave or acid removal (with Gardasil for prevention)."
  },
  {
    topic: "Hypertensive Disorders",
    stem: "Which statements about medications used in hypertensive disorders of pregnancy are correct?",
    options: [
      "IV labetalol is avoided in a patient with a history of asthma",
      "IV hydralazine is avoided in a patient who is tachycardic",
      "Oral nifedipine is avoided in a patient who is tachycardic",
      "Low-dose aspirin 81 mg is started at 12 to 28 weeks for patients at risk for preeclampsia",
      "Magnesium sulfate is given in preeclampsia to lower the blood pressure"
    ],
    answers: [0, 1, 2, 3],
    rationale: "For acute severe hypertension, know the drug, route, and contraindication: labetalol — \"labetalol, lungs\" — is avoided in asthma; hydralazine and nifedipine are avoided with tachycardia. Low-dose aspirin (81 mg) started at 12–28 weeks reduces the development of preeclampsia, IUGR, and preterm birth. Magnesium sulfate is given to PREVENT SEIZURES — not to lower blood pressure."
  },
  {
    topic: "Intrapartum Complications",
    stem: "The head has delivered but the shoulders are trapped (shoulder dystocia). Which actions are appropriate?",
    options: [
      "Perform the McRoberts maneuver (flex the hips, knees back toward the chest)",
      "Apply suprapubic pressure",
      "Lower the head of the bed",
      "Document the interventions and how long the dystocia lasted",
      "Apply fundal pressure to push the baby out"
    ],
    answers: [0, 1, 2, 3],
    rationale: "For shoulder dystocia: lower the head of the bed, perform McRoberts (hips flexed, knees to chest), apply suprapubic pressure where the shoulder is trapped, and document the maneuvers and duration. NEVER apply fundal pressure — it only jams the shoulder harder against the pubic bone."
  },
  {
    topic: "Antepartum Care II",
    stem: "Which teaching points about relieving common discomforts of pregnancy are correct?",
    options: [
      "Dorsiflex the foot to stretch the calf for a leg cramp",
      "Eat dry crackers or toast before rising for nausea",
      "Elevate the feet and legs for ankle edema",
      "Use pelvic tilt exercises and good body mechanics for backache",
      "Use a sodium-containing antacid for heartburn"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Dorsiflexing the foot stretches the cramping calf; dry crackers before rising and small frequent meals help early nausea; elevating the legs helps the decreased venous return causing ankle edema; and pelvic tilts, good posture, and body mechanics ease the backache of lordosis. Heartburn is treated with NON-sodium antacids as recommended by the provider."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which fetal heart rate findings are NON-reassuring?",
    options: [
      "Late decelerations of any magnitude",
      "Absent variability",
      "A sinusoidal pattern",
      "Recurrent, severe variable decelerations",
      "Moderate variability with accelerations"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Non-reassuring findings include late decelerations of ANY magnitude, absent variability, a sinusoidal pattern, prolonged decelerations, persistent and severe variables, and severe bradycardia or prolonged tachycardia. Moderate variability (6–25 bpm) with accelerations is exactly what you want — variability is the best indicator of fetal oxygenation."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which statements about cesarean birth are correct?",
    options: [
      "The transverse (Pfannenstiel) \"bikini cut\" is the most common skin incision",
      "The low transverse uterine incision is the one most often used",
      "The skin incision direction may not match the uterine incision, so document both",
      "A classical (vertical) uterine incision raises the risk of uterine rupture if a vaginal delivery is attempted later",
      "She is positioned on the operating table with a wedge under the LEFT hip"
    ],
    answers: [0, 1, 2, 3],
    rationale: "The Pfannenstiel skin incision and the low transverse uterine incision are the most common, but the two directions may not match — document both. A classical or vertical uterine incision raises the risk of rupture in a later labor, so a repeat cesarean is recommended. She is positioned with a left TILT — a wedge under the RIGHT hip — to prevent supine hypotension and improve perfusion to the baby."
  },
  {
    topic: "Antepartum Complications",
    stem: "Which statements about Rh alloimmunization and RhoGAM are correct?",
    options: [
      "An indirect Coombs test is drawn at the first prenatal visit and again at 20 weeks",
      "RhoGAM 300 mcg is given prophylactically at 28 weeks if the antibody screen is negative",
      "RhoGAM is indicated after a spontaneous abortion, an ectopic pregnancy, amniocentesis, or maternal trauma",
      "If the direct Coombs on cord blood is negative, RhoGAM is given within 72 hours",
      "If the direct Coombs at birth is positive, a larger dose of RhoGAM is given"
    ],
    answers: [0, 1, 2, 3],
    rationale: "The indirect Coombs screens maternal antibodies at the first visit and at 20 weeks; 300 mcg of RhoGAM is given at 28 weeks if that screen is negative, and again any time fetal and maternal blood could mix. A negative direct Coombs on cord blood means give RhoGAM within 72 hours. A POSITIVE direct Coombs means she is already sensitized — do NOT give RhoGAM; monitor the infant for hemolytic disease."
  },
  {
    topic: "Antepartum Care",
    stem: "Which findings should a pregnant patient be taught to report to her provider?",
    options: [
      "A gush of fluid from the vagina",
      "Vaginal bleeding",
      "A severe headache with blurred vision or visual spots",
      "Epigastric pain or pain under the right breast",
      "Decreased fetal movement"
    ],
    answers: [0, 1, 2, 3, 4],
    rationale: "All five are danger signs of pregnancy. A gush of fluid may be ruptured membranes; bleeding suggests a placental complication; visual changes are neurologic warning signs of hypertension; epigastric/right upper quadrant pain reflects liver involvement in hypertensive disorders; and decreased fetal movement is a fetal well-being concern."
  },
  {
    topic: "Intrapartum Care I",
    stem: "Which statements about the four pelvis shapes are correct?",
    options: [
      "Gynecoid is the most favorable shape for a vaginal birth",
      "Android is more likely to lead to cephalopelvic disproportion (CPD)",
      "Platypelloid (flat) is more likely to result in a transverse lie",
      "Anthropoid carries an increased risk of an occiput posterior position",
      "The gynecoid pelvis is the least common shape"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Gynecoid (~50%, the classic female pelvis) is the MOST common and most favorable for vaginal birth. Android raises the risk of CPD, platypelloid (the least common, ~3%) favors a transverse lie, and anthropoid raises the risk of occiput posterior."
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
    rationale: "All five are correct. Folic acid at 400 mcg/day is the one number to memorize; calorie needs rise about 300 kcal/day in the second and third trimesters; iron is the only truly required supplement (though a prenatal vitamin is recommended since most diets fall short); pica — eating non-nutritive substances like clay or laundry starch — can cause iron-deficiency anemia; and the fluid recommendation is eight to ten 8-oz glasses daily, at least half water."
  },
  {
    topic: "Antepartum Care II",
    stem: "Which statements about the contraction stress test (CST) are correct?",
    options: [
      "A NEGATIVE result is the desired result",
      "A negative CST means no late decelerations in a 10-minute period",
      "A POSITIVE CST means late decelerations with more than half of the contractions",
      "A positive CST suggests poor placental perfusion",
      "An equivocal result is considered reassuring"
    ],
    answers: [0, 1, 2, 3],
    rationale: "The CST is \"backwards\": negative is what you want (no late decels in 10 minutes), and positive is bad — late decels with more than half of the contractions, indicating poor placental oxygen/CO₂ exchange. An equivocal result is suspicious/inconclusive and requires further monitoring, not reassurance."
  },
  {
    topic: "Intrapartum Care II",
    stem: "A patient on oxytocin has recurrent late decelerations. Which nursing interventions are appropriate?",
    options: [
      "Reposition her, preferably onto her left side",
      "Turn the oxytocin off",
      "Give an IV fluid bolus of lactated Ringer's",
      "Apply oxygen at 10 L by tight non-rebreather face mask",
      "Raise the head of the bed to high Fowler's"
    ],
    answers: [0, 1, 2, 3],
    rationale: "UNCOIL — Undo what's happening, Change position (the left side especially increases blood flow), Oxygen / turn Oxytocin off, IV fluid bolus of LR, and LOWER the head of the bed to increase perfusion. Raising the head of the bed is the opposite of what is wanted. Notify the provider and document any non-reassuring finding."
  },
  {
    topic: "Hypertensive Disorders",
    stem: "Which findings in a patient receiving magnesium sulfate indicate TOXICITY rather than an expected side effect?",
    options: [
      "Absent deep tendon reflexes",
      "A respiratory rate of 10",
      "Slurred speech and a decreased level of consciousness",
      "Feeling hot and flushed",
      "Mild drowsiness"
    ],
    answers: [0, 1, 2],
    rationale: "Toxicity is decreased or absent reflexes, a decreased respiratory rate, and a change in level of consciousness or slurred speech; the antidote is IV calcium gluconate. Feeling hot and flushed, headache, nausea, tiredness, and some muscle weakness are EXPECTED at a therapeutic level of about 4–7."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which findings point to placental ABRUPTION rather than placenta previa?",
    options: [
      "Severe abdominal pain",
      "A uterus that is very tender and feels firm or stone-hard",
      "Bleeding that may be concealed rather than visible",
      "An abdomen that enlarges and changes shape",
      "Bright red, painless bleeding"
    ],
    answers: [0, 1, 2, 3],
    rationale: "The single biggest difference is abdominal pain and how hard the abdomen feels. Abruption causes severe pain, a tender, firm, board-like uterus, bleeding that may be concealed (especially a central abruption), and an abdomen that enlarges as blood accumulates. Bright red, PAINLESS bleeding with a soft, relaxed uterus is placenta previa — and with a previa you do not perform a vaginal exam."
  },
  {
    topic: "Disorders & Genetics",
    stem: "Which statements describe autosomal RECESSIVE inheritance?",
    options: [
      "The affected individual usually has two clinically normal carrier parents",
      "Two abnormal alleles are required for the trait to be expressed",
      "Carrier × carrier gives a 25% chance of an affected child with each pregnancy",
      "Cystic fibrosis is an example",
      "Each child of an affected parent has a 50% chance of being affected"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Recessive disorders need two abnormal alleles, so the affected child typically has two clinically normal carrier parents; carrier × carrier yields 25% affected, 50% carrier, 25% unaffected. Cystic fibrosis is the lecture's example. A 50% chance from one affected parent describes autosomal DOMINANT inheritance."
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
    rationale: "All five are correct. The cord is \"backwards\" — 2 arteries carry waste away and 1 vein delivers oxygenated blood — and the vessels sit in Wharton's jelly. There are no pain receptors, so cutting the cord doesn't hurt anyone. Along with immune protection, excretion, respiration, and nutrient transfer, the placenta produces hormones including hCG."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which statements about amnioinfusion are correct?",
    options: [
      "Warmed LR or normal saline is instilled through an IUPC",
      "It is used for repetitive or worsening variable decelerations",
      "Clear fluid returning on the pad is expected",
      "If the pad stays dry and the resting tone rises, stop the infusion",
      "It is given to speed up cervical dilation"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Amnioinfusion instills warm LR or saline through an IUPC to restore cushion around the cord for repetitive/worsening variable decelerations. Fluid must keep leaking back out — clear return is expected; if the pad stays dry and the resting tone climbs, stop it immediately. It does not speed dilation."
  },
  {
    topic: "Antepartum Complications",
    stem: "The nurse assesses a pregnant patient with a cardiac disorder at each prenatal visit. Which findings suggest cardiac DECOMPENSATION?",
    options: [
      "A new cough",
      "Dyspnea",
      "Palpitations",
      "Edema",
      "Weight loss"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Signs of cardiac decompensation include a new cough, dyspnea, edema, a murmur, palpitations, rales, and weight GAIN. Weight loss is not a sign. Management focuses on reducing cardiac workload: 8–10 hours of rest, a high-iron/high-protein, low-sodium diet, an epidural in labor, and side-lying or semi-Fowler's positioning."
  },
  {
    topic: "Intrapartum Care II",
    stem: "Which statements about testing for rupture of membranes are correct?",
    options: [
      "Amniotic fluid is alkaline and turns nitrazine paper deep blue",
      "A positive fern test shows a crystallized, fern-like pattern under the microscope",
      "The nurse can perform the nitrazine test at the bedside",
      "Nitrazine paper that stays yellow suggests it is probably not amniotic fluid",
      "A deep-blue nitrazine result means the fluid is acidic"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Amniotic fluid is alkaline, so it turns nitrazine paper deep blue (positive); paper that stays yellow is probably not amniotic fluid. The nurse can do nitrazine at the bedside; the provider does the fern test (a crystallized fern pattern is positive). Blue means alkaline, not acidic."
  },
  {
    topic: "Artificial Management of Labor",
    stem: "Which statements about water intoxication (acute hyponatremia) from oxytocin are correct?",
    options: [
      "It results from oxytocin's antidiuretic-hormone-like effect",
      "Signs include confusion, lethargy, and vomiting",
      "It can progress to seizures",
      "Management includes stopping the oxytocin and giving furosemide",
      "It is corrected by increasing the oxytocin rate"
    ],
    answers: [0, 1, 2, 3],
    rationale: "A large amount of oxytocin has an antidiuretic effect, causing water intoxication/hyponatremia — confusion, lethargy, vomiting, and possibly a seizure. Management is to STOP the oxytocin, give 0.9% normal saline, and give furosemide to remove the excess fluid. Increasing the rate would worsen it."
  },
  {
    topic: "Maternal Nutrition",
    stem: "For which of these is NO real increase needed during pregnancy?",
    options: [
      "Fat intake",
      "Vitamin E",
      "Vitamin K",
      "Sodium",
      "Iron"
    ],
    answers: [0, 1, 2, 3],
    rationale: "No real change is needed for fat intake, vitamin E, vitamin K, iodine, and sodium — sodium is not normally restricted in pregnancy. Iron IS increased; it is the only supplement truly needed if the diet is adequate."
  },
  {
    topic: "Antepartum Care",
    stem: "Which findings are POSITIVE (diagnostic) signs of pregnancy?",
    options: [
      "Auscultation of the fetal heartbeat by the examiner",
      "Fetal movement felt by the examiner",
      "Visualization of the fetus on ultrasound",
      "A positive urine pregnancy test",
      "Braxton Hicks contractions"
    ],
    answers: [0, 1, 2],
    rationale: "Positive signs can be explained ONLY by pregnancy: the examiner hearing the fetal heartbeat, the examiner palpating fetal movement, and seeing the fetus on ultrasound. A positive pregnancy test and Braxton Hicks contractions are PROBABLE (objective) signs."
  },
  {
    topic: "Antepartum Complications",
    stem: "Which measures help reduce perinatal (mother-to-baby) transmission of HIV?",
    options: [
      "ZDV antiretroviral therapy",
      "An elective cesarean birth before the membranes rupture",
      "Bottle-feeding where formula is available",
      "Avoiding invasive procedures such as a fetal scalp electrode",
      "Breastfeeding to pass along maternal antibodies"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Antiretroviral therapy (ZDV) reduces transmission to about 1–2%; an elective C-section before membranes rupture, avoiding invasive procedures, and universal precautions all lower risk. Breast milk can carry HIV, so bottle-feeding is recommended where formula is available."
  },
  {
    topic: "Intrapartum Complications",
    stem: "Which are recognized risks of oligohydramnios?",
    options: [
      "Cord compression",
      "Pulmonary hypoplasia",
      "Renal and urinary malformations",
      "Skin and skeletal abnormalities",
      "An amniotic fluid volume over 2,000 mL"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Oligohydramnios (less than 500 mL) risks cord compression, pulmonary hypoplasia (the fetus must breathe fluid for the lungs to develop), renal/urinary malformations, and skin/skeletal abnormalities. More than 2,000 mL describes hydramnios (polyhydramnios), the opposite problem."
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
    rationale: "All of these are premonitory signs of impending labor: lightening, bloody show (expulsion of the mucus plug), Braxton Hicks 'practice' contractions, nesting (a burst of energy), and mild weight loss with GI upset. Cervical changes and rupture of membranes are also signs — losing the mucus plug does NOT mean labor is imminent, but it is a sign the cervix is softening."
  },
  {
    topic: "Hypertensive Disorders",
    stem: "Which statements about the classification of hypertensive disorders in pregnancy are correct?",
    options: [
      "Gestational hypertension is a BP of 140/90 or higher after 20 weeks without proteinuria",
      "Diagnosis requires two readings of 140/90 or higher at least 4 hours apart",
      "HELLP stands for Hemolysis, Elevated Liver enzymes, and Low Platelets",
      "Eclampsia is preeclampsia plus a grand mal seizure",
      "Chronic hypertension is hypertension that first appears after 20 weeks"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Gestational hypertension is a new BP of 140/90 or higher after 20 weeks with no proteinuria, and diagnosis takes two readings at least 4 hours apart. HELLP — Hemolysis, Elevated Liver enzymes, Low Platelets — accompanies severe preeclampsia. Eclampsia is preeclampsia plus a grand mal seizure and is an obstetrical emergency. CHRONIC hypertension is present before pregnancy or before 20 weeks, or persists 6 weeks after delivery."
  },
  {
    topic: "Antepartum Care II",
    stem: "Which components of the biophysical profile (BPP) are assessed by ultrasound?",
    options: [
      "Fetal breathing",
      "Amniotic fluid index",
      "Fetal tone",
      "Fetal movement",
      "Non-stress test"
    ],
    answers: [0, 1, 2, 3],
    rationale: "BATMAN — Breathing, Amniotic fluid, Tone, Movement are the four ultrasound components, each scored 0 or 2 (never a 1) for up to 8/8. The Non-stress test is the fifth component and is not done by ultrasound; a reactive NST brings it to 10/10."
  },
  {
    topic: "Anatomy & Physiology",
    stem: "Which findings describe monochorionic-monoamniotic (mono-mono) identical twins?",
    options: [
      "The blastocyst divides at about 8 to 12 days",
      "They share one chorion",
      "They share one amniotic sac",
      "They are at the highest risk, including cord entanglement",
      "They may be of different sexes"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Mono-mono twins result from a late division (8–12 days), share both the chorion and the amnion, and carry the highest risk — including cord entanglement. Identical (monozygotic) twins come from one egg and one sperm, so they are ALWAYS the same sex; a boy and a girl means fraternal."
  },
  {
    topic: "Disorders & Genetics",
    stem: "Which statements about genital herpes in pregnancy are correct?",
    options: [
      "Acyclovir suppresses the virus but does not cure it",
      "Suppressive therapy is started at 36 weeks gestation",
      "An active lesion at delivery requires a cesarean birth",
      "Diagnosis is made by culturing a lesion",
      "Neonatal infection is usually mild and self-limiting"
    ],
    answers: [0, 1, 2, 3],
    rationale: "Acyclovir keeps the virus dormant — there is no cure — and is started at 36 weeks. An active lesion at delivery means a C-section is required, because neonatal herpes infection can be FATAL, not mild. Diagnosis is by lesion culture."
  }
  ]
};
