# Splitting of Monomorphisms into an Injective　`prop.injective-splitting`
English entry · root `../`
[in graph](../#n=prop.injective-splitting)　·　[Chinese page (authoritative)](./prop.injective-splitting.md)

1. $I$ is **injective**.
2. Every monomorphism $I \rightarrowtail M$ **splits**, meaning that there is a retraction $r : M \to I$ satisfying $r \circ i = \mathrm{id}_{I}$.
3. Every short exact sequence $0 \to I \to M \to M_{2} \to 0$ **splits**.

## Notes · **draft**
**1 implies 2**: Take $A = I$ and $f = \mathrm{id}_{I}$. The extension $M \to I$ supplied by injectivity is the required retraction ✓.

**2 implies 1**: Given $A \rightarrowtail B$ and $f : A \to I$, form the **pushout**

$$P := (I \oplus B) / \{\, (f(a),\ -a) : a \in A \,\},$$

> continued in nodes/prop.injective-splitting.en.3.md
