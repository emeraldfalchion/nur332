/* ============================================================
   week5-review.js — "Week 5 Lecture Review" question bank.
   The multiple-choice practice questions Dr. Clark used during the
   Week 5 live lecture (Postpartum Care & Complications).

   STEMS AND OPTIONS ARE VERBATIM from her own slide deck
   ("postpartum lecture review questions.pptx", 25 slides), in slide
   order. The ANSWERS come from what she said in the live class —
   the deck itself marks no answers and has no speaker notes.

   Q12 is the one exception: it is NOT in the deck, but she polled it
   in class ("Which condition is the most significant risk factor for
   early postpartum hemorrhage?"), so its options are reconstructed
   from the discussion. Flagged in CLAUDE.md.

   No question requires a slide image. Same shape as assets/exam.js.
   ============================================================ */
window.EXAM_DATA = {
  id: "week5-review",
  title: "Week 5 Lecture Review",
  questions: [
    { stem: "Which rationale would lead the nurse to advise a postpartum client to breastfeed regularly to lower the risk of postpartum hemorrhage?",
      options: ["Lactose production", "Progesterone production", "Estrogen production", "Oxytocin production"],
      answer: 3,
      rationale: "Nipple stimulation from breastfeeding releases oxytocin, and oxytocin makes the uterus clamp down — which decreases bleeding after the placenta delivers. Skin-to-skin contact right after birth works the same way." },

    { stem: "If a client chooses not to breastfeed, which condition should the nurse assess for?",
      options: ["Engorgement", "Low estrogen levels", "Sore nipples", "Postpartum depression"],
      answer: 0,
      rationale: "A mother who is not nursing still makes milk at first, so assess for engorgement. A supportive bra and avoiding nipple stimulation reduce the stimulus so milk production is not encouraged to begin." },

    { stem: "How often should a patient be encouraged to breastfeed in the first days postpartum?",
      options: ["About every hour", "About every 2-3 hours", "About every 4 hours", "About every 6 hours"],
      answer: 1,
      rationale: "At least every 2 to 3 hours — and a newborn should never go longer than 4 hours between feedings, even a sleepy baby. Frequent emptying keeps the baby's nutrition up and keeps telling the breast to make milk." },

    { stem: "Which of the following are signs the infant is getting enough breastmilk in the first couple of days? Select all that apply.",
      options: ["Sunken fontanel", "Audible swallowing when the infant is feeding", "Breasts softer after feeding", "Infant sleeping through the night"],
      answers: [1, 2],
      rationale: "You can hear the baby swallow, and the breasts feel firmer when full of milk and softer once it has been released. A sunken fontanel is a sign of dehydration, and sleeping through the night means the newborn has gone longer than 4 hours without eating." },

    { stem: "A patient who is 4 weeks postpartum calls your clinic with reports of a fever of 102.3, chills, and a reddened area on her left breast. She reports breastfeeding her infant. What condition do you suspect?",
      options: ["Uterine subinvolution", "Engorgement", "Mastitis", "Perineal hematoma"],
      answer: 2,
      rationale: "A sudden onset of chills, fever, and flu-like symptoms with a reddened painful area in ONE breast is mastitis — an infection. Engorgement is usually both breasts, hard and full, without an associated fever." },

    { stem: "Which condition is likely and should be further evaluated in a client who gave birth to triplets, whose abdomen is overdistended, and whose abdominal muscle walls are separated?",
      options: ["Subinvolution", "Diastasis recti abdominis", "Persistent rubra lochia", "Postpartum hemostasis"],
      answer: 1,
      rationale: "Diastasis recti abdominis is a separation of the abdominal muscles that stretched apart to make room for the enlarged uterus — most likely after an over-distended abdomen such as triplets. You can feel the gap in the midline at the umbilicus. It usually is not repaired; time and exercise typically tighten it back together." },

    { stem: "Which rationale explains the nursing intervention of placing one hand below the umbilicus and the other on the symphysis, then applying downward pressure toward the vagina? Select all that apply.",
      options: ["To assess laceration repair for redness", "To determine whether the fundus is firm", "To help the client void spontaneously", "To assist the client in expelling clots", "To assess for the presence of hemorrhoids"],
      answers: [1, 3],
      rationale: "This describes a fundal check and fundal massage. You are assessing that the fundus is firm and midline and noting its level — and the downward massage also helps expel clots, which matters because a uterus full of clots cannot contract well." },

    { stem: "When should the client expect to have her first bowel movement after delivery?",
      options: ["Day 1", "Day 3", "Day 5", "Day 4"],
      answer: 1,
      rationale: "Day 2 to 3 is the average. The bowels are sluggish from progesterone still slowing peristalsis, decreased muscle tone, the birth process, and anesthesia — and fear of pain from an episiotomy, laceration, or hemorrhoids delays it further." },

    { stem: "Which physiologic change causes a postpartum increase in diuresis?",
      options: ["Compression of bladder by uterus", "Renal pelvis contraction", "Reduction of kidney function", "Mobilization of extracellular fluid"],
      answer: 3,
      rationale: "The body no longer needs the extra volume of pregnancy, so extracellular fluid is mobilized and the kidneys clear roughly 2,000 to 3,000 mL. Voiding large amounts frequently is normal and means the kidneys are working correctly." },

    { stem: "A client who gave birth 4 days ago reports that her vaginal discharge has an offensive odor. Which clinical condition would the nurse infer from this report?",
      options: ["Infection", "High oxytocin levels", "Postpartum hemorrhage", "Normal lochia discharge"],
      answer: 0,
      rationale: "Lochia should not have a foul or offensive odor. Anytime discharge smells offensive it is a warning sign that an infection could be developing." },

    { stem: "You are prioritizing care of your postpartum patients. Which patient would be highest priority?",
      options: ["Patient who is 2 days PP with a moderate amount of rubra lochia noted on her pad after 2 hours.", "Patient who is 6 hours PP and saturated pad with rubra lochia after 30 minutes.", "Patient being discharged on day 3 PP with serosa lochia.", "Patient who is 1 day PP with moderate amount of rubra lochia after 1 hour."],
      answer: 1,
      rationale: "Saturating a peripad in less than 1 hour is too much bleeding — you do not need to weigh it to know that. A moderate amount over 2 hours, serosa on day 3, and a moderate amount after a full hour are all acceptable." },

    { stem: "Which condition is the most significant risk factor for early postpartum hemorrhage?",
      options: ["Uterine atony", "Retained placental fragments", "A cervical laceration", "A coagulation disorder"],
      answer: 0,
      rationale: "Early — soon after birth — is most likely to be a tone problem: the uterus is not firm. Retained placental fragments are more a risk factor for a LATE postpartum hemorrhage." },

    { stem: "With which of the following patients would you avoid using Methergine to treat PP hemorrhage?",
      options: ["Patient with chronic HTN", "Patient with mastitis who is breastfeeding", "Patient who had a C/S for complete placenta previa", "Patient with gestational diabetes"],
      answer: 0,
      rationale: "Methergine can cause rebound hypertension. Even though she is bleeding and her pressure is low right now, the medication can drive it much higher later — so in a patient with chronic hypertension or a hypertensive disorder it is a last resort, and carboprost (Hemabate) is a better next line." },

    { stem: "Which risk factor is associated with an increased risk for postpartum infection? Select all that apply.",
      options: ["Hematoma", "Prolonged labor", "Cesarean delivery", "Postpartum hemorrhage", "Prolonged rupture of membranes"],
      answers: [0, 1, 2, 3, 4],
      rationale: "All of them — sometimes that happens with a select-all. Prolonged rupture lets outside organisms into what was a fairly sterile environment; prolonged labor usually means many vaginal exams; surgery is itself an infection risk; a hemorrhage brings far more invasive manipulation (repeated fundal massage, extra exams, a D&C, a manual uterine sweep); and a hematoma involves collected blood with skin breakdown over it." },

    { stem: "In what position would you place a patient to assess her perineal laceration postpartum?",
      options: ["Frog-legged with HOB elevated", "Side-lying with superior leg elevated", "Knee-chest", "Lithotomy"],
      answer: 1,
      rationale: "Side-lying with the upper leg elevated exposes the perineum best. Raising the head of the bed works against you, because she settles down onto her bottom and it gets harder to see; knee-chest is not a position we use postpartum; and mother-baby beds do not have stirrups for lithotomy." },

    { stem: "If a postpartum client complains of extreme perineal pain, especially after having received pain medication, the FIRST action by the nurse should be:",
      options: ["Notify the provider", "Apply an ice pack to the perineum", "Assess the perineum", "Check the client's vital signs and fundus"],
      answer: 2,
      rationale: "The other actions are not bad things to do, but she has already been medicated — so go to the area where you think the problem is. Unrelieved pain out of proportion to the repair suggests something an analgesic will not fix, such as a hematoma." },

    { stem: "Which characteristic indicates a postpartum client may be experiencing \"baby blues\"?",
      options: ["Scared to hold the baby", "Cries for no apparent reason", "Happy about having a baby girl", "Feels protective towards the baby"],
      answer: 1,
      rationale: "The blues are a transient, self-limiting period of mood swings — she can become very tearful without an apparent cause, sometimes just from a passing thought. Being happy about the baby and feeling protective are normal, and fear of holding the infant is not the hallmark." },

    { stem: "Which of the following are risk factors for PP depression? Select all that apply.",
      options: ["Breastfeeding", "Hx of depression", "Diabetes", "First pregnancy", "Maternal age >18"],
      answers: [1, 3],
      rationale: "A history of depression and a first pregnancy are the higher-risk factors, along with being young — it is age UNDER 18 that raises the risk, not over. Breastfeeding and a chronic illness such as diabetes can each contribute to a low mood, but research does not make them specific risk factors for postpartum depression." },

    { stem: "Which statement is correct regarding transferring a mother and baby to the postpartum unit?",
      options: ["The transfer report is prepared by the health care provider.", "If the mother had general anesthesia, the nurse always decides when the client is ready for transfer.", "The newborn's APGAR scores are assessed after the mother is transferred to the mother-baby unit.", "Bedside report during postpartum care help to improve client safety and satisfaction."],
      answer: 3,
      rationale: "Bedside report improves client safety and satisfaction. The nurse — not the provider — prepares the report; the anesthesiologist decides when a client may move after general anesthesia; and Apgar scoring is done at 1 and 5 minutes of life, at the birth." },

    { stem: "Upon examining a patient on day 2 after spontaneous vaginal delivery, a nurse finds the perineal pad to be completely saturated with bright red blood over the last 15 minutes. The priority in this scenario is:",
      options: ["Start a second intravenous line of Normal Saline", "Notify the primary health care provider", "Massage the fundus", "Assess vital signs"],
      answer: 2,
      rationale: "Saturating a pad in less than an hour is a red flag, and the most likely source of the bleeding is the uterus — so go to the source first. Vital signs would only describe what you can already see. Massage the fundus, then move on to medications and notifying the provider." },

    { stem: "You are caring for a patient who is 3 days status post scheduled C/S. She calls out and complains of a severe headache that worsens anytime she sits up. She also reports some dizziness and photophobia. Her B/P is normal. You suspect she may have:",
      options: ["Preeclampsia", "Spinal headache", "Thromboembolism", "Cholestasis"],
      answer: 1,
      rationale: "A positional headache — worse whenever she sits up, better lying flat — with dizziness and photophobia after a spinal suggests she had a wet tap and is leaking cerebrospinal fluid. The normal blood pressure is what separates it from a hypertensive headache such as preeclampsia." },

    { stem: "Which of the following patients are at risk for respiratory complications due to fluid overload PP? Select all that apply.",
      options: ["Patient who had multiple IV boluses due to anesthesia-related hypotension", "Patient induced with Pitocin for 36 hours", "Patient on Magnesium sulfate for preeclampsia", "Patient who delivered at home"],
      answers: [0, 1, 2],
      rationale: "We give a great deal of fluid around a delivery. Repeated boluses for anesthesia-related hypotension add volume; a client on Pitocin for 36 hours has had IV fluids for a very long time and can also develop water intoxication; and magnesium sulfate patients easily go into fluid volume overload and are prone to pulmonary edema. A home delivery involves none of those exposures." },

    { stem: "True or False? Exclusive breastfeeding is an effective method of birth control.",
      options: ["True", "False"],
      answer: 1,
      rationale: "False. Breastfeeding may help prevent or delay ovulation, but you cannot guarantee a woman will not ovulate, so it cannot be considered reliable contraception. Women have come back pregnant at their 6-week postpartum visit." },

    { stem: "The nurse recognizes the following postpartum changes are normal EXCEPT:",
      options: ["Low grade fever (<100.4) in the first 24 hours", "Profuse night-time sweating in the first few days postpartum", "WBCs of 40,000/mm3", "Intense shivering in the first hour postpartum without feeling cold"],
      answer: 2,
      rationale: "A white count of 40,000 is way too high to be a normal postpartum change. A low-grade temperature in the first 24 hours, profuse sweating as part of the diuresis and hormone changes, and the intense first-hour shivering known as the \"labor shakes\" or \"epidural shakes\" — from adrenaline still running high — are all expected." },

    { stem: "Related to uterine involution, the nurse recognizes all of the following statements are true EXCEPT:",
      options: ["The fundus descends at a rate of about 1-2 cm every 24 hours.", "The uterus should not be palpable abdominally after 2 days.", "Oxytocin causes the uterus to contract, causing the hemostasis of blood vessels in the uterine myometrium.", "The most common causes of subinvolution are retained placental fragments and infection."],
      answer: 1,
      rationale: "At 2 days postpartum the fundus should still be palpable — around U−1 or U−2 — so this is the false statement. The other three are true: the fundus descends about 1-2 cm every 24 hours, oxytocin contracts the uterus and produces hemostasis in the myometrial vessels, and retained placental fragments and infection are the most common causes of subinvolution." },

    { stem: "A postpartum client reports severe headaches. When reviewing the client's medical record, the nurse found that the client's blood pressure was 150/100 mm Hg and 160/90 mm Hg on the second and third postpartum days, respectively. Which condition may be responsible for these alterations in blood pressure?",
      options: ["Hypovolemia", "Hyponatremia", "Preeclampsia", "Bradycardia"],
      answer: 2,
      rationale: "Preeclampsia is usually thought of as a pregnancy condition, but it can develop for the first time AFTER the baby is born. Two elevated readings on postpartum days 2 and 3 together with severe headaches is postpartum preeclampsia." }
  ]
};
