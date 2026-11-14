# Bernoulli number　`def.bernoulli-number`
English entry · root `../`
[in graph](../#n=def.bernoulli-number)　·　[Chinese page (authoritative)](./def.bernoulli-number.md)

## Notes · **draft**
**Where the recursion comes from**: $\frac{t}{e^t-1}\cdot\frac{e^t-1}{t}=1$, while $\frac{e^t-1}{t}=\sum_{n\ge0}\frac{t^n}{(n+1)!}$; comparing coefficients of $t^n$ gives the recursion.

**Bernoulli polynomials**: $B_n(x)=\sum_{k=0}^{n}\binom{n}{k}B_k x^{n-k}$, satisfying $B_n'(x)=nB_{n-1}(x)$ and $B_n(x+1)-B_n(x)=nx^{n-1}$; the periodic functions in the Euler–Maclaurin formula are $B_n(\{x\})$.

**Convention warning**: textbooks differ on whether $B_1$ is $+\frac12$ or $-\frac12$; the convention here is $B_1=-\frac12$, consistent with the generating function $t/(e^t-1)$.

> continued in nodes/def.bernoulli-number.en.3.md
