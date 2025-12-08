# Branding Requirements

Rebranding is required for any public fork or distribution.

## You MUST change:

### 1. App Name
- **Current**: "WebpCraft"
- **Required**: Completely different name
- **Examples**: "WebpConverter", "ImageOptimize", "WebpTool", etc.
- **Avoid**: Similar sounding names or "WebpCraft" variations

### 2. Logo and Icons
- **Remove**: All existing logos, favicons, app icons
- **Replace**: With completely original designs
- **Style**: Different visual concept and execution
- **Format**: Update all sizes and formats (SVG, PNG, ICO)

### 3. Color Palette
- **Current**: Specific accent colors and design scheme
- **Required**: New color palette
- **Guidelines**: Different primary, secondary, and accent colors
- **Implementation**: Update all CSS variables and color references

### 4. Layout and Styling
- **Requirement**: Change enough to avoid resemblance
- **Areas to modify**:
  - Header/navigation design
  - Button styles and shapes
  - Card layouts and spacing
  - Typography choices
  - Component designs
  - Page layouts
- **Goal**: Visual distinction from original

### 5. Screenshots and Promotional Visuals
- **Remove**: All existing screenshots and demo images
- **Create**: New promotional materials with rebranded UI
- **Update**: Documentation, README, and marketing content
- **Ensure**: No original branding visible

## Technical Implementation Checklist

### Files to Update:
- `public/` - All images, icons, favicons
- `app/layout.tsx` - Meta tags and branding
- `globals.css` - Color variables and styles
- Component files - Visual elements
- README.md - Screenshots and descriptions
- Documentation - All branded content

### Areas to Modify:
- [ ] App name in metadata
- [ ] Logo and favicon files
- [ ] Color scheme in CSS
- [ ] Typography choices
- [ ] Button and form styles
- [ ] Layout and spacing
- [ ] Icon designs
- [ ] Navigation design
- [ ] Footer and branding elements
- [ ] README screenshots
- [ ] Documentation images
- [ ] Social media previews

## Visual Distinction Guidelines

### Do NOT:
- Use similar color combinations
- Copy layout patterns exactly
- Use similar typography
- Keep the same visual hierarchy
- Use similar button shapes or styles

### DO:
- Choose a completely different color palette
- Redesign layouts and components
- Use different typography
- Create unique visual elements
- Establish distinct brand identity

## Compliance Verification

### Before Public Release:
1. **Visual Comparison**: Side-by-side with original
2. **User Testing**: Ask if people notice similarity
3. **Legal Review**: Ensure no trademark infringement
4. **Documentation**: Update all references

### Success Criteria:
- No reasonable confusion with original
- Distinct visual identity
- All brand assets replaced
- Documentation updated

## Legal Protection

This branding requirement is enforced through:
- Trademark law protections
- Trade dress rights
- DMCA takedown provisions
- License agreement terms

## Consequences of Non-Compliance

Failure to properly rebrand may result in:
- DMCA takedown notices
- Legal action for trademark infringement
- Repository removal from platforms
- Damage to reputation

---

**Remember: The code is open-source; the branding and UI are not.**
