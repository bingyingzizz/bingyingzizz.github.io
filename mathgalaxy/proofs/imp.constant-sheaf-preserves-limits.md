# imp.constant-sheaf-preserves-limits
`imp.constant-sheaf-preserves-limits` · 推出 · strong 边 · 根 `../`

`def.presheaf` 预层 + `def.sheaf` 层 + `def.category-of-sets` 集合范畴 → `prop.constant-sheaf-preserves-limits` 常层函子保极限

**证明。**
**1.** 预层范畴里的极限与余极限是**逐点计算**的：$(\varprojlim \Delta E_{i})(X) = \varprojlim (\Delta E_{i})(X) = \varprojlim E_{i} = E = (\Delta E)(X)$，且这在 $X$ 上自然（转移映射都是恒等）✓。于是 $\Delta E = \varprojlim \Delta E_{i}$ ✓。
**2.** 常层函子 $\underline{(-)} = a\circ\Delta$，其中 $a$ 是层化（$i\dashv a$，$i$ 为含入）。$a$ 作为左伴随保余极限，且**左正合**，故保有限极限：对有限指标集 $I$，
$$\underline{E}=a(\Delta E)=a(\varprojlim_{i\in I}\Delta E_{i})=\varprojlim_{i\in I}a(\Delta E_{i})=\varprojlim_{i\in I}\underline{E_{i}}\ ✓.$$
无限极限不保：取 Cantor 空间 $S=\{0,1\}^{\mathbb N}$、$E_{n}=\{0,1\}^{n}$，则 $E=\varprojlim E_{n}

> 续见 proofs/imp.constant-sheaf-preserves-limits.2.md
