/* ============================================================
   exam-2.js - Practice Exam 2 (50 questions).
   Cumulative across Weeks 1-3, even treatment of all topics.
   Per-topic: reproductive 6, disorders 6, antepartum 6, antepartum II 6,
   nutrition 3, complications 6, hypertensive 6, intrapartum I 6,
   intrapartum II 5. 6 SATA. Deterministically shuffled (mulberry32 seed 332).
   Reuses the original 85-question pool split with exam-1.js + 15 new items;
   every Must-Know Quick Reference hint appears on exam 1 or exam 2.
   ============================================================ */
window.EXAM_DATA = {
  title: "Practice Exam 2",
  id: "exam-2",
  questions: [
    {
      stem: "A patient develops pelvic inflammatory disease after an untreated chlamydia infection. Which long-term complication is most important to include in teaching?",
      options: ["Cervical cancer","Tubal damage and infertility","Osteoporosis","Gestational diabetes"],
      answer: 1,
      rationale: "PID can scar the fallopian tubes and cause infertility, which is why untreated chlamydia and gonorrhea are such a concern."
    },
    {
      stem: "Parents ask what is significant about reaching 24 weeks' gestation. The nurse explains this marks:",
      options: ["Quickening","Viability — a chance of survival if born","Term gestation","When the fetal heart first beats"],
      answer: 1,
      rationale: "Around 24 weeks the fetus reaches viability (a chance of survival if born), when the eyes are structurally complete and alveoli begin forming."
    },
    {
      stem: "In a 10-minute window the nurse counts 7 contractions. The nurse recognizes this as:",
      options: ["Normal labor","Uterine tachysystole","Inadequate labor","A prolonged deceleration"],
      answer: 1,
      rationale: "Tachysystole is 6 or more contractions in a 10-minute period — the uterus does not get enough time to rest."
    },
    {
      stem: "Which diagnostic test and treatment are correct for syphilis in pregnancy?",
      options: ["Diagnosed by wet mount; treated with metronidazole","Diagnosed by RPR or VDRL; treated with penicillin","Diagnosed by pH paper; no treatment needed","Diagnosed by culture; treated with fluconazole"],
      answer: 1,
      rationale: "Syphilis is screened with RPR or VDRL (RPR preferred) and treated with penicillin. Congenital syphilis can cause IUGR, preterm birth, and stillbirth."
    },
    {
      stem: "Both parents are carriers for cystic fibrosis, an autosomal recessive disorder. Using a Punnett square, what does the nurse teach about each pregnancy?",
      options: ["50% of children will be affected","All children will be carriers","25% affected, 50% carriers, 25% unaffected","All children will be affected"],
      answer: 2,
      rationale: "A carrier × carrier cross (Bb × Bb) yields 25% affected (bb), 50% unaffected carriers (Bb), and 25% completely unaffected (BB) for each pregnancy."
    },
    {
      stem: "A patient presents with sharp one-sided pelvic pain, referred shoulder pain, and syncope. Serial hCG is not doubling and progesterone is low. Which condition does the nurse suspect?",
      options: ["Molar pregnancy","Ectopic pregnancy","Threatened miscarriage","Hyperemesis gravidarum"],
      answer: 1,
      rationale: "Ectopic pregnancy classically causes sharp one-sided pain, syncope, and referred shoulder pain, with low progesterone and hCG that fails to double."
    },
    {
      stem: "A woman calls stating she has been having contractions. Which finding best confirms she is in TRUE labor?",
      options: ["Contractions that ease with a warm bath","Progressive cervical dilation and effacement","Irregular contractions every 20 minutes","Contractions felt only in the abdomen"],
      answer: 1,
      rationale: "Progressive cervical change is the hallmark of true labor; true-labor contractions are regular, intensify, and are not relieved by rest or a warm bath."
    },
    {
      stem: "A patient at 28 weeks lies flat on her back for an exam and becomes dizzy and pale; her blood pressure drops. What is the nurse's priority action?",
      options: ["Lay her completely flat with her legs raised","Turn her to a side-lying (lateral) position","Have her sit bolt upright","Give a fluid bolus before repositioning"],
      answer: 1,
      rationale: "This is supine hypotensive syndrome — the gravid uterus compresses the vena cava. A lateral tilt/side-lying position immediately relieves the compression."
    },
    {
      stem: "A client's membranes have been ruptured for 20 hours. The nurse is MOST concerned about:",
      options: ["Precipitous birth","Infection (chorioamnionitis)","Cord prolapse","Hyperbilirubinemia"],
      answer: 1,
      rationale: "Ruptured membranes for more than 18 hours raise the risk of intrauterine infection (chorioamnionitis); the provider may start prophylactic antibiotics."
    },
    {
      stem: "A pregnant patient's partner answers every question for her and will not leave the room. What is the nurse's most appropriate action?",
      options: ["Continue the visit with the partner present to save time","Create a private moment — for example, escorting her alone to give a urine sample — to screen for intimate partner violence","Ask the patient about abuse directly in front of the partner","Document \"no abuse\" since she did not report any"],
      answer: 1,
      rationale: "Intimate partner violence increases in pregnancy and patients rarely disclose with a controlling partner present. Create private screening time and never raise it in front of others."
    },
    {
      stem: "A contraction stress test shows late decelerations with more than half of the contractions. How does the nurse interpret this result?",
      options: ["Negative — reassuring","Positive — indicating poor placental perfusion","Reactive — reassuring","Equivocal — no follow-up needed"],
      answer: 1,
      rationale: "The CST is \"backwards\": a POSITIVE CST (late decels with more than half of contractions) is the bad result indicating poor placental perfusion. A negative CST is reassuring."
    },
    {
      stem: "By approximately how many weeks should a first-time mother feel fetal movement (quickening)?",
      options: ["8 weeks","12 weeks","20 weeks","32 weeks"],
      answer: 2,
      rationale: "Quickening occurs by about 20 weeks and is a key indicator of fetal well-being."
    },
    {
      stem: "A patient learning about her cycle asks what triggers the release of the egg at ovulation. The nurse explains it is caused by a surge of:",
      options: ["Estrogen","Follicle-stimulating hormone (FSH)","Luteinizing hormone (LH)","Progesterone"],
      answer: 2,
      rationale: "A surge of LH triggers ovulation. FSH matures the follicle; progesterone dominates after ovulation."
    },
    {
      stem: "A nursing student asks what maintains progesterone production in very early pregnancy, before the placenta is fully functional. The nurse explains that until about week 7 the primary source is:",
      options: ["The placenta","The corpus luteum of the ovary","The fetal adrenal glands","The anterior pituitary"],
      answer: 1,
      rationale: "The ovaries (corpus luteum) are the primary source of estrogen and progesterone until the placenta takes over progesterone production around week 7; after delivery the ovaries resume control."
    },
    {
      stem: "Which test does NOT help determine whether the membranes have ruptured?",
      options: ["Nitrazine paper","Fern test","Amnisure","Montevideo units"],
      answer: 3,
      rationale: "Montevideo units measure contraction intensity via an IUPC — not rupture of membranes. Nitrazine, fern, and Amnisure all test for ROM."
    },
    {
      stem: "On a growth ultrasound, the biparietal diameter (BPD) is reported. The nurse knows the BPD is:",
      options: ["The longitudinal diameter of the skull","The largest transverse diameter of the fetal skull","The abdominal circumference","The femur length"],
      answer: 1,
      rationale: "The BPD is the largest transverse diameter of the fetal skull (between the parietal bones), used to estimate whether the head will fit the pelvis."
    },
    {
      stem: "A patient at 17 weeks is anxious because her quad screen (MSAFP) came back abnormal. What is the nurse's best teaching?",
      options: ["\"This confirms your baby has a birth defect.\"","\"This is a maternal blood SCREEN, not a diagnosis — it means follow-up testing such as ultrasound or amniocentesis is needed.\"","\"The test is drawn from the amniotic fluid and is diagnostic.\"","\"An abnormal result at 17 weeks is always a lab error.\""],
      answer: 1,
      rationale: "The quad screen/MSAFP is a maternal blood SCREEN (drawn ~15–22 weeks), not diagnostic — an abnormal result means further testing is needed."
    },
    {
      stem: "A nursing student asks where fertilization of the ovum most commonly occurs. What is the nurse's best response?",
      options: ["The fundus of the uterus","The ampulla of the fallopian tube","The isthmus of the fallopian tube","The cervix"],
      answer: 1,
      rationale: "Fertilization usually occurs in the ampulla of the fallopian tube. The isthmus is the site of tubal ligation."
    },
    {
      stem: "Monozygotic twins are found to share one chorion and one amniotic sac (monochorionic-monoamniotic). Why is this the highest-risk identical twin type?",
      options: ["They are always different sexes","They share the same sac, raising the risk of umbilical cord entanglement","They always have two separate placentas","The blastocyst divided at about 3 days, the earliest possible"],
      answer: 1,
      rationale: "Mono-mono twins share a single amniotic sac (division at 8-12 days), which raises the risk of umbilical cord entanglement - the highest-risk identical subtype."
    },
    {
      stem: "A pregnant patient asks how much coffee is acceptable during pregnancy. The nurse's best response is to limit caffeine to about:",
      options: ["No caffeine is safe in any amount","About 200 mg/day (roughly one cup of coffee)","About 600 mg/day","Caffeine has no effect during pregnancy"],
      answer: 1,
      rationale: "Caffeine should be limited to about 200 mg/day (about one cup of coffee). There is no clear link to birth defects, but excess can cause newborn hypersensitivity/jitteriness."
    },
    {
      stem: "A patient with preeclampsia reports a severe headache and seeing flashing lights. When the nurse dorsiflexes her foot, rhythmic beats are felt against the hand. What do these findings tell the nurse?",
      options: ["These are expected discomforts of the third trimester","The CNS is increasingly irritable and her seizure risk is rising — notify the provider","She is showing early magnesium toxicity","Her blood pressure has returned to normal"],
      answer: 1,
      rationale: "Rhythmic beats on dorsiflexion are clonus, indicating an irritated CNS. With headache and scotoma, these signal worsening preeclampsia and rising seizure risk."
    },
    {
      stem: "Which findings are POSITIVE (diagnostic) signs of pregnancy? Select all that apply.",
      options: ["Amenorrhea","Auscultation of the fetal heartbeat by the examiner","A positive urine pregnancy test","Fetal movement felt by the examiner","Visualization of the fetus on ultrasound"],
      answers: [1, 3, 4],
      rationale: "Positive signs can only be explained by pregnancy: hearing the fetal heartbeat, the examiner feeling fetal movement, and seeing the fetus on ultrasound. Amenorrhea is presumptive; a positive pregnancy test is probable."
    },
    {
      stem: "A pregnant patient with sickle cell disease is admitted in a crisis. Which interventions does the nurse anticipate?",
      options: ["Fluid restriction and diuretics","IV fluids, oxygen, folic acid, and analgesics","An insulin infusion","Immediate cesarean birth in all cases"],
      answer: 1,
      rationale: "A sickle cell crisis (red cells sickle when oxygen is low) is treated with IV fluids, oxygen, antibiotics, folic acid, and analgesics."
    },
    {
      stem: "A patient in her third trimester is awakened by painful calf cramps. Which self-care measure should the nurse recommend?",
      options: ["Point the toes downward during a cramp","Dorsiflex the foot to stretch the calf, and use warm soaks","Restrict all daytime activity","Increase dietary sodium"],
      answer: 1,
      rationale: "Dorsiflexing the foot stretches the calf and relieves the cramp; massage and warm soaks also help. Pointing the toes downward worsens a calf cramp."
    },
    {
      stem: "For which nutrients is NO real increase needed during pregnancy? Select all that apply.",
      options: ["Fat intake","Vitamin E","Iron","Vitamin K","Sodium"],
      answers: [0, 1, 3, 4],
      rationale: "No real change is needed for fat intake, vitamin E, vitamin K, iodine, and sodium. Iron IS increased. Folic acid (400 mcg) is the one number to memorize."
    },
    {
      stem: "Which routine vaccine must be deferred until the postpartum period because it is a live virus?",
      options: ["Inactivated influenza","Tdap","MMR (measles, mumps, rubella)","Hepatitis B"],
      answer: 2,
      rationale: "MMR contains live rubella virus and is given postpartum, never during pregnancy. Inactivated flu and third-trimester Tdap are encouraged."
    },
    {
      stem: "Immediately after the placenta is delivered, the nurse anticipates:",
      options: ["Starting IV oxytocin and performing fundal massage","Applying traction to the umbilical cord","Delaying all interventions for one hour","Administering magnesium sulfate"],
      answer: 0,
      rationale: "Oxytocin is started right after the placenta delivers and fundal massage is performed to keep the uterus firm and decrease blood loss."
    },
    {
      stem: "Which fetal presentation provides the SMALLEST head diameter and is the most favorable for a vaginal birth?",
      options: ["Vertex (head fully flexed)","Brow","Face","Military"],
      answer: 0,
      rationale: "A vertex presentation - head fully flexed, chin to chest - presents the smallest head diameter, which is what you want. Military (chin not flexed), brow, and face presentations present larger diameters and are harder to deliver."
    },
    {
      stem: "A patient reports a thin, grayish, watery discharge with a fishy odor; her vaginal pH is 5.0. Which condition does the nurse most suspect, and what treatment is anticipated?",
      options: ["Candidiasis — fluconazole","Bacterial vaginosis — metronidazole","Trichomoniasis — acyclovir","Toxic shock syndrome — hospitalize immediately"],
      answer: 1,
      rationale: "Bacterial vaginosis produces a thin, gray, fishy discharge with a vaginal pH greater than 4.5; it is treated with metronidazole (Flagyl) or clindamycin cream."
    },
    {
      stem: "A patient at 26 weeks has a one-time blood pressure of 146/94 with no proteinuria, headache, or visual changes. What does the nurse anticipate?",
      options: ["An immediate diagnosis of gestational hypertension","Rechecking the blood pressure — diagnosis requires two elevated readings at least 4 hours apart","Starting magnesium sulfate now","Immediate induction of labor"],
      answer: 1,
      rationale: "Hypertension is not diagnosed on a single reading. It requires two readings of ≥140 systolic or ≥90 diastolic at least 4 hours apart."
    },
    {
      stem: "Which measures help reduce perinatal (mother-to-baby) transmission of HIV? Select all that apply.",
      options: ["Antiretroviral therapy (ZDV)","An elective cesarean before the membranes rupture","Bottle-feeding where formula is available","Breastfeeding to pass along antibodies","Avoiding invasive procedures such as a fetal scalp electrode"],
      answers: [0, 1, 2, 4],
      rationale: "ZDV/antiretroviral therapy, an elective C-section before membranes rupture, bottle-feeding, and avoiding invasive procedures all reduce transmission. Breast milk can transmit HIV, so breastfeeding is avoided where formula is available."
    },
    {
      stem: "A patient's 3-hour glucose tolerance test returns with the fasting and 2-hour values elevated; the 1-hour and 3-hour values are normal. How does the nurse interpret this?",
      options: ["Normal — at least three values must be elevated","She has gestational diabetes — two or more elevated values are diagnostic","The test must be repeated because only two values were abnormal","This indicates type 1 diabetes"],
      answer: 1,
      rationale: "On the 3-hour glucose tolerance test, if any TWO of the four values are elevated, the patient is diagnosed with gestational diabetes."
    },
    {
      stem: "A patient with severe preeclampsia has a grand mal (eclamptic) seizure. What is the nurse's priority during the seizure?",
      options: ["Insert a padded tongue blade into her mouth","Physically restrain her arms and legs","Maintain the airway — keep her side-lying and protect her from injury","Administer a medication to stop the seizure in progress"],
      answer: 2,
      rationale: "The priority is the airway: turn her to her side and protect her from injury. Nothing is placed in the mouth and she is not restrained; the goal is preventing recurrence and aspiration."
    },
    {
      stem: "A patient on antibiotics reports thick, curd-like white discharge with severe itching and a vulvar rash. Which treatment does the nurse anticipate?",
      options: ["Metronidazole","Fluconazole (Diflucan) or nystatin","Penicillin","Ceftriaxone"],
      answer: 1,
      rationale: "Thick, white, curd-like discharge with itching indicates candidiasis (yeast); it is treated with fluconazole or nystatin. Antibiotics, diabetes, and immunosuppression are risk factors."
    },
    {
      stem: "HELLP syndrome is associated with severe preeclampsia. Which laboratory findings support this diagnosis? Select all that apply.",
      options: ["Hemolysis","Elevated liver enzymes","Low platelets","Elevated platelets","Low liver enzymes"],
      answers: [0, 1, 2],
      rationale: "HELLP = Hemolysis, Elevated Liver enzymes, Low Platelets — from red cells fragmenting through damaged vessels and platelets aggregating at injury sites."
    },
    {
      stem: "An ultrasound reports amniotic fluid greater than 2,000 mL (polyhydramnios). Which maternal condition is a common cause?",
      options: ["Maternal hypertension","Maternal diabetes","Fetal kidney agenesis","Maternal dehydration"],
      answer: 1,
      rationale: "Polyhydramnios (>2,000 mL) is associated with maternal diabetes (fetal hyperglycemia causes fetal polyuria), multiple gestation, and fetal GI/swallowing problems. Maternal perfusion problems (e.g., hypertension) and fetal kidney issues cause OLIGOhydramnios."
    },
    {
      stem: "A patient with a history of preeclampsia in her last pregnancy is now 14 weeks pregnant. Which preventive medication does the nurse anticipate?",
      options: ["Low-dose aspirin 81 mg daily","Magnesium sulfate infusion","IV labetalol","Calcium gluconate"],
      answer: 0,
      rationale: "Low-dose aspirin, 81 mg, is standard for anyone at risk for preeclampsia, started between 12 and 28 weeks."
    },
    {
      stem: "A patient at 12 weeks has dark brown bleeding, a uterus larger than dates, no fetal heart tones, a very high hCG, and a low AFP. Which ultrasound finding would confirm the nurse's suspicion?",
      options: ["A gestational sac in the fallopian tube","Grape-like vesicular clusters filling the uterus","A closed cervix with a viable fetus","A placenta covering the cervical os"],
      answer: 1,
      rationale: "Molar pregnancy (hydatidiform mole) shows grape-like clusters, dark brown bleeding, a uterus larger than dates, absent fetal heart tones, high hCG, and low AFP."
    },
    {
      stem: "A patient with acute severe hypertension has a heart rate of 128 and no history of asthma. Which order should the nurse question?",
      options: ["IV labetalol","IV hydralazine","Magnesium sulfate infusion","Low-dose aspirin 81 mg"],
      answer: 1,
      rationale: "IV hydralazine (and oral nifedipine) should be avoided in tachycardia. Labetalol would be appropriate here — it is the one avoided in asthma."
    },
    {
      stem: "After a vaginal birth, the total estimated blood loss is 450 mL. The nurse recognizes this as:",
      options: ["Excessive — a hemorrhage","Within the expected range","Requiring immediate transfusion","Abnormally low"],
      answer: 1,
      rationale: "Expected blood loss for a vaginal delivery is less than 500 mL (average 250–500 mL). A cesarean is less than 1,000 mL."
    },
    {
      stem: "During the fourth stage, the nurse palpates a soft, boggy uterus. The priority action is to:",
      options: ["Document this as a normal finding","Massage the fundus","Encourage ambulation","Offer oral fluids"],
      answer: 1,
      rationale: "A soft, boggy uterus is uterine atony — the leading cause of postpartum hemorrhage. Massage the fundus to firm it."
    },
    {
      stem: "A patient reports a frothy yellow-green vaginal discharge with itching and dysuria; a wet mount shows a motile organism. This is the most common non-viral STI. Which infection and treatment does the nurse anticipate?",
      options: ["Bacterial vaginosis - clindamycin cream","Trichomoniasis - metronidazole","Candidiasis - fluconazole","Chlamydia - azithromycin"],
      answer: 1,
      rationale: "Trichomoniasis (Trichomonas vaginalis, the most common non-viral STI) causes a yellow-green discharge and is diagnosed by seeing the motile organism on a wet mount; it is treated with metronidazole."
    },
    {
      stem: "A pregnant 16-year-old requests an epidural, but her mother disagrees with the decision. How does the nurse proceed?",
      options: ["Defer to the mother because the patient is a minor","Recognize the pregnant teen as an emancipated minor who can make her own medical decisions","Require a court order before proceeding","Refuse the epidural until the patient turns 18"],
      answer: 1,
      rationale: "A pregnant adolescent is considered an emancipated minor and can make her own medical decisions, including her pain management."
    },
    {
      stem: "Nitrazine paper touched to fluid at the vaginal opening turns deep blue. The nurse interprets this as:",
      options: ["Likely amniotic fluid, which is alkaline","Definitely urine","No rupture of membranes","A definite infection"],
      answer: 0,
      rationale: "Amniotic fluid is alkaline and turns nitrazine paper blue (a positive result), though it is not 100% specific."
    },
    {
      stem: "Which findings are PROBABLE (objective) signs of pregnancy? Select all that apply.",
      options: ["Goodell's, Chadwick's, and Hegar's signs","A positive pregnancy test","Braxton Hicks contractions","Auscultation of the fetal heartbeat by the examiner","Nausea and vomiting"],
      answers: [0, 1, 2],
      rationale: "Probable (objective) signs include Goodell's/Chadwick's/Hegar's signs, a positive pregnancy test, Braxton Hicks contractions, and palpating the fetal outline. Auscultating the fetal heartbeat is a POSITIVE (diagnostic) sign; nausea and vomiting is PRESUMPTIVE (subjective)."
    },
    {
      stem: "The nurse is reviewing the biophysical profile (BPP). Which components are assessed by ultrasound? Select all that apply.",
      options: ["Fetal breathing","Amniotic fluid index","Fetal tone","Fetal movement","Non-stress test"],
      answers: [0, 1, 2, 3],
      rationale: "BATMAN: Breathing, Amniotic fluid, Tone, Movement are the four ultrasound components (up to 8/8); the Non-stress test is the fifth and is not by ultrasound. Each scores 0 or 2."
    },
    {
      stem: "A patient with an adequate diet asks whether she really needs any supplement during pregnancy. Which single supplement is still truly required?",
      options: ["Calcium","Iron","Vitamin C","Magnesium"],
      answer: 1,
      rationale: "Even with an adequate diet, iron is the one supplement still truly needed — it supports the expanded maternal blood volume and oxygen-carrying capacity."
    },
    {
      stem: "During a nutrition assessment, a patient reports craving and eating laundry starch and clay. Recognizing pica, the nurse assesses for which complication?",
      options: ["Hypertension","Iron-deficiency anemia","Gestational diabetes","Hyperthyroidism"],
      answer: 1,
      rationale: "Pica — eating non-nutritive substances — displaces nutritious food and can lead to iron-deficiency anemia."
    },
    {
      stem: "A patient with hyperemesis gravidarum has lost 6% of her pre-pregnancy weight and has ketonuria. She is started on IV fluids with thiamine (vitamin B1) to prevent:",
      options: ["Neural tube defects","Wernicke's encephalopathy","Gestational diabetes","Hemorrhage"],
      answer: 1,
      rationale: "Thiamine prevents Wernicke's encephalopathy in hyperemesis gravidarum (severe vomiting with dehydration, ketonuria, and more than 5% weight loss)."
    },
    {
      stem: "An external tocotransducer is in place. To assess contraction INTENSITY, the nurse must:",
      options: ["Read it directly off the toco monitor","Palpate the abdomen","Place a fetal scalp electrode","Wait for the provider"],
      answer: 1,
      rationale: "The external toco gives frequency and duration only — the nurse must palpate the abdomen to judge intensity (an internal IUPC calculates it)."
    }
  ]
};
