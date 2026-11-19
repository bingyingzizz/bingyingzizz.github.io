# imp.preserves-products-kernels
`imp.preserves-products-kernels` · 推出 · strong 边 · 根 `../`

`def.preserves-limit` 保极限的函子 + `def.equalizer` 等化子 / 余等化子 + `def.exact-functor` 正合函子 → `prop.preserves-products-kernels` 保积与核 ⟹ 保所有有限极限

**证明。** 记 $F : \mathcal{C}\to\mathcal{D}$ 保有限积与核（等化子）。
- **有限极限的标准构造**：对有限图 $D : I\to\mathcal{C}$，令 $P := \prod_{i\in I}D(i)$，并考虑两条态射
$$P \;\underset{\;q\;}{\overset{\;p\;}{\rightrightarrows}}\; \prod_{u : i\to j}D(j), \qquad p := \bigl(\pi_{j}\bigr)_{u},\quad q := \bigl(D(u)\circ\pi_{i}\bigr)_{u},$$
即「第 $u$ 个坐标分别取 $D(u)$ 之后的投影与直接投影」。则
$$\lim D \;\cong\; \operatorname{eq}(p, q),$$
（元素层面：$\operatorname{eq}(p,q)$ 恰是一族相容的 $D(i)$ 元素，即 $D$ 的锥；泛性由积的泛性给出）✓。
- **$F$ 保两步**：$F(P) \cong \prod_{i}FD(i)$（保有限积）✓；$F(\operatorname{eq}(p,q)) \cong \operatorname

> 续见 proofs/imp.preserves-products-kernels.2.md
