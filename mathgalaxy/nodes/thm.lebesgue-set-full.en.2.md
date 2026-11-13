# the Lebesgue set has full measure　`thm.lebesgue-set-full`
English entry · root `../`
[in graph](../#n=thm.lebesgue-set-full)　·　[Chinese page (authoritative)](./thm.lebesgue-set-full.md)

Then take **a countable dense subset $\mathbb{C}$ of $D$** and let $E = \bigcup_{c \in D} E_c$ (a countable union of null sets, still null). For $x \notin E$ and any $\varepsilon > 0$, choose $c \in D$ with $|f(x) - c| < \varepsilon$, so

$$\lim_{r\to0} \frac{1}{m(B(x, r))} \int_{B(x, r)} |f(y) - f(x)| dy \le |f(x) - c| + \varepsilon < 2\varepsilon$$

Letting $\varepsilon \to 0$ gives the claim. ∎

⭐ The step "take a countable dense subset" is a typical use of countability: it reduces uncountably many conditions to a countable union of null sets.

> continued in nodes/thm.lebesgue-set-full.en.3.md
