export function getInitials(name) {
    const words = name.split(' ');
    let initials = '';
  
    for (const word of words) {
      initials += word.charAt(0).toUpperCase();
    }
  
    return initials;
  }