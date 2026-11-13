# Taylor Formula in Several Variables　`thm.taylor-multi`
English entry · root `../`
[in graph](../#n=thm.taylor-multi)　·　[Chinese page (authoritative)](./thm.taylor-multi.md)

$$R_k(h) = \sum_{|\alpha| = k+1} \frac{D^{\alpha} f(a + \theta h)}{\alpha!}\, h^{\alpha} = O\bigl(\|h\|^{k+1}\bigr)$$

The two most-used cases:

$$f(a+h) = f(a) + Df(a)(h) + o(\|h\|)$$

$$f(a+h) = f(a) + Df(a)(h) + \frac{1}{2}\, D^{2}f(a)(h, h) + o\bigl(\|h\|^{2}\bigr)$$

## Notes · **draft**
⭐ Key observation: **the second derivative $D^{2}f(a)$ is a symmetric bilinear form on $\mathbb{R}^{n}$**, not "a bunch of second partials".

In the formula for $k = 2$, $D^{2}f(a)(h,h)$ is precisely $\sum_{i,j} \partial_i \partial_j f(a)\, h_i h_j = h^{\mathsf{T}} H_f(a)\, h$.

> continued in nodes/thm.taylor-multi.en.3.md
