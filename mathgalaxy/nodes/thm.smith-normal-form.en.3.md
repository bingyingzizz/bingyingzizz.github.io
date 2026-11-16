# Smith normal form　`thm.smith-normal-form`
English entry · root `../`
[in graph](../#n=thm.smith-normal-form)　·　[Chinese page (authoritative)](./thm.smith-normal-form.md)

**Proof idea**: in the equivalence class of $A$, choose a matrix whose $(1,1)$ entry generates a maximal ideal, and show that it divides every entry (otherwise Bézout puts the gcd into position $(1,1)$, producing a larger ideal); then clear the first row and column and induct on the remaining block. Uniqueness uses the determinantal divisors.

**Typical examples**: for $R = \mathbb{Z}$, $\operatorname{diag}(2, 6)$ satisfies $2 \mid 6$; for $R = K[x]$, applying the Smith normal form to $xI - A$ yields the nonconstant invariant factors of the linear operator $A$ (see rational canonical form).

> continued in nodes/thm.smith-normal-form.en.4.md
