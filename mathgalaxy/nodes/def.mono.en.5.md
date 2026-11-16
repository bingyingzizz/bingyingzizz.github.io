# monomorphism, epimorphism and isomorphism　`def.mono`
English entry · root `../`
[in graph](../#n=def.mono)　·　[Chinese page (authoritative)](./def.mono.md)

**The inverse is unique**: if $g, g'$ are both inverses of $f$, then $g = g \circ 1_{Y} = g \circ (f \circ g') = (g \circ f) \circ g' = 1_{X} \circ g' = g'$ ✓.

**Isomorphism vs monomorphism**: $f$ is an isomorphism $\iff$ $f$ is a monomorphism with a **section**.

$(\implies)$ follows directly from $f \circ g = 1_{Y}$, $g \circ f = 1_{X}$ (the latter says $f$ is a split mono, hence mono).

$(\Longleftarrow)$ Suppose $f \circ g = 1_{Y}$.

Then $f \circ (g \circ f) = (f \circ g) \circ f = 1_{Y} \circ f = f = f \circ 1_{X}$, ; since $f$ is mono, $g \circ f = 1_{X}$, and $f$ is an isomorphism ✓.

> continued in nodes/def.mono.en.6.md
