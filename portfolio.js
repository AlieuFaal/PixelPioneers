const paragraphs = document.querySelectorAll('.section__paragraph');

document.addEventListener("scroll", function()
{
    paragraphs.forEach((paragraph) => 
    {
        if (isInView(paragraph))
        {
            paragraph.classList.add('section__paragraph--visible');
        }
    });
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

function changeTheme(bgColor, textColor) {
  const colorbox = document.getElementById("colorbox");
  colorbox.style.backgroundColor = bgColor;
  colorbox.style.color = textColor;
}

