/* ============================================================
   week6-review.js — "Week 6 Lecture Review" question bank.
   The multiple-choice (Point Solutions) clicker questions Dr. Clark
   used during the Week 6 live lecture (Newborn Assessment & Care),
   in lecture order.

   STEMS AND OPTIONS come from the user-supplied question file
   ("Week 6 - Live Class Questions.md"), which is a text export of
   her own slides. The ANSWERS come from what she said in the live
   class — the export marks none of them.

   The opening POSTPARTUM SPRINT REVIEW was deliberately excluded
   (per the user): it was open recall, not multiple choice.

   FOUR OPTIONS WERE TRUNCATED in the source export. All four have
   since been CONFIRMED and now match her slides:
     • Q8  option D  ("…not as important as the fact that the baby is
                       healthy") — supplied by the user 2026-08-06
     • Q20 option D  ("Allow mother to keep custody of the infant")
                     — supplied by the user 2026-08-06
     • Q14 option E  ("…toes flare with the Babinski reflex")
                     — completed from her narration, user-confirmed
     • Q27 option E  ("Prevent neonatal blindness")
                     — completed from her narration, user-confirmed
   Nothing in this file is a guess any more.

   No question requires a slide image. Same shape as assets/exam.js.
   29 questions, 5 SATA.
   ============================================================ */
