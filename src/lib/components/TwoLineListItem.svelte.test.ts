import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import TwoLineListItem from './TwoLineListItem.svelte';

describe('TwoLineListItem Component', () => {
  // Test default rendering
  it('renders with default props', () => {
    const { container } = render(TwoLineListItem);
    
    expect(screen.getByText('No title')).toBeTruthy();
    expect(screen.getByText('No subtitle')).toBeTruthy();
    expect(container.querySelector('img')).toBeNull();
  });

  // Test with custom title and subtitle
  it('renders with custom title and subtitle', () => {
    render(TwoLineListItem, { 
      props: { 
        title: 'Custom Title', 
        subtitle: 'Custom Subtitle' 
      } 
    });
    
    expect(screen.getByText('Custom Title')).toBeTruthy();
    expect(screen.getByText('Custom Subtitle')).toBeTruthy();
  });

  // Test with image URL
  it('renders with image when imageUrl is provided', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const { container } = render(TwoLineListItem, { 
      props: { imageUrl } 
    });
    
    const imgElement = container.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement?.src).toBe(imageUrl);
    expect(imgElement?.alt).toBe('Item thumbnail');
  });

  // Test with placeholder image
  it('renders with placeholder when showPlaceholder is true', () => {
    const placeholderImage = 'https://placeholder.com/test';
    const { container } = render(TwoLineListItem, { 
      props: { 
        showPlaceholder: true,
        placeholderImage
      } 
    });
    
    const imgElement = container.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement?.src).toBe(placeholderImage);
  });

  // Test with custom placeholder image
  it('uses custom placeholder image when provided', () => {
    const customPlaceholder = 'https://custom-placeholder.com/image';
    const { container } = render(TwoLineListItem, { 
      props: { 
        showPlaceholder: true,
        placeholderImage: customPlaceholder 
      } 
    });
    
    const imgElement = container.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement?.src).toBe(customPlaceholder);
  });

  // Test with empty imageUrl and showPlaceholder=false
  it('does not show any image when imageUrl is empty and showPlaceholder is false', () => {
    const { container } = render(TwoLineListItem, {
      props: {
        imageUrl: '',
        showPlaceholder: false
      }
    });
    
    expect(container.querySelector('img')).toBeNull();
  });
});