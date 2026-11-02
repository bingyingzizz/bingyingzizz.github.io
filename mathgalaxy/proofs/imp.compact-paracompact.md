# imp.compact-paracompact
`imp.compact-paracompact` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 → `def.paracompact` 仿紧空间

设 $X$ 紧，$\mathcal{U}$ 是 $X$ 的任一开覆盖。由紧性取**有限**子覆盖 $U_{1}, \ldots, U_{n}$，令 $\mathcal{V} := \{\, U_{1}, \ldots, U_{n} \,\}$。

检查仿紧的两条要求（`def.paracompact`）：

1. **加细**：$\mathcal{V} \subseteq \mathcal{U}$，是自身的加细 ✓；
2. **局部有限**：有限族在**任意点**都只碰到有限多个成员 —— 事实上最多碰到 $n$ 个 ✓。

所以每个开覆盖都有局部有限的開加细，$X$ 仿紧 ✓。∎

⚠️ **反向不成立**：$\mathbb{R}$ 仿紧但不紧。仿紧是「局部有限」这一侧的紧性，比紧弱得多。
