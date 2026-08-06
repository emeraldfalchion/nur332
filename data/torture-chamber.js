/* ============================================================
   data/torture-chamber.js — "The Torture Chamber" practice exam.

   55 questions, ALL of them select all that apply. Cumulative across
   EVERY week of the course, Weeks 1-6. Content is drawn only from the
   lecture material already taught on the topic pages.

   Deliberate design points:
     • The NUMBER of correct options is unpredictable and evenly spread:
       1 correct x3 · 2 correct x14 · 3 correct x15 · 4 correct x14 ·
       5 correct x9 (of which 6 are all-correct and 3 are 5-of-6, the
       "nearly everything is right" trap). SATA anxiety is the point.
     • Correct and incorrect options are interleaved, so the key cannot
       be guessed from position without reading the content.
     • The question ORDER is randomly scrambled and then filtered so the
       topics are genuinely mixed rather than rotating — see the ordering
       constraints listed under the 2026-08-06 (part 4) note below.

   Revised 2026-07-26 — difficulty pass. Before that revision the answer
   key was guessable without reading the content: 48 of the 50 questions
   listed every CORRECT option first and put the single wrong option last
   (38 keys were literally [0,1,2,3]), and that wrong option was usually
   an obvious absurdity.

   Revised 2026-08-06 (part 1) — Weeks 5 and 6 added. The four Week 3/4
   topics were each trimmed from 8 questions to 4, and 21 new questions
   were written for Postpartum, Newborn I and Newborn II.

   Revised 2026-08-06 (part 2) — answer-count rebalance. The set had drifted
   to 40 of 55 questions having exactly FOUR correct options and NONE having
   two, which made "pick four" a viable guessing strategy. 26 questions were
   re-cut to the spread listed above by dropping surplus correct options and
   authoring replacement distractors (several built from the very fact that
   was dropped, so nothing was simply lost).

   Revised 2026-08-06 (part 3) — distractor audit: 11 option rewrites across
   6 questions to remove correct-option length bias and stem-word echo.

   Revised 2026-08-06 (part 4) — weighting shifted toward the final's actual
   emphasis. One question was dropped from each of the four Week 3/4 topics
   (cardinal movements, GBS prophylaxis, forceps, preterm-labor management)
   and four new ones added — 2 Postpartum (quantitative blood loss; lochia)
   and 2 Newborn (fontanelle findings; gestational-age and size
   classifications). The whole set was then RE-SCRAMBLED with a random
   shuffle plus rejection sampling, because the previous greedy ordering had
   front-loaded the three biggest topics into the first ten questions in a
   visible rotation. The accepted arrangement satisfies: no two adjacent
   questions share a topic; no two adjacent are both all-correct; every
   topic with 4+ questions has a minimum gap of 3 and is spread across the
   thirds of the exam; and no 3-topic cycle repeats three times in a row.

   Per topic: Postpartum 9 · Newborn I 8 · Newborn II 8 · Intrapartum I 3 ·
   Intrapartum II 3 · Artificial Management of Labor 3 · Intrapartum
   Complications 3 · Disorders & Genetics 3 · Hypertensive Disorders 3 ·
   Antepartum Care II 3 · Antepartum Complications 3 · Antepartum Care 2 ·
   Maternal Nutrition 2 · Anatomy & Physiology 2 = 55.
   ============================================================ */
