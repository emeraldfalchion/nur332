/* ============================================================
   exam-1.js - Practice Exam 1 (50 questions).
   Cumulative across Weeks 1-3, weighted more heavily toward Week 3.
   Per-topic: reproductive 2, disorders 5, antepartum 4, antepartum II 2,
   nutrition 2, complications 4, hypertensive 5, intrapartum I 13,
   intrapartum II 13. 6 SATA. Deterministically shuffled (mulberry32 seed 332).
   Reuses the original 85-question pool split with exam-2.js + 15 new items;
   every Must-Know Quick Reference hint appears on exam 1 or exam 2.
   ============================================================ */
window.EXAM_DATA = {
  title: "Practice Exam 1",
  id: "exam-1",
  questions: [
    {
      stem: "A patient arrives in labor with an active genital herpes lesion. Which delivery plan does the nurse anticipate?",
      options: ["Vaginal delivery with IV antibiotics","Cesarean birth","Vacuum-assisted vaginal delivery","Tocolytics until the lesion resolves"],
      answer: 1,
      rationale: "An active HSV lesion at delivery requires a cesarean birth; vaginal exposure can cause a fatal systemic infection in the newborn. (Acyclovir is started at 36 weeks to suppress outbreaks.)"
    },
    {
      stem: "A father has an autosomal DOMINANT disorder and is heterozygous (Dd). The mother is unaffected (dd). Using a Punnett square, what does the nurse teach about each pregnancy?",
      options: ["25% of children will be affected","50% of children will be affected","75% of children will be affected","No children affected, but all will be carriers"],
      answer: 1,
      rationale: "Dd × dd yields 50% Dd (affected). In an autosomal dominant disorder only ONE abnormal allele is needed, so there is no silent carrier."
    },
    {
      stem: "A tracing shows decelerations that begin after the contraction peak and do not return to baseline until after the contraction ends. What is the nurse's FIRST intervention?",
      options: ["Reposition the client to her side","Document a normal finding","Increase the oxytocin","Encourage her to push"],
      answer: 0,
      rationale: "These are LATE decelerations (uteroplacental insufficiency — a perfusion problem). Repositioning to the side is the first, non-invasive step (the C in UNCOIL)."
    },
    {
      stem: "A patient reports that her last menstrual period began on March 10 and ended March 15. Using Naegele's rule, what is her estimated date of birth?",
      options: ["December 17","December 22","January 17","December 10"],
      answer: 0,
      rationale: "Naegele's rule uses the FIRST day of the LMP (March 10): subtract 3 months (December 10), then add 7 days = December 17."
    },
    {
      stem: "A menstruating patient who uses super-absorbent tampons presents with fever, hypotension, vomiting, and a sunburn-like rash on her trunk. The nurse recognizes this as:",
      options: ["A benign, self-limiting condition","Toxic shock syndrome — a medical emergency needing hospitalization, IV fluids, and antibiotics","A yeast infection that can be treated at home","Normal premenstrual symptoms"],
      answer: 1,
      rationale: "Toxic shock syndrome (a Staph aureus toxin linked to super-absorbent tampons) is a medical emergency that can progress to shock and death."
    },
    {
      stem: "A patient at 34 weeks with severe preeclampsia is started on a magnesium sulfate infusion. Her partner asks, \"Is this the medicine that brings her blood pressure down?\" What is the nurse's best response?",
      options: ["\"Yes — magnesium is our first-line blood pressure medication.\"","\"No — magnesium is given to prevent seizures. A separate medication is used for her blood pressure.\"","\"Yes, and it will also start her labor.\"","\"No — magnesium is given to increase her urine output.\""],
      answer: 1,
      rationale: "Magnesium sulfate prevents seizures in severe preeclampsia, eclampsia, and HELLP — it is not an antihypertensive. Blood pressure is treated separately (labetalol, hydralazine, nifedipine)."
    },
    {
      stem: "It has been 35 minutes since the birth and the placenta has not delivered. The nurse is concerned because a prolonged third stage increases the risk of:",
      options: ["Uterine rupture","Hemorrhage and retained placenta","Precipitous labor","Cord prolapse"],
      answer: 1,
      rationale: "The third stage should last no longer than 30 minutes; beyond that raises the risk of hemorrhage and retained placenta."
    },
    {
      stem: "A patient at 30 weeks' gestation has a fundal height of 25 cm. What is the nurse's best interpretation?",
      options: ["This is expected and requires no action","This is more than 2 cm off from the gestational age and should be reported","This confirms intrauterine growth restriction","Fundal height is unreliable and should be ignored"],
      answer: 1,
      rationale: "Fundal height should be within about ±2 cm of gestational age in weeks (from ~22–34 weeks). 25 cm at 30 weeks is a 5-cm discrepancy that needs evaluation."
    },
    {
      stem: "A tracing shows abrupt, sharp decelerations that vary in their timing relative to the contractions. The most likely cause is:",
      options: ["Head compression","Umbilical cord compression","Uteroplacental insufficiency","A fetal sleep cycle"],
      answer: 1,
      rationale: "Abrupt, variably-timed decelerations are VARIABLE decelerations, caused by umbilical cord compression (think nuchal cord). Reposition the mother first."
    },
    {
      stem: "A fetus at 34 weeks is undergoing a non-stress test. Which finding does the nurse document as REACTIVE?",
      options: ["One acceleration of 10 bpm lasting 10 seconds in 20 minutes","Two accelerations of 15 bpm above baseline lasting 15 seconds each within 20 minutes","No accelerations over a 40-minute period","Late decelerations after each contraction"],
      answer: 1,
      rationale: "At ≥32 weeks, reactive = at least 2 accelerations of 15 bpm above baseline lasting 15 seconds within 20 minutes. Under 32 weeks the criteria drop to 10 bpm for 10 seconds."
    },
    {
      stem: "A patient in her second trimester asks how many extra calories she now needs each day. The nurse's best response is about:",
      options: ["No extra calories","300 extra kcal per day","500 extra kcal per day","1,000 extra kcal per day"],
      answer: 1,
      rationale: "About +300 kcal/day is needed during the second and third trimesters."
    },
    {
      stem: "A patient delivering today at 36 2/7 weeks has this history: one miscarriage at 9 weeks, one vaginal birth at 39 weeks, and a cesarean birth of twins at 35 weeks. All children are living. What is her GTPAL after today's birth?",
      options: ["G4 T1 P2 A1 L4","G3 T1 P1 A1 L4","G5 T1 P2 A1 L4","G4 T2 P1 A1 L3"],
      answer: 0,
      rationale: "Gravida counts pregnancies: miscarriage + term birth + twin pregnancy + today = G4. Term 1 (39 wk). Preterm 2 (the 35-wk twins and today). Abortions 1. Living 4 (1 + twins + today)."
    },
    {
      stem: "A 12-week ultrasound shows twins — one male and one female. The nurse knows these twins are:",
      options: ["Definitely identical (monozygotic)","Definitely fraternal (dizygotic)","Monochorionic-monoamniotic","Impossible to classify"],
      answer: 1,
      rationale: "Different sexes mean the twins are fraternal (dizygotic) — two eggs, two sperm. Same-sex twins could be either fraternal or identical."
    },
    {
      stem: "The nurse explains that the single BEST indicator of fetal oxygenation on the tracing is:",
      options: ["The baseline rate","Variability","The presence of accelerations","Contraction frequency"],
      answer: 1,
      rationale: "Variability — fluctuation around the baseline — is the best indicator of fetal oxygenation; moderate (6–25 bpm) is desired. Absent variability is ominous."
    },
    {
      stem: "A laboring client is Group B Strep positive and reports a penicillin allergy. The nurse anticipates which antibiotic for prophylaxis?",
      options: ["Ampicillin","Clindamycin","Gentamicin","Azithromycin"],
      answer: 1,
      rationale: "GBS prophylaxis is penicillin (drug of choice); if she is penicillin-allergic, clindamycin (900 mg IV every 4 hours until delivery) is used."
    },
    {
      stem: "A fetal baseline is 170 bpm for 12 minutes. What is the nurse's FIRST action?",
      options: ["Check the maternal temperature","Prepare for immediate delivery","Apply oxygen to the mother","Increase the IV fluids"],
      answer: 0,
      rationale: "For fetal tachycardia (>160 for ≥10 min) the first action is to check the maternal temperature — an elevated maternal temp is often reflected in a tachycardic baby."
    },
    {
      stem: "Which reported symptoms are danger signs of pregnancy that a patient should report to the provider? Select all that apply.",
      options: ["A gush of fluid from the vagina","Vaginal bleeding","A severe, persistent headache with visual changes","Mild ankle swelling that resolves overnight","Epigastric pain"],
      answers: [0, 1, 2, 4],
      rationale: "Danger signs include a gush of fluid (ruptured membranes), vaginal bleeding, neurologic/visual changes, epigastric pain, and decreased fetal movement. Mild ankle swelling that resolves overnight is a normal discomfort."
    },
    {
      stem: "A patient asks about the vessels in the umbilical cord. Which statement by the nurse is accurate?",
      options: ["Two veins carry oxygenated blood to the fetus","One artery carries waste away and two veins deliver oxygen","Two arteries carry waste away, and one vein delivers oxygenated blood to the baby","All three vessels carry oxygenated blood"],
      answer: 2,
      rationale: "The cord has two arteries (carry waste/deoxygenated blood away) and one vein (delivers oxygenated blood to the fetus) — \"backwards\" from adult circulation."
    },
    {
      stem: "Which fetal heart rate findings are NON-reassuring? Select all that apply.",
      options: ["Late decelerations of any magnitude","Absent variability","A sinusoidal pattern","Moderate variability with accelerations","Recurrent, severe variable decelerations"],
      answers: [0, 1, 2, 4],
      rationale: "Non-reassuring: late decels of any magnitude, absent variability, sinusoidal pattern, and persistent/severe variables. Moderate variability with accelerations is reassuring."
    },
    {
      stem: "A laboring patient is thrashing in pain and the external toco is not registering any contractions. What should the nurse do FIRST?",
      options: ["Immediately medicate her for pain","Palpate the fundus to assess contractions and rule out abruption or uterine rupture","Readjust the toco belt and keep waiting","Increase the oxytocin"],
      answer: 1,
      rationale: "If she is thrashing and the toco is not registering, palpate the fundus FIRST to rule out a placental abruption or uterine rupture before readjusting the monitor or medicating."
    },
    {
      stem: "A client's sterile vaginal exam is 8 cm / 90% / +1. The nurse identifies this as:",
      options: ["First stage, latent phase","First stage, transition phase","Second stage","Not yet in labor"],
      answer: 1,
      rationale: "8–10 cm is the transition phase of the first stage. Stage/phase in the first stage is judged by dilation (latent 0–3, active 4–7, transition 8–10)."
    },
    {
      stem: "An amniocentesis is performed for fetal lung maturity. Which lecithin/sphingomyelin (L/S) ratio indicates MATURE fetal lungs?",
      options: ["1:2 or lower","2:1 or higher","1:1 exactly","Any ratio — the L/S ratio does not assess the lungs"],
      answer: 1,
      rationale: "An L/S ratio of 2:1 or greater indicates mature fetal lungs (adequate surfactant)."
    },
    {
      stem: "A vaginal exam reveals the presenting part at +4 station. The nurse recognizes that:",
      options: ["The baby is not yet engaged","Birth is imminent","The baby is still floating","A cesarean is required"],
      answer: 1,
      rationale: "At +4 the head is visible (beyond crowning) and birth is imminent. Zero station is engagement at the ischial spines; +5 is born."
    },
    {
      stem: "Which are signs of impending labor? Select all that apply.",
      options: ["Lightening (the presenting part settles into the true pelvis)","Bloody show (loss of the mucus plug)","A sudden burst of energy (nesting)","Beginning cervical effacement and dilation","A reactive non-stress test"],
      answers: [0, 1, 2, 3],
      rationale: "Signs of impending labor include lightening, bloody show/loss of the mucus plug, nesting, beginning cervical changes, rupture of membranes, and GI upset/weight loss. A reactive non-stress test is a test of fetal well-being, not a sign of impending labor."
    },
    {
      stem: "The newborn of a mother with poorly controlled diabetes is large for gestational age and becomes jittery with a blood glucose of 32 mg/dL one hour after birth. What best explains this?",
      options: ["The infant cannot produce insulin","The infant continues producing high insulin after the maternal glucose supply is cut off at birth","The infant's liver is clearing glucose too fast","The fetus had chronically low glucose in utero"],
      answer: 1,
      rationale: "Maternal glucose crossed the placenta and the fetus made extra insulin (causing macrosomia). When the cord is cut, the high insulin output continues, producing hypoglycemia."
    },
    {
      stem: "A patient with gestational diabetes brings her glucose log: fasting 92, one hour after breakfast 158, two hours after dinner 112. Which value should the nurse address with the provider?",
      options: ["The fasting value of 92","The one-hour value of 158","The two-hour value of 112","None — all values are at goal"],
      answer: 1,
      rationale: "GDM goals: fasting <95, one hour <140, two hours <120. The fasting 92 and two-hour 112 are at goal; the one-hour 158 is above the 140 target."
    },
    {
      stem: "The nurse explains that the involuntary uterine contractions responsible for cervical dilation and effacement are the:",
      options: ["Secondary powers","Primary powers","Ferguson reflex","Valsalva maneuver"],
      answer: 1,
      rationale: "Primary powers are the involuntary uterine contractions that dilate and efface the cervix. Secondary powers are the mother's voluntary pushing."
    },
    {
      stem: "A fetal heart rate deceleration lasts 3 minutes (more than 2 but less than 10 minutes). The nurse recognizes this as a prolonged deceleration and is most concerned about:",
      options: ["Head compression - a benign finding","A prolapsed umbilical cord or placental abruption","A normal fetal sleep cycle","Maternal fever"],
      answer: 1,
      rationale: "A prolonged deceleration lasts at least 2 but less than 10 minutes (10 minutes would be a new baseline). Think prolapsed cord or abruption and determine the cause. (Early decelerations are the benign head-compression pattern.)"
    },
    {
      stem: "A pregnant patient is diagnosed with gonorrhea. Untreated, the nurse knows this most importantly can cause which complication in the newborn?",
      options: ["Neonatal eye infection and blindness","Neural tube defects","Macrosomia","Cleft palate"],
      answer: 0,
      rationale: "Untreated gonorrhea (and chlamydia) can cause neonatal conjunctivitis and blindness. Gonorrhea is treated with ceftriaxone (Rocephin) plus azithromycin."
    },
    {
      stem: "To document contraction frequency, the nurse measures the time from:",
      options: ["The start of one contraction to the end of that same contraction","The start of one contraction to the start of the next contraction","The end of one contraction to the start of the next","The peak of one contraction to the peak of the next"],
      answer: 1,
      rationale: "Frequency = start of one contraction to the start of the next (in minutes). Start-to-end of the same contraction is duration (seconds)."
    },
    {
      stem: "A patient with acute severe hypertension has a history of asthma. Which medication should the nurse question?",
      options: ["IV hydralazine","Oral nifedipine","IV labetalol","Magnesium sulfate"],
      answer: 2,
      rationale: "IV labetalol is a beta-blocker and is avoided in asthma (\"labetalol, lungs\"). Hydralazine or nifedipine would be chosen instead — those two are avoided in tachycardia."
    },
    {
      stem: "A patient at 30 weeks has blood pressures of 164/112 and 168/110 taken 5 hours apart, 3+ proteinuria, and severe persistent epigastric pain. How does the nurse classify this?",
      options: ["Gestational hypertension","Mild preeclampsia","Severe preeclampsia","Chronic hypertension"],
      answer: 2,
      rationale: "Severe preeclampsia = SBP ≥160 or DBP ≥110 on two occasions at least 4 hours apart, plus severe features. Epigastric pain reflects reduced hepatic blood flow and is ominous."
    },
    {
      stem: "A fetus is in the ROA position. The nurse explains this is a favorable position because:",
      options: ["The baby will be born face-up","The occiput is anterior, so the baby is born face-down and is easier to deliver","It indicates a breech presentation","It requires forceps"],
      answer: 1,
      rationale: "Occiput anterior (e.g., ROA) means the baby is born face-down, which is anatomically easier to deliver. A posterior position (face-up) is harder and causes back labor."
    },
    {
      stem: "A maternal serum alpha-fetoprotein (AFP) level comes back HIGH. Which fetal concern is most associated with this result?",
      options: ["Down syndrome","An open neural tube defect such as spina bifida","Trisomy 18","Turner syndrome"],
      answer: 1,
      rationale: "HIGH AFP is associated with open neural tube defects (spina bifida, anencephaly), and also multiples and diabetes. LOW AFP is linked to Down syndrome or trisomy 18."
    },
    {
      stem: "A client's pelvis is documented as platypelloid (flat). The nurse recognizes this shape most often leads to a cesarean birth because it encourages the fetus to assume a:",
      options: ["Transverse lie","Vertex presentation","An occiput-anterior position","A fully flexed attitude"],
      answer: 0,
      rationale: "The wide, flat platypelloid inlet encourages a transverse lie, which cannot deliver vaginally and leads to a cesarean. (The android pelvis is also unfavorable — cephalopelvic disproportion — while the gynecoid pelvis is most favorable.)"
    },
    {
      stem: "A fetus at 34 weeks has a rise of 15 bpm above baseline lasting 15 seconds. The nurse documents this as:",
      options: ["A reassuring acceleration","A late deceleration","Minimal variability","Fetal tachycardia"],
      answer: 0,
      rationale: "At ≥32 weeks, an acceleration is ≥15 bpm above baseline for ≥15 seconds — a reassuring sign of fetal well-being (under 32 weeks it is 10 bpm for 10 seconds)."
    },
    {
      stem: "A multigravida who is 9 cm dilated reports a strong urge to push. What is the nurse's best action?",
      options: ["Encourage her to push with each contraction","Coach her to avoid pushing until she is fully dilated","Apply fundal pressure to speed delivery","Position her for immediate delivery"],
      answer: 1,
      rationale: "Never push before 10 cm — pushing on an incomplete cervix can tear it or cause it to swell. Coach breathing until fully dilated."
    },
    {
      stem: "A patient on a magnesium sulfate infusion has an indwelling catheter. Over the last 4 hours the drainage bag collected 100 mL. What should the nurse do?",
      options: ["Nothing — this exceeds the minimum acceptable output","Recognize the output is below 30 mL/hr and notify the provider, since magnesium is renally excreted","Increase the magnesium infusion rate","Recognize this as an expected side effect of magnesium and continue"],
      answer: 1,
      rationale: "100 mL ÷ 4 hr = 25 mL/hr, below the minimum of 30 mL/hr. Magnesium is excreted by the kidneys, so falling urine output raises the risk of toxicity and must be reported."
    },
    {
      stem: "Which findings indicate the placenta has separated and is ready to deliver? Select all that apply.",
      options: ["A globular-shaped uterus","The uterus rising in the abdomen","A sudden gush or trickle of blood","Lengthening of the umbilical cord","A drop in maternal blood pressure"],
      answers: [0, 1, 2, 3],
      rationale: "Signs of placental separation: a globular uterus, the uterus rising, a gush/trickle of blood, and lengthening of the visible cord."
    },
    {
      stem: "A tracing shows decelerations that mirror the contractions, with the nadir at the peak of the contraction. What is the nurse's FIRST action?",
      options: ["Turn off the oxytocin","Perform a sterile vaginal exam to assess progress","Give a rapid IV fluid bolus","Prepare for a cesarean"],
      answer: 1,
      rationale: "Mirroring decels are EARLY decelerations (head compression) — benign. Do a vaginal exam; the head may be low and birth approaching."
    },
    {
      stem: "The nurse documents that the fetal head is engaged. This means the presenting part has descended to:",
      options: ["The pelvic inlet","Zero station, at the ischial spines","+2 station","The perineum"],
      answer: 1,
      rationale: "Engagement occurs when the presenting part reaches 0 station at the ischial spines — the narrowest part of the pelvis."
    },
    {
      stem: "Which maternal pelvis shape is the most favorable for a vaginal birth?",
      options: ["Android","Anthropoid","Gynecoid","Platypelloid"],
      answer: 2,
      rationale: "The gynecoid pelvis (about 50%, the classic female pelvis) has a wider, rounder opening and is most favorable for vaginal birth. Android tends toward CPD, anthropoid toward an occiput-posterior baby, and platypelloid (flat) toward a transverse lie."
    },
    {
      stem: "A patient with tachysystole is ordered terbutaline. Before giving it, the nurse checks the maternal heart rate and finds it is 124 bpm. What should the nurse do?",
      options: ["Give the terbutaline as ordered","Hold the terbutaline - it is held if the maternal heart rate is 120 bpm or higher","Double the dose so it works faster","Give it only if the fetal heart rate is also high"],
      answer: 1,
      rationale: "Terbutaline (a tocolytic) raises the maternal heart rate, so it is held if the maternal heart rate is 120 bpm or higher."
    },
    {
      stem: "The nurse notes a sinusoidal fetal heart rate pattern. This is ominous because it suggests the fetus is:",
      options: ["In a normal sleep cycle","Acidotic and needs to be delivered","Simply very active","Having reassuring accelerations"],
      answer: 1,
      rationale: "A sinusoidal pattern suggests the fetus may be acidotic and needs to be delivered — notify the provider immediately."
    },
    {
      stem: "During the cardinal movements (mechanisms) of labor, which movement brings the fetal chin to the chest so the smallest head diameter presents to the pelvis?",
      options: ["Descent","Flexion","Extension","External rotation"],
      answer: 1,
      rationale: "Flexion brings the head and chin closer to the chest so the smaller head diameter presents to the pelvic outlet. (Extension is how the occiput, then face, then chin deliver.)"
    },
    {
      stem: "A woman trying to conceive asks how much folic acid she should take daily. What is the nurse's response?",
      options: ["At least 100 mcg","At least 400 mcg","At least 1,000 mcg","At least 4,000 mcg"],
      answer: 1,
      rationale: "At least 400 mcg of folic acid daily is recommended during pregnancy or when trying to conceive; inadequate folic acid is linked to neural tube defects."
    },
    {
      stem: "An Rh-negative mother delivers an Rh-positive infant whose direct Coombs test is POSITIVE. What is the appropriate action?",
      options: ["Give RhoGAM within 72 hours","Give RhoGAM immediately in the delivery room","Do not give RhoGAM; monitor the infant for hemolytic disease","Give RhoGAM at the start of the next pregnancy"],
      answer: 2,
      rationale: "A positive direct Coombs means the mother is already sensitized, so RhoGAM cannot help — monitor the infant for hemolytic disease. RhoGAM is given within 72 hours only when the direct Coombs is negative."
    },
    {
      stem: "The nurse assesses a pregnant patient with a cardiac disorder at each prenatal visit. Which findings indicate cardiac DECOMPENSATION? Select all that apply.",
      options: ["New cough","Dyspnea","Palpitations","Edema","Weight loss"],
      answers: [0, 1, 2, 3],
      rationale: "Signs of cardiac decompensation include a new cough, dyspnea, edema, palpitations, rales, and weight GAIN — not weight loss."
    },
    {
      stem: "Which findings in a patient receiving magnesium sulfate indicate TOXICITY rather than expected side effects? Select all that apply.",
      options: ["Absent deep tendon reflexes","Feeling flushed and warm","Respiratory rate of 10","Slurred speech and decreased level of consciousness","Mild drowsiness"],
      answers: [0, 2, 3],
      rationale: "Toxicity = absent reflexes, decreased respiratory rate, and decreased LOC/slurred speech; antidote is IV calcium gluconate. Flushing, warmth, and mild drowsiness are expected at a therapeutic level (4–7)."
    },
    {
      stem: "The fetus is in the ROA position. Where should the nurse place the fetal heart rate transducer?",
      options: ["Right lower quadrant","Right upper quadrant","Left lower quadrant","Over the umbilicus"],
      answer: 0,
      rationale: "The FHR is heard best over the fetal shoulders/back. ROA = occiput anterior on the mother's right with the head down — so the right lower quadrant."
    }
  ]
};
