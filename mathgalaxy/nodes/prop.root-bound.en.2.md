# a polynomial has at most as many roots as its degree　`prop.root-bound`
English entry · root `../`
[in graph](../#n=prop.root-bound)　·　[Chinese page (authoritative)](./prop.root-bound.md)

and then $e_1 + \cdots + e_m \le n$ ($e_i$ is called the **multiplicity** of the root $a_i$).

## Notes · **draft**
⭐ The proof is repeated use of the factor theorem: each root lets one divide by $(x - a)$, lowering the degree by 1; the degree cannot go negative, so there are at most $n$ roots.

⭐ The usefulness of this "small" proposition is surprisingly large: **testing polynomial identities over finite fields** (two polynomials of degree $< n$ that agree at $n$ points are identical) — interpolation and error-correcting codes (Reed–Solomon) rely on it.

> continued in nodes/prop.root-bound.en.3.md
