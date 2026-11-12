# rules for differentiation　`thm.derivative-rules`
English entry · root `../`
[in graph](../#n=thm.derivative-rules)　·　[Chinese page (authoritative)](./thm.derivative-rules.md)

$$\left(\frac{f}{g}\right)'(x_0) = \frac{f'(x_0)\,g(x_0) - f(x_0)\,g'(x_0)}{g(x_0)^{2}} \quad (g(x_0) \ne 0),$$

$$(g \circ f)'(x_0) = g'(f(x_0))\,f'(x_0).$$

## Notes · **draft**
⭐ The key to the product rule is **adding and subtracting a term**: $f(x)g(x) - f(x_0)g(x_0) = [f(x) - f(x_0)]\,g(x) + f(x_0)[g(x) - g(x_0)]$.

The $g(x)$ in the first term must be replaced by $g(x_0)$ using "differentiable $\implies$ continuous" — this is why `prop.differentiable-implies-continuous` must precede it.

> continued in nodes/thm.derivative-rules.en.3.md
