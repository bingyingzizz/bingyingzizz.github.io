# Holomorphic Function　`def.holomorphic`
English entry · root `../`
[in graph](../#n=def.holomorphic)　·　[Chinese page (authoritative)](./def.holomorphic.md)

$$f'(z_0) := \lim_{h \to 0} \frac{f(z_0 + h) - f(z_0)}{h} \qquad (h \in \mathbb{C},\ h \ne 0,\ z_0 + h \in \Omega)$$

exists, then $f$ is called **complex differentiable** at $z_0$, and $f'(z_0)$ is called the **derivative** of $f$ at $z_0$. If $f$ is complex differentiable at every point of $\Omega$, then $f$ is called **holomorphic** on $\Omega$.

Complex differentiability implies continuity: rewrite the definition as

$$f(z_0 + h) - f(z_0) = f'(z_0)\,h + o(h),$$

letting $h \to 0$ gives $f(z_0 + h) \to f(z_0)$.

## Notes · **draft**
⭐ The **only** difference from real differentiability: $h$ is a complex number.

> continued in nodes/def.holomorphic.en.3.md
