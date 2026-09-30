# Plan Comparison Component

## Narrow-Screen Treatment & Reasoning
Traditional multi-column comparison tables break on narrow viewports (such as 320px), forcing horizontal scrolling or severe text truncation that ruins usability. 

To solve this without horizontal overflow:
- **Mobile View (< 768px):** The layout dynamically switches from a wide multi-column grid to an interactive tabbed view combined with a vertical card list. 
- **User Experience:** Users can select individual plans using clear segmented control tabs (`Basic`, `Pro`, `Enterprise`) to view all 15 features sequentially in a single vertical column. This ensures complete readability and zero horizontal scrolling down to 320px.

## Accessibility & Keyboard Navigation
- **Semantic Structure:** Uses native HTML table elements (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` with scope attributes, and `<caption>`) on desktop so assistive technologies correctly interpret table relationships.
- **Keyboard Operability:** The "Highlight differences only" control utilizes a native labeled checkbox, ensuring full keyboard accessibility via standard `Tab` navigation and visible focus rings.
- **Context Retention:** When the highlight feature is active, identical rows are dimmed rather than completely hidden, allowing users to maintain full contextual awareness of all feature categories.