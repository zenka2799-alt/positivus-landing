document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.testimonial-card');
  const quote = card.querySelector('.testimonial-quote');
  const authorName = card.querySelector('.author-name');
  const authorTitle = card.querySelector('.author-title');
  const prevBtn = document.querySelector('.nav-button.prev');
  const nextBtn = document.querySelector('.nav-button.next');
  const dots = document.querySelectorAll('.dot');

  // Данные отзывов
  const testimonials = [
    {
      text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
      name: "John Smith",
      title: "Marketing Director at XYZ Corp"
    },
    {
      text: `"Working with Positivus has transformed our digital presence. Their strategies are data-driven and results-oriented. Highly recommend!"`,
      name: "Jane Doe",
      title: "CEO, TechStart Inc."
    },
    {
      text: `"Positivus delivered beyond expectations. Our conversion rates jumped by 40% in just 3 months. Exceptional team!"`,
      name: "Michael Brown",
      title: "Head of Marketing, RetailPro"
    }
  ];

  let currentIndex = 0;

  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    // Обновляем текст внутри .testimonial-quote
    const authorDiv = quote.querySelector('.testimonial-author');
    quote.innerHTML = testimonial.text;
    quote.appendChild(authorDiv); // сохраняем структуру
    authorName.textContent = testimonial.name;
    authorTitle.textContent = testimonial.title;

    // Обновляем точки
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  // Инициализация
  updateTestimonial(currentIndex);
});