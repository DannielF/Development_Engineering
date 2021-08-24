import turtle

myTurtle = turtle.Turtle()
mywin = turtle.Screen()

def draw(myTurtle, length):
  if length > 0:
    myTurtle.forward(length)
    myTurtle.left(90)
    draw(myTurtle, length-10)

draw(myTurtle, 100)
mywin.exitonclick()