window.EXAM_DATA = {
  id: "torture-chamber",
  title: "The Torture Chamber",
  questions: [
    {
      stem: "Which newborns should the nurse plan to screen for hypoglycemia, and how should the screening be managed?",
      options: [
        "A jittery infant with fine trembling of the hands",
        "The infant of a mother with gestational diabetes",
        "Withhold feeding until the glucose result is available",
        "Obtain the first heel stick within 5 minutes of birth",
        "Feed the infant, then obtain the glucose level",
        "An infant at the 4th percentile for weight"
      ],
      answers: [0, 1, 4, 5],
      rationale: "Infants of diabetic mothers, LGA and SGA infants, preterm infants, and cold infants are the at-risk group, and jitteriness, tremors, and seizures are the signs. Feed first and then check: once the cord is cut no glucose reaches the baby and the reserves only fall, and feeding is the intervention for a low level anyway. A value drawn immediately at birth still reflects the mother, so wait about 30 minutes.",
      topic: "Newborn Assessment & Care II"
    },
    {
      stem: "Which findings point to placental ABRUPTION rather than placenta previa?",
      options: [
        "Severe abdominal pain",
        "A uterus that is very tender and feels firm or stone-hard",
        "Bright red, painless bleeding that began without any warning",
        "Bleeding that may be concealed instead of visible",
        "An abdomen that enlarges and changes shape",
        "A soft, relaxed uterus that is not tender to palpation"
      ],
      answers: [0, 1, 3, 4],
      rationale: "The biggest difference is pain and how the abdomen feels. An abruption causes severe pain, a tender board-like uterus, bleeding that may be concealed (especially a central abruption), and an abdomen that enlarges as blood accumulates behind the placenta. Bright red PAINLESS bleeding with a soft, relaxed uterus is a previa — and with a previa you do not perform a vaginal exam.",
      topic: "Intrapartum Complications"
    },
    {
      stem: "Which findings indicate that the placenta has separated and is ready to deliver?",
      options: [
        "A globular-shaped uterus",
        "The uterus rising in the abdomen",
        "A sudden gush or trickle of blood",
        "A drop in maternal blood pressure",
        "Lengthening of the visible umbilical cord"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Signs of separation are a globular uterus, the uterus rising in the abdomen, a gush or trickle of blood, and more of the cord becoming visible. The third stage should last no longer than 30 minutes. A DROPPING blood pressure is a sign of hemorrhage, not of normal separation.",
      topic: "Intrapartum Care I"
    },
    {
      stem: "Which findings in a newborn support a diagnosis of neonatal abstinence syndrome?",
      options: [
        "A depressed anterior fontanelle",
        "Sleeping for 3 to 4 hours after each feeding",
        "Projectile vomiting and diarrhea with excoriated buttocks",
        "Marked tremors and jitteriness",
        "A high-pitched, shrill cry"
      ],
      answers: [2, 3, 4],
      rationale: "The shrill cry is the classic CNS sign, alongside tremors, hypertonia, and overactive reflexes. GI signs include projectile vomiting, an uncoordinated suck, and diarrhea severe enough to excoriate the skin. These infants sleep very poorly — a normal newborn eats and then sleeps for a stretch, while these wake after 20 minutes. A sunken fontanelle indicates dehydration, which is not itself a withdrawal sign.",
      topic: "Newborn Assessment & Care II"
    },
    {
      stem: "Which statements about taking a newborn's vital signs are correct?",
      options: [
        "Count respirations for a full minute",
        "The expected axillary range is 97.7 to 99.5°F",
        "Count the apical pulse for a full minute",
        "A rectal temperature is preferred for confirming anal patency",
        "Vital signs should be taken while the infant is crying vigorously so the values are maximal"
      ],
      answers: [0, 1, 2],
      rationale: "Pulse and respirations are each counted for a full minute, because periodic breathing and an irregular rate will wreck a shorter count, and 97.7 to 99.5°F is the expected axillary range. Vital signs are taken at rest — a crying newborn can run 85 breaths a minute. Rectal temperatures are avoided because the probe can perforate an imperforate anus; patency is confirmed by the baby passing stool.",
      topic: "Newborn Assessment & Care I"
    },
    {
      stem: "Which statements about postpartum discharge and safety are correct?",
      options: [
        "The client must void before discharge",
        "A bowel movement is required before the client can go home",
        "Typical length of stay is about 48 hours after a vaginal birth",
        "A client receiving magnesium sulfate should not be left alone with her infant",
        "The client must be passing flatus",
        "MMR is deferred until the 6-week visit because it is a live virus"
      ],
      answers: [0, 2, 3, 4],
      rationale: "Voiding and passing flatus are required; a bowel movement is not. A client on magnesium is slower to rouse and respond, so another adult stays in the room or the infant goes to the nursery. MMR is a live virus, which is precisely why it is given postpartum — when we know she is not pregnant — rather than deferred.",
      topic: "Postpartum Care & Complications"
    },
    {
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
      rationale: "Antiretroviral therapy (ZDV) during pregnancy reduces transmission to about 1–2% — holding it until after birth defeats the purpose. An elective cesarean before the membranes rupture, avoiding invasive procedures such as a scalp electrode, and universal precautions all lower risk further. Breast milk can carry HIV, so bottle-feeding is recommended where formula is available.",
      topic: "Antepartum Complications"
    },
    {
      stem: "Which components of the biophysical profile (BPP) are assessed by ultrasound?",
      options: [
        "Fetal breathing",
        "Placental grade",
        "The non-stress test",
        "Amniotic fluid index",
        "Fetal heart rate variability"
      ],
      answers: [0, 3],
      rationale: "The ultrasound portion of the biophysical profile scores fetal breathing, fetal movement, fetal tone, and the amniotic fluid index. The non-stress test is the fifth component but it is done with the monitor, not the ultrasound — and fetal heart rate variability is read off that same tracing. Placental grade is not part of the BPP at all.",
      topic: "Antepartum Care II"
    },
    {
      stem: "A client is 40 minutes post-vaginal delivery and the peripad has soaked through. Which nursing actions are appropriate at this point?",
      options: [
        "Massage a boggy fundus firmly and express any clots",
        "Weigh the saturated pad before deciding whether the loss is excessive",
        "Palpate the fundus before anything else",
        "If the fundus is firm and bleeding continues, notify the provider to look for a laceration",
        "Increase the IV fluid rate and anticipate a uterotonic",
        "Massage a firm fundus vigorously until the bleeding slows"
      ],
      answers: [0, 2, 3, 4],
      rationale: "Palpate first — that single finding sorts the whole problem. Boggy means atony, so massage and express clots, since a clot-filled uterus cannot contract. Firm but still bleeding points to trauma, most often an internal laceration, and the provider needs to look. Fluids and uterotonics run in the background. A pad saturated in under an hour is already excessive, so nothing is gained by weighing it first, and a firm fundus is not massaged vigorously.",
      topic: "Postpartum Care & Complications"
    },
    {
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
      rationale: "Acyclovir keeps the virus dormant — there is no cure — and suppressive therapy starts at 36 weeks to prevent an outbreak near delivery. Diagnosis is by culturing a lesion. It is the ACTIVE lesion at delivery that requires a cesarean, not the history alone, because neonatal herpes can be FATAL — not mild.",
      topic: "Disorders & Genetics"
    },
    {
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
      rationale: "Non-reassuring findings include late decelerations of ANY magnitude, absent variability, a sinusoidal pattern, prolonged decelerations, recurrent severe variables, and severe bradycardia or prolonged tachycardia. Early decelerations mirror the contraction and reflect head compression — benign. Moderate variability with accelerations is exactly what you want.",
      topic: "Intrapartum Care II"
    },
    {
      stem: "Which actions are appropriate in the first minutes after a newborn is delivered?",
      options: [
        "Apply matching identification bands to the infant and the mother",
        "Keep the infant quiet and undisturbed if he is not crying",
        "Place the infant skin to skin on the mother's abdomen and cover with a warm blanket",
        "Dry the infant and remove the wet blanket",
        "Use the bulb syringe primarily to clear fluid from deep in the lungs",
        "Rub the back and flick the soles to provoke a vigorous cry"
      ],
      answers: [0, 2, 3, 5],
      rationale: "Dry, stimulate, warm, and identify. A bulb syringe reaches only the mouth and the small nasal cavity — its main purpose right after birth is stimulation, not deep suctioning. A quiet newborn is the one to worry about: you want vigorous crying, both because it signals a good transition and because crying itself clears the remaining lung fluid.",
      topic: "Newborn Assessment & Care I"
    },
    {
      stem: "A nurse is quantifying blood loss on the postpartum unit. Which statements about measuring and interpreting the loss are correct?",
      options: [
        "Visual estimation tends to overestimate how much has actually been lost",
        "One gram of weight is counted as approximately 1 mL of blood",
        "The dry weight of the pad or chux must be subtracted from the total",
        "Blood loss greater than 500 mL after a vaginal birth is considered excessive",
        "Blood loss greater than 500 mL after a cesarean birth is considered excessive"
      ],
      answers: [1, 2, 3],
      rationale: "Quantitative blood loss converts weight to volume at 1 gram = 1 mL, and the dry weight of the item has to come off the total or the number is meaningless. The thresholds differ by route: greater than 500 mL is excessive after a vaginal birth, but it takes greater than 1,000 mL after a cesarean. The whole reason quantitative measurement replaced eyeballing is that visual estimation <i>under</i>-estimates, which delays recognizing a hemorrhage.",
      topic: "Postpartum Care & Complications"
    },
    {
      stem: "The nurse feels the umbilical cord during a vaginal exam. Which actions are appropriate?",
      options: [
        "Lift the presenting part off the cord with the gloved hand",
        "Place her in Trendelenburg",
        "Notify the provider",
        "Apply oxygen",
        "Prepare for a cesarean birth"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "All five are the steps for a prolapsed cord: keep the gloved fingers in place lifting the presenting part off the cord (they stay there until delivery), drop the bed into Trendelenburg, notify the provider, give oxygen, and prepare for a cesarean. Prevention comes first — if the water is broken and the presenting part is still high, she stays in bed until the head settles against the cervix.",
      topic: "Intrapartum Complications"
    },
    {
      stem: "Which finding reliably distinguishes TRUE labor from false labor?",
      options: [
        "Contractions occurring about every 5 minutes",
        "Contractions the client rates as severe",
        "Rupture of the membranes",
        "Progressive cervical dilation and effacement",
        "Bloody show"
      ],
      answers: [3],
      rationale: "Progressive cervical change is the only reliable discriminator. False-labor (Braxton Hicks) contractions can be painful and can come at regular-seeming intervals, but they produce no cervical change and ease with rest, warmth, or massage. Ruptured membranes and bloody show are signs of impending labor, not proof of true labor.",
      topic: "Intrapartum Care I"
    },
    {
      stem: "A newborn's temperature has fallen to 96.6°F and has not been corrected. Which consequences should the nurse anticipate?",
      options: [
        "Increased oxygen consumption",
        "Hypertension",
        "Respiratory distress",
        "Hypoglycemia",
        "Lethargy with poor tone and a feeble cry",
        "Metabolic acidosis"
      ],
      answers: [0, 2, 3, 4, 5],
      rationale: "Newborns cannot shiver, so they burn brown fat to make heat — a process that consumes glucose and oxygen and pushes the baby toward hypoglycemia, metabolic acidosis, respiratory distress, and eventually lethargy, poor feeding, and weight loss. The only wrong answer is hypertension: the blood pressure <i>falls</i>.",
      topic: "Newborn Assessment & Care I"
    },
    {
      stem: "Which statements about medications used in hypertensive disorders of pregnancy are correct?",
      options: [
        "Low-dose aspirin 81 mg is started at 12 to 28 weeks for clients at risk for preeclampsia",
        "IV labetalol is avoided in a client with a history of asthma",
        "Magnesium sulfate is given in preeclampsia to bring the blood pressure down",
        "Calcium gluconate is infused alongside every magnesium drip",
        "Hydralazine is the preferred agent when the client is already tachycardic"
      ],
      answers: [0, 1],
      rationale: "Labetalol is a beta blocker, so it is avoided in asthma, and low-dose aspirin from 12 to 28 weeks is prophylaxis for those at risk. Hydralazine causes reflex tachycardia, so it is <i>avoided</i> in a tachycardic client, not preferred. Magnesium prevents seizures — it is not an antihypertensive. Calcium gluconate is the antidote kept at the bedside, not co-infused.",
      topic: "Hypertensive Disorders"
    },
    {
      stem: "Which statements about the medications used to treat postpartum hemorrhage are correct?",
      options: [
        "Without IV access, oxytocin can be given 10 units IM",
        "Oxytocin may be given as a rapid IV push for a faster response",
        "Misoprostol is given rectally in the postpartum setting",
        "Methylergonovine is withheld in a client with hypertension",
        "Carboprost is a reasonable choice when the client is hypertensive",
        "Carboprost commonly causes explosive diarrhea"
      ],
      answers: [0, 2, 3, 4, 5],
      rationale: "Oxytocin is the only one that is wrong here — it is never given IV push, though 10 units IM is appropriate when there is no access. Methylergonovine causes rebound hypertension and is contraindicated in hypertension, which is exactly when carboprost becomes the next line, with explosive diarrhea as its signature effect. Misoprostol is given rectally postpartum because a vaginal dose would simply wash out with the bleeding.",
      topic: "Postpartum Care & Complications"
    },
    {
      stem: "A nurse reviews the birth records of several newborns. Which classifications have been applied correctly?",
      options: [
        "A newborn below the 25th percentile for weight is classified as small for gestational age",
        "A newborn born at 35 weeks is classified as late preterm",
        "A newborn above the 90th percentile for weight is classified as large for gestational age",
        "A newborn weighing 1,400 g is classified as very low birth weight",
        "A newborn born at 38 weeks is classified as full term",
        "A newborn at 41 weeks is classified as post-term"
      ],
      answers: [1, 2, 3],
      rationale: "Late preterm is 34 to 36 6/7 weeks, very low birth weight is under 1,500 g, and large for gestational age is above the 90th percentile. Small for gestational age is below the <b>10th</b> percentile, not the 25th. Thirty-eight weeks is <i>early</i> term — full term does not start until 39 weeks. And 41 weeks is late term; post-term does not begin until 42 weeks.",
      topic: "Newborn Assessment & Care II"
    },
    {
      stem: "Which statements about the umbilical cord and the placenta are correct?",
      options: [
        "The cord contains two arteries that carry waste away from the fetus",
        "The cord contains one vein that delivers oxygenated blood to the fetus",
        "The cord vessels are surrounded by Wharton's jelly",
        "The cord has no pain receptors, so cutting it hurts neither the mother nor the baby",
        "The placenta produces hCG"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "All five are correct. The cord is \"backwards\" from adult circulation — 2 arteries carry waste away, 1 vein delivers oxygenated blood — and the vessels sit cushioned in Wharton's jelly. There are no pain receptors, so cutting the cord hurts no one. Along with immune protection, excretion, respiration, and nutrient transfer, the placenta produces hormones including hCG.",
      topic: "Anatomy & Physiology"
    },
    {
      stem: "A client is 3 days postpartum. Which findings should lead the nurse to suspect postpartum depression rather than baby blues?",
      options: [
        "Tearfulness for no clear reason that resolves within the hour",
        "She was treated for a mood disorder before this pregnancy",
        "Mood lifting noticeably when family visits",
        "Reporting thoughts of harming herself on the screening tool",
        "A sustained low mood instead of swinging emotions",
        "Feeling overwhelmed at times but engaging with the infant"
      ],
      answers: [1, 3, 4],
      rationale: "Baby blues is defined by mood swings and crying for no apparent reason, it appears around days 3 to 5, and it is self-limiting. Depression is a sustained low mood, not swings; a prior history of depression, a first pregnancy, and young maternal age are the strongest risk factors. The last question on the Edinburgh scale asks about self-harm and is never skipped.",
      topic: "Postpartum Care & Complications"
    },
    {
      stem: "Which statements about Rh alloimmunization and RhoGAM are correct?",
      options: [
        "An Rh-positive mother carrying an Rh-negative baby is given RhoGAM at 28 weeks and again after the birth",
        "RhoGAM 300 mcg is given prophylactically at 28 weeks if the antibody screen is negative",
        "RhoGAM is given to the newborn within 72 hours of birth rather than to the mother",
        "If the direct Coombs on cord blood is NEGATIVE, RhoGAM is given within 72 hours",
        "A POSITIVE direct Coombs at birth means a larger dose of RhoGAM is given"
      ],
      answers: [1, 3],
      rationale: "RhoGAM is prophylaxis for the Rh-<i>negative</i> mother, given to <i>her</i>, not the baby — 300 mcg at 28 weeks if she has not already made antibodies, and again within 72 hours of birth if the baby's cord blood is direct-Coombs negative. A positive direct Coombs means antibodies were already made and the damage is done; RhoGAM cannot reverse it, so no dose is given at all.",
      topic: "Antepartum Complications"
    },
    {
      stem: "Which actions are appropriate for a client receiving oxytocin for induction of labor?",
      options: [
        "Increase by about 1 to 2 milliunits/minute every 30 minutes",
        "Titrate the rate up every 5 minutes until contractions are 2 minutes apart",
        "Maintain continuous fetal monitoring",
        "Hang the infusion by gravity so the rate can be adjusted quickly",
        "Give the starting dose as a small IV bolus to establish a contraction pattern"
      ],
      answers: [0, 2],
      rationale: "Oxytocin is titrated slowly — about 1 to 2 milliunits/minute every 30 minutes — under continuous fetal monitoring. It is never bolused: a bolus causes one constant, hard contraction and the uterus clamps down on its own blood supply. It runs on a pump, never by gravity, and titrating every 5 minutes to contractions 2 minutes apart is a recipe for tachysystole.",
      topic: "Artificial Management of Labor"
    },
    {
      stem: "A firm swelling on a 1-day-old's skull stops at the suture line. Which statements about this finding are correct?",
      options: [
        "It puts the infant at increased risk for jaundice",
        "It crosses the suture lines once the collection is large enough",
        "It typically resolves within 12 hours of birth",
        "It is caused by blood collecting beneath the periosteum",
        "It is soft and mushy because it fills with serum"
      ],
      answers: [0, 3],
      rationale: "Blood under the periosteum is exactly why a cephalohematoma cannot cross the suture — no matter how large it gets — and as that blood breaks down it releases bilirubin, so jaundice follows. Serum above the periosteum, soft and squishy, resolving in 12 hours to a few days, describes caput succedaneum instead.",
      topic: "Newborn Assessment & Care I"
    },
    {
      stem: "A client is 2 days postpartum and reports a new severe headache. Which findings would point toward a spinal headache rather than postpartum preeclampsia?",
      options: [
        "New-onset visual floaters with epigastric pain",
        "The pain is worse sitting up and eases when she lies flat",
        "Blood pressure readings of 158/98 and 162/96",
        "A blood pressure of 118/72",
        "Associated dizziness and photophobia"
      ],
      answers: [1, 3, 4],
      rationale: "The positional quality is the giveaway: a spinal headache worsens upright and improves lying flat, and it comes with dizziness, photophobia, and a normal blood pressure. Preeclampsia can appear for the first time after delivery — readings in the 150s and 160s on days 2 to 3 — and brings visual changes and epigastric pain with it.",
      topic: "Postpartum Care & Complications"
    },
    {
      stem: "Which statements about nutrition in pregnancy are correct?",
      options: [
        "At least 400 mcg of folic acid daily is recommended during pregnancy or when trying to conceive",
        "About 300 extra kcal per day are needed in the second and third trimesters",
        "If the diet is adequate, iron is the only supplement truly needed",
        "Pica can lead to iron-deficiency anemia",
        "Eight to ten 8-oz glasses of fluid a day are recommended, at least half of it water"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "All five are correct. Folic acid at 400 mcg/day is the one number to memorize; calorie needs rise about 300 kcal/day in the second and third trimesters; iron is the only truly required supplement if the diet is adequate (a prenatal vitamin is still recommended, since most diets fall short); pica — eating non-nutritive substances such as clay or laundry starch — displaces nutritious food and causes iron-deficiency anemia; and the fluid recommendation is eight to ten 8-oz glasses daily, at least half water.",
      topic: "Maternal Nutrition"
    },
    {
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
      rationale: "Decompensation shows as a new cough, dyspnea, edema, a murmur, palpitations, rales, and weight GAIN — not weight loss, and not a slow heart rate. Management reduces cardiac workload: 8–10 hours of rest, a high-iron, high-protein, low-sodium diet, an epidural in labor, and side-lying or semi-Fowler's positioning.",
      topic: "Antepartum Complications"
    },
    {
      stem: "Which statements about newborn elimination are correct?",
      options: [
        "Meconium is dark because of retained amniotic fluid",
        "Breastfed infants typically stool more often than formula-fed infants",
        "The first meconium stool is expected by day 2 to 3",
        "The provider should be notified if the infant has not voided by 40 hours",
        "A newborn typically voids only 1 to 2 times a day in the first week"
      ],
      answers: [2, 3],
      rationale: "Meconium is expected by day 2 to 3, and going past 40 hours without voiding is reported. Newborns void 5 to 25 times a day, averaging 6 to 8 wet diapers — not 1 to 2. Meconium is dark because of the bilirubin being excreted in it, and breastfed infants tend to stool less often than formula-fed ones.",
      topic: "Newborn Assessment & Care II"
    },
    {
      stem: "Which pairings of a nursing action with the mechanism of heat loss it prevents are correct?",
      options: [
        "Drying the infant immediately after birth — convection",
        "Warming the stethoscope before placing it on the chest — conduction",
        "Moving the bassinet away from a cold window — radiation",
        "Using a radiant warmer above the crib — conduction",
        "Delaying the first bath about 6 hours — radiation"
      ],
      answers: [1, 2],
      rationale: "Radiation is loss to a nearby cooler surface the baby is not touching, such as a window — and a radiant warmer is the same mechanism working in reverse, not conduction. Conduction requires direct contact, so a cold stethoscope is the risk. Drying the baby and delaying the bath both prevent evaporation, heat carried off as water turns to vapor.",
      topic: "Newborn Assessment & Care I"
    },
    {
      stem: "Which statements about the contraction stress test (CST) are correct?",
      options: [
        "A NEGATIVE result is the desired result",
        "A negative result means no late decelerations over a 20-minute period",
        "A POSITIVE result means late decelerations with more than half of the contractions",
        "An equivocal result is considered reassuring",
        "A positive result suggests poor placental perfusion"
      ],
      answers: [0, 2, 4],
      rationale: "The CST is \"backwards\": NEGATIVE is what you want — no late decelerations in a 10-minute period, not 20 — and POSITIVE is bad, meaning late decels with more than half of the contractions, which indicates poor placental oxygen and CO₂ exchange. An equivocal result is suspicious and inconclusive, requiring further monitoring, not reassurance.",
      topic: "Antepartum Care II"
    },
    {
      stem: "A newborn is started on phototherapy. Which nursing actions are appropriate?",
      options: [
        "Dress the infant in a light shirt to prevent cold stress",
        "Leave the diaper on but otherwise expose the skin",
        "Withhold all handling so the infant stays under the light",
        "Apply eye shields whenever the infant is under the light",
        "Monitor hydration status and the stool pattern",
        "Continue feedings every 2 to 3 hours"
      ],
      answers: [1, 3, 4, 5],
      rationale: "The skin has to absorb the light, so clothing defeats the therapy, but the diaper stays on. Eye shields are essential — infants will stare straight into the light. Feedings matter more than usual, because intake drives the stooling that carries bilirubin out, and hydration is watched closely. Time out for bonding and feeding at the breast is still built in.",
      topic: "Newborn Assessment & Care II"
    },
    {
      stem: "Which statements about Apgar scoring are correct?",
      options: [
        "Blue hands and feet with a pink trunk earn 2 points for appearance",
        "A 10-minute score is routinely added for every newborn",
        "Each of the five categories is scored 0, 1, or 2",
        "A heart rate of 96 earns 1 point",
        "It is assessed at 1 minute and 5 minutes of life",
        "A higher total reflects better transition to extrauterine life"
      ],
      answers: [2, 3, 4, 5],
      rationale: "Appearance, Pulse, Grimace, Activity, Respirations — each 0 to 2, at 1 and 5 minutes, with a 10-minute score added only when the scores are low and the baby needed resuscitation. A heart rate below 100 scores 1 and 100 or above scores 2. Acrocyanosis — blue extremities with a pink trunk — is 1 point, not 2; a completely pink baby earns the 2.",
      topic: "Newborn Assessment & Care I"
    },
    {
      stem: "Which statements about fetal station and position are correct?",
      options: [
        "In \"ROA,\" the R refers to the MOTHER'S right side",
        "An occiput posterior position is the easier one to push out",
        "In \"ROA,\" the O refers to the mother's occiput",
        "Zero station is at the ischial spines, the narrowest part of the pelvis",
        "A station of −2 means the presenting part is 2 cm below the ischial spines"
      ],
      answers: [0, 3],
      rationale: "Zero station is the ischial spines, the narrowest point of the pelvis, and the first letter of a position always refers to the mother's side. A minus station is <i>above</i> the spines, not below. The O is the <i>fetal</i> occiput, the landmark being described. And occiput posterior is the harder position — longer pushing, more back labor.",
      topic: "Intrapartum Care I"
    },
    {
      stem: "Which findings should a pregnant client be taught to report to her provider?",
      options: [
        "A gush of fluid from the vagina",
        "Vaginal bleeding",
        "A severe headache with blurred vision or visual spots",
        "Epigastric pain or pain under the right breast",
        "Decreased fetal movement"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "All five are danger signs of pregnancy. A gush of fluid may be ruptured membranes; bleeding suggests a placental complication; visual changes are neurologic warning signs of hypertension; epigastric or right-upper-quadrant pain reflects liver involvement in hypertensive disorders; and decreased fetal movement is a fetal well-being concern.",
      topic: "Antepartum Care"
    },
    {
      stem: "The head has delivered but the shoulders are trapped. Which actions are appropriate?",
      options: [
        "Perform the McRoberts maneuver",
        "Raise the head of the bed so she can push harder",
        "Apply fundal pressure",
        "Lower the head of the bed",
        "Apply suprapubic pressure"
      ],
      answers: [0, 3, 4],
      rationale: "McRoberts — hyperflexing her thighs onto her abdomen — plus suprapubic pressure is the first-line combination, and the bed is flattened to help. Fundal pressure is contraindicated: it drives the shoulder harder against the symphysis and can rupture the uterus. Raising the head of the bed works against the maneuvers rather than with them.",
      topic: "Intrapartum Complications"
    },
    {
      stem: "Which statements describe autosomal RECESSIVE inheritance?",
      options: [
        "Each child of one affected parent has a 50% chance of being affected",
        "Two abnormal alleles are required for the trait to be expressed",
        "There is no silent carrier state",
        "One abnormal allele is enough for the trait to appear",
        "An affected parent passes the trait to every child"
      ],
      answers: [1],
      rationale: "Needing two abnormal alleles is what defines a recessive trait — which is why an affected child usually has two clinically normal carrier parents, and why carrier × carrier gives a 25% risk with each pregnancy. Everything else here describes a <i>dominant</i> pattern or contradicts recessive inheritance outright: one allele being enough, a 50% risk from a single affected parent, passing to every child, and the absence of silent carriers. Cystic fibrosis is the classic recessive example.",
      topic: "Disorders & Genetics"
    },
    {
      stem: "Which statements by parents about caring for their newborn at home indicate correct understanding?",
      options: [
        "\"Tummy time is fine as long as we're awake and watching him.\"",
        "\"The car seat faces the back of the car, in the back seat.\"",
        "\"We'll call if he refuses two feedings in a row.\"",
        "\"We'll put him on his tummy to sleep so he doesn't choke.\"",
        "\"We'll tuck the diaper up over the cord to keep it covered.\""
      ],
      answers: [0, 1, 2],
      rationale: "Rear-facing in the back seat; supervised, awake tummy time for neck strength; and refusing two feedings in a row is a reason to call. Back to sleep, always — prone sleeping raises the SIDS risk, and choking is not the reason to override it. The cord is kept clean, dry, and folded <i>out</i> of the diaper, not covered by it.",
      topic: "Newborn Assessment & Care II"
    },
    {
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
      rationale: "Mono-mono twins result from a LATE division (8–12 days), share both the chorion and the amnion — one placenta, one sac — and carry the highest risk of the twin types, including cord entanglement, so they are monitored closely. Identical (monozygotic) twins come from one egg and one sperm, so they are ALWAYS the same sex; a boy and a girl means fraternal.",
      topic: "Anatomy & Physiology"
    },
    {
      stem: "Which factors are scored on the Bishop score?",
      options: [
        "Cervical dilatation",
        "Cervical effacement",
        "Fetal station",
        "Cervical consistency",
        "Cervical position"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "All five are scored. The Bishop score estimates how likely a vaginal delivery is — the higher the score the better, with about 8 or higher considered favorable. The findings come from a sterile vaginal exam, which is obtained before an induction is started.",
      topic: "Artificial Management of Labor"
    },
    {
      stem: "Which infants are at increased risk for developing physiologic jaundice?",
      options: [
        "An infant stooling 4 to 5 times a day",
        "An SGA infant who is latching poorly and feeding little",
        "An infant who becomes visibly yellow at 16 hours of life",
        "An infant with a resolving cephalohematoma",
        "An infant born at 35 weeks"
      ],
      answers: [1, 3, 4],
      rationale: "Prematurity, poor feeding, and a resolving cephalohematoma all raise the bilirubin load — the last because collected blood breaks down into bilirubin. Frequent stooling is protective, since stool is how bilirubin leaves the body. And jaundice appearing before 24 hours of life is pathologic by definition, not physiologic.",
      topic: "Newborn Assessment & Care II"
    },
    {
      stem: "A client on oxytocin has recurrent late decelerations. Which nursing interventions are appropriate?",
      options: [
        "Turn the oxytocin off",
        "Give an IV fluid bolus of lactated Ringer's",
        "Apply oxygen at 10 L by tight non-rebreather face mask",
        "Notify the provider",
        "Reposition her, preferably onto her left side",
        "Raise the head of the bed to high Fowler's"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "Nearly everything here is right — that is the trap. UNCOIL: turn the oxytocin off, notify the provider, change position (left lateral), oxygen by tight non-rebreather, IV fluids, lateral positioning. The one wrong action is high Fowler's: sitting her upright does nothing for uteroplacental perfusion, whereas side-lying takes the weight of the uterus off the vena cava.",
      topic: "Intrapartum Care II"
    },
    {
      stem: "Which findings during a postpartum assessment should prompt the nurse to have the client empty her bladder before drawing any other conclusion?",
      options: [
        "The fundus is boggy and higher than it was earlier in the shift",
        "The fundus is one fingerbreadth below the umbilicus on day 1",
        "The fundus is displaced to the right of midline",
        "The client had an epidural and has not voided since delivery",
        "Lochia rubra is present on day 2"
      ],
      answers: [0, 2, 3],
      rationale: "A full bladder pushes the uterus up and to the side, so a deviated or unexpectedly high fundus is a bladder problem until proven otherwise. Anesthesia removes the sensation of filling, so the bladder keeps filling while the client feels nothing — which is why the epidural client who has not voided belongs on this list. A fundus descending normally and lochia rubra on day 2 are both expected.",
      topic: "Postpartum Care & Complications"
    },
    {
      stem: "Which sexually transmitted infections are treated with penicillin?",
      options: [
        "Chlamydia",
        "Syphilis",
        "Gonorrhea",
        "Trichomoniasis",
        "Bacterial vaginosis"
      ],
      answers: [1],
      rationale: "Only syphilis is treated with penicillin. Chlamydia is treated with azithromycin; gonorrhea with ceftriaxone (Rocephin) plus azithromycin; trichomoniasis and bacterial vaginosis both with metronidazole (which is why the discharge, not the drug, is what tells those two apart).",
      topic: "Disorders & Genetics"
    },
    {
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
      rationale: "Toxicity is decreased or absent reflexes, a falling respiratory rate, and a change in level of consciousness or slurred speech; the antidote is IV calcium gluconate. Feeling hot and flushed, headache, nausea, tiredness, and mild drowsiness are EXPECTED — and 5.5 mEq/L sits inside the therapeutic range of 4–7, so it is a target level, not toxicity.",
      topic: "Hypertensive Disorders"
    },
    {
      stem: "Which findings are POSITIVE (diagnostic) signs of pregnancy?",
      options: [
        "Auscultation of the fetal heartbeat by the examiner",
        "A positive urine pregnancy test performed in the clinic",
        "Fetal movement felt by the examiner",
        "Braxton Hicks contractions palpated by the examiner",
        "Visualization of the fetus on ultrasound",
        "Quickening reported by the mother"
      ],
      answers: [0, 2, 4],
      rationale: "Positive signs can be explained ONLY by pregnancy: the EXAMINER hearing the fetal heartbeat, the EXAMINER palpating fetal movement, and seeing the fetus on ultrasound. A positive pregnancy test and Braxton Hicks contractions are PROBABLE (objective) signs, and quickening — movement felt by the MOTHER — is PRESUMPTIVE (subjective).",
      topic: "Antepartum Care"
    },
    {
      stem: "Which statements about newborn discharge screening are correct?",
      options: [
        "The newborn blood screen requires at least 24 hours of feeding first",
        "A reading of 97% on the right hand and 91% on the foot is a passing result",
        "Failing the hearing screen once confirms a hearing impairment",
        "An infant of a hepatitis B positive mother should also receive immune globulin",
        "The pulse oximetry screen looks for congenital heart disease"
      ],
      answers: [0, 3, 4],
      rationale: "The metabolic screen needs 24 hours of breast milk or formula before phenylalanine will have accumulated; the pulse oximetry screen looks for critical congenital heart disease; and an infant born to a hepatitis B positive mother gets HBIG in addition to the vaccine. A 6-point gap between hand and foot <i>fails</i> the screen — it requires greater than 95% with less than a 3% difference. And fluid in the ears frequently causes a failed hearing screen, with many infants passing on the recheck.",
      topic: "Newborn Assessment & Care II"
    },
    {
      stem: "Which VEAL CHOP pairings match the pattern to its cause correctly?",
      options: [
        "Early deceleration → head compression",
        "Late deceleration → placental insufficiency",
        "Variable deceleration → cord compression",
        "Prolonged deceleration → head compression",
        "Early deceleration → uteroplacental insufficiency"
      ],
      answers: [0, 1, 2],
      rationale: "VEAL CHOP: Variable → Cord compression, Early → Head compression, Acceleration → Okay, Late → Placental insufficiency. So early decelerations come from head compression and are benign, while late decelerations reflect uteroplacental insufficiency and always need intervention. A prolonged deceleration points to something like a prolapsed cord or an abruption, not head compression.",
      topic: "Intrapartum Care II"
    },
    {
      stem: "Which measures does the nurse anticipate when preparing a client for a cesarean birth?",
      options: [
        "Bolus about 1,500 mL of warmed lactated Ringer's",
        "Insert the urinary catheter before the anesthesia is established",
        "Give famotidine (Pepcid) and metoclopramide (Reglan) if it is unscheduled",
        "Place the wedge under her left hip to shift the uterus off the vena cava",
        "Withhold antacids so the stomach stays empty"
      ],
      answers: [0, 2],
      rationale: "A warmed fluid bolus goes in before the block to blunt the hypotension it causes, and famotidine with metoclopramide is given for an unscheduled cesarean to reduce gastric volume and acidity. The wedge goes under the <i>right</i> hip, to tip the uterus off the vena cava. The catheter goes in <i>after</i> the anesthesia so she cannot feel it. And antacids are given, not withheld — the risk being managed is acid aspiration.",
      topic: "Artificial Management of Labor"
    },
    {
      stem: "A newborn is delivered to a mother with no prenatal care. Which physical findings suggest the infant is at or near term rather than preterm?",
      options: [
        "Abundant lanugo across the shoulders and upper back",
        "Deep creases across the entire sole of the foot",
        "Extremities lying extended at rest",
        "Thin, transparent skin with visible veins",
        "Immediate recoil of the pinna when it is folded"
      ],
      answers: [1, 4],
      rationale: "Ear cartilage develops recoil and sole creases deepen as gestation advances, so both point to a term infant. An extended resting posture, thin transparent skin with visible veins, and heavy lanugo all point the other way — the preterm infant lacks the flexed posture and mature skin, and body hair decreases as the baby matures.",
      topic: "Newborn Assessment & Care I"
    },
    {
      stem: "Which factors increase a client's risk for uterine atony?",
      options: [
        "A prolonged oxytocin induction",
        "Grand multiparity",
        "Delivery of twins",
        "A birth weight of 4,300 grams",
        "Magnesium sulfate infused for preeclampsia"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "All five. Prolonged oxytocin saturates the receptors so the uterus stops responding; repeated pregnancies and any overdistension — multiples or a large infant — leave a uterus that will not return to tone easily; and magnesium sulfate relaxes smooth muscle, including the uterus. Tone is the first of the Four T's and the leading cause of early postpartum hemorrhage.",
      topic: "Postpartum Care & Complications"
    },
    {
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
      rationale: "No real change is needed for fat intake, vitamin E, vitamin K, iodine, and sodium — sodium is not normally restricted in pregnancy. Iron IS increased (the only supplement truly needed if the diet is adequate), and folic acid is the one number to memorize at 400 mcg daily.",
      topic: "Maternal Nutrition"
    },
    {
      stem: "A nurse palpates the head of several newborns. Which findings require further evaluation?",
      options: [
        "A bulging fontanelle in an infant at rest",
        "A sunken fontanelle in a 3-day-old",
        "A fontanelle that pulses outward while the infant screams",
        "Overriding sutures in an infant born after a two-hour second stage",
        "A soft, flat anterior fontanelle in a quiet 1-day-old"
      ],
      answers: [0, 1],
      rationale: "Fontanelles should be soft and flat. Bulging at rest suggests increased intracranial pressure, and a sunken fontanelle suggests dehydration — ask about wet diapers and feedings. A fontanelle that bulges only while the infant is crying vigorously is normal, and overriding sutures after a long second stage are molding, which resolves within about 24 hours.",
      topic: "Newborn Assessment & Care I"
    },
    {
      stem: "Which statements about the classification of hypertensive disorders in pregnancy are correct?",
      options: [
        "Eclampsia is preeclampsia plus a grand mal seizure",
        "Chronic hypertension is hypertension that first appears after 20 weeks",
        "Diagnosis requires two readings of 140/90 or higher at least 4 hours apart",
        "HELLP stands for Hypertension, Elevated Lipids, and Low Platelets",
        "Severe preeclampsia requires a systolic of at least 140 mm Hg"
      ],
      answers: [0, 2],
      rationale: "Eclampsia is preeclampsia that has progressed to a grand mal seizure, and the diagnosis of hypertension needs two readings of 140/90 or higher at least 4 hours apart — one elevated reading is not enough. Chronic hypertension predates the pregnancy or appears <i>before</i> 20 weeks. HELLP is Hemolysis, Elevated Liver enzymes, Low Platelets. Severe preeclampsia starts at a systolic of 160.",
      topic: "Hypertensive Disorders"
    },
    {
      stem: "Which teaching points about relieving common discomforts of pregnancy are correct?",
      options: [
        "Point the toes downward for a leg cramp",
        "Dorsiflex the foot to stretch the calf for a leg cramp",
        "Sleep flat on the back to relieve backache",
        "Use a sodium-containing antacid for heartburn",
        "Eat dry crackers or toast before rising for nausea"
      ],
      answers: [1, 4],
      rationale: "Dorsiflexion stretches the cramping calf; pointing the toes shortens it and makes the cramp worse. Dry crackers before getting up is the standard advice for morning nausea. Lying flat on the back invites supine hypotensive syndrome, so side-lying is taught instead, and sodium-containing antacids are avoided because of the fluid retention.",
      topic: "Antepartum Care II"
    },
    {
      stem: "A nurse reviews the lochia documented on four postpartum clients. Which findings should be reported to the provider?",
      options: [
        "Day 2, a moderate amount of red lochia with no odor",
        "Day 3 after a cesarean birth, lochia still present",
        "Day 6, pink-brown lochia",
        "Day 4, lochia with an offensive foul odor",
        "Day 2, passing several large clots"
      ],
      answers: [3, 4],
      rationale: "A foul or offensive odor means infection, and large clots are a warning sign of hemorrhage — a uterus filling with clots cannot contract down. The others are all expected: rubra is red through about day 4, serosa is pink-brown from about day 4 to 10, and clients who deliver by cesarean still have lochia.",
      topic: "Postpartum Care & Complications"
    }
  ]
};
