import React, { useEffect } from 'react';

const CustomCursor = ({ cursorDotRef, cursorCircleRef }) => {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        if(cursorDotRef.current) cursorDotRef.current.style.display = 'none';
        if(cursorCircleRef.current) cursorCircleRef.current.style.display = 'none';
        return;
    }
    
    const dot = cursorDotRef.current;
    const circle = cursorCircleRef.current;

    if (!dot || !circle) return;

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    let isMoving = false;

    // Ultra-fast mouse tracking with minimal processing
    const mouseMoveListener = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instant dot movement - no delays
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
      
      isMoving = true;
    };
    
    window.addEventListener('mousemove', mouseMoveListener, { passive: true });
    
    // Separate, optimized circle animation
    const animateCircle = () => {
        if (isMoving) {
          const dx = mouseX - circleX;
          const dy = mouseY - circleY;
          
          // Fast catching up for responsive feel
          circleX += dx * 0.25;
          circleY += dy * 0.25;
          
          circle.style.left = circleX + 'px';
          circle.style.top = circleY + 'px';
        }
        
        requestAnimationFrame(animateCircle);
    };

    // Start circle animation
    requestAnimationFrame(animateCircle);

    // Simplified hover effects
    const interactiveElements = document.querySelectorAll('button, a');
    const enterListener = () => circle.classList.add('grow');
    const leaveListener = () => circle.classList.remove('grow');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', enterListener, { passive: true });
      el.addEventListener('mouseleave', leaveListener, { passive: true });
    });

    return () => {
      window.removeEventListener('mousemove', mouseMoveListener);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', enterListener);
        el.removeEventListener('mouseleave', leaveListener);
      });
    };
  }, [cursorDotRef, cursorCircleRef]);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorCircleRef} className="cursor-circle"></div>
    </>
  );
};

export default CustomCursor;

