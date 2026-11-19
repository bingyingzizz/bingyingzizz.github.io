# imp.lim-functor
`imp.lim-functor` · 推出 · strong 边 · 根 `../`

`def.limit` 极限 + `def.natural-transformation` 自然变换 → `thm.lim-functor` 极限的函子性

**证明。**
- **锥**：$\pi^{F}_{i} : \lim F \to F(i)$ 是 $F$ 的泛锥。对每个 $i$，$\alpha_{i}\circ\pi^{F}_{i} : \lim F \to G(i)$；由 $\alpha$ 的自然性
$$G(u)\circ\alpha_{i}\circ\pi^{F}_{i} = \alpha_{j}\circ F(u)\circ\pi^{F}_{i} = \alpha_{j}\circ\pi^{F}_{j},$$
故这是一族相容的映射，即 $\lim F$ 到 $G$ 的锥 ✓。
- **唯一态射**：由 $\lim G$ 的泛性得到唯一的 $\lim\alpha$，并满足 $\pi^{G}_{i}\circ\lim\alpha = \alpha_{i}\circ\pi^{F}_{i}$ ✓。
- **函子性**：$\lim(\mathrm{id}_{F})$ 与 $\mathrm{id}_{\lim F}$ 都是使 $\pi^{F}_{i}\circ(-) = \pi^{F}_{i}$ 的态射，由唯一性相等 ✓；

同理 $\lim(\beta\alpha)$ 与 $(\lim\beta)(\lim\alpha)$ 都与同一个锥相容，故相等 ✓。
于是 $\lim : \mathcal{C}^{I}\to\mathcal{C}$ 是函子 ✓。∎
