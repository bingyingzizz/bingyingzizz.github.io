# monomorphism, epimorphism and isomorphism　`def.mono`
English entry · root `../`
[in graph](../#n=def.mono)　·　[Chinese page (authoritative)](./def.mono.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 15 · definition · cluster Monos, Epis, Subobjects and Images (`cat.structure`) · Category Theory

## Statement · **draft**
A morphism $i : Y \to X$ is a **monomorphism** (mono) if for every object $Z$ and all $f, g : Z \to Y$,

$$i \circ f = i \circ g \;\Longrightarrow\; f = g$$

(left cancellable). Equivalently: the square $Y \to Y \times_X Y$ is cartesian, i.e. $Y \cong Y \times_X Y$, where $Y \times_X Y$ is the two pullbacks along $i$. Reversing all arrows gives **epimorphism** (epi, right cancellable).

> continued in nodes/def.mono.en.2.md
