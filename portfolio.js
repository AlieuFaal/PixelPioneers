const yFade = document.querySelectorAll('.section__yFade');

const xFade = document.querySelectorAll('.section__xFade');

document.addEventListener("scroll", function()
{
    yFade.forEach((element) => 
    {
        if (isInView(element))
        {
            element.classList.add('section__yFade--visible');
        }
    });
});

xFade.forEach((element) => 
{
    if (isInView2(element))
    {
        element.classList.add('section__xFade--visible');
    }
});

document.querySelectorAll('.fixed-card').forEach(card => {
card.addEventListener('mouseenter', () => {
card.style.transform = 'translateY(-5px)';
card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
card.querySelector('.fixed-image').style.transform = 'scale(1.05)';
});

card.addEventListener('mouseleave', () => {
card.style.transform = '';
card.style.boxShadow = '';
card.querySelector('.fixed-image').style.transform = '';
});
});

function isInView(element) 
{
    const rect = element.getBoundingClientRect();
    return (rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150));
}

function isInView2(element) 
{
    const rect = element.getBoundingClientRect();
    return rect
}

function changeTheme(bgColor, textColor) {
  const colorbox = document.getElementById("colorbox");
  colorbox.style.backgroundColor = bgColor;
  colorbox.style.color = textColor;
}

