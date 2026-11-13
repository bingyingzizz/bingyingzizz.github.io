# Lebesgue differentiation theorem for contractible families　`thm.differentiation-general`
English entry · root `../`
[in graph](../#n=thm.differentiation-general)　·　[Chinese page (authoritative)](./thm.differentiation-general.md)

## Notes · **draft**
The proof is a one-line estimate: from $E_r \subseteq B(x, r)$ and $m(E_r) > \alpha m(B(x, r))$,

$$\frac{1}{m(E_r)} \int_{E_r} |f - f(x)| \le \frac{1}{m(E_r)} \int_{B(x, r)} |f - f(x)| \le (1/\alpha)\cdot m(B(x, r)) \int_{B(x, r)} |f - f(x)|$$

and the right-hand side tends to 0 because $x \in L_f$. ∎

⭐ All the difficulty lies in choosing the definition of `L_f` correctly (using $|f(y) - f(x)|$ rather than $|f(y)|$) — once that is right, this step is free.

> continued in nodes/thm.differentiation-general.en.3.md