window.EXAM_DATA = {
  id: "week6-review",
  title: "Week 6 Lecture Review",
  questions: [
    { stem: "For which reason would the nurse perform nasal and oral suctioning of a newborn immediately after birth?",
      options: ["To stimulate respiration", "To remove fluid from the lungs", "To increase pulmonary flow", "To stimulate cardiac activity"],
      answer: 0,
      rationale: "A bulb syringe only reaches the mouth and the small nasal cavity — it does not pull fluid up from deep in the lungs. Its main job right after birth is stimulation: dry the baby, suction, rub the back, flick the heels, and get a vigorous cry. Crying is itself what clears the remaining lung fluid." },

    { stem: "The nurse is performing a 1-minute Apgar assessment of a newborn infant.<br><br><b>Appearance:</b> body pink, hands blue<br><b>Pulse:</b> 118 bpm<br><b>Grimace:</b> minimal response<br><b>Activity:</b> some flexion<br><b>Respiration:</b> slow and irregular<br><br>What is the Apgar score?",
      options: ["8", "7", "6", "5"],
      answer: 2,
      rationale: "Appearance (body pink, hands blue = acrocyanosis) 1 + Pulse (118, above 100) 2 + Grimace (minimal response) 1 + Activity (some flexion) 1 + Respiration (slow, irregular) 1 = <b>6</b>. Dr. Clark said this is the kind of item that could be a calculation on the final, and that the scoring chart would most likely be provided." },

    { stem: "Which of the following findings indicates respiratory distress in the newborn when all are present simultaneously? Select all that apply.",
      options: ["Respiratory rate 70", "Apnea for 10 seconds", "Intercostal retractions", "Acrocyanosis", "Grunting", "Nasal flaring"],
      answers: [0, 2, 4, 5],
      rationale: "It is the combination that matters. A fast rate on its own can just be transient tachypnea; add retractions, grunting, and flaring and the baby is working to breathe. Grunting is the baby's own attempt to keep the alveoli inflated. A 10-second pause is periodic breathing (normal up to 20 seconds — apnea is more than 20), and acrocyanosis is a normal transitional finding." },

    { stem: "The nurse checks a newborn's axillary temperature after giving a bath. What type of heat loss may occur as a result?",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      answer: 3,
      rationale: "Evaporation is heat lost as water turns to vapor — a wet baby. This is why newborns are dried immediately at birth and why the first bath is delayed about 6 hours. Conduction is loss to a cooler surface by direct contact, convection to cooler moving air, and radiation to a cooler surface not in contact with the baby." },

    { stem: "Which method route would the nurse use to assess the temperature of a neonate 12 hours after birth?",
      options: ["Axillary", "Temporal", "Rectal", "Tympanic"],
      answer: 0,
      rationale: "Axillary is the routine route. Lay the probe parallel with the length of the body under the axilla and bring the arm down over it. Rectal temperatures are avoided because they can perforate an imperforate anus — patency is confirmed instead by the baby passing stool." },

    { stem: "When newborn infants experience cold stress, they begin to metabolize brown fat stores. If the baby is not adequately warmed and the cold stress continues, which is NOT an anticipated outcome?",
      options: ["Hypertension", "Respiratory distress", "Hypoglycemia", "Lethargy"],
      answer: 0,
      rationale: "Hypotension is expected, not hypertension. Continuing cold stress burns through glucose and oxygen: the baby becomes hypoglycemic, develops respiratory distress, and grows lethargic with poor tone and a feeble cry." },

    { stem: "Which condition would the nurse recognize in a newborn with pale blue lips, feet, and palms 48 hours after birth?",
      options: ["Acrocyanosis", "Transient tachypnea", "Central cyanosis", "Polycythemia"],
      answer: 2,
      rationale: "The lips are central, so blue lips make this central cyanosis regardless of what the hands and feet look like. Acrocyanosis is blue hands or feet <i>with</i> pink lips and a pink trunk. The baby should always be centrally pink." },

    { stem: "Your patient delivers vaginally after pushing for 2 hours. She is holding her newborn infant and expresses concern about the cone shape of the head. What is the most appropriate response?",
      options: ["\"All infants are born with uniquely-shaped heads.\"", "\"Molding of the infant head is normal after a long labor and typically resolves within 24 hours.\"", "\"If you massage the baby's head every 4 hours, the head will regain a normal shape.\"", "\"The shape of the baby's head is not as important as the fact that the baby is healthy.\""],
      answer: 1,
      rationale: "Molding is the overriding of the cranial bones so the head can fit through the pelvis, and it typically resolves within 24 hours. It is normal, it needs no intervention, and the mother's concern deserves a real explanation rather than a brush-off." },

    { stem: "You are assessing a 3-day-old infant and note that the anterior fontanel is sunken. What would be your next step?",
      options: ["Document the finding as normal", "Call the provider to discuss your concern about increased intracranial pressure", "Ask the mother about the number of wet diapers and feeding sessions over the last 24 hours", "Tell the mother this is due to the shifting of the skull bones during delivery"],
      answer: 2,
      rationale: "Fontanelles should be soft and flat. A sunken fontanelle points to dehydration, so the next step is to assess intake and output — feedings and wet diapers. A <i>bulging</i> fontanelle at rest is what suggests increased intracranial pressure (it also bulges normally with vigorous crying)." },

    { stem: "You are conducting an infant assessment and note an area of swelling on the infant's head that does not cross the suture line. You recognize this as:",
      options: ["Caput succedaneum", "Subconjunctival hemorrhage", "Molding", "Cephalohematoma"],
      answer: 3,
      rationale: "Crossing the suture line is the distinguishing feature. A cephalohematoma is blood collected <i>under</i> the periosteum, so it stops at the suture; caput succedaneum is serum <i>above</i> the periosteum, so it spreads across sutures and feels soft and squishy. Cephalohematoma is more common after a forceps or vacuum birth." },

    { stem: "Which of the following is NOT a potential result of an unresolved cephalohematoma?",
      options: ["Jaundice", "Anemia", "Hypotension", "Hyperglycemia"],
      answer: 3,
      rationale: "The problem with a cephalohematoma is blood that has left the vascular space. As it breaks down it releases bilirubin, so jaundice develops; the blood lost from circulation can cause anemia and, if the bleed is large, hypotension. Glucose is not affected — if anything these babies are at risk for hypo-, not hyperglycemia." },

    { stem: "What is the term used to describe the condition in which the urethral opening is on the underside of the penis?",
      options: ["Hypospadias", "Epispadias", "Phimosis", "Hydrocele"],
      answer: 0,
      rationale: "Hypospadias is a meatus anywhere on the ventral (under) surface; epispadias is on the dorsal (top) surface. Phimosis is a foreskin too tight to retract, and a hydrocele is fluid around the testes. A baby with hypospadias or epispadias is not circumcised — a pediatric urologist evaluates first, because the foreskin is often needed for the repair." },

    { stem: "You are caring for a couple who has a baby with a cleft lip and palate. Which statement, by the mother, displays that she understands priority interventions while feeding?",
      options: ["\"We need to monitor for jaundice.\"", "\"We need to monitor for pain.\"", "\"We need to monitor for respiratory distress and aspiration.\"", "\"We need to monitor for hypoglycemia.\""],
      answer: 2,
      rationale: "A cleft palate is an opening in the roof of the mouth that leads straight into the airway, so milk or formula can get into the lungs. Aspiration and respiratory distress are the immediate feeding risks — a baby turning blue during a feeding means fluid got through the palate." },

    { stem: "Which assessment finding would the nurse recognize as a normal reflex in the newborn? Select all that apply.",
      options: ["Newborn turns head towards stimulus with mouth open when eliciting rooting reflex", "Newborn's fingers fan out when palmar reflex checked", "Newborn forces tongue outward when tongue is touched", "Newborn exhibits symmetric abduction and extension of arms, and fingers form a \"C\" with Moro reflex", "Newborn's toes flare with the Babinski reflex"],
      answers: [0, 2, 3, 4],
      rationale: "Rooting (turning toward the stimulus, ready to suck), extrusion (tongue pushed out when touched), Moro (symmetric abduction and extension with the fingers forming a C), and Babinski (toes flare — normal in an infant, abnormal in an adult) are all expected. The palmar grasp makes the newborn <i>grasp</i> the finger, not fan the fingers out." },

    { stem: "A patient who had no prenatal care presents to the ER after delivering a baby at home. You complete an assessment on the baby, who is pink and crying vigorously, and find the following: creases on the soles of the feet, vernix only in skin creases, instant recoil to the ears, and prominent breast bud tissue. Based on these findings, you deduce that the infant is approximately:",
      options: ["20 weeks gestation", "28 weeks gestation", "34 weeks gestation", "39 weeks gestation"],
      answer: 3,
      rationale: "Every finding points to maturity: sole creases increase with gestational age, vernix decreases (a baby covered in thick vernix is not near term), instant ear recoil means well-developed cartilage, and a prominent breast bud means a more mature baby. Birth weight alone is unreliable — an undiagnosed IUGR baby can be small at term and an infant of a diabetic mother can be huge and preterm." },

    { stem: "A newborn is considered large for gestational age (LGA) if its weight is above what percentage on the growth chart?",
      options: ["50%", "75%", "80%", "90%"],
      answer: 3,
      rationale: "Above the 90th percentile is LGA; below the 10th is SGA; 10th to 90th is appropriate for gestational age. The percentile is read against the baby's gestational age, which is why weight by itself never establishes maturity." },

    { stem: "Which consideration is important when administering an intramuscular injection to a newborn?",
      options: ["Needle should be inserted at 45-degree angle", "Deltoid muscle is preferred injection site", "Needle length should be 1/2 inch", "Medicine dose should be 0.5-1.0 mL"],
      answer: 3,
      rationale: "0.5 to 1.0 mL is the appropriate volume. An IM injection is always given at 90 degrees, the newborn site is the vastus lateralis rather than the deltoid, and a 5/8-inch needle is used because a 1/2-inch needle usually will not reach muscle. Extend the leg and hold the knee down — the baby's instinct is to flex away." },

    { stem: "In knowing the newborn's periods of reactivity, when would be the best time to initiate the first breastfeeding session?",
      options: ["Within the first 30 min after birth", "2-4 hours after birth", "4-6 hours after birth", "6-8 hours after birth"],
      answer: 0,
      rationale: "The first period of reactivity is roughly the first 30 minutes: the baby is awake, alert, and has a strong suck. After that comes the sleep phase, when the baby is hard to rouse and much harder to latch. Feed as soon as mother and baby are able." },

    { stem: "Which infants are at greatest risk of developing physiological jaundice? Select all that apply.",
      options: ["4-hour old infant born at term", "2-day old infant born at 35 weeks", "A 2-day old SGA baby who is having difficulty breastfeeding", "A 2-day old baby diagnosed with a cephalhematoma", "A 3-hour old infant who is O- and the mother is B+ blood type"],
      answers: [1, 2, 3],
      rationale: "Prematurity, poor feeding (less intake means less stooling, and stool is how bilirubin leaves the body), and a cephalohematoma (collected blood breaking down into extra bilirubin) all raise the risk. The two 3- and 4-hour-old infants are under 24 hours old — jaundice appearing that early would be <i>pathologic</i>, not physiologic." },

    { stem: "What is the primary purpose of providing buprenorphine to a pregnant woman who has been using heroin?",
      options: ["Prevent intrauterine fetal seizures", "Assist the mother to completely wean from all narcotics within 4 weeks", "Prevent development of congenital anomalies", "Allow mother to keep custody of the infant"],
      answer: 0,
      rationale: "Stopping an opioid abruptly sends both mother and fetus into withdrawal — and a mother in withdrawal can be treated, while a fetus having withdrawal seizures in utero cannot. Medication-assisted treatment with buprenorphine or methadone keeps the fetus stable. It is not a fixed 4-week taper, and it does not undo teratogenic effects." },

    { stem: "An infant admitted to the neonatal intensive care unit (NICU) is exhibiting signs of neonatal abstinence syndrome. Which of the following behaviors would support this diagnosis?",
      options: ["High pitched shrill cry", "Hyper-dynamic precordium", "Depressed fontanels", "Excessive regurgitation"],
      answer: 0,
      rationale: "The high-pitched, shrill cry is the classic and distinctly recognizable CNS sign of withdrawal. Other supporting findings are jitteriness and tremors, hypertonia, overactive reflexes, projectile vomiting, diarrhea with excoriated buttocks, sweating, poor and uncoordinated sucking, and very poor sleep." },

    { stem: "Which condition is the nurse screening for when performing a pulse oximetry reading on a newborn?",
      options: ["PKU", "Sickle cell disease", "Thalassemia", "Congenital heart disease"],
      answer: 3,
      rationale: "The critical congenital heart disease screen places probes on the right hand and a foot. A pass is greater than 95% with less than a 3% difference between the two; below 90% in either, or too wide a gap, fails and needs cardiac evaluation. It catches babies who look completely well in the hospital and then turn blue at home. PKU and the other disorders are found on the newborn blood screen." },

    { stem: "You are providing discharge teaching to parents. Which of the following is correct regarding placement for (1) infant car seat and (2) infant sleep position?",
      options: ["Forward facing, prone", "Rear facing, prone", "Forward facing, supine", "Rear facing, supine"],
      answer: 3,
      rationale: "The car seat is rear-facing in the back seat, with the chest strap at the level of the axilla. The baby sleeps supine — back to sleep — because prone sleeping raises the risk of SIDS. Tummy time is still encouraged, but only awake and supervised." },

    { stem: "A patient with a 4-day-old infant calls the clinic to report the infant signs below. Which signs would be concerning? Select all that apply.",
      options: ["Temp 99.7 axillary after walking outside in sun", "Small amount of dried blood around circumcision", "Umbilical cord dried and shriveling", "No wet diapers in 24 hours", "Infant drowsy and refusing to breastfeed for 8 hours"],
      answers: [3, 4],
      rationale: "A newborn should have 6 to 8 wet diapers a day, so none in 24 hours is a red flag for dehydration. Eight hours without feeding in a 4-day-old is far too long, and a drowsy, hard-to-wake baby also raises the question of a rising bilirubin. A temp of 99.7 is within the normal 97.7 to 99.5 range and explained by the sun, a small amount of dried blood at a circumcision is expected, and a drying, shriveling cord is exactly what should happen." },

    { stem: "Rubin describes one of the phases of maternal postpartum adjustment as \"Mothers focus attention on themselves and their recovery needs. Mothers are dependent on others to make decisions and to care for their newborns.\" Which phase is she describing?",
      options: ["Taking in", "Letting in", "Taking hold", "Letting go"],
      answer: 0,
      rationale: "Taking in is the first day or so: the mother is focused on herself — eating, pain control, talking through the birth experience — and relies on others. Taking hold comes around day 2 to 3, when she begins caring for the baby herself and needs reassurance that her mothering is going well." },

    { stem: "What is the purpose of giving newborns Vitamin K/phytonadione?",
      options: ["It helps newborns create intestinal bacteria", "Given to prevent hemorrhage due to lack of Vit K in gut", "It aids in the digestion of baby's first feedings", "Given to enhance newborn immunity"],
      answer: 1,
      rationale: "Newborns lack the intestinal bacteria needed to synthesize vitamin K until the gut is colonized, so they are at risk of bleeding. It is a one-time IM injection — and it is a medication, not a vaccine. By the time bleeding becomes visible it can be too late, since an unsuspected brain bleed can cause irreversible damage or death." },

    { stem: "Erythromycin eye ointment is administered to newborns after delivery to help which of the following? Select all that apply.",
      options: ["Treat discharge from leaking from the eyes", "Prevent conjunctivitis", "Prevent complications associated with gonorrhea", "Prevent Group B Strep infections vertically transmitted from the mother", "Prevent neonatal blindness"],
      answers: [1, 2, 4],
      rationale: "It is prophylaxis, given as a single dose within about 30 minutes of birth, against conjunctivitis from gonorrhea or chlamydia the mother may have carried without knowing — and against the neonatal blindness that can follow. It is not a treatment for existing eye discharge, and erythromycin is not what is used for group B strep." },

    { stem: "Which vaccine does the newborn receive before discharge?",
      options: ["Rubella", "TDap", "Hepatitis C", "Hepatitis B"],
      answer: 3,
      rationale: "Hepatitis B is the newborn's vaccine, offered before discharge (parents may decline and have it done at the pediatrician's office). If the mother is hepatitis B positive, the baby should also receive hepatitis B immune globulin. Rubella and Tdap are maternal postpartum vaccines, and there is no hepatitis C vaccine." },

    { stem: "An infant born at 35 weeks gestation experiences grunting in the newborn nursery. What action is the priority?",
      options: ["Place a pacifier in the baby's mouth", "Have the mother breastfeed the infant", "Assess the respiratory rate", "Assess the infant's pulse"],
      answer: 2,
      rationale: "Grunting is a sign of respiratory distress — the baby is trying to keep the alveoli inflated — and this baby is preterm, so surfactant may be inadequate. Assess the respiratory system first: count the rate for a full minute and look for retractions and flaring, and put a pulse oximeter on. Feeding an infant in distress risks aspiration." },
  ]
};
