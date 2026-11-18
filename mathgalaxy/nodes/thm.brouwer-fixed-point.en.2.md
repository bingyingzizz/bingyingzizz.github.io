# Brouwer fixed point theorem　`thm.brouwer-fixed-point`
English entry · root `../`
[in graph](../#n=thm.brouwer-fixed-point)　·　[Chinese page (authoritative)](./thm.brouwer-fixed-point.md)

## Notes · **draft**
**Proof (continuous case)**: Suppose for contradiction that $f$ has no fixed point, so $f(z) \ne z$ for every $z \in \overline{\mathbb{D}}$. For each $z$ define

$$r(z) := z + t(z)\,(z - f(z)),$$

where

$$a(z) := \langle z,\ z - f(z)\rangle,\qquad b(z) := |z - f(z)|^{2} > 0,$$

$$t(z) := \frac{-a(z) + \sqrt{a(z)^{2} + b(z)\,(1 - |z|^{2})}}{b(z)}.$$

**Why $r$ lies on $S^{1}$**: Expand $|z + t(z - f(z))|^{2} = 1$ to obtain

$$b(z)\,t^{2} + 2a(z)\,t + (|z|^{2} - 1) = 0,$$

> continued in nodes/thm.brouwer-fixed-point.en.3.md
