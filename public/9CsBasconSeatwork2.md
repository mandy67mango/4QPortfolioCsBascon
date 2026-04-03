# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.
 
```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
- Ans: So when I added top, left values, it followed the 20px to create a distance on its top and left. Same goes if you use bottom and right, it will put some distance on its right and bottom, moving it to the left and upwards.
 
### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
- Ans: when I try to scroll, it doesn't budge. It is beacsue the postiion of the footer is fixed, meaning that it won't be disturbed and will just stay still.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
- Ans: So with the use of absolute position, it moved to the side of its nearest ancestor, which is the sidebar and aligned with it. It is different from fixed because fixed is used to position it to the viewport/screen which is glued/stays in place.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
- Ans: THe notice appear on top of the content because of its z-index. If I made the z-index higher, it will appear on top of a certain element when its z-value is higher than of the element. WHen I made it -1, it appeared on the back of the content, meaning that lower z-index goes behind the higher ones.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
      -I just changed the left value of .notice to 430px to align it to the content box (by editing and adjusting until it satisfies the rightmost upper placement).
      .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
      position: absolute; top: 66px; left: 200px;
    }    
 .notice {
    position: absolute;
    top: 60px;
    left: 430px;
    background: orange;
    padding: 10px;
    z-index: 1;
}
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * Ans: When I changed it to relative, the content box went down, exactly 66px down the sidebar and 200px from the left of sidebar. When I changed it to fixed, it looks similar when it was absolute, but since it is fxed, if you were to scroll, the content box would stay at its place.
    * What do you observe on about the effect of z-index on .notice and .content boxes?
    * Ans: So if the z-index of the main content is higher than of the notice, it will appear at the front, hiding the notice box. Making the notice box z-index higher than of the content would make it appear on top of the content box.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?
   -Ans: WHen using static, the elements follow the original order of the page, whereas you cannt move them with any margin or direction properties. Relative is similar to static, ut you can use top, bottom, left, right values to move its position, while doing this, other elements are not to move to fill in the empty space it left from. When using absolute, the element is positioned relative/according to its nearest positioned ancestor. Using fixed however makes the element stay still, attached to the screen, so it stays on the same spot even if you scrolled.

    b. How does absolute positioning depend on its parent element?
   -Ans: When using absolute, it depends on its parent element and will align its top, bottom ,left, right values relative to the edges of the nearby parent element.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
   -Ans: When using fixed, the element is pinned to the viewport, it stays in the same spot even if you scrolled. Sticky is used where the element if placed inside a parent container, when the container is scrolled, it also scrolls off with the parent.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
   -Ans: If there were a QR code for credits or contact details to join the event, we could use fixed position to make it stay at the bottom corner. We could also use fixed for the main theme of the event, positioned on top of the page so that it will remain there and kinda makes it appealing. 
   
