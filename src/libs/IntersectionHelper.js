function intersectionTrigger(target) {
  var options = {
    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  };
  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const threshold = entry.intersectionRatio;

      var current_id = extractID(entry.target.id);
      let scroll_to_id = current_id + 1;

      // 🚀 Set scroll target to next section
      if (threshold >= .9)
        window.current_section = entry.target.id.slice(0, -1) + scroll_to_id;

      // 📌 If scrolling back a bit, set target to current section again
      if (threshold > 0.1 && threshold < 1 && extractID(window.current_section) === (current_id + 2))
        window.current_section = entry.target.id.slice(0, -1) + scroll_to_id;
    });
  }, options);

  observer.observe(target);
};

function extractID(str = "") {
  return parseInt(
    str.substr(str.length - 1)
  );
}

export { intersectionTrigger };