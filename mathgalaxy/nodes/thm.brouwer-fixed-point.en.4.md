# Brouwer fixed point theorem　`thm.brouwer-fixed-point`
English entry · root `../`
[in graph](../#n=thm.brouwer-fixed-point)　·　[Chinese page (authoritative)](./thm.brouwer-fixed-point.md)

**$r$ is the identity on the boundary**: If $|z| = 1$, then $a(z) = \langle z, z - f(z)\rangle = 1 - \langle z, f(z)\rangle \ge 0$ (because $|f(z)| \le 1$). Substituting into $t(z)$ gives $t(z) = 0$, hence $r(z) = z$.

Thus $r : \overline{\mathbb{D}} \to S^{1}$ is a continuous retraction ($r|_{S^{1}} = \operatorname{id}$), contradicting `thm.no-retraction-disk`. Therefore $f$ has a fixed point. ∎

> continued in nodes/thm.brouwer-fixed-point.en.5.md
