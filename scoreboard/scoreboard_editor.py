from tkinter import *
import tkinter
import io
import xml.etree.cElementTree as ET
import datetime

top = tkinter.Tk()  # class in tkinter that is being saved as variable

top.resizable(width="False", height="False")

def extractCharNames():
    file = open("characters.txt", "r")
    characternames = (file.read()).split("\n")
    characternames.sort()
    return characternames


def getTime():
    currenttime = datetime.datetime
    time = currenttime.now()
    print(time)
    return str(time)


def outputXML():
    name1 = Entry.get(p1Name)
    char1 = p1.get()
    num1 = score1.get()
    name2 = Entry.get(p2Name)
    char2 = p2.get()
    num2 = score2.get()
    team1 = color1.get()
    name3 = Entry.get(p3Name)
    char3 = p3.get()
    name4 = Entry.get(p4Name)
    char4 = p4.get()
    team2 = color2.get()
    tw1 = Entry.get(twitter1Name)
    tw2 = Entry.get(twitter2Name)
    loc = Entry.get(location)
    dt = Entry.get(date)
    comm1 = Entry.get(comm1Name)
    comm2 = Entry.get(comm2Name)
    bLink = Entry.get(bracketLink)
    brackLoc = Entry.get(bracketLocation)

    root = ET.Element("scoreboard")
    players = ET.SubElement(root, "players")
    # elements below players
    ET.SubElement(players, "player1").text = name1
    ET.SubElement(players, "character1").text = char1
    ET.SubElement(players, "score1").text = num1
    ET.SubElement(players, "player2").text = name2
    ET.SubElement(players, "score2").text = num2
    ET.SubElement(players, "character2").text = char2
    ET.SubElement(players, "team-color1").text = team1
    ET.SubElement(players, "player3").text = name3
    ET.SubElement(players, "character3").text = char3
    ET.SubElement(players, "player4").text = name4
    ET.SubElement(players, "character4").text = char4
    ET.SubElement(players, "team-color2").text = team2

    # elements below game status
    status = ET.SubElement(root, "game-status")
    ET.SubElement(status, "bracket-location").text = brackLoc
    ET.SubElement(status, "bracket-link").text = bLink
    ET.SubElement(status, "date").text = dt
    ET.SubElement(status, "location").text = loc

    # elements for commentary
    comm = ET.SubElement(root, "commentary")
    ET.SubElement(comm, "commentator1").text = comm1
    ET.SubElement(comm, "commentator2").text = comm2
    ET.SubElement(comm, "twitter1").text = tw1
    ET.SubElement(comm, "twitter2").text = tw2

    ET.SubElement(root, "timestamp").text = getTime()

    tree = ET.ElementTree(root)
    tree.write("../overlay/scoreboard.xml")


def swap():
    name1 = Entry.get(p1Name)
    name2 = Entry.get(p2Name)
    name3 = Entry.get(p3Name)
    name4 = Entry.get(p4Name)
    char1 = p1.get()
    char2 = p2.get()
    char3 = p3.get()
    char4 = p4.get()
    p1Name.delete(0, END)
    p1Name.insert(0, name2)
    p2Name.delete(0, END)
    p2Name.insert(0, name1)
    p3Name.delete(0, END)
    p3Name.insert(0, name4)
    p4Name.delete(0, END)
    p4Name.insert(0, name3)
    p1.set(char2)
    p2.set(char1)
    p3.set(char4)
    p4.set(char3)


listOfChars = extractCharNames()


top.title("Stream Editor")
color1 = StringVar(top)
color2 = StringVar(top)
p1 = StringVar(top)
p2 = StringVar(top)
p3 = StringVar(top)
p4 = StringVar(top)
score1 = StringVar(top)
score2 = StringVar(top)
teamColors = {"blue", "red", "green"}
scores = ["0", "1", "2", "3"]

players = Label(top, text="Players").grid(row=0,column=0)
team1Text = Label(top, text="Team 1").grid(row=1, column=0)
p1Title = Label(top, text="Player 1").grid(row=1, column=1)
p1Name = Entry(top, bd=5)
p1Name.grid(row=1, column=2)
p1Char = OptionMenu(top, p1, *listOfChars).grid(row=1, column=3)
p1Score = OptionMenu(top, score1, *scores).grid(row=1, column=4)
team2Text = Label(top, text="Team 2").grid(row=1, column=5)
p2Title = Label(top, text="Player 2").grid(row=1, column=6)
p2Name = Entry(top, bd=5)
p2Name.grid(row=1, column=7)
p2Char = OptionMenu(top, p2, *listOfChars).grid(row=1, column=8)
p2Score = OptionMenu(top, score2, *scores).grid(row=1, column=9)
# team color picker
t1Color = OptionMenu(top, color1, *teamColors)
t1Color.grid(row=2, column=0)
p3Title = Label(top, text="Player 3").grid(row=2, column=1)
p3Name = Entry(top, bd=5)
p3Name.grid(row=2, column=2)
p3Char = OptionMenu(top, p3, *listOfChars).grid(row=2, column=3)
t2Color = OptionMenu(top, color2, *teamColors).grid(row=2, column=4)
p4Title = Label(top, text="Player 4").grid(row=2, column=5)
p4Name = Entry(top, bd=5)
p4Name.grid(row=2, column=6)
p4Char = OptionMenu(top, p4, *listOfChars).grid(row=2, column=7)
# game status
gameStatus = Label(top, text="Game Status").grid(row=3, column=0)
bracketLocText = Label(top, text="Bracket Location").grid(row=4, column=0)
bracketLocation = Entry(top, bd=5)
bracketLocation.grid(row=4, column=1)
bracketLinkText = Label(top, text="Bracket Link").grid(row=4, column=2)
bracketLink = Entry(top, bd=5)
bracketLink.grid(row=4, column=3)
dateText = Label(top, text="Date").grid(row=4, column=4)
date = Entry(top, bd=5)
date.grid(row=4, column=5)
locationText = Label(top, text="Location").grid(row=4, column=6)
location = Entry(top, bd=5)
location.grid(row=4, column=7)
# commentary
commentaryText = Label(top, text="Commentary").grid(row=5, column=0)
comm1Text = Label(top, text="Commentator 1").grid(row=6, column=0)
comm1Name = Entry(top, bd=5)
comm1Name.grid(row=6, column=1)
comm2Text = Label(top, text="Commentator 2").grid(row=6, column=2)
comm2Name = Entry(top, bd=5)
comm2Name.grid(row=6, column=3)
twitter1Text = Label(top, text="Twitter1").grid(row=7, column=0)
twitter1Name = Entry(top, bd=5)
twitter1Name.grid(row=7, column=1)
twitter2Text = Label(top, text="Twitter 2").grid(row=7, column=2)
twitter2Name = Entry(top, bd=5)
twitter2Name.grid(row=7, column=3)

# swap command that changes player 1 and 2 names and characters
swap = Button(top, text="Swap", command=swap).grid(row=7, column=6)
# saves the text in the boxes to an XML file
save = Button(top, text="Save!", command=outputXML).grid(row=7, column=7)

top.mainloop()
