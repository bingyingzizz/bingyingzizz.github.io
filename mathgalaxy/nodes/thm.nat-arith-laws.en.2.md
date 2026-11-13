# arithmetic laws for the natural numbers　`thm.nat-arith-laws`
English entry · root `../`
[in graph](../#n=thm.nat-arith-laws)　·　[Chinese page (authoritative)](./thm.nat-arith-laws.md)

## Notes · **draft**
⭐ These are **not** part of the definition: `def.nat-arith` only specifies $m+0$ and $m+S(n)$ recursively; commutativity, associativity and distributivity all have to be proved separately.

⭐ The order matters and cannot be scrambled: first prove the two auxiliary identities $0+n=n$ and $S(m)+n=S(m+n)$ (both by induction on $n$), then commutativity of addition (induction on $n$, whose step uses exactly those two), then associativity, commutativity of multiplication, and distributivity.

Every later step stands on the previous one.

⭐ With these, $\mathbb{N}$ is a "semiring" (no additive inverses);

> continued in nodes/thm.nat-arith-laws.en.3.md
