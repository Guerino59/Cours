<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="trucs EST_DU_TYPE LISTE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" arrondiAuto="vrai" epaisseurLigne="2" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="trucs EST_DU_TYPE LISTE" code="1#LISTE#trucs"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="trucs[1] PREND_LA_VALEUR 42" code="5#trucs#42#1"/>
        <item algoitem="trucs[0] PREND_LA_VALEUR 59" code="5#trucs#59#0"/>
        <item algoitem="trucs[2] PREND_LA_VALEUR 12" code="5#trucs#12#2"/>
        <item algoitem="POUR i ALLANT_DE 0 A 2" code="12#i#0#2">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER trucs[i]" code="3#trucs#1#i"/>
            <item algoitem="" code="103#commentaire"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
