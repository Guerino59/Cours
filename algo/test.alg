<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="mot PREND_LA_VALEUR &quot;Ananas&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalAffichages="1000" totalBoucles="5000000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="mot EST_DU_TYPE CHAINE" code="1#CHAINE#mot"/>
        <item algoitem="mot2 EST_DU_TYPE CHAINE" code="1#CHAINE#mot2"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="mot PREND_LA_VALEUR &quot;Ananas&quot;" code="5#mot#&quot;Ananas&quot;#pasliste"/>
        <item algoitem="AFFICHER mot" code="3#mot#1#pasliste"/>
        <item algoitem="LIRE mot2" code="2#mot2#pasliste"/>
        <item algoitem="AFFICHER &quot;J'aime la &quot;" code="4#J'aime la #0"/>
        <item algoitem="AFFICHER mot2" code="3#mot2#1#pasliste"/>
        <item algoitem="AFFICHER &quot;à l'&quot;" code="4#à l'#0"/>
        <item algoitem="AFFICHER mot" code="3#mot#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
